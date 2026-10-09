
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { places } from "@/data/places";

const interests = [
  { id: "food", label: "Food" },
  { id: "historical", label: "History" },
  { id: "tourist", label: "Sightseeing" },
  { id: "budget", label: "Budget spots" },
  { id: "hotel", label: "Stays" },
];

export default function SmartChoice() {
  const [budget, setBudget] = useState("500");
  const [selected, setSelected] = useState(["food", "historical"]);
  const [saved, setSaved] = useState([]);

  const matches = useMemo(() => {
    return places
      .filter((place) => budget === "any" || Number(place.budget) <= Number(budget))
      .map((place) => {
        const reasons = [];
        let score = 0;

        if (selected.length === 0 || selected.includes(place.category)) {
          score += selected.length === 0 ? 30 : 55;
          reasons.push("Matches your interests");
        }

        if (Number(place.budget) <= Number(budget) || budget === "any") {
          score += 25;
          reasons.push("Within your selected budget");
        }

        if (Number(place.rating) >= 4.5) {
          score += 20;
          reasons.push("High sample rating");
        } else if (Number(place.rating) >= 4) {
          score += 10;
          reasons.push("Good sample rating");
        }

        if (place.category === "budget") score += 5;

        return { ...place, matchScore: Math.min(score, 100), reasons };
      })
      .filter((place) => selected.length === 0 || selected.includes(place.category))
      .sort((a, b) => b.matchScore - a.matchScore || b.rating - a.rating)
      .slice(0, 6);
  }, [budget, selected]);

  function toggleInterest(id) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
        CITYPULSE INTELLIGENCE
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
        Your city. Your kind of adventure.
      </h1>
      <p className="mt-2 text-slate-600">
        Find places based on your interests and budget.
      </p>

      <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <label className="font-bold text-slate-900" htmlFor="trip-budget">
          Your total budget per place
        </label>
        <select
          id="trip-budget"
          value={budget}
          onChange={(event) => setBudget(event.target.value)}
          className="mt-2 block w-full rounded-xl border border-slate-300 p-3 sm:max-w-sm"
        >
          <option value="0">Free</option>
          <option value="150">Up to ₹150</option>
          <option value="500">Up to ₹500</option>
          <option value="1500">Up to ₹1,500</option>
          <option value="5000">Up to ₹5,000</option>
          <option value="any">Any budget</option>
        </select>

        <h2 className="mt-6 font-bold text-slate-900">Choose your interests</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {interests.map((item) => {
            const active = selected.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={active}
                onClick={() => toggleInterest(item.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                  active
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-slate-300 bg-white text-slate-700"
                }`}
              >
                {active ? "✓ " : "+ "}{item.label}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => {
            setBudget("any");
            setSelected([]);
          }}
          className="mt-4 text-sm font-semibold text-indigo-700 underline"
        >
          Reset preferences
        </button>
      </section>

      <div className="mt-8 flex items-center justify-between gap-3">
        <h2 className="text-2xl font-extrabold text-slate-900">
          Your Smart Matches
        </h2>
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-bold text-indigo-700">
          {matches.length} results
        </span>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {matches.map((place) => (
          <article key={place.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex justify-between gap-2">
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-bold text-indigo-700">
                {place.matchScore}% match
              </span>
              <span className="text-amber-600">★ {place.rating}</span>
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">{place.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{place.area}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{place.description}</p>
            <p className="mt-4 font-bold text-slate-900">
              Estimated budget: ₹{place.budget}
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-800">Why this match?</p>
            <ul className="mt-1 space-y-1 text-sm text-slate-600">
              {place.reasons.map((reason) => <li key={reason}>✓ {reason}</li>)}
            </ul>
            <button
              type="button"
              onClick={() => setSaved((current) =>
                current.includes(place.id)
                  ? current.filter((id) => id !== place.id)
                  : [...current, place.id]
              )}
              className="mt-4 w-full rounded-xl border border-indigo-200 px-4 py-2 font-semibold text-indigo-700 hover:bg-indigo-50"
            >
              {saved.includes(place.id) ? "✓ Saved to my shortlist" : "+ Save place"}
            </button>
          </article>
        ))}
      </div>

      {matches.length === 0 && (
        <p className="mt-6 rounded-xl border border-dashed p-6 text-center text-slate-600">
          No places match these preferences. Try increasing your budget or resetting your interests.
        </p>
      )}

      {saved.length > 0 && (
        <section className="mt-8 rounded-2xl bg-indigo-50 p-5">
          <h2 className="font-bold text-indigo-950">Your shortlist ({saved.length})</h2>
          <p className="mt-1 text-sm text-indigo-900">
            {places.filter((place) => saved.includes(place.id)).map((place) => place.name).join(" · ")}
          </p>
        </section>
      )}

      <Link href="/explore" className="mt-8 inline-block font-semibold text-indigo-700">
        ← Back to Explore
      </Link>
      <p className="mt-6 text-xs text-slate-500">
        Recommendation scores, ratings and budgets use sample data and are not verified live information.
      </p>
    </main>
  );
}
