import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo_trimmed.svg";

const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";

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
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-black text-white px-3 py-2 rounded"
      >
        Skip to content
      </a>

      {/* Top Bar — desktop only */}
      <div className="hidden lg:block" style={{ backgroundColor: LOGO_BLUE }}>
        <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center p-2 md:p-3 text-white text-xs md:text-sm">
          <div className="flex items-center gap-6 flex-nowrap">
            <a href="tel:+919820638066" className="flex items-center gap-2 hover:underline">
              <FaPhoneAlt aria-hidden="true" />
              <span>Call Us:</span>
              <span className="font-semibold">+91 9820638066</span>
            </a>

            <div className="flex items-center gap-2">
              <FaClock aria-hidden="true" />
              <span>Hours:</span>
              <span className="font-semibold">7:30am–1:00pm & 3:00–6:00pm</span>
            </div>

            <a
              href="https://maps.google.com/?q=Plot%20No%20-%20A/80%20,%20Sai%20Dipak%20Row%20House%20Residency,%20Nr.%20Vinayak%20Row%20House%20Bhestan%20-%20395023."
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 hover:underline min-w-0"
            >
              <FaMapMarkerAlt aria-hidden="true" />
              <span>Address:</span>
              <span className="font-semibold truncate">
                A/80 , Sai Dipak Row House Residency, Nr. Vinayak Row House Bhestan - 395023.
              </span>
            </a>
          </div>

          <div className="flex gap-5">
            <a href="https://www.facebook.com/profile.php?id=61572252436482" target="_blank" rel="noopener" className="hover:opacity-90" aria-label="Facebook">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.instagram.com/growingkids_official/?__pwa=1" target="_blank" rel="noopener" className="hover:opacity-90" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener" className="hover:opacity-90" aria-label="YouTube">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 text-gray-800"
        role="navigation"
        aria-label="Primary"
      >
        <div className="container mx-auto max-w-7xl px-4 py-2 flex items-center justify-between gap-4">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 min-w-0">
            <img
              src={logo}
              alt="Growing Kids PreSchool & Daycare logo"
              className="block h-10 sm:h-12 lg:h-20 w-auto object-contain"
            />
            {/* Show long name only on desktop */}
            <span
              className="text-sm sm:text-base md:text-lg lg:text-2xl font-extrabold leading-tight"
              style={{ color: LOGO_BLUE }}
            >
              GROWING KIDS <span className="text-gray-700">PRESCHOOL</span>
              {/* Show "& DAYCARE" only on medium screens and larger */}
              <span className="hidden md:inline text-gray-700">&nbsp;& DAYCARE</span>
            </span>
          </Link>

          {/* Desktop Menu — desktop only */}
          <ul className="hidden lg:flex items-center gap-8 text-lg">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `transition hover:opacity-90 ${isActive ? "font-semibold" : ""}`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? LOGO_BLUE : undefined,
                  })}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile/Tablet Menu Button — visible up to lg */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 ring-1 ring-gray-300 hover:ring-gray-400 focus:outline-none focus-visible:ring-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            style={{ outlineColor: LOGO_BLUE_DARK }}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile/Tablet Dropdown — visible up to lg */}
        <div id="mobile-menu" className={`lg:hidden border-t ${menuOpen ? "block" : "hidden"}`}>
          <ul className="bg-white text-center text-gray-800 space-y-4 py-4 font-medium">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-1 transition ${isActive ? "font-semibold" : ""}`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? LOGO_BLUE : undefined,
                  })}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
