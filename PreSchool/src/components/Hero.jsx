import { Link } from "react-router-dom";
import Herobg from "../assets/Herobg.jpg";
import kids from "../assets/kids.jpeg";


// Brand palette
const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";
const BLUE_TINT = "#D7E6F3";
const LOGO_YELLOW = "#FACC15";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Top promo bar */}
      <div
        className="text-white animate-fadeUp"
        style={{
          backgroundColor: LOGO_BLUE,
        }}
      >
        <div className="container mx-auto max-w-7xl px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-sm md:text-base font-medium">
            Admissions Open <span className="font-semibold">2025–26</span> ·
            Playgroup · Nursery · Jr KG · Sr KG
          </p>

          <div className="flex items-center gap-3 text-sm">
            {["View Admissions", "Contact Us"].map((text, i) => (
              <Link
                key={i}
                to={i === 0 ? "/admission" : "/contact"}
                className="rounded-full bg-white px-4 py-1.5 font-semibold shadow transition hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  color: LOGO_BLUE,
                  border: `2px solid ${LOGO_YELLOW}`,
                }}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 items-center gap-12">

        {/* LEFT */}
        <div className="animate-fadeUp-delay">

          {/* Badge */}
          <span
            className="inline-block rounded-full px-4 py-1 text-xs font-semibold animate-glow"
            style={{
              backgroundColor: BLUE_TINT,
              color: LOGO_BLUE,
              border: `1.5px solid ${LOGO_YELLOW}`,
            }}
          >
            Nurturing Ages 2–6
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Where Little Minds{" "}
            <span className="relative">
              <span style={{ color: LOGO_BLUE }}>Blossom</span>
             
            </span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-xl">
            A warm, safe and joyful preschool with caring teachers, play-based
            learning and bright classrooms designed for exploration.
          </p>

          {/* Highlights */}
          <ul className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            {[
              "Safe & hygienic campus",
              "Play-based curriculum",
              "Caring teachers",
            ].map((item, i) => (
              <li
                key={i}
                className="rounded-xl p-3 transition hover:-translate-y-1 hover:shadow-md"
                style={{
                  backgroundColor: BLUE_TINT,
                  border: `1px solid ${LOGO_YELLOW}`,
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="rounded-2xl px-7 py-3 text-white font-semibold transition transform hover:-translate-y-1 hover:shadow-xl animate-glow"
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
              Learn About Us
            </Link>

            {["Admissions", "Contact"].map((text, i) => (
              <Link
                key={i}
                to={text === "Admissions" ? "/admission" : "/contact"}
                className="rounded-2xl px-6 py-3 font-semibold bg-white transition hover:-translate-y-1 hover:shadow-md"
                style={{
                  color: LOGO_BLUE,
                  border: `2px solid ${LOGO_YELLOW}`,
                }}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative animate-float">
          <div className="relative mx-auto max-w-lg">
            <img
              src={kids}
              alt="Happy preschoolers"
              className="w-full rounded-3xl object-cover shadow-2xl transition hover:scale-[1.02]"
              style={{ border: `3px solid ${LOGO_YELLOW}` }}
            />

            {/* Floating badges */}
            <div
              className="absolute -left-4 -top-4 rounded-2xl bg-white px-4 py-2 text-xs font-semibold animate-float"
              style={{
                color: LOGO_BLUE,
                border: `1.5px solid ${LOGO_YELLOW}`,
              }}
            >
              Play • Learn • Grow
            </div>

            <div
              className="absolute -right-4 bottom-6 rounded-2xl bg-white px-4 py-2 text-xs font-semibold animate-float"
              style={{
                color: LOGO_BLUE,
                border: `1.5px solid ${LOGO_YELLOW}`,
              }}
            >
              New Session 2025–26
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
