
"use client";

import { useState } from "react";
import Link from "next/link";
import { places } from "@/data/places";

export default function ComparePage() {
  const [first, setFirst] = useState(places[0]?.id ?? "");
  const [second, setSecond] = useState(places[1]?.id ?? "");

  const a = places.find((place) => String(place.id) === String(first));
  const b = places.find((place) => String(place.id) === String(second));

  const metrics = [
    ["Category", (p) => p.category],
    ["Area", (p) => p.area],
    ["Estimated budget", (p) => `₹${p.budget}`],
    ["Sample rating", (p) => `★ ${p.rating}`],
    ["Cleanliness score", (p) => p.cleanliness],
    ["Accessibility score", (p) => p.accessibility],
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900">Compare Places</h1>
      <p className="mt-2 text-slate-600">
        Compare two destinations before making your choice.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[{ label: "First place", value: first, set: setFirst }, { label: "Second place", value: second, set: setSecond }].map((item) => (
          <label key={item.label} className="font-semibold text-slate-800">
            {item.label}
            <select
              value={item.value}
              onChange={(event) => item.set(event.target.value)}
              className="mt-2 block w-full rounded-xl border border-slate-300 bg-white p-3"
            >
              {places.map((place) => (
                <option key={place.id} value={place.id}>{place.name}</option>
              ))}
            </select>
          </label>
        ))}
      </div>

      {a && b && (
        <>
          {String(first) === String(second) && (
            <p className="mt-4 text-sm text-amber-700">Choose two different places for a useful comparison.</p>
          )}
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[480px] text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4">Metric</th>
                  <th className="p-4">{a.name}</th>
                  <th className="p-4">{b.name}</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map(([label, get]) => (
                  <tr key={label} className="border-t border-slate-200">
                    <th className="p-4 text-sm font-semibold text-slate-700">{label}</th>
                    <td className="p-4 text-sm text-slate-700">{get(a)}</td>
                    <td className="p-4 text-sm text-slate-700">{get(b)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <p className="mt-4 text-xs text-slate-500">
        Ratings, budgets and scores are sample estimates, not verified live data.
      </p>
      <Link href="/explore" className="mt-6 inline-block font-semibold text-indigo-700">← Explore places</Link>
    </main>
  );
}
