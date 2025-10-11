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

      {/* Top Bar (hidden on mobile) */}
      <div className="hidden md:block bg-sky-500 text-white text-sm">
        <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center p-2 md:p-3">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-base">
            <a href="tel:+919820638066" className="flex items-center gap-2 hover:underline">
              <FaPhoneAlt aria-hidden="true" />
              <span>Call Us:</span>
              <span className="font-semibold">+91 9820638066</span>
            </a>

            <div className="flex items-center gap-2">
              <FaClock aria-hidden="true" />
              <span>Hours:</span>
              <span className="font-semibold">9:00am – 3:00pm</span>
            </div>

            <a
              href="https://maps.google.com/?q=220+Arcadia,+Hiranandani+Estate,+Thane+400607"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 hover:underline"
            >
              <FaMapMarkerAlt aria-hidden="true" />
              <span>Address:</span>
              <span className="font-semibold">220 Arcadia, Hiranandani Estate, Thane 400607</span>
            </a>
          </div>

          <div className="flex gap-5">
            <a href="https://facebook.com" target="_blank" rel="noopener" className="hover:opacity-80" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:opacity-80" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener" className="hover:opacity-80" aria-label="YouTube">
              <FaYoutube size={20} />
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
        <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-2">
            <h1 className="text-2xl font-extrabold tracking-tight">
              <span className="text-green-700">Blossom</span>{" "}
              <span className="text-orange-500">Preschool</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-lg">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `transition hover:opacity-80 ${isActive ? "text-red-500 font-semibold" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 ring-1 ring-gray-300 hover:ring-gray-400 focus:outline-none focus-visible:ring-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          id="mobile-menu"
          className={`md:hidden border-t ${menuOpen ? "block" : "hidden"}`}
        >
          <ul className="bg-white text-center text-gray-800 space-y-4 py-4 font-medium">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-1 ${isActive ? "text-red-500 font-semibold" : ""}`
                  }
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
