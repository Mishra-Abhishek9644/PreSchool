import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";
const LOGO_YELLOW = "#FACC15";

export default function Footer() {
  return (
    <footer
      className="relative text-gray-700 animate-footer"
      style={{
        background:
          "linear-gradient(to top, rgba(215,230,243,0.35), white)",
        borderTop: `4px solid ${LOGO_YELLOW}`,
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-5">

        {/* Brand */}
        <div className="transition hover:-translate-y-1">
          <h2 className="text-2xl font-extrabold">
            <span style={{ color: LOGO_BLUE }}>Growing Kids</span>{" "}
            <span className="text-gray-800">Preschool</span>
          </h2>
          <p className="mt-3 text-sm text-gray-600 max-w-xs">
            A joyful preschool nurturing ages 2–6 with play-based learning,
            caring teachers and safe classrooms.
          </p>
        </div>

        {/* Quick Links */}
        <div className="transition hover:-translate-y-1">
          <h3
            className="text-sm font-semibold uppercase tracking-wide"
            style={{ color: LOGO_BLUE }}
          >
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Programs", "/programs"],
              ["Admissions", "/admission"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <li key={label}>
                <Link
                  to={to}
                  className="relative inline-block hover:text-[#0778BE] transition"
                >
                  {label}
                  <span
                    className="absolute left-0 -bottom-0.5 h-0.5 w-0 transition-all hover:w-full"
                    style={{ backgroundColor: LOGO_YELLOW }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Branches */}
        <div className="transition hover:-translate-y-1">
          <h3
            className="text-sm font-semibold uppercase tracking-wide"
            style={{ color: LOGO_BLUE }}
          >
            Our Branches
          </h3>
          <ul className="mt-3 space-y-3 text-sm text-gray-600">
            <li>
              Gali no 4, Sai Mohan 4, Plot No-357, near police chowki, Bhestan,
              Surat, Gujarat 395023
              <br />
              <span className="text-xs text-gray-500">
                Hours: 7:30am – 1:00pm & 3:00pm – 6:00pm
              </span>
            </li>
            <li>
              Plot No - A/80 , Sai Dipak Row House Residency, Nr. Vinayak Row
              House Bhestan - 395023.
              <br />
              <span className="text-xs text-gray-500">
                Hours: 7:30am – 1:00pm & 3:00pm – 6:00pm
              </span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="transition hover:-translate-y-1">
          <h3
            className="text-sm font-semibold uppercase tracking-wide"
            style={{ color: LOGO_BLUE }}
          >
            Contact
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>📍 Plot No - A/80 , Sai Dipak Row House Residency, Bhestan</li>
            <li>📞 +91 9328194803</li>
            <li>⏰ 7:30am – 1:00pm & 3:00pm – 6:00pm</li>
          </ul>
        </div>

        {/* Social */}
        <div className="transition hover:-translate-y-1">
          <h3
            className="text-sm font-semibold uppercase tracking-wide"
            style={{ color: LOGO_BLUE }}
          >
            Stay Connected
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Follow us on social media to see daily moments from our classrooms.
          </p>

          <div className="mt-4 flex gap-3">
            {[
              { icon: <FaFacebookF size={15} />, label: "Facebook" },
              { icon: <FaInstagram size={15} />, label: "Instagram" },
            ].map((s, i) => (
              <a
                key={i}
                href="#"
                aria-label={s.label}
                className="h-10 w-10 flex items-center justify-center rounded-full text-white transition hover:-translate-y-1 animate-social animate-yellowGlowSoft"
                style={{
                  backgroundColor: LOGO_BLUE,
                  border: `2px solid ${LOGO_YELLOW}`,
                  animationDelay: `${i * 0.4}s`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = LOGO_BLUE_DARK)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = LOGO_BLUE)
                }
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="text-center text-sm py-4"
        style={{
          borderTop: `1px solid ${LOGO_YELLOW}`,
          color: "#6b7280",
        }}
      >
        © {new Date().getFullYear()} Growing Kids Preschool · All rights reserved
      </div>
    </footer>
  );
}
