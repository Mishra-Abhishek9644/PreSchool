import { Link } from "react-router-dom";
import Herobg from "../assets/Herobg.jpg";

// Brand palette
const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";
const BLUE_LIGHT = "#A7CDE7";   // light accent
const BLUE_TINT = "#D7E6F3";    // very light backgrounds

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Top promo bar */}
      <div
        className="text-white"
        style={{
          backgroundImage: `linear-gradient(to right, ${LOGO_BLUE}, ${BLUE_LIGHT})`,
        }}
      >
        <div className="container mx-auto max-w-7xl px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-sm md:text-base font-medium">
            Admissions Open <span className="font-semibold">2025–26</span> · Playgroup · Nursery · Jr KG · Sr KG
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link
              to="/admission"
              className="rounded-full px-4 py-1.5 font-semibold shadow transition"
              style={{ backgroundColor: "rgba(255,255,255,0.9)", color: LOGO_BLUE }}
            >
              View Admissions
            </Link>
            <Link
              to="/contact"
              className="underline underline-offset-4"
              style={{ textDecorationColor: "rgba(255,255,255,0.6)" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Soft background accents (blue-tinted) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-20 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: BLUE_TINT }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: BLUE_TINT }}
      />

      <div className="relative container mx-auto max-w-7xl px-4 py-12 md:py-16 grid md:grid-cols-2 items-center gap-10">
        {/* Left: Text */}
        <div className="order-2 md:order-1">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: BLUE_TINT, color: LOGO_BLUE }}
          >
            Nurturing Ages 2–6
          </span>

          <h1 className="mt-3 text-3xl leading-tight sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Where Little Minds <span style={{ color: LOGO_BLUE }}>Blossom</span>
          </h1>

          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl">
            A warm, safe and joyful preschool with caring teachers, play-based learning and bright classrooms designed for
            exploration. We focus on confidence, kindness and early skills.
          </p>

          {/* Quick highlights */}
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <li className="rounded-xl p-3 text-gray-800" style={{ backgroundColor: BLUE_TINT }}>
              Safe & hygienic campus
            </li>
            <li className="rounded-xl p-3 text-gray-800" style={{ backgroundColor: "#E6F0F8" }}>
              Play-based curriculum
            </li>
            <li className="rounded-xl p-3 text-gray-800" style={{ backgroundColor: "#ECF5FB" }}>
              Caring teachers
            </li>
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-white font-semibold shadow-md transition"
              style={{ backgroundColor: LOGO_BLUE }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = LOGO_BLUE_DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = LOGO_BLUE)}
            >
              Learn About Us
            </Link>

            <Link
              to="/admission"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold transition"
              style={{
                border: `1px solid ${BLUE_LIGHT}`,
                backgroundColor: "white",
                color: LOGO_BLUE,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F7FBFE")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
            >
              Admissions
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold transition"
              style={{ color: "#374151" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F3F4F6")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Contact
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl border p-3" style={{ borderColor: BLUE_TINT }}>
              <p className="text-xl font-extrabold text-gray-900">Small Groups</p>
              <p className="text-xs text-gray-500">Personal attention</p>
            </div>
            <div className="rounded-xl border p-3" style={{ borderColor: BLUE_TINT }}>
              <p className="text-xl font-extrabold text-gray-900">Parent-First</p>
              <p className="text-xs text-gray-500">Easy updates</p>
            </div>
            <div className="rounded-xl border p-3" style={{ borderColor: BLUE_TINT }}>
              <p className="text-xl font-extrabold text-gray-900">Bright Spaces</p>
              <p className="text-xs text-gray-500">Child-friendly rooms</p>
            </div>
          </div>

          {/* Meta line */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
            <div>Hours: 7:30am – 1:00pm & 3:00pm – 6:00pm</div>
            <div>Plot No - A/80 , Sai Dipak Row House Residency, Nr. Vinayak Row House Bhestan - 395023.</div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="order-1 md:order-2 relative">
          <div className="relative mx-auto max-w-md md:max-w-lg">
            <img
              src={Herobg}
              alt="Happy preschoolers playing and learning together"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />
            {/* Floating badges */}
            <div className="absolute -left-3 -top-3 rounded-2xl bg-white shadow px-3 py-2 text-xs font-semibold"
                 style={{ color: LOGO_BLUE }}>
              Play • Learn • Grow
            </div>
            <div className="absolute -right-3 bottom-6 rounded-2xl bg-white shadow px-3 py-2 text-xs font-semibold"
                 style={{ color: LOGO_BLUE }}>
              New Session 2025–26
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
