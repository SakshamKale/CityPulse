
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { places } from "@/data/places";

export default function PlanPage() {
  const [selected, setSelected] = useState([]);
  const [day, setDay] = useState("half");

  const itinerary = useMemo(
    () => places.filter((place) => selected.includes(String(place.id))),
    [selected]
  );

  const total = itinerary.reduce((sum, place) => sum + Number(place.budget || 0), 0);

  function toggle(id) {
    setSelected((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id]
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900">Build My Day</h1>
      <p className="mt-2 text-slate-600">Create your own Pune itinerary.</p>

      <label className="mt-6 block font-semibold text-slate-800">
        Trip duration
        <select value={day} onChange={(event) => setDay(event.target.value)} className="mt-2 block w-full rounded-xl border border-slate-300 bg-white p-3 sm:max-w-xs">
          <option value="half">Half day</option>
          <option value="full">Full day</option>
        </select>
      </label>

      <h2 className="mt-8 text-xl font-bold text-slate-900">Choose your stops</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {places.filter((place) => place.category !== "hotel").map((place) => {
          const id = String(place.id);
          const active = selected.includes(id);

          return (
            <label key={place.id} className={`cursor-pointer rounded-2xl border p-4 ${active ? "border-indigo-600 bg-indigo-50" : "border-slate-200 bg-white"}`}>
              <input type="checkbox" checked={active} onChange={() => toggle(id)} className="mr-2 accent-indigo-600" />
              <span className="font-semibold text-slate-900">{place.name}</span>
              <p className="mt-1 text-sm text-slate-600">{place.area} · Est. ₹{place.budget}</p>
            </label>
          );
        })}
      </div>

      <section className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
        <p className="text-sm text-slate-300">{day === "half" ? "Half-day" : "Full-day"} itinerary</p>
        <h2 className="mt-1 text-2xl font-bold">{itinerary.length} stops selected</h2>
        <p className="mt-2 text-slate-300">Estimated place costs: ₹{total}</p>
        <p className="mt-2 text-xs text-slate-300">Travel, food extras and actual opening hours are not included. Stop order is your selection order, not an optimized route.</p>
        {itinerary.length > 0 ? (
          <ol className="mt-5 list-decimal space-y-2 pl-5">
            {itinerary.map((place) => <li key={place.id}>{place.name} — ₹{place.budget} estimated</li>)}
          </ol>
        ) : (
          <p className="mt-4 text-slate-300">Select places above to build your itinerary.</p>
        )}
        <button type="button" onClick={() => setSelected([])} className="mt-5 rounded-xl bg-white px-4 py-2 font-semibold text-slate-900">Clear itinerary</button>
      </section>

      <Link href="/explore" className="mt-6 inline-block font-semibold text-indigo-700">← Explore places</Link>
    </main>
  );
}
