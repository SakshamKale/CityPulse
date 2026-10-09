// Small label that tells the user how trustworthy a piece of information is.
//   sample     -> illustrative demo data (grey)
//   unverified -> collected but not yet checked (amber)
//   verified   -> checked against a trusted source (green)
// An unknown status falls back to "sample" so we never claim more trust than we have.

const STATUS_CONFIG = {
  sample: {
    label: "Sample data",
    description: "Illustrative sample data created for this demo. Not real or live information.",
    classes: "bg-slate-100 text-slate-700 ring-slate-300",
    icon: (
      <>
        <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 7.25v3.5M8 5.25v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  unverified: {
    label: "Unverified",
    description: "Collected but not yet checked against a trusted source. Treat with caution.",
    classes: "bg-amber-50 text-amber-800 ring-amber-300",
    icon: (
      <>
        <path d="M8 2.5l6 10.5H2L8 2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <path d="M8 6.75v2.75M8 11.25v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  verified: {
    label: "Verified",
    description: "Checked against a trusted source.",
    classes: "bg-emerald-50 text-emerald-800 ring-emerald-300",
    icon: (
      <>
        <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M5.25 8.25l1.9 1.9 3.6-3.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
};

export default function DataStatusBadge({ status = "sample", className = "" }) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.sample;

  return (
    <span
      title={config.description}
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${config.classes} ${className}`}
    >
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
        {config.icon}
      </svg>
      {config.label}
    </span>
  );
}
