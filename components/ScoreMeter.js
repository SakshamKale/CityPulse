// A labelled bar for a 0-5 score (used for cleanliness and accessibility).

export default function ScoreMeter({ label, value }) {
  const percent = Math.max(0, Math.min(100, (value / 5) * 100));

  return (
    <div role="img" aria-label={`${label} ${value.toFixed(1)} out of 5`}>
      <div className="flex items-baseline justify-between text-xs">
        <span className="font-medium text-slate-500">{label}</span>
        <span className="font-bold text-slate-800">{value.toFixed(1)}</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-indigo-500" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
