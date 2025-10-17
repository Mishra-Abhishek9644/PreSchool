// Testimonials.jsx — JS + Tailwind, logo-blue palette
import { Link } from "react-router-dom";

export default function Testimonials() {
  const quotes = [
    {
      name: "Priya S.",
      role: "Parent of Jr KG",
      text:
        "My child loves going to school now. The teachers are caring and the activities are so creative!",
    },
    {
      name: "Rahul & Meera",
      role: "Playgroup Parents",
      text:
        "Separation was handled so gently. We got regular updates and felt truly involved.",
    },
    {
      name: "Aisha K.",
      role: "Sr KG Parent",
      text:
        "We’ve seen big improvements in confidence and language. The environment is bright and safe.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-[#ECF5FB]">
      {/* background accent (soft blue) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-10 h-40 w-40 rounded-full blur-3xl"
        style={{ backgroundColor: "#D7E6F3" }}
      />

      <div className="relative container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            What Parents Say
          </h2>
          <p className="mt-3 text-gray-600">Real words from our school community.</p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="rounded-2xl border border-[#D7E6F3] bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-[#ECF5FB]" />
                <figcaption>
                  <p className="font-semibold text-gray-900">{q.name}</p>
                  <p className="text-xs text-gray-500">{q.role}</p>
                </figcaption>
              </div>
              <blockquote className="mt-4 text-gray-700 text-sm leading-relaxed">
                “{q.text}”
              </blockquote>
              <div className="mt-4 h-1 w-10 rounded-full bg-[#A7CDE7]" />
            </figure>
          ))}
        </div>

        {/* Small CTA */}
        <div
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed p-5 text-center md:flex-row md:text-left"
          style={{ borderColor: "#A7CDE7", backgroundColor: "rgba(215,230,243,0.35)" }}
        >
          <p className="text-sm text-gray-700">
            Ready to know more or see our classrooms?
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-white text-sm font-semibold transition"
              style={{ backgroundColor: "#0778BE" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#055A8F")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0778BE")}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold"
              style={{
                border: "1px solid #A7CDE7",
                backgroundColor: "white",
                color: "#0778BE",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F7FBFE")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
