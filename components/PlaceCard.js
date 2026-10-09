
import BudgetTag from "@/components/BudgetTag";
import DataStatusBadge from "@/components/DataStatusBadge";
import RatingStars from "@/components/RatingStars";
import ScoreMeter from "@/components/ScoreMeter";
import {
  CATEGORY_HEADER,
  DEFAULT_CATEGORY_HEADER,
} from "@/components/categoryStyles";
import { CATEGORY_SINGULAR } from "@/lib/constants";

export default function PlaceCard({ place }) {
  const headerStyle =
    CATEGORY_HEADER[place.category] ?? DEFAULT_CATEGORY_HEADER;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${place.coordinates.lat},${place.coordinates.lng}`;

  return (
    <article className="citypulse-card flex h-full flex-col">
      <div
        className={`relative flex h-28 items-start justify-between gap-2 overflow-hidden p-5 ${headerStyle}`}
      >
        <div className="absolute -right-5 -top-10 h-36 w-36 rounded-full bg-white/20" />
        <div className="absolute -bottom-16 left-1/3 h-32 w-32 rounded-full bg-white/10" />

        <span className="relative rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-extrabold text-slate-800 shadow-sm">
          {CATEGORY_SINGULAR[place.category] ?? "Place"}
        </span>

        <span className="relative">
          <DataStatusBadge status={place.dataStatus} />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-extrabold leading-snug tracking-tight text-slate-950">
              {place.name}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
              <span aria-hidden="true">⌖</span>
              {place.area}
            </p>
          </div>
          <BudgetTag budget={place.budget} unit={place.budgetUnit} />
        </div>

        <div className="flex items-center justify-between gap-3">
          <RatingStars rating={place.rating} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Sample score
          </span>
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-slate-600">
          {place.description}
        </p>

        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-4">
          <ScoreMeter label="Cleanliness" value={place.cleanliness} />
          <ScoreMeter label="Accessibility" value={place.accessibility} />
        </div>

        <div className="mt-auto border-t border-slate-100 pt-4">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-indigo-50 px-4 py-2.5 text-sm font-extrabold text-indigo-700 transition hover:bg-indigo-100"
          >
            View on Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
