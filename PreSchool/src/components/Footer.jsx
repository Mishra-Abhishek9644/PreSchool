// Footer.jsx — JS + Tailwind, white background version
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="container mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-4">
        {/* Logo + short intro */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#0778BE]">
            Growing Kids <span className="text-gray-800">Preschool</span>
          </h2>
          <p className="mt-3 text-sm text-gray-600 max-w-xs">
            A joyful preschool nurturing ages 2–6 with play-based learning,
            caring teachers and safe classrooms.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#0778BE]">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#0778BE]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#0778BE]">About</Link></li>
            <li><Link to="/programs" className="hover:text-[#0778BE]">Programs</Link></li>
            <li><Link to="/admission" className="hover:text-[#0778BE]">Admissions</Link></li>
            <li><Link to="/gallery" className="hover:text-[#0778BE]">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-[#0778BE]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#0778BE]">
            Contact
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>
              📍 Plot No - A/80 , Sai Dipak Row House Residency, Nr. Vinayak Row
              House Bhestan - 395023.
            </li>
            <li>📞 +91 9820638066</li>
            <li>⏰ 7:30am – 1:00pm & 3:00pm – 6:00pm</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#0778BE]">
            Stay Connected
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Follow us on social media or drop by to know more about our
            programs.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61572252436482"
              className="h-8 w-8 flex items-center justify-center rounded-full bg-[#0778BE] text-white hover:bg-[#055A8F] transition"
            >
              F
            </a>
            <a
              href="https://www.instagram.com/growingkids_official/?__pwa=1"
              className="h-8 w-8 flex items-center justify-center rounded-full bg-[#0778BE] text-white hover:bg-[#055A8F] transition"
            >
              I
            </a>
            <a
              href="#"
              className="h-8 w-8 flex items-center justify-center rounded-full bg-[#0778BE] text-white hover:bg-[#055A8F] transition"
            >
              Y
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Growing Kids Preschool · All rights reserved
      </div>
    </footer>
  );
}
