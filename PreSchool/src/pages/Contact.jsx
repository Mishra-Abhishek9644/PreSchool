// Contact.jsx — contact info + enquiry form + map (UI only)
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";
const BLUE_LIGHT = "#A7CDE7";
const BLUE_TINT  = "#D7E6F3";

export default function Contact() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Contact <span style={{ color: LOGO_BLUE }}>Growing Kids</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            We’re happy to answer questions about admissions, daycare timings, and programs.
          </p>
        </div>

        {/* Info + Form */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <Card>
              <div className="flex items-start gap-3">
                <IconBox><FaMapMarkerAlt /></IconBox>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Plot No - A/80 , Sai Dipak Row House Residency, Nr. Vinayak Row House Bhestan - 395023.
                  </p>
                  <a
                    className="inline-block mt-2 text-sm font-semibold"
                    style={{ color: LOGO_BLUE }}
                    href="https://maps.google.com/?q=Plot+No+-+A%2F80+Sai+Dipak+Row+House+Residency%2C+Nr.+Vinayak+Row+House+Bhestan+-+395023"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-3">
                <IconBox><FaPhoneAlt /></IconBox>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    <a href="tel:+919820638066" className="hover:underline">+91 9820638066</a>
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-sm">
                    <a
                      href="https://wa.me/919820638066"
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border"
                      style={{ borderColor: BLUE_TINT, color: LOGO_BLUE }}
                    >
                      <FaWhatsapp /> WhatsApp
                    </a>
                    <a
                      href="mailto:info@growingkids.example"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border"
                      style={{ borderColor: BLUE_TINT, color: LOGO_BLUE }}
                    >
                      <FaEnvelope /> Email
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-3">
                <IconBox><FaClock /></IconBox>
                <div>
                  <h3 className="font-semibold text-gray-900">Hours</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    7:30am – 1:00pm & 3:00pm – 6:00pm
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="font-semibold text-gray-900">Social</h3>
              <div className="mt-3 flex gap-3">
                <SocialBtn ariaLabel="Facebook"><FaFacebookF /></SocialBtn>
                <SocialBtn ariaLabel="Instagram"><FaInstagram /></SocialBtn>
                <SocialBtn ariaLabel="YouTube"><FaYoutube /></SocialBtn>
              </div>
            </Card>
          </div>

          {/* Right: Simple Enquiry Form (UI only) */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: BLUE_TINT }}>
            <h2 className="text-xl font-bold text-gray-900">Send us a message</h2>
            <p className="text-sm text-gray-600 mt-1">We’ll get back to you soon.</p>

            <form className="mt-6 grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Parent's Name" />
                <Input type="tel" placeholder="Phone Number" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input type="email" placeholder="Email Address" />
                <Select>
                  <option>Select Program</option>
                  <option>Playgroup</option>
                  <option>Nursery</option>
                  <option>Junior KG</option>
                  <option>Senior KG</option>
                  <option>Daycare</option>
                </Select>
              </div>
              <Textarea rows="4" placeholder="Your message" />
              <button
                type="submit"
                className="w-full rounded-xl px-5 py-3 font-semibold text-white shadow transition"
                style={{ backgroundColor: LOGO_BLUE }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = LOGO_BLUE_DARK)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = LOGO_BLUE)}
                onClick={(e) => e.preventDefault()} // remove when wiring to backend
              >
                Send Message
              </button>
              <p className="text-xs text-gray-500 text-center">
                This is a demo form. Connect to Formspree / Google Forms to receive submissions.
              </p>
            </form>
          </div>
        </div>

        {/* Map */}
<div className="mt-12 rounded-2xl overflow-hidden border" style={{ borderColor: BLUE_TINT }}>
  <iframe
    title="Growing Kids Preschool Location"
    width="100%"
    height="360"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7240306000153!2d72.83378227503417!3d21.123565780549615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0515da0a79679%3A0xbfedb29ede360f97!2sGrowing%20Kids%20Pre-Primary%20School%20%26%20Day%20Care!5e0!3m2!1sen!2sin!4v1761294250079!5m2!1sen!2sin"
  />
</div>
      </div>
    </section>
  );
}

/* ---------- tiny UI helpers ---------- */
function Card({ children }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: BLUE_TINT }}>
      {children}
    </div>
  );
}

function IconBox({ children }) {
  return (
    <div
      className="mt-1 h-10 w-10 flex items-center justify-center rounded-lg"
      style={{ backgroundColor: BLUE_TINT, color: LOGO_BLUE }}
    >
      {children}
    </div>
  );
}

function SocialBtn({ children, ariaLabel }) {
  return (
    <a
      href="#"
      aria-label={ariaLabel}
      className="h-9 w-9 rounded-full flex items-center justify-center border transition hover:opacity-90"
      style={{ borderColor: BLUE_TINT, color: LOGO_BLUE }}
    >
      {children}
    </a>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
      style={{ borderColor: BLUE_TINT, boxShadow: "none" }}
    />
  );
}

function Select(props) {
  return (
    <select
      {...props}
      className="w-full rounded-xl border px-4 py-3 text-sm text-gray-600 outline-none focus:ring-2"
      style={{ borderColor: BLUE_TINT }}
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
      style={{ borderColor: BLUE_TINT }}
    />
  );
}
