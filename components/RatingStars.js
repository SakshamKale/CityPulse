// Shows five stars, partly filled to match the rating, plus the number.
// The grey stars sit underneath; the gold stars are cut off at a percentage width on top.

export default function RatingStars({ rating }) {
  const percent = Math.max(0, Math.min(100, (rating / 5) * 100));

  return (
    <span className="inline-flex items-center gap-1.5" aria-label={`Rating ${rating.toFixed(1)} out of 5`}>
      <span className="relative inline-block text-sm leading-none" aria-hidden="true">
        <span className="text-slate-300">★★★★★</span>
        <span
          className="absolute left-0 top-0 overflow-hidden whitespace-nowrap text-amber-400"
          style={{ width: `${percent}%` }}
        >
          ★★★★★
        </span>
      </span>
      <span className="text-sm font-bold text-slate-800">{rating.toFixed(1)}</span>
    </span>
  );
}
