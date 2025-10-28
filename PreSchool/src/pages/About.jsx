// About.jsx — standalone page (logo-blue palette, founder + corporate contact)
import { Link } from "react-router-dom";
import teaching from "../assets/teaching methods.jpg";
import principal from "../assets/principal.png"

const LOGO_BLUE = "#0778BE";
const BLUE_TINT = "#D7E6F3";
const BLUE_LIGHT = "#A7CDE7";

export default function About() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            About <span style={{ color: LOGO_BLUE }}>Growing Kids Preschool</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            A warm, safe and joyful preschool & daycare where children (ages 2–6) learn through
            play, caring guidance and everyday routines. Our mission is to nurture confidence,
            kindness and curiosity in every child.
          </p>
        </div>

        {/* Founder */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div
              className="h-44 w-full rounded-2xl shadow bg-gradient-to-br from-white to-[#ECF5FB] border"
              style={{ borderColor: BLUE_TINT }}
              aria-hidden
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Founder & Principal </h2>
            <p className="text-gray-600 leading-relaxed">
              With an illustrious career spanning over 42 years, Mrs. Suman Aggarwal stands as a beacon of dedication and excellence in education. Her journey—from a passionate teacher to an inspiring principal—reflects her unwavering commitment to nurturing young minds and empowering educators.  

Guided by her deep understanding of the needs of children, parents, and teachers, Mrs. Aggarwal founded Growing Kids School in 2024 with a vision to create a learning environment that combines academic brilliance with compassion and moral growth. Every corner of the school reflects her belief that education should not only enlighten the mind but also touch the heart.  

Her decades of experience have shaped Growing Kids School into more than just an institution—it is a second home where curiosity is encouraged, individuality is celebrated, and values are instilled with care. Under her guidance, the school continues to uphold its mission of helping every child grow into a confident, responsible, and compassionate individual.
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="rounded-xl p-3 border" style={{ borderColor: BLUE_TINT }}>
                Focus on <span className="font-semibold">individual attention</span> and emotional safety
              </li>
              <li className="rounded-xl p-3 border" style={{ borderColor: BLUE_TINT }}>
                <span className="font-semibold">Play-based curriculum</span> with practical, hands-on activities
              </li>
              <li className="rounded-xl p-3 border" style={{ borderColor: BLUE_TINT }}>
                <span className="font-semibold">Clear parent communication</span> and progress updates
              </li>
              <li className="rounded-xl p-3 border" style={{ borderColor: BLUE_TINT }}>
                <span className="font-semibold">Safe & hygienic</span> environment with child-friendly spaces
              </li>
            </ul>
          </div>
        </div>

        {/* Vision & Values */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Vision & Values</h2>
          <p className="mt-2 text-gray-600">The small things that make a big difference.</p>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="rounded-xl border p-5 shadow-sm" style={{ borderColor: BLUE_TINT }}>
              <h3 className="font-semibold text-gray-900">Care</h3>
              <p className="text-sm text-gray-600 mt-2">Every child is welcomed with warmth and respect.</p>
            </div>
            <div className="rounded-xl border p-5 shadow-sm" style={{ borderColor: BLUE_TINT }}>
              <h3 className="font-semibold text-gray-900">Safety</h3>
              <p className="text-sm text-gray-600 mt-2">Clean classrooms and secure, child-friendly spaces.</p>
            </div>
            <div className="rounded-xl border p-5 shadow-sm" style={{ borderColor: BLUE_TINT }}>
              <h3 className="font-semibold text-gray-900">Play</h3>
              <p className="text-sm text-gray-600 mt-2">Learning through stories, music, art and movement.</p>
            </div>
            <div className="rounded-xl border p-5 shadow-sm" style={{ borderColor: BLUE_TINT }}>
              <h3 className="font-semibold text-gray-900">Growth</h3>
              <p className="text-sm text-gray-600 mt-2">Confidence, language and early math readiness.</p>
            </div>
          </div>
        </div>

        {/* Teaching Method */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Teaching Method</h2>
            <p className="text-gray-600 leading-relaxed">
              We follow a <span style={{ color: LOGO_BLUE }}>play-based</span>, child-centered approach. Children explore
              through structured play, conversation, songs, pretend-play and fine-motor activities.
              The goal is joyful learning that naturally builds language, numeracy, social skills and independence.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Daily circle time, story sessions and rhymes</li>
              <li>Themed activity corners (art, blocks, role-play)</li>
              <li>Age-appropriate worksheets for pre-writing & pre-math</li>
              <li>Gentle routines to build focus and self-care habits</li>
            </ul>
          </div>
          <div className="h-60 rounded-2xl shadow border overflow-hidden" style={{ borderColor: BLUE_TINT }}>
            <img
              src={teaching}
              alt="Teacher guiding preschool children"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Branches */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Our Branches</h2>
          <p className="mt-2 text-gray-600">Currently serving families at two locations.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border p-6 shadow-sm text-left" style={{ borderColor: BLUE_TINT }}>
              <h3 className="font-semibold text-gray-900">Bhestan, Surat</h3>
              <p className="text-sm text-gray-600 mt-2">
                Plot No - A/80 , Sai Dipak Row House Residency, Nr. Vinayak Row House Bhestan - 395023.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Hours: 7:30am – 1:00pm & 3:00pm – 6:00pm
              </p>
            </div>
            <div className="rounded-xl border p-6 shadow-sm text-left" style={{ borderColor: BLUE_TINT }}>
              <h3 className="font-semibold text-gray-900">[Second Branch Name]</h3>
              <p className="text-sm text-gray-600 mt-2">Gali no 4, Sai Mohan 4, Plot No-357, near police chowki, Bhestan, Surat, Gujarat 395023</p>
              <p className="text-sm text-gray-600 mt-1">Hours: 7:30am – 1:00pm & 3:00pm – 6:00pm</p>
            </div>
          </div>
        </div>

        {/* Corporate Partnerships (invite, not list) */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Corporate Partnerships</h2>
          <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
            We collaborate with organizations to support working parents with reliable preschool and daycare.
            If your company is interested in fee benefits, priority admissions, or custom daycare timings,
            our team would be happy to connect.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow"
              style={{ backgroundColor: LOGO_BLUE }}
            >
              Contact for Tie-ups
            </Link>
            <Link
              to="/admission"
              className="rounded-xl px-5 py-2.5 text-sm font-semibold"
              style={{ border: `1px solid ${BLUE_LIGHT}`, color: LOGO_BLUE, backgroundColor: "white" }}
            >
              Admissions Info
            </Link>
          </div>
        </div>

        {/* FAQ / extra content to “fill it up” nicely */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Frequently Asked</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border p-5" style={{ borderColor: BLUE_TINT }}>
              <h3 className="font-semibold text-gray-900">What does a day look like?</h3>
              <p className="text-sm text-gray-600 mt-2">
                Welcome circle, songs & movement, activity corners, outdoor play (as available),
                snack time, calm-down stories and tidy-up routines.
              </p>
            </div>
            <div className="rounded-xl border p-5" style={{ borderColor: BLUE_TINT }}>
              <h3 className="font-semibold text-gray-900">How do you update parents?</h3>
              <p className="text-sm text-gray-600 mt-2">
                We keep communication simple and clear — brief weekly updates, teacher notes, and
                easy access to the team for any questions.
              </p>
            </div>
            <div className="rounded-xl border p-5" style={{ borderColor: BLUE_TINT }}>
              <h3 className="font-semibold text-gray-900">Do you help with separation?</h3>
              <p className="text-sm text-gray-600 mt-2">
                Yes — gentle settling-in plans, familiar routines, and lots of reassurance so
                children feel safe and confident.
              </p>
            </div>
            <div className="rounded-xl border p-5" style={{ borderColor: BLUE_TINT }}>
              <h3 className="font-semibold text-gray-900">What about hygiene & safety?</h3>
              <p className="text-sm text-gray-600 mt-2">
                Clean classrooms, child-safe materials and supervised spaces. We maintain simple
                policies that are easy for families to follow.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 flex justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-xl px-6 py-3 font-semibold text-white shadow"
            style={{ backgroundColor: LOGO_BLUE }}
          >
            Get in Touch
          </Link>
          <Link
            to="/programs"
            className="rounded-xl px-6 py-3 font-semibold"
            style={{ border: `1px solid ${BLUE_LIGHT}`, color: LOGO_BLUE, backgroundColor: "white" }}
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
