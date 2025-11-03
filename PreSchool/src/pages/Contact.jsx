// Contact.jsx — contact info + embedded Google Form + map (UI only)
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";
const BLUE_LIGHT = "#A7CDE7";
const BLUE_TINT  = "#D7E6F3";

// Your Google Form (embedded)
const CONTACT_FORM_EMBED = "https://docs.google.com/forms/d/e/1FAIpQLSfkMCvACO5o9TPhJmajztCp7iryFXyv5s5YVOZAqhtAVYF1NQ/viewform?embedded=true";
// Non-embedded URL (for fallback/new-tab)
const CONTACT_FORM_URL = CONTACT_FORM_EMBED.replace("?embedded=true", "");

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

        {/* Info + Form (grid) */}
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
                <SocialBtn ariaLabel="Facebook" href="https://www.facebook.com/profile.php?id=61572252436482">
                  <FaFacebookF />
                </SocialBtn>
                <SocialBtn ariaLabel="Instagram" href="https://www.instagram.com/growingkids_official/?__pwa=1">
                  <FaInstagram />
                </SocialBtn>
                <SocialBtn ariaLabel="YouTube" href="#">
                  <FaYoutube />
                </SocialBtn>
              </div>
            </Card>
          </div>

          {/* Right: Embedded Google Form */}
          <div>
            <div className="rounded-2xl border bg-white p-0 shadow-sm overflow-hidden" style={{ borderColor: BLUE_TINT }}>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">Send us a message</h2>
                <p className="text-sm text-gray-600 mt-1">Use the form below — we’ll get back to you soon.</p>
              </div>

              {/* Embed iframe — responsive heights for devices */}
              <div className="w-full">
                <iframe
                  title="Growing Kids Contact Form"
                  src={CONTACT_FORM_EMBED}
                  loading="lazy"
                  className="w-full h-[650px] sm:h-[800px] md:h-[950px] lg:h-[1000px] border-0"
                  aria-label="Contact form"
                />
              </div>

              {/* Fallback CTA */}
              <div className="p-6 text-center">
                <p className="text-sm text-gray-600 mb-3">If the form doesn't load for you, open it in a new tab:</p>
                <a
                  href={CONTACT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl bg-[#0778BE] px-6 py-3 text-white font-semibold shadow hover:bg-[#055A8F] transition"
                >
                  Open Contact Form
                </a>
              </div>
            </div>
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

function SocialBtn({ children, ariaLabel, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="h-9 w-9 rounded-full flex items-center justify-center border transition hover:opacity-90"
      style={{ borderColor: BLUE_TINT, color: LOGO_BLUE }}
    >
      {children}
    </a>
  );
}
