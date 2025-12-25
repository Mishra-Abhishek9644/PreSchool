import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/logo_trimmed.svg";

const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";
const LOGO_YELLOW = "#FACC15";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/programs", label: "Programs" },
    { to: "/admission", label: "Admissions" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md">

      {/* Top Bar — desktop only */}
      <div
        className="hidden lg:block"
        style={{
          backgroundColor: LOGO_BLUE,
          borderBottom: `2px solid ${LOGO_YELLOW}`,
        }}
      >
        <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center p-2 text-white text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919328194803" className="flex items-center gap-2 hover:opacity-90">
              <FaPhoneAlt />
              <span className="font-semibold">+91 9328194803</span>
            </a>

            <div className="flex items-center gap-2">
              <FaClock />
              <span className="font-semibold">7:30am–1:00pm & 3:00–6:00pm</span>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 hover:opacity-90 truncate max-w-md"
            >
              <FaMapMarkerAlt />
              <span className="font-semibold truncate">
                A/80 , Sai Dipak Row House Residency, Bhestan
              </span>
            </a>
          </div>

          <div className="flex gap-5">
            <a href="https://facebook.com" target="_blank" rel="noopener">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/90 backdrop-blur border-b"
        style={{ borderColor: LOGO_YELLOW }}
      >
        <div className="container mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Growing Kids logo"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
            <span className="text-lg md:text-2xl font-extrabold leading-tight">
              <span style={{ color: LOGO_BLUE }}>GROWING KIDS</span>{" "}
              <span className="text-gray-700 hidden md:inline">
                PRESCHOOL & DAYCARE
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-lg">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link transition hover:-translate-y-0.5 ${
                      isActive ? "active font-semibold" : ""
                    }`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? LOGO_BLUE : "#1f2937",
                  })}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-lg p-2 border transition hover:scale-105"
            style={{ borderColor: LOGO_YELLOW, color: LOGO_BLUE }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="lg:hidden bg-white border-t animate-slideDown"
            style={{ borderColor: LOGO_YELLOW }}
          >
            <ul className="py-6 space-y-5 text-center text-lg">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block transition ${
                        isActive ? "font-semibold" : ""
                      }`
                    }
                    style={({ isActive }) => ({
                      color: isActive ? LOGO_BLUE : "#1f2937",
                    })}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
