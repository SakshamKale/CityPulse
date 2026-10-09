// Formats an estimated budget in Indian rupees, e.g. 4800 -> "₹4,800", 0 -> "Free".
export function formatBudget(budget) {
  return budget === 0 ? "Free" : `₹${budget.toLocaleString("en-IN")}`;
}

export default function BudgetTag({ budget, unit }) {
  return (
    <div className="shrink-0 text-right">
      <p className="text-base font-extrabold text-slate-900">
        {budget === 0 ? "Free" : `~${formatBudget(budget)}`}
      </p>
      <p className="text-xs text-slate-500">{budget === 0 ? "estimate" : unit}</p>
    </div>
  );
}
