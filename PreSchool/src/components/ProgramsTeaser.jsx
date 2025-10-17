// ProgramsTeaser.jsx — styled with logo blue palette
import { Link } from "react-router-dom";

export default function ProgramsTeaser() {
  const programs = [
    {
      name: "Playgroup",
      age: "2 – 3 years",
      desc: "Gentle separation, sensory play and early routines.",
      accent: "bg-[#ECF5FB] border-[#A7CDE7]", // very light blue
      badge: "Foundations",
    },
    {
      name: "Nursery",
      age: "3 – 4 years",
      desc: "Language, pre-math and fine-motor through play.",
      accent: "bg-[#E6F0F8] border-[#A7CDE7]", // slightly deeper tint
      badge: "Explore",
    },
    {
      name: "Junior KG",
      age: "4 – 5 years",
      desc: "Phonics, numeracy, social skills and creativity.",
      accent: "bg-[#D7E6F3] border-[#A7CDE7]", // logo light tint
      badge: "Grow",
    },
    {
      name: "Senior KG",
      age: "5 – 6 years",
      desc: "Readiness for Grade 1 with confidence and care.",
      accent: "bg-[#D1E2F1] border-[#A7CDE7]", // another variation
      badge: "Ready",
    },
  ];

  return (
    <section className="relative">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Programs
          </h2>
          <p className="mt-3 text-gray-600">
            Age-appropriate learning paths that keep childhood joyful.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border ${p.accent} p-6 shadow-sm hover:shadow-md transition`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-[#0778BE] border border-[#A7CDE7]">
                  {p.badge}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500">{p.age}</p>
              <p className="mt-3 text-sm text-gray-700">{p.desc}</p>
              <div
                className="mt-4 h-1 w-10 rounded-full transition"
                style={{ backgroundColor: "#A7CDE7" }}
              />
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed p-5 text-center md:flex-row md:text-left"
          style={{ borderColor: "#A7CDE7", backgroundColor: "#ECF5FB" }}
        >
          <p className="text-sm text-gray-700">
            Want details like timings, fees and activities?
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-white text-sm font-semibold transition"
              style={{ backgroundColor: "#0778BE" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#055A8F")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#0778BE")
              }
            >
              View Programs
            </Link>
            <Link
              to="/admission"
              className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold"
              style={{
                border: "1px solid #A7CDE7",
                backgroundColor: "white",
                color: "#0778BE",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#F7FBFE")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              Admissions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
