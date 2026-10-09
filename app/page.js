import Link from "next/link";
import PlaceCard from "@/components/PlaceCard";
import { places } from "@/data/places";
import { CATEGORIES } from "@/lib/constants";
import { sortPlaces } from "@/lib/filterPlaces";

// Simple Stage 1 landing page. The full dashboard comes in a later stage.
export default function HomePage() {
  const topPicks = sortPlaces(places, "rating").slice(0, 3);
  const sampleCount = places.filter((place) => place.dataStatus === "sample").length;

  const stats = [
    { value: places.length, label: "places in the sample set" },
    { value: CATEGORIES.length, label: "categories to browse" },
    { value: `${sampleCount} of ${places.length}`, label: "records are sample data" },
  ];

  const comingNext = ["Interactive map", "Compare places", "Safety notes", "Recommendations"];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[linear-gradient(135deg,#312e81,#4f46e5_55%,#7c3aed)] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Pune, Maharashtra
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Explore smart. Travel safe.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-indigo-100">
            CityPulse helps you discover Pune&apos;s sights, history, food and budget-friendly spots, with every
            piece of data clearly labelled so you know what to trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/explore"
              className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-indigo-700 shadow-sm hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-700"
            >
              Start exploring
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/20">
                <p className="text-3xl font-extrabold">{stat.value}</p>
                <p className="mt-1 text-sm text-indigo-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top rated sample places */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Top-rated sample picks</h2>
            <p className="mt-1 text-sm text-slate-600">Ranked by the sample ratings in this demo.</p>
          </div>
          <Link
            href="/explore"
            className="shrink-0 rounded-md text-sm font-semibold text-indigo-600 hover:text-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            See all places →
          </Link>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topPicks.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      {/* Roadmap, so nobody thinks the greyed-out nav items are broken */}
      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
          <h2 className="text-lg font-bold text-slate-900">Coming next</h2>
          <p className="mt-1 text-sm text-slate-600">These features are still being built and are not available yet.</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {comingNext.map((item) => (
              <li key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
