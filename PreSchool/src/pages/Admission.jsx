import { Link } from "react-router-dom";

const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";
const BLUE_LIGHT = "#A7CDE7";
const BLUE_TINT = "#D7E6F3";
const LOGO_YELLOW = "#FACC15";

const ADMISSION_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdQD7IsOSXY-w9mQ7G6lcZnOZ_AIhlvqR81TcorHisEOU2WCA/viewform?embedded=true";

export default function Admission() {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* Soft background accent */}
      <div
        aria-hidden
        className="absolute -top-28 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: BLUE_TINT }}
      />

      <div className="relative container mx-auto max-w-7xl px-4 py-14">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto animate-fadeUpAdmission">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Admissions{" "}
            <span className="relative inline-block">
              <span style={{ color: LOGO_BLUE }}>2025–26</span>
              
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Limited seats for Playgroup, Nursery, Jr KG, Sr KG & Daycare.
            A smooth, parent-friendly process with full support.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 animate-fadeUpAdmission">
          {[
            ["Enquiry", "Call us or visit campus to know about programs & daycare."],
            ["Application", "Submit admission form with required documents."],
            ["Interaction", "Short parent-child meet with teachers for settling in."],
          ].map(([title, text], i) => (
            <div
              key={i}
              className="rounded-2xl border p-6 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              style={{ borderColor: LOGO_YELLOW }}
            >
              <div
                className="h-11 w-11 rounded-full flex items-center justify-center font-bold mb-4 animate-pulseStep"
                style={{
                  backgroundColor: BLUE_TINT,
                  color: LOGO_BLUE,
                  border: `2px solid ${LOGO_YELLOW}`,
                }}
              >
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>

        {/* Eligibility */}
        <div className="mt-20 animate-fadeUpAdmission">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center">
            Eligibility & Documents
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Age Criteria",
                items: [
                  "Playgroup: 2–3 years",
                  "Nursery: 3–4 years",
                  "Junior KG: 4–5 years",
                  "Senior KG: 5–6 years",
                  "Daycare: 2–6 years",
                ],
              },
              {
                title: "Documents Required",
                items: [
                  "Birth certificate (copy)",
                  "2 passport-size photos of child",
                  "Parent ID proof (copy)",
                  "Medical / Allergy details (if any)",
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border p-6 bg-white transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: LOGO_YELLOW }}
              >
                <h3 className="font-semibold text-gray-900">{card.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {card.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Fee Note */}
        <div className="mt-20 text-center animate-fadeUpAdmission">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Fee Structure
          </h2>
          <p className="mt-3 text-gray-600">
            Fees vary by program and timings. Shared during counselling.
          </p>
          <div
            className="mt-6 inline-block rounded-2xl border px-6 py-3 text-gray-700 text-sm"
            style={{ borderColor: LOGO_YELLOW }}
          >
            Contact school office for current fee details.
          </div>
        </div>

        {/* Admission Form */}
        <div className="mt-20 animate-fadeUpAdmission">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center">
            Admission Enquiry Form
          </h2>
          <p className="mt-3 text-gray-600 text-center">
            Fill in your details and we’ll get back to you soon.
          </p>

          <div className="mt-8 max-w-3xl mx-auto">
            <div
              className="w-full rounded-2xl border overflow-hidden animate-yellowGlowSoft"
              style={{ borderColor: LOGO_YELLOW }}
            >
              <iframe
                loading="lazy"
                src={ADMISSION_EMBED_URL}
                className="w-full h-[700px] sm:h-[900px] md:h-[1100px]"
                title="Admission Form"
              />
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 mb-2">
                Having trouble with the embedded form?
              </p>
              <a
                href={ADMISSION_EMBED_URL.replace("?embedded=true", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl px-6 py-3 text-white font-semibold shadow transition hover:-translate-y-1"
                style={{
                  backgroundColor: LOGO_BLUE,
                  border: `2px solid ${LOGO_YELLOW}`,
                }}
              >
                Open Form in New Tab
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div
          className="mt-20 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border p-6 shadow-sm animate-fadeUpAdmission"
          style={{ borderColor: LOGO_YELLOW, backgroundColor: "#F9FBFD" }}
        >
          <p className="text-gray-700">
            Need help with the admission process? We’re happy to guide you.
          </p>
          <div className="flex gap-3">
            <Link
              to="/contact"
              className="rounded-xl px-6 py-3 font-semibold text-white shadow transition hover:-translate-y-1"
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
              Contact Office
            </Link>

            <Link
              to="/programs"
              className="rounded-xl px-6 py-3 font-semibold transition hover:-translate-y-1"
              style={{
                color: LOGO_BLUE,
                backgroundColor: "white",
                border: `2px solid ${LOGO_YELLOW}`,
              }}
            >
              View Programs
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
