import { Link } from "react-router-dom";

const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";
const LOGO_YELLOW = "#FACC15";

export default function ProgramsTeaser() {
  const programs = [
    {
      name: "Playgroup",
      age: "2 – 3 years",
      desc: "Gentle separation, sensory play and early routines.",
      accent: "bg-[#ECF5FB]",
      badge: "Foundations",
    },
    {
      name: "Nursery",
      age: "3 – 4 years",
      desc: "Language, pre-math and fine-motor through play.",
      accent: "bg-[#E6F0F8]",
      badge: "Explore",
    },
    {
      name: "Junior KG",
      age: "4 – 5 years",
      desc: "Phonics, numeracy, social skills and creativity.",
      accent: "bg-[#D7E6F3]",
      badge: "Grow",
    },
    {
      name: "Senior KG",
      age: "5 – 6 years",
      desc: "Readiness for Grade 1 with confidence and care.",
      accent: "bg-[#D1E2F1]",
      badge: "Ready",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">

      {/* Floating background blob */}
      <div
        aria-hidden
        className="absolute left-1/2 -top-20 h-52 w-52 rounded-full blur-3xl animate-blobFloat"
        style={{ backgroundColor: "#D7E6F3" }}
      />

      <div className="relative container mx-auto max-w-7xl px-4 py-14">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center animate-fadeUpSoft">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our{" "}
            <span className="relative inline-block">
              <span style={{ color: LOGO_BLUE }}>Programs</span>
              
            </span>
          </h2>
          <p className="mt-3 text-gray-600">
            Age-appropriate learning paths that keep childhood joyful.
          </p>
        </div>

        {/* Program Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <div
              key={p.name}
              className={`group rounded-2xl border p-6 shadow-sm transition transform hover:-translate-y-2 hover:shadow-xl ${p.accent} animate-fadeUpSoft`}
              style={{
                borderColor: LOGO_YELLOW,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {p.name}
                </h3>

                <span
                  className="rounded-full bg-white px-3 py-1 text-xs font-semibold animate-badgePop"
                  style={{
                    color: LOGO_BLUE,
                    border: `1.5px solid ${LOGO_YELLOW}`,
                  }}
                >
                  {p.badge}
                </span>
              </div>

              <p className="mt-1 text-sm text-gray-500">{p.age}</p>
              <p className="mt-3 text-sm text-gray-700">{p.desc}</p>

              <div
                className="mt-4 h-1 w-10 rounded-full transition-all group-hover:w-20"
                style={{ backgroundColor: LOGO_YELLOW }}
              />
            </div>
          ))}
        </div>

        {/* CTA Row */}
        <div
          className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed p-6 text-center md:flex-row md:text-left animate-fadeUpSoft"
          style={{ borderColor: LOGO_YELLOW, backgroundColor: "#ECF5FB" }}
        >
          <p className="text-sm text-gray-700">
            Want details like timings, fees and activities?
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-white text-sm font-semibold transition hover:-translate-y-1 animate-yellowGlow"
              style={{
                backgroundColor: LOGO_BLUE,
                border: `2px solid ${LOGO_YELLOW}`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = LOGO_BLUE_DARK)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = LOGO_BLUE)
              }
            >
              View Programs
            </Link>

            <Link
              to="/admission"
              className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-sm font-semibold bg-white transition hover:-translate-y-1 hover:shadow-md"
              style={{
                color: LOGO_BLUE,
                border: `2px solid ${LOGO_YELLOW}`,
              }}
            >
              Admissions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
