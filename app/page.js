
import Link from "next/link";
import PlaceCard from "@/components/PlaceCard";
import { places } from "@/data/places";
import { CATEGORIES } from "@/lib/constants";
import { sortPlaces } from "@/lib/filterPlaces";

const features = [
  {
    number: "01",
    icon: "⌕",
    title: "Discover places",
    description: "Find attractions, food spots, historic places and stays.",
    href: "/explore",
    action: "Explore places",
  },
  {
    number: "02",
    icon: "✳",
    title: "Find your fit",
    description: "Explore suggestions based on your interests and budget.",
    href: "/for-you",
    action: "Get suggestions",
  },
  {
    number: "03",
    icon: "⇄",
    title: "Compare options",
    description: "Compare estimated costs, ratings and other sample scores.",
    href: "/compare",
    action: "Compare places",
  },
  {
    number: "04",
    icon: "◷",
    title: "Plan your outing",
    description: "Build a shortlist and review the estimated total budget.",
    href: "/plan",
    action: "Build my day",
  },
];

export default function HomePage() {
  const topPicks = sortPlaces(places, "rating").slice(0, 3);

  return (
    <div className="overflow-hidden">
      <section className="relative isolate overflow-hidden bg-[#11112b] text-white">
        <div className="absolute -right-24 -top-28 -z-10 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/25 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Your Pune city companion
            </div>

            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The city is yours
              <span className="mt-2 block bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                to discover.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              From heritage landmarks to hidden food stops, make your next Pune
              outing easier to explore, compare and plan.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/explore"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-indigo-800 shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-indigo-50"
              >
                Start exploring <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/plan"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Build my day
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-2xl font-black">{places.length}</p>
                <p className="mt-1 text-xs text-slate-400">Places in demo data</p>
              </div>
              <div>
                <p className="text-2xl font-black">{CATEGORIES.length}</p>
                <p className="mt-1 text-xs text-slate-400">Categories to explore</p>
              </div>
              <div>
                <p className="text-2xl font-black">One city</p>
                <p className="mt-1 text-xs text-slate-400">Endless possibilities</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/20 blur-2xl" />
            <div className="relative rounded-[28px] border border-white/15 bg-white/[0.07] p-4 shadow-2xl backdrop-blur">
              <div className="rounded-[22px] bg-[#f8f8ff] p-5 text-slate-900 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                      Your next outing
                    </p>
                    <h2 className="mt-2 text-2xl font-black tracking-tight">
                      Make it a good day.
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Choose a place. Compare your options. Make a plan.
                    </p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                    ✦
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    { icon: "⌕", title: "Discover", detail: "Find places that fit your mood" },
                    { icon: "⇄", title: "Compare", detail: "Review options side by side" },
                    { icon: "◷", title: "Plan", detail: "Build your own shortlist" },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xl font-bold text-indigo-700">
                        {item.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-extrabold">{item.title}</p>
                        <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
                      </div>
                      <span className="text-sm font-bold text-slate-300">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/for-you"
                  className="mt-5 flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-indigo-700"
                >
                  Find places for me →
                </Link>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              Designed for exploring Pune, your way.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-indigo-600">
              Made for your next plan
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Everything in one place.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Spend less time switching between options and more time deciding
              what you want to explore.
            </p>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-indigo-700 hover:text-indigo-900"
          >
            Explore all places <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link
              key={feature.number}
              href={feature.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-2xl font-bold text-indigo-700 transition group-hover:bg-indigo-600 group-hover:text-white">
                  {feature.icon}
                </span>
                <span className="text-xs font-extrabold tracking-widest text-slate-300">
                  {feature.number}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-2 min-h-[60px] text-sm leading-6 text-slate-500">
                {feature.description}
              </p>
              <p className="mt-5 text-sm font-extrabold text-indigo-700">
                {feature.action} →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-indigo-600">
                A little inspiration
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Places to put on your list.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                A selection from the current CityPulse dataset.
              </p>
            </div>
            <Link
              href="/explore"
              className="font-bold text-indigo-700 hover:text-indigo-900"
            >
              See all places →
            </Link>
          </div>

          {topPicks.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {topPicks.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          ) : (
            <p className="mt-8 rounded-2xl bg-slate-50 p-6 text-slate-600">
              Add places to the dataset to show recommendations here.
            </p>
          )}

          <p className="mt-6 text-xs leading-5 text-slate-500">
            Note: place ratings, budgets and scores may be illustrative sample
            estimates. Confirm details with official sources before travelling.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="citypulse-gradient flex flex-col gap-6 rounded-[28px] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200">
              Your city. Your choice.
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Where will Pune take you?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-indigo-100">
              Start with your interests, explore the options and put together
              an outing that works for you.
            </p>
          </div>
          <Link
            href="/explore"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-indigo-800 transition hover:bg-indigo-50"
          >
            Discover Pune ↗
          </Link>
        </div>
      </section>
    </div>
  );
}
