
import Link from "next/link";

const tips = [
  {
    title: "Plan your return",
    text: "Check your return transport and the operating hours of your destination before leaving.",
  },
  {
    title: "Protect your belongings",
    text: "Keep your phone, wallet and valuables secure, especially in crowded places.",
  },
  {
    title: "Use trusted transport",
    text: "Use reputable transport options and check your route and destination before starting.",
  },
  {
    title: "Check accessibility",
    text: "Contact the venue ahead of time to confirm entrances, facilities and accessibility arrangements.",
  },
  {
    title: "Get help when needed",
    text: "For an emergency in India, call 112. Move to a staffed public place if you feel unsafe.",
  },
];

export default function SafetyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">Travel smarter</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900">Explore with confidence</h1>
      <p className="mt-3 text-slate-600">
        Practical reminders to help you prepare for a visit around Pune.
      </p>

      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <h2 className="font-bold text-amber-950">Know what the data means</h2>
        <p className="mt-1 text-sm leading-6 text-amber-900">
          CityPulse currently uses sample place information. It does not provide
          verified live crime alerts, traffic conditions, emergency monitoring
          or safety ratings. Always check current local guidance.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {tips.map((tip, index) => (
          <article key={tip.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 font-bold text-emerald-800">
              {index + 1}
            </div>
            <div>
              <h2 className="font-bold text-slate-900">{tip.title}</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">{tip.text}</p>
            </div>
          </article>
        ))}
      </div>

      <a href="https://112.gov.in/" target="_blank" rel="noreferrer" className="mt-6 inline-block font-semibold text-emerald-800 underline">
        Official India emergency response information
      </a>

      <div>
        <Link href="/explore" className="mt-6 inline-block font-semibold text-indigo-700">← Back to Explore</Link>
      </div>
    </main>
  );
}
