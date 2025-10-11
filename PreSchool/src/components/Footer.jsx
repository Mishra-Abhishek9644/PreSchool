// Footer.jsx — JS + Tailwind, simple + clean
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-4">
        {/* Logo + short intro */}
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            Blossom <span className="text-orange-400">Preschool</span>
          </h2>
          <p className="mt-3 text-sm text-gray-400 max-w-xs">
            A joyful preschool nurturing ages 2–6 with play‑based learning, caring teachers and safe classrooms.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-orange-400">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
            <li><Link to="/admission" className="hover:text-white">Admissions</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-orange-400">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li>📍 220 Arcadia, Hiranandani Estate, Thane 400607</li>
            <li>📞 +91 9820638066</li>
            <li>⏰ 9:00am – 3:00pm</li>
          </ul>
        </div>

        {/* Newsletter / Note */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-orange-400">Stay Connected</h3>
          <p className="mt-3 text-sm text-gray-400">Follow us on social media or drop by to know more about our programs.</p>
          <div className="mt-4 flex gap-3">
            <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition">F</a>
            <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition">I</a>
            <a href="#" className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition">Y</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Blossom Preschool · All rights reserved
      </div>
    </footer>
  );
}