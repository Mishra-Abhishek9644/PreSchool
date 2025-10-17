// CTASection.jsx — JS + Tailwind, closing call-to-action with logo-blue palette
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section
      className="relative text-white"
      style={{
        backgroundImage: "linear-gradient(to right, #0778BE, #055A8F)", // logo blue gradient
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Admissions Open 2025–26
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#D1E2F1]">
            Limited seats for Playgroup, Nursery, Jr KG &amp; Sr KG · Safe, caring and joyful learning environment.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/admission"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition"
            style={{ backgroundColor: "white", color: "#0778BE" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F3F9FD")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
          >
            Admissions Info
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition"
            style={{
              border: "1px solid rgba(255,255,255,0.6)",
              color: "white",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
