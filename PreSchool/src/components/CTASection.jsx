import { Link } from "react-router-dom";

const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";
const LOGO_YELLOW = "#FACC15";

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden text-white animate-gradient"
      style={{
        backgroundImage: `linear-gradient(135deg, ${LOGO_BLUE}, ${LOGO_BLUE_DARK})`,
      }}
    >
      {/* Yellow accent lines */}
      <div
        className="absolute top-0 left-0 h-1 w-full"
        style={{ backgroundColor: LOGO_YELLOW }}
      />
      <div
        className="absolute bottom-0 left-0 h-1 w-full"
        style={{ backgroundColor: LOGO_YELLOW }}
      />

      {/* Floating playful dots */}
      <span
        aria-hidden
        className="absolute left-10 top-12 h-3 w-3 rounded-full animate-floatDot"
        style={{ backgroundColor: LOGO_YELLOW }}
      />
      <span
        aria-hidden
        className="absolute right-16 top-20 h-2.5 w-2.5 rounded-full animate-floatDot"
        style={{ backgroundColor: "#D7E6F3", animationDelay: "1s" }}
      />
      <span
        aria-hidden
        className="absolute right-1/3 bottom-10 h-2 w-2 rounded-full animate-floatDot"
        style={{ backgroundColor: LOGO_YELLOW, animationDelay: "2s" }}
      />

      <div className="relative container mx-auto max-w-7xl px-4 py-14 md:py-18 flex flex-col md:flex-row items-center justify-between gap-8 animate-fadeUpCTA">
        {/* Text */}
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Admissions Open{" "}
           
          </h2>

          <p className="mt-4 text-sm md:text-base text-[#D1E2F1]">
            Limited seats for Playgroup, Nursery, Jr KG &amp; Sr KG · Safe,
            caring and joyful learning environment.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/admission"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition transform hover:-translate-y-1 animate-yellowGlowStrong"
            style={{
              backgroundColor: "white",
              color: LOGO_BLUE,
              border: `2px solid ${LOGO_YELLOW}`,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#F3F9FD")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
          >
            Admissions Info
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition transform hover:-translate-y-1 hover:bg-white/10"
            style={{
              color: "white",
              border: `2px solid ${LOGO_YELLOW}`,
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
