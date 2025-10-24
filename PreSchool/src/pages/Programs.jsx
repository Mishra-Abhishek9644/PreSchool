// Programs.jsx — detailed brochure-style page (big headings + daycare spotlight + static images)
import { Link } from "react-router-dom";
import nursery from "../assets/nursery.jpg"
import Junior from "../assets/juniore.jpg"
import senior from "../assets/senior.jpg"
import Daycare from "../assets/Daycare.jpg"
import play  from "../assets/playgroup.avif"


const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";
const BLUE_LIGHT = "#A7CDE7";
const BLUE_TINT  = "#D7E6F3";

export default function Programs() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Our <span style={{ color: LOGO_BLUE }}>Programs & Daycare</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Age-appropriate learning paths that keep childhood joyful — with a safe, caring Daycare for working families.
          </p>
        </div>

        {/* Playgroup */}
        <ProgramSection
          title="Playgroup"
          age="2 – 3 years"
          image={play}
          bullets={[
            "Gentle separation support with comforting routines.",
            "Sensory play, songs, movement and pretend-play.",
            "Early social skills: sharing, waiting, tidy-up routines.",
          ]}
          paragraph="Playgroup is about feeling safe, seen and excited to explore. Children enjoy short activities in small groups so they build curiosity and confidence without pressure."
        />

        {/* Nursery */}
        <ProgramSection
          title="Nursery"
          age="3 – 4 years"
          image={nursery}
          bullets={[
            "Language development through stories, rhymes and conversation.",
            "Pre-math with sorting, matching, counting and patterns.",
            "Fine-motor skills through art, scribbling, threading and clay.",
          ]}
          paragraph="Nursery balances free play with short, guided tasks. Joyful repetition helps children build routine, independence and early skills naturally."
        />

        {/* Junior KG */}
        <ProgramSection
          title="Junior KG"
          age="4 – 5 years"
          image={Junior}
          bullets={[
            "Phonics and listening games for sound awareness.",
            "Hands-on numeracy: quantities, shapes, basic operations.",
            "Social-emotional learning: teamwork, expressing feelings.",
          ]}
          paragraph="In Jr KG, children connect sounds to letters, explore numbers with manipulatives, and practice turn-taking through playful, age-appropriate activities."
        />

        {/* Senior KG */}
        <ProgramSection
          title="Senior KG"
          age="5 – 6 years"
          image={senior}
          bullets={[
            "Pre-writing and early reading readiness with phonics.",
            "Problem-solving, story sequencing, show-and-tell.",
            "Confidence-building for smooth Grade 1 transition.",
          ]}
          paragraph="Sr KG focuses on readiness — children practice longer attention spans, early reading/writing habits, and classroom routines in a warm, encouraging way."
        />

        {/* Daycare Spotlight */}
        <div
          className="mt-16 rounded-3xl border p-6 md:p-8 shadow-sm"
          style={{ borderColor: BLUE_TINT, backgroundColor: "#F9FBFD" }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Daycare <span className="text-lg md:text-xl font-bold text-gray-500">• 2 – 6 years</span>
              </h2>
              <p className="mt-3 text-gray-700">
                A safe, caring space beyond school hours. Children enjoy supervised play, story time, art corners, nap time,
                and healthy snacks (as provided). We support working parents with reliable care and simple communication.
              </p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                <li className="rounded-xl p-3 border bg-white" style={{ borderColor: BLUE_TINT }}>
                  Flexible timing up to <span className="font-semibold">6:00pm</span>
                </li>
                <li className="rounded-xl p-3 border bg-white" style={{ borderColor: BLUE_TINT }}>
                  Calm nap area & age-appropriate activities
                </li>
                <li className="rounded-xl p-3 border bg-white" style={{ borderColor: BLUE_TINT }}>
                  Caring supervision and hygiene-first routines
                </li>
                <li className="rounded-xl p-3 border bg-white" style={{ borderColor: BLUE_TINT }}>
                  Simple parent updates & approachable staff
                </li>
              </ul>
            </div>
            <div className="shrink-0">
              <img
                 src={Daycare}
                alt="Children in daycare environment"
                className="rounded-2xl shadow-md object-cover h-40 w-72 md:h-44 md:w-80"
              />
            </div>
          </div>
        </div>

        {/* Age & Timings Table */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center">Age & Timings</h3>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden text-sm">
              <thead>
                <tr style={{ backgroundColor: BLUE_TINT }} className="text-left text-gray-700">
                  <th className="px-4 py-3 font-semibold">Program</th>
                  <th className="px-4 py-3 font-semibold">Age</th>
                  <th className="px-4 py-3 font-semibold">Focus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Playgroup", "2–3 yrs", "Comfort, sensory play, routines"],
                  ["Nursery", "3–4 yrs", "Language, pre-math, fine-motor"],
                  ["Junior KG", "4–5 yrs", "Phonics, numeracy, social skills"],
                  ["Senior KG", "5–6 yrs", "Readiness for Grade 1"],
                  ["Daycare", "2–6 yrs", "Care, nap, play & activities (till 6pm)"],
                ].map((row, i) => (
                  <tr key={i} className="border-b" style={{ borderColor: BLUE_TINT }}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row[0]}</td>
                    <td className="px-4 py-3 text-gray-700">{row[1]}</td>
                    <td className="px-4 py-3 text-gray-700">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500 text-center">
            Note: Exact class durations and batches are shared during admission counselling.
          </p>
        </div>

        {/* Parent Voice */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            ["Playgroup Parent", "Separation was so gentle. Our child settled with smiling routines."],
            ["Nursery Parent", "We saw clear progress in language and fine-motor skills."],
            ["Daycare Parent", "Safe, caring staff and flexible hours — a huge support for us."],
          ].map(([role, quote]) => (
            <figure key={role} className="rounded-2xl border p-6 shadow-sm bg-white" style={{ borderColor: BLUE_TINT }}>
              <figcaption className="text-sm text-gray-500">{role}</figcaption>
              <blockquote className="mt-2 text-gray-800">“{quote}”</blockquote>
              <div className="mt-4 h-1 w-10 rounded-full" style={{ backgroundColor: BLUE_LIGHT }} />
            </figure>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center">FAQs</h3>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-5" style={{ borderColor: BLUE_TINT }}>
              <h4 className="font-semibold text-gray-900">Do you provide food in Daycare?</h4>
              <p className="text-sm text-gray-600 mt-2">
                We follow simple, hygienic snack/mealtime routines. Details about meals are shared at the time of admission.
              </p>
            </div>
            <div className="rounded-2xl border p-5" style={{ borderColor: BLUE_TINT }}>
              <h4 className="font-semibold text-gray-900">Can we pick up mid-day?</h4>
              <p className="text-sm text-gray-600 mt-2">
                Yes. We coordinate with parents on pick-up times so children remain comfortable and the routine stays smooth.
              </p>
            </div>
            <div className="rounded-2xl border p-5" style={{ borderColor: BLUE_TINT }}>
              <h4 className="font-semibold text-gray-900">How do you update parents?</h4>
              <p className="text-sm text-gray-600 mt-2">
                Simple weekly updates and quick teacher notes — approachable staff whenever you need us.
              </p>
            </div>
            <div className="rounded-2xl border p-5" style={{ borderColor: BLUE_TINT }}>
              <h4 className="font-semibold text-gray-900">Is Daycare available for non-students?</h4>
              <p className="text-sm text-gray-600 mt-2">
                Yes, subject to availability and settling-in support. Please speak to us for current slots.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border p-6 text-center md:text-left shadow-sm"
          style={{ borderColor: BLUE_TINT, backgroundColor: "#F9FBFD" }}
        >
          <p className="text-gray-700">Want details like fees, batches and seat availability?</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/admission"
              className="rounded-xl px-5 py-2.5 font-semibold text-white shadow"
              style={{ backgroundColor: LOGO_BLUE }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = LOGO_BLUE_DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = LOGO_BLUE)}
            >
              Admission Info
            </Link>
            <Link
              to="/contact"
              className="rounded-xl px-5 py-2.5 font-semibold"
              style={{ border: `1px solid ${BLUE_LIGHT}`, color: LOGO_BLUE, backgroundColor: "white" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------- Subcomponent for each grade (big headings + image) --------- */
function ProgramSection({ title, age, image, bullets, paragraph }) {
  return (
    <div className="mt-14">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
        {title}{" "}
        <span className="text-lg md:text-xl align-middle font-bold text-gray-500">• {age}</span>
      </h2>
      <div className="mt-4 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <p className="text-gray-700">{paragraph}</p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
            {bullets.map((b) => (
              <li key={b} className="rounded-xl p-3 border bg-white" style={{ borderColor: BLUE_TINT }}>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-1">
          <img
            src={image}
            alt={`${title} program`}
            className="rounded-2xl shadow-md object-cover w-full h-40"
          />
        </div>
      </div>
    </div>
  );
}
