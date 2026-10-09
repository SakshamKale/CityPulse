import { CATEGORY_SINGULAR } from "@/lib/constants";

// Pure functions: no React, no side effects. Easy to read and easy to test.

// Every word the user types must appear somewhere in the place's text.
function matchesQuery(place, terms) {
  if (terms.length === 0) return true;

  const haystack = [
    place.name,
    place.area,
    CATEGORY_SINGULAR[place.category],
    place.description,
    ...(place.tags ?? []),
  ]
    .join(" ")
    .toLowerCase();

  return terms.every((term) => haystack.includes(term));
}

export function sortPlaces(places, sortBy) {
  const sorted = [...places]; // copy so we never mutate the original array
  const byName = (a, b) => a.name.localeCompare(b.name);

  switch (sortBy) {
    case "budget-asc":
      return sorted.sort((a, b) => a.budget - b.budget || byName(a, b));
    case "budget-desc":
      return sorted.sort((a, b) => b.budget - a.budget || byName(a, b));
    case "cleanliness":
      return sorted.sort((a, b) => b.cleanliness - a.cleanliness || byName(a, b));
    case "accessibility":
      return sorted.sort((a, b) => b.accessibility - a.accessibility || byName(a, b));
    case "name":
      return sorted.sort(byName);
    case "rating":
    default:
      return sorted.sort((a, b) => b.rating - a.rating || byName(a, b));
  }
}

export function filterPlaces(places, filters) {
  const terms = filters.query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const maxBudget = filters.maxBudget === "any" ? Infinity : Number(filters.maxBudget);
  const minRating = Number(filters.minRating);

  const matches = places.filter((place) => {
    if (filters.category !== "all" && place.category !== filters.category) return false;
    if (place.budget > maxBudget) return false;
    if (place.rating < minRating) return false;
    return matchesQuery(place, terms);
  });

  return sortPlaces(matches, filters.sortBy);
}
