// Header gradient for each place category.
// Kept inside components/ so Tailwind always scans these class names.
// Each value is a complete class string (Tailwind cannot detect classes built from pieces).

export const CATEGORY_HEADER = {
  tourist: "bg-[linear-gradient(135deg,#0ea5e9,#4f46e5)]",
  historical: "bg-[linear-gradient(135deg,#f97316,#9a3412)]",
  food: "bg-[linear-gradient(135deg,#f43f5e,#9f1239)]",
  budget: "bg-[linear-gradient(135deg,#14b8a6,#115e59)]",
  hotel: "bg-[linear-gradient(135deg,#8b5cf6,#5b21b6)]",
};

export const DEFAULT_CATEGORY_HEADER = "bg-[linear-gradient(135deg,#64748b,#1e293b)]";
