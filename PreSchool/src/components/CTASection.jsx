// CTASection.jsx — JS + Tailwind, closing call-to-action
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-pink-500 text-white">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Admissions Open 2025–26
          </h2>
          <p className="mt-3 text-sm md:text-base text-orange-100">
            Limited seats for Playgroup, Nursery, Jr KG & Sr KG · Safe, caring and joyful learning environment.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/admission"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-orange-600 hover:bg-orange-50"
          >
            Admissions Info
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/60 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}