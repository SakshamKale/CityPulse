import BudgetTag from "@/components/BudgetTag";
import DataStatusBadge from "@/components/DataStatusBadge";
import RatingStars from "@/components/RatingStars";
import ScoreMeter from "@/components/ScoreMeter";
import { CATEGORY_HEADER, DEFAULT_CATEGORY_HEADER } from "@/components/categoryStyles";
import { CATEGORY_SINGULAR } from "@/lib/constants";

export default function PlaceCard({ place }) {
  const headerStyle = CATEGORY_HEADER[place.category] ?? DEFAULT_CATEGORY_HEADER;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${place.coordinates.lat},${place.coordinates.lng}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      {/* Coloured header (no images, so there are no hosting or licence issues) */}
      <div className={`relative flex h-24 items-start justify-between gap-2 overflow-hidden p-4 ${headerStyle}`}>
        <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/15" />
        <div className="absolute -bottom-12 left-12 h-24 w-24 rounded-full bg-white/10" />
        <span className="relative rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-800">
          {CATEGORY_SINGULAR[place.category] ?? "Place"}
        </span>
        <DataStatusBadge status={place.dataStatus} className="relative" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-bold leading-snug text-slate-900">{place.name}</h3>
            <p className="mt-0.5 text-sm text-slate-500">{place.area}</p>
          </div>
          <BudgetTag budget={place.budget} unit={place.budgetUnit} />
        </div>

        <RatingStars rating={place.rating} />

        <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">{place.description}</p>

        <div className="grid grid-cols-2 gap-4">
          <ScoreMeter label="Cleanliness" value={place.cleanliness} />
          <ScoreMeter label="Accessibility" value={place.accessibility} />
        </div>

        <div className="mt-auto border-t border-slate-100 pt-3">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md text-sm font-semibold text-indigo-600 hover:text-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Open in Google Maps
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
