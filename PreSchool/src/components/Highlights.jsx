// Highlights.jsx — balanced version (JS + Tailwind, internal links only)
import { Link } from "react-router-dom";

export default function Highlights() {
  const items = [
    {
      title: "Caring Teachers",
      text: "Qualified, warm educators who know every child by name.",
      accent: "bg-rose-100 text-rose-700",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true"><path fill="currentColor" d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-4.14 0-7.5 2.08-7.5 4.5V20a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-1.5C19.5 16.08 16.14 14 12 14Z"/></svg>
      ),
    },
    {
      title: "Play‑based Curriculum",
      text: "Hands‑on activities that build language, math and creativity.",
      accent: "bg-amber-100 text-amber-700",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true"><path fill="currentColor" d="M3 8h8V3H3v5Zm0 13h8v-8H3v8Zm10 0h8v-5h-8v5Zm0-13h8V3h-8v5Z"/></svg>
      ),
    },
    {
      title: "Safe & Hygienic Campus",
      text: "Clean classrooms, CCTV coverage and child‑friendly spaces.",
      accent: "bg-emerald-100 text-emerald-700",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true"><path fill="currentColor" d="M12 2 4 6v6c0 5 3.4 9.74 8 10 4.6-.26 8-5 8-10V6l-8-4Z"/></svg>
      ),
    },
    {
      title: "Parent Communication",
      text: "Easy updates, friendly staff and clear admissions support.",
      accent: "bg-sky-100 text-sky-700",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true"><path fill="currentColor" d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7l-5 4V4Z"/></svg>
      ),
    },
  ];

  return (
    <section className="relative bg-white">
      {/* soft backdrop */}
      <div aria-hidden className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="relative container mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Why Parents Choose <span className="text-orange-500">Blossom</span>
          </h2>
          <p className="mt-3 text-gray-600">The little things that make a big difference.</p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
              <div className={`inline-flex items-center justify-center rounded-xl p-3 ${it.accent}`}>
                {it.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.text}</p>
              <div className="mt-4 h-1 w-10 rounded-full bg-orange-200 transition group-hover:w-16" />
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          <div className="rounded-xl border p-3">
            <p className="text-xl font-extrabold text-gray-900">Small Groups</p>
            <p className="text-xs text-gray-500">More attention</p>
          </div>
          <div className="rounded-xl border p-3">
            <p className="text-xl font-extrabold text-gray-900">Bright Spaces</p>
            <p className="text-xs text-gray-500">Child‑friendly rooms</p>
          </div>
          <div className="rounded-xl border p-3">
            <p className="text-xl font-extrabold text-gray-900">Parent‑First</p>
            <p className="text-xs text-gray-500">Easy updates</p>
          </div>
        </div>

        {/* Callout */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-orange-300 bg-orange-50/60 p-5 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-700">Curious about our approach or the age groups we serve?</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/about" className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-2.5 text-white text-sm font-semibold hover:bg-orange-600">About Us</Link>
            <Link to="/programs" className="inline-flex items-center justify-center rounded-xl border border-orange-300 bg-white px-5 py-2.5 text-sm font-semibold text-orange-600 hover:bg-orange-50">See Programs</Link>
          </div>
        </div>
      </div>
    </section>
  );
}