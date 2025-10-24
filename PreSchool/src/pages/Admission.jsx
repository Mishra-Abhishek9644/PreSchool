// Admission.jsx — brochure-style admissions page (matches App.jsx import)
import { Link } from "react-router-dom";

const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";
const BLUE_LIGHT = "#A7CDE7";
const BLUE_TINT = "#D7E6F3";

export default function Admission() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Admissions <span style={{ color: LOGO_BLUE }}>2025–26</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Limited seats available for Playgroup, Nursery, Jr KG, Sr KG & Daycare.
            A smooth, parent-friendly process with full support at every step.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            ["Enquiry", "Call us or visit campus to know about programs & daycare."],
            ["Application", "Submit admission form with required documents."],
            ["Interaction", "Short parent-child meet with teachers for settling in."],
          ].map(([title, text], i) => (
            <div
              key={i}
              className="rounded-2xl border p-6 bg-white shadow-sm"
              style={{ borderColor: BLUE_TINT }}
            >
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center font-bold mb-4"
                style={{ backgroundColor: BLUE_TINT, color: LOGO_BLUE }}
              >
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>

        {/* Eligibility */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center">
            Eligibility & Documents
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: BLUE_TINT }}>
              <h3 className="font-semibold text-gray-900">Age Criteria</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>Playgroup: 2–3 years</li>
                <li>Nursery: 3–4 years</li>
                <li>Junior KG: 4–5 years</li>
                <li>Senior KG: 5–6 years</li>
                <li>Daycare: 2–6 years</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: BLUE_TINT }}>
              <h3 className="font-semibold text-gray-900">Documents Required</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>Birth certificate (copy)</li>
                <li>2 passport-size photos of child</li>
                <li>Parent ID proof (copy)</li>
                <li>Medical/Allergy details (if any)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fee Structure (placeholder) */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Fee Structure</h2>
          <p className="mt-3 text-gray-600">
            Fees vary by program and timings. Detailed fee schedule is shared during admission counselling.
          </p>
          <div
            className="mt-6 inline-block rounded-2xl border px-6 py-3 text-gray-700 text-sm"
            style={{ borderColor: BLUE_TINT }}
          >
            Contact school office for current fee details.
          </div>
        </div>

        {/* Admission Enquiry Form */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center">
            Admission Enquiry Form
          </h2>
          <p className="mt-3 text-gray-600 text-center">
            Fill in your details and we’ll get back to you soon.
          </p>

          <form className="mt-8 max-w-2xl mx-auto grid gap-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Child's Name"
                className="w-full rounded-xl border px-4 py-3 text-sm"
                style={{ borderColor: BLUE_TINT }}
              />
              <input
                type="number"
                placeholder="Child's Age"
                className="w-full rounded-xl border px-4 py-3 text-sm"
                style={{ borderColor: BLUE_TINT }}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Parent's Name"
                className="w-full rounded-xl border px-4 py-3 text-sm"
                style={{ borderColor: BLUE_TINT }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border px-4 py-3 text-sm"
                style={{ borderColor: BLUE_TINT }}
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border px-4 py-3 text-sm"
              style={{ borderColor: BLUE_TINT }}
            />
            <select
              className="w-full rounded-xl border px-4 py-3 text-sm text-gray-600"
              style={{ borderColor: BLUE_TINT }}
            >
              <option>Select Program</option>
              <option>Playgroup</option>
              <option>Nursery</option>
              <option>Junior KG</option>
              <option>Senior KG</option>
              <option>Daycare</option>
            </select>
            <textarea
              rows="4"
              placeholder="Any notes or questions?"
              className="w-full rounded-xl border px-4 py-3 text-sm"
              style={{ borderColor: BLUE_TINT }}
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-xl px-5 py-3 font-semibold text-white shadow"
              style={{ backgroundColor: LOGO_BLUE }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = LOGO_BLUE_DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = LOGO_BLUE)}
            >
              Submit Enquiry
            </button>
          </form>
        </div>

        {/* Final CTA */}
        <div
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border p-6 text-center md:text-left shadow-sm"
          style={{ borderColor: BLUE_TINT, backgroundColor: "#F9FBFD" }}
        >
          <p className="text-gray-700">Need help with the admission process? We’re happy to guide you.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="rounded-xl px-5 py-2.5 font-semibold text-white shadow"
              style={{ backgroundColor: LOGO_BLUE }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = LOGO_BLUE_DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = LOGO_BLUE)}
            >
              Contact Office
            </Link>
            <Link
              to="/programs"
              className="rounded-xl px-5 py-2.5 font-semibold"
              style={{ border: `1px solid ${BLUE_LIGHT}`, color: LOGO_BLUE, backgroundColor: "white" }}
            >
              View Programs
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
