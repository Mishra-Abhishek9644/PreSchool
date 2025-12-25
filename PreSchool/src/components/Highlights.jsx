import { Link } from "react-router-dom";

const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";
const LOGO_YELLOW = "#FACC15";

export default function Highlights() {
  const items = [
    {
      title: "Caring Teachers",
      text: "Qualified, warm educators who know every child by name.",
      accent: "bg-[#D7E6F3] text-[#0778BE]",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path fill="currentColor" d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-4.14 0-7.5 2.08-7.5 4.5V20a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-1.5C19.5 16.08 16.14 14 12 14Z" />
        </svg>
      ),
    },
    {
      title: "Play-based Curriculum",
      text: "Hands-on activities that build language, math and creativity.",
      accent: "bg-[#ECF5FB] text-[#055A8F]",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path fill="currentColor" d="M3 8h8V3H3v5Zm0 13h8v-8H3v8Zm10 0h8v-5h-8v5Zm0-13h8V3h-8v5Z" />
        </svg>
      ),
    },
    {
      title: "Safe & Hygienic Campus",
      text: "Clean classrooms, CCTV coverage and child-friendly spaces.",
      accent: "bg-[#E6F0F8] text-[#0778BE]",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path fill="currentColor" d="M12 2 4 6v6c0 5 3.4 9.74 8 10 4.6-.26 8-5 8-10V6l-8-4Z" />
        </svg>
      ),
    },
    {
      title: "Parent Communication",
      text: "Easy updates, friendly staff and clear admissions support.",
      accent: "bg-[#D1E2F1] text-[#055A8F]",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path fill="currentColor" d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7l-5 4V4Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-white overflow-hidden">

      {/* Animated background blob */}
      <div
        aria-hidden
        className="absolute left-1/2 -top-20 h-52 w-52 rounded-full blur-3xl animate-blob"
        style={{ backgroundColor: "#D7E6F3" }}
      />

      <div className="relative container mx-auto max-w-7xl px-4 py-14">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center animate-fadeUpSoft">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Why Parents Choose{" "}
            <span className="relative inline-block">
              <span style={{ color: LOGO_BLUE }}>Growing Kids</span>
            </span>
          </h2>
          <p className="mt-3 text-gray-600">
            The little things that make a big difference.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group rounded-2xl bg-white p-6 shadow-sm border transition hover:-translate-y-2 hover:shadow-xl animate-fadeUpSoft"
              style={{
                animationDelay: `${i * 0.1}s`,
                borderColor: LOGO_YELLOW,
              }}
            >
              <div
                className={`inline-flex items-center justify-center rounded-xl p-3 ${it.accent} animate-floatIcon`}
                style={{ border: `1.5px solid ${LOGO_YELLOW}` }}
              >
                {it.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {it.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{it.text}</p>

              <div
                className="mt-4 h-1 w-10 rounded-full transition-all group-hover:w-20"
                style={{ backgroundColor: LOGO_YELLOW }}
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-4 text-center animate-fadeUpSoft">
          {[
            ["Small Groups", "More attention"],
            ["Bright Spaces", "Child-friendly rooms"],
            ["Parent-First", "Easy updates"],
          ].map(([title, sub]) => (
            <div
              key={title}
              className="rounded-xl border p-4 transition hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: LOGO_YELLOW }}
            >
              <p className="text-xl font-extrabold text-gray-900">{title}</p>
              <p className="text-xs text-gray-500">{sub}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-dashed p-6 animate-fadeUpSoft"
          style={{ borderColor: LOGO_YELLOW, backgroundColor: "#ECF5FB" }}
        >
          <p className="text-sm text-gray-700">
            Curious about our approach or the age groups we serve?
          </p>

          <div className="flex gap-3">
            <Link
              to="/about"
              className="rounded-xl px-6 py-2.5 text-white text-sm font-semibold transition hover:-translate-y-1 animate-yellowGlow"
              style={{ backgroundColor: LOGO_BLUE, border: `2px solid ${LOGO_YELLOW}` }}
            >
              About Us
            </Link>

            <Link
              to="/programs"
              className="rounded-xl px-6 py-2.5 text-sm font-semibold bg-white transition hover:-translate-y-1 hover:shadow-md"
              style={{ color: LOGO_BLUE, border: `2px solid ${LOGO_YELLOW}` }}
            >
              See Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
