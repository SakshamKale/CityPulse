import { BUDGET_OPTIONS, CATEGORIES, RATING_OPTIONS, SORT_OPTIONS } from "@/lib/constants";

function SelectField({ id, label, value, onChange, options }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-800 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// `onChange(key, value)` updates one filter. `onReset()` restores all defaults.
export default function FilterPanel({ filters, onChange, onReset, categoryCounts, totalCount, hasActiveFilters }) {
  const chips = [
    { id: "all", label: "All", count: totalCount },
    ...CATEGORIES.map((category) => ({
      id: category.id,
      label: category.label,
      count: categoryCounts[category.id] ?? 0,
    })),
  ];

  return (
    <section aria-label="Filters" className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-5">
      <div role="group" aria-label="Category" className="flex flex-wrap gap-2">
        {chips.map((chip) => {
          const active = filters.category === chip.id;
          return (
            <button
              key={chip.id}
              type="button"
              aria-pressed={active}
              onClick={() => onChange("category", chip.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
                active ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {chip.label}
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  active ? "bg-white/20 text-white" : "bg-white text-slate-500"
                }`}
              >
                {chip.count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <SelectField
          id="filter-budget"
          label="Budget"
          value={filters.maxBudget}
          onChange={(value) => onChange("maxBudget", value)}
          options={BUDGET_OPTIONS}
        />
        <SelectField
          id="filter-rating"
          label="Minimum rating"
          value={filters.minRating}
          onChange={(value) => onChange("minRating", value)}
          options={RATING_OPTIONS}
        />
        <SelectField
          id="filter-sort"
          label="Sort by"
          value={filters.sortBy}
          onChange={(value) => onChange("sortBy", value)}
          options={SORT_OPTIONS}
        />
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">Budgets are estimates. Hotels and stays are priced per night; everything else per person.</p>
        <button
          type="button"
          onClick={onReset}
          disabled={!hasActiveFilters}
          className="self-start rounded-lg px-3 py-1.5 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent sm:self-auto"
        >
          Reset filters
        </button>
      </div>
    </section>
  );
}
