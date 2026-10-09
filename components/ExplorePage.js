"use client";

import { useMemo, useState } from "react";
import FilterPanel from "@/components/FilterPanel";
import PlaceCard from "@/components/PlaceCard";
import SearchBar from "@/components/SearchBar";
import { places } from "@/data/places";
import { DEFAULT_FILTERS } from "@/lib/constants";
import { filterPlaces } from "@/lib/filterPlaces";

// This is a client component because it holds state (the current filters).
// All the actual filtering logic lives in lib/filterPlaces.js.
export default function ExplorePage() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  // Re-run the filter only when `filters` changes.
  const results = useMemo(() => filterPlaces(places, filters), [filters]);

  // How many places each category has in total (shown on the category chips).
  const categoryCounts = useMemo(() => {
    const counts = {};
    for (const place of places) {
      counts[place.category] = (counts[place.category] ?? 0) + 1;
    }
    return counts;
  }, []);

  const hasActiveFilters = Object.keys(DEFAULT_FILTERS).some((key) => filters[key] !== DEFAULT_FILTERS[key]);

  function updateFilter(key, value) {
    setFilters((previous) => ({ ...previous, [key]: value }));
  }

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Explore Pune</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Search and filter sample places across the city: sights, history, food, budget-friendly spots and stays.
        </p>
      </header>

      <div className="space-y-4">
        <SearchBar value={filters.query} onChange={(value) => updateFilter("query", value)} />
        <FilterPanel
          filters={filters}
          onChange={updateFilter}
          onReset={resetFilters}
          categoryCounts={categoryCounts}
          totalCount={places.length}
          hasActiveFilters={hasActiveFilters}
        />
      </div>

      <p className="mt-8 text-sm font-medium text-slate-600" aria-live="polite">
        Showing <span className="font-bold text-slate-900">{results.length}</span> of {places.length} places
      </p>

      {results.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
          <p className="text-lg font-bold text-slate-900">No places match your filters</p>
          <p className="mt-1 text-sm text-slate-600">Try a different search word, a higher budget or a lower minimum rating.</p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
