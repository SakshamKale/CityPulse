import DataStatusBadge from "@/components/DataStatusBadge";

// Always visible (not dismissible) so nobody mistakes demo data for real information.
export default function SampleDataBanner() {
  return (
    <div className="border-b border-indigo-100 bg-indigo-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2.5 text-sm text-indigo-950 sm:flex-row sm:items-center sm:gap-3 sm:px-6">
        <DataStatusBadge status="sample" className="self-start" />
        <p className="leading-snug">
          Places, ratings, budgets and scores are <strong>illustrative sample data</strong> for this
          demo. CityPulse shows no live safety, crime, traffic or weather information.
        </p>
      </div>
    </div>
  );
}
