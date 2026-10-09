
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "For You", href: "/for-you" },
  { label: "Compare", href: "/compare" },
  { label: "Build My Day", href: "/plan" },
  { label: "Safety", href: "/safety" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href) {
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-black text-white shadow-lg shadow-indigo-200">
            C
          </span>
          <span className="text-xl font-extrabold tracking-tight text-slate-950">
            City<span className="text-indigo-600">Pulse</span>
            <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
              Pune city guide
            </span>
          </span>
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-xl text-slate-700 hover:bg-slate-100 md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <div
          className={`${menuOpen ? "flex" : "hidden"} w-full flex-col gap-1 rounded-2xl border border-slate-100 bg-white p-2 md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-xl px-3 py-2.5 text-sm font-bold transition ${
                isActive(link.href)
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/explore"
            onClick={() => setMenuOpen(false)}
            className="ml-1 hidden rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-indigo-200 hover:bg-indigo-700 lg:inline-flex"
          >
            Discover Pune ↗
          </Link>
        </div>
      </nav>
    </header>
  );
}
