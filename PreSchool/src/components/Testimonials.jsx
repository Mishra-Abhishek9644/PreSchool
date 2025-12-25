import { Link } from "react-router-dom";

const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";
const LOGO_YELLOW = "#FACC15";

export default function Testimonials() {
  const quotes = [
    {
      name: "Priya S.",
      role: "Parent of Jr KG",
      text:
        "My child loves going to school now. The teachers are caring and the activities are so creative!",
    },
    {
      name: "Rahul & Meera",
      role: "Playgroup Parents",
      text:
        "Separation was handled so gently. We got regular updates and felt truly involved.",
    },
    {
      name: "Aisha K.",
      role: "Sr KG Parent",
      text:
        "We’ve seen big improvements in confidence and language. The environment is bright and safe.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#ECF5FB]">

      {/* Floating background blob */}
      <div
        aria-hidden
        className="absolute -top-20 right-10 h-52 w-52 rounded-full blur-3xl animate-blobFloat"
        style={{ backgroundColor: "#D7E6F3" }}
      />

      <div className="relative container mx-auto max-w-7xl px-4 py-14">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center animate-fadeUpSoft">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            What{" "}
            <span className="relative inline-block">
              <span style={{ color: LOGO_BLUE }}>Parents</span>
              
            </span>{" "}
            Say
          </h2>
          <p className="mt-3 text-gray-600">
            Real words from our school community.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <figure
              key={q.name}
              className="group rounded-2xl bg-white p-6 shadow-sm border transition hover:-translate-y-2 hover:shadow-xl animate-fadeUpSoft"
              style={{
                borderColor: LOGO_YELLOW,
                animationDelay: `${i * 0.12}s`,
              }}
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="h-11 w-11 shrink-0 rounded-full bg-[#ECF5FB] animate-floatAvatar"
                  style={{ border: `2px solid ${LOGO_YELLOW}` }}
                />
                <figcaption>
                  <p className="font-semibold text-gray-900">{q.name}</p>
                  <p className="text-xs text-gray-500">{q.role}</p>
                </figcaption>
              </div>

              <blockquote className="mt-4 text-gray-700 text-sm leading-relaxed animate-quotePulse">
                “{q.text}”
              </blockquote>

              <div
                className="mt-4 h-1 w-10 rounded-full transition-all group-hover:w-20"
                style={{ backgroundColor: LOGO_YELLOW }}
              />
            </figure>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed p-6 text-center md:flex-row md:text-left animate-fadeUpSoft"
          style={{
            borderColor: LOGO_YELLOW,
            backgroundColor: "rgba(215,230,243,0.35)",
          }}
        >
          <p className="text-sm text-gray-700">
            Ready to know more or see our classrooms?
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-white text-sm font-semibold transition hover:-translate-y-1 animate-yellowGlow"
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
              About Us
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-sm font-semibold bg-white transition hover:-translate-y-1 hover:shadow-md"
              style={{
                color: LOGO_BLUE,
                border: `2px solid ${LOGO_YELLOW}`,
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
