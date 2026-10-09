
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              City<span className="text-indigo-600">Pulse</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              Discover Pune your way. Find places, compare options, and plan
              your next city outing.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-slate-900">Explore</h2>
            <div className="mt-3 flex flex-col items-start gap-2 text-sm text-slate-600">
              <Link className="hover:text-indigo-600" href="/explore">Explore places</Link>
              <Link className="hover:text-indigo-600" href="/for-you">For You</Link>
              <Link className="hover:text-indigo-600" href="/compare">Compare places</Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-slate-900">Plan with confidence</h2>
            <div className="mt-3 flex flex-col items-start gap-2 text-sm text-slate-600">
              <Link className="hover:text-indigo-600" href="/plan">Build My Day</Link>
              <Link className="hover:text-indigo-600" href="/safety">Safety guidance</Link>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-slate-100 pt-5 text-xs leading-5 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CityPulse · Made for exploring Pune.</p>
          <p>Hackathon prototype. Ratings, budgets and scores may be sample estimates.</p>
        </div>
      </div>
    </footer>
  );
}
