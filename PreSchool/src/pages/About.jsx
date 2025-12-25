import { Link } from "react-router-dom";
import teaching from "../assets/teaching methods.jpg";
import principal from "../assets/principal.png";

const LOGO_BLUE = "#0778BE";
const BLUE_TINT = "#D7E6F3";
const BLUE_LIGHT = "#A7CDE7";
const LOGO_YELLOW = "#FACC15";

export default function About() {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* Soft background blob */}
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: BLUE_TINT }}
      />

      <div className="relative container mx-auto max-w-7xl px-4 py-14">

        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto animate-fadeUpPage">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About{" "}
            <span className="relative inline-block">
              <span style={{ color: LOGO_BLUE }}>Growing Kids Preschool</span>
              
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            A warm, safe and joyful preschool & daycare where children (ages 2–6)
            learn through play, caring guidance and everyday routines.
          </p>
        </div>

        {/* Founder */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 items-start animate-fadeUpPage">

          {/* Image */}
          <div className="md:col-span-1 animate-floatImage">
            <div
              className="h-120 rounded-2xl shadow-xl border overflow-hidden"
              style={{ borderColor: LOGO_YELLOW }}
            >
              <img
                src={principal}
                alt="Principal - Growing Kids Preschool"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Our Founder & Principal
            </h2>

            <p className="text-gray-600 leading-relaxed">
              With an illustrious career spanning over 42 years, Mrs. Suman
              Aggarwal stands as a beacon of dedication and excellence in
              education.
              <br /><br />
              Guided by her deep understanding of children, parents, and
              teachers, she founded Growing Kids School in 2024 with a vision to
              combine academic brilliance with compassion and moral growth.
            </p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              {[
                "Individual attention & emotional safety",
                "Play-based curriculum",
                "Clear parent communication",
                "Safe & hygienic spaces",
              ].map((item, i) => (
                <li
                  key={i}
                  className="rounded-xl p-3 border transition hover:-translate-y-1 hover:shadow-md"
                  style={{ borderColor: LOGO_YELLOW }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vision & Values */}
        <div className="mt-20 text-center animate-fadeUpPage">
          <h2 className="text-2xl font-bold text-gray-900">Vision & Values</h2>
          <p className="mt-2 text-gray-600">
            The small things that make a big difference.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["Care", "Warmth, respect and kindness"],
              ["Safety", "Secure and child-friendly spaces"],
              ["Play", "Stories, music, art and movement"],
              ["Growth", "Confidence & early readiness"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-xl border p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
                style={{ borderColor: LOGO_YELLOW }}
              >
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Method */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center animate-fadeUpPage">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Our Teaching Method
            </h2>
            <p className="text-gray-600">
              We follow a{" "}
              <span style={{ color: LOGO_BLUE }} className="font-semibold">
                play-based
              </span>{" "}
              child-centered approach focused on joyful learning.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Circle time, stories and rhymes</li>
              <li>Themed activity corners</li>
              <li>Pre-writing & pre-math readiness</li>
              <li>Gentle routines for independence</li>
            </ul>
          </div>

          <div
            className="h-64 rounded-2xl shadow-xl border overflow-hidden animate-floatImage"
            style={{ borderColor: LOGO_YELLOW }}
          >
            <img
              src={teaching}
              alt="Teaching method"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 animate-fadeUpPage">
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Frequently Asked
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              ["What does a day look like?", "Circle time, play, stories, snacks and calm routines."],
              ["How do you update parents?", "Simple weekly updates and open communication."],
              ["Do you help with separation?", "Yes, with gentle settling-in plans."],
              ["What about hygiene & safety?", "Clean classrooms and supervised spaces."],
            ].map(([q, a], i) => (
              <div
                key={i}
                className="rounded-xl border p-5 transition hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: LOGO_YELLOW }}
              >
                <h3 className="font-semibold text-gray-900">{q}</h3>
                <p className="text-sm text-gray-600 mt-2">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 flex justify-center gap-4 animate-fadeUpPage">
          <Link
            to="/contact"
            className="rounded-xl px-7 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1"
            style={{
              backgroundColor: LOGO_BLUE,
              border: `2px solid ${LOGO_YELLOW}`,
            }}
          >
            Get in Touch
          </Link>

          <Link
            to="/programs"
            className="rounded-xl px-7 py-3 font-semibold transition hover:-translate-y-1"
            style={{
              color: LOGO_BLUE,
              backgroundColor: "white",
              border: `2px solid ${LOGO_YELLOW}`,
            }}
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
