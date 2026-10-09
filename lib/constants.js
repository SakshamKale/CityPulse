// Shared constants for CityPulse.
// Note: no Tailwind classes live in this folder (see components/categoryStyles.js),
// so Tailwind v3 and v4 both pick up every class used in the app.

export const CATEGORIES = [
  { id: "tourist", label: "Tourist Attractions", singular: "Tourist Attraction" },
  { id: "historical", label: "Historical Sites", singular: "Historical Site" },
  { id: "food", label: "Food Spots", singular: "Food Spot" },
  { id: "budget", label: "Budget-Friendly", singular: "Budget-Friendly" },
  { id: "hotel", label: "Hotels & Stays", singular: "Hotel / Stay" },
];

// { tourist: "Tourist Attraction", ... }
export const CATEGORY_SINGULAR = Object.fromEntries(
  CATEGORIES.map((category) => [category.id, category.singular])
);

// Values are strings because <select> values are strings.
// "any" means no limit, "0" means free only.
export const BUDGET_OPTIONS = [
  { value: "any", label: "Any budget" },
  { value: "0", label: "Free only" },
  { value: "150", label: "Up to ₹150" },
  { value: "500", label: "Up to ₹500" },
  { value: "1500", label: "Up to ₹1,500" },
  { value: "5000", label: "Up to ₹5,000" },
];

export const RATING_OPTIONS = [
  { value: "0", label: "Any rating" },
  { value: "3.5", label: "3.5 and up" },
  { value: "4", label: "4.0 and up" },
  { value: "4.5", label: "4.5 and up" },
];

export const SORT_OPTIONS = [
  { value: "rating", label: "Top rated" },
  { value: "budget-asc", label: "Budget: low to high" },
  { value: "budget-desc", label: "Budget: high to low" },
  { value: "cleanliness", label: "Cleanest first" },
  { value: "accessibility", label: "Most accessible first" },
  { value: "name", label: "Name: A to Z" },
];

export const DEFAULT_FILTERS = {
  query: "",
  category: "all",
  maxBudget: "any",
  minRating: "0",
  sortBy: "rating",
};
