// ProgramsTeaser.jsx — JS + Tailwind, internal links only
import { Link } from "react-router-dom";

export default function ProgramsTeaser() {
  const programs = [
    {
      name: "Playgroup",
      age: "2 – 3 years",
      desc: "Gentle separation, sensory play and early routines.",
      accent: "bg-pink-50 border-pink-200",
      badge: "Foundations",
    },
    {
      name: "Nursery",
      age: "3 – 4 years",
      desc: "Language, pre‑math and fine‑motor through play.",
      accent: "bg-yellow-50 border-yellow-200",
      badge: "Explore",
    },
    {
      name: "Junior KG",
      age: "4 – 5 years",
      desc: "Phonics, numeracy, social skills and creativity.",
      accent: "bg-green-50 border-green-200",
      badge: "Grow",
    },
    {
      name: "Senior KG",
      age: "5 – 6 years",
      desc: "Readiness for Grade 1 with confidence and care.",
      accent: "bg-sky-50 border-sky-200",
      badge: "Ready",
    },
  ];

  return (
    <section className="relative">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">Our Programs</h2>
          <p className="mt-3 text-gray-600">Age‑appropriate learning paths that keep childhood joyful.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div key={p.name} className={`rounded-2xl border ${p.accent} p-6 shadow-sm hover:shadow-md transition`}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-700 border border-gray-200">{p.badge}</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">{p.age}</p>
              <p className="mt-3 text-sm text-gray-700">{p.desc}</p>
              <div className="mt-4 h-1 w-10 rounded-full bg-orange-200" />
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-orange-300 bg-orange-50/60 p-5 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-700">Want details like timings, fees and activities?</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/programs" className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-2.5 text-white text-sm font-semibold hover:bg-orange-600">View Programs</Link>
            <Link to="/admission" className="inline-flex items-center justify-center rounded-xl border border-orange-300 bg-white px-5 py-2.5 text-sm font-semibold text-orange-600 hover:bg-orange-50">Admissions</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
