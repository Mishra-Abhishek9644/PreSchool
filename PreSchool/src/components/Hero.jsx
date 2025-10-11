import { Link } from "react-router-dom";
import Herobg from "../assets/Herobg.jpg"

// Hero.jsx — balanced version: more premium feel but still JS-only & internal links
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Top promo bar */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white">
        <div className="container mx-auto max-w-7xl px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-sm md:text-base font-medium">
            Admissions Open <span className="font-semibold">2025–26</span> · Playgroup · Nursery · Jr KG · Sr KG
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/admission" className="rounded-full bg-white/90 px-4 py-1.5 font-semibold text-pink-600 shadow hover:bg-white transition">
              View Admissions
            </Link>
            <Link to="/contact" className="underline decoration-white/60 underline-offset-4 hover:decoration-white">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Soft background accents */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-20 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-green-200/40 blur-3xl" />

      <div className="relative container mx-auto max-w-7xl px-4 py-12 md:py-16 grid md:grid-cols-2 items-center gap-10">
        {/* Left: Text */}
        <div className="order-2 md:order-1">
          <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            Nurturing Ages 2–6
          </span>

          <h1 className="mt-3 text-3xl leading-tight sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Where Little Minds <span className="text-orange-500">Blossom</span>
          </h1>

          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl">
            A warm, safe and joyful preschool with caring teachers, play‑based learning and bright classrooms designed for
            exploration. We focus on confidence, kindness and early skills.
          </p>

          {/* Quick highlights */}
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <li className="rounded-xl bg-green-50 p-3 text-gray-800">Safe & hygienic campus</li>
            <li className="rounded-xl bg-yellow-50 p-3 text-gray-800">Play‑based curriculum</li>
            <li className="rounded-xl bg-sky-50 p-3 text-gray-800">Caring teachers</li>
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 text-white font-semibold shadow-md hover:bg-orange-600"
            >
              Learn About Us
            </Link>
            <Link
              to="/admission"
              className="inline-flex items-center justify-center rounded-2xl border border-orange-300 bg-white px-6 py-3 font-semibold text-orange-600 hover:bg-orange-50"
            >
              Admissions
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50"
            >
              Contact
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl border p-3">
              <p className="text-xl font-extrabold text-gray-900">Small Groups</p>
              <p className="text-xs text-gray-500">Personal attention</p>
            </div>
            <div className="rounded-xl border p-3">
              <p className="text-xl font-extrabold text-gray-900">Parent‑First</p>
              <p className="text-xs text-gray-500">Easy updates</p>
            </div>
            <div className="rounded-xl border p-3">
              <p className="text-xl font-extrabold text-gray-900">Bright Spaces</p>
              <p className="text-xs text-gray-500">Child‑friendly rooms</p>
            </div>
          </div>

          {/* Meta line */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
            <div>Hours: 9:00am – 3:00pm</div>
            <div>Thane, Maharashtra</div>
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
            <div className="absolute -left-3 -top-3 rounded-2xl bg-white shadow px-3 py-2 text-xs font-semibold text-gray-700">
              Play • Learn • Grow
            </div>
            <div className="absolute -right-3 bottom-6 rounded-2xl bg-white shadow px-3 py-2 text-xs font-semibold text-gray-700">
              New Session 2025–26
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}