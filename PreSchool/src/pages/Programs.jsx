import { Link } from "react-router-dom";
import nursery from "../assets/nursery.jpg";
import Junior from "../assets/juniore.jpg";
import senior from "../assets/senior.jpg";
import Daycare from "../assets/Daycare.jpg";
import play from "../assets/playgroup.avif";

const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";
const BLUE_LIGHT = "#A7CDE7";
const BLUE_TINT = "#D7E6F3";
const LOGO_YELLOW = "#FACC15";

export default function Programs() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Soft background accent */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: BLUE_TINT }}
      />

      <div className="relative container mx-auto max-w-7xl px-4 py-14">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto animate-fadeUpLong">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our{" "}
            <span className="relative inline-block">
              <span style={{ color: LOGO_BLUE }}>Programs & Daycare</span>
              
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Age-appropriate learning paths that keep childhood joyful — with a
            safe, caring Daycare for working families.
          </p>
        </div>

        {/* Program sections */}
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
          className="mt-20 rounded-3xl border p-8 shadow-sm animate-fadeUpLong animate-yellowGlowSoft"
          style={{ borderColor: LOGO_YELLOW, backgroundColor: "#F9FBFD" }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Daycare{" "}
                <span className="text-lg font-bold text-gray-500">
                  • 2 – 6 years
                </span>
              </h2>
              <p className="mt-3 text-gray-700">
                A safe, caring space beyond school hours with supervised play,
                nap time and calm routines — supporting working parents with
                reliable care.
              </p>
            </div>

            <img
              src={Daycare}
              alt="Daycare"
              className="rounded-2xl shadow-md object-cover h-44 w-80 animate-floatSlow"
              style={{ border: `2px solid ${LOGO_YELLOW}` }}
            />
          </div>
        </div>

        {/* Parent Voice */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 animate-fadeUpLong">
          {[
            ["Playgroup Parent", "Separation was so gentle. Our child settled with smiling routines."],
            ["Nursery Parent", "We saw clear progress in language and fine-motor skills."],
            ["Daycare Parent", "Safe, caring staff and flexible hours — a huge support for us."],
          ].map(([role, quote]) => (
            <figure
              key={role}
              className="rounded-2xl border p-6 bg-white transition hover:-translate-y-2 hover:shadow-lg"
              style={{ borderColor: LOGO_YELLOW }}
            >
              <figcaption className="text-sm text-gray-500">{role}</figcaption>
              <blockquote className="mt-2 text-gray-800">“{quote}”</blockquote>
              <div
                className="mt-4 h-1 w-10 rounded-full transition-all hover:w-20"
                style={{ backgroundColor: LOGO_YELLOW }}
              />
            </figure>
          ))}
        </div>

        {/* Final CTA */}
        <div
          className="mt-20 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border p-6 text-center md:text-left animate-fadeUpLong"
          style={{ borderColor: LOGO_YELLOW, backgroundColor: "#F9FBFD" }}
        >
          <p className="text-gray-700">
            Want details like fees, batches and seat availability?
          </p>

          <div className="flex gap-3">
            <Link
              to="/admission"
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
              Admission Info
            </Link>

            <Link
              to="/contact"
              className="rounded-xl px-6 py-3 font-semibold transition hover:-translate-y-1"
              style={{
                color: LOGO_BLUE,
                backgroundColor: "white",
                border: `2px solid ${LOGO_YELLOW}`,
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Subcomponent ---------- */
function ProgramSection({ title, age, image, bullets, paragraph }) {
  const LOGO_YELLOW = "#FACC15";

  return (
    <div className="mt-20 animate-fadeUpLong">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        {title}{" "}
        <span className="text-lg font-bold text-gray-500">• {age}</span>
      </h2>

      <div className="mt-6 grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <p className="text-gray-700">{paragraph}</p>

          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
            {bullets.map((b) => (
              <li
                key={b}
                className="rounded-xl p-3 border bg-white transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: LOGO_YELLOW }}
              >
                {b}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-md object-cover w-full h-44 animate-floatSlow"
          style={{ border: `2px solid ${LOGO_YELLOW}` }}
        />
      </div>
    </div>
  );
}
