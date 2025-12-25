import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const LOGO_BLUE = "#0778BE";
const LOGO_BLUE_DARK = "#055A8F";
const BLUE_LIGHT = "#A7CDE7";
const BLUE_TINT = "#D7E6F3";
const LOGO_YELLOW = "#FACC15";

const CONTACT_FORM_EMBED =
  "https://docs.google.com/forms/d/e/1FAIpQLSfkMCvACO5o9TPhJmajztCp7iryFXyv5s5YVOZAqhtAVYF1NQ/viewform?embedded=true";
const CONTACT_FORM_URL = CONTACT_FORM_EMBED.replace("?embedded=true", "");

export default function Contact() {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* Soft background blob */}
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: BLUE_TINT }}
      />

      <div className="relative container mx-auto max-w-7xl px-4 py-14">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto animate-fadeUpContact">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Contact{" "}
            <span className="relative inline-block">
              <span style={{ color: LOGO_BLUE }}>Growing Kids</span>
             
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            We’re happy to answer questions about admissions, daycare timings,
            and programs.
          </p>
        </div>

        {/* Info + Form */}
        <div className="mt-14 grid lg:grid-cols-2 gap-10 animate-fadeUpContact">

          {/* Left: Info Cards */}
          <div className="space-y-6">
            <InfoCard icon={<FaMapMarkerAlt />} title="Address">
              <p className="text-sm text-gray-600">
                Plot No - A/80 , Sai Dipak Row House Residency, Nr. Vinayak Row
                House Bhestan - 395023.
              </p>
              <a
                href="https://maps.google.com/?q=Plot+No+-+A%2F80+Sai+Dipak+Row+House+Residency"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm font-semibold"
                style={{ color: LOGO_BLUE }}
              >
                Open in Google Maps →
              </a>
            </InfoCard>

            <InfoCard icon={<FaPhoneAlt />} title="Phone">
              <p className="text-sm text-gray-600">
                <a href="tel:+919328194803" className="hover:underline">
                  +91 9328194803
                </a>
              </p>
              <div className="mt-3 flex gap-3">
                <MiniBtn href="https://wa.me/919328194803">
                  <FaWhatsapp /> WhatsApp
                </MiniBtn>
                <MiniBtn href="mailto:info@growingkids.example">
                  <FaEnvelope /> Email
                </MiniBtn>
              </div>
            </InfoCard>

            <InfoCard icon={<FaClock />} title="Hours">
              <p className="text-sm text-gray-600">
                7:30am – 1:00pm & 3:00pm – 6:00pm
              </p>
            </InfoCard>

            <InfoCard title="Social">
              <div className="mt-2 flex gap-3">
                <SocialBtn href="https://www.facebook.com/profile.php?id=61572252436482">
                  <FaFacebookF />
                </SocialBtn>
                <SocialBtn href="https://www.instagram.com/growingkids_official/?__pwa=1">
                  <FaInstagram />
                </SocialBtn>
              </div>
            </InfoCard>
          </div>

          {/* Right: Form */}
          <div
            className="rounded-2xl border bg-white shadow-sm overflow-hidden animate-yellowGlowSoft"
            style={{ borderColor: LOGO_YELLOW }}
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">
                Send us a message
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Use the form below — we’ll get back to you soon.
              </p>
            </div>

            <iframe
              title="Growing Kids Contact Form"
              src={CONTACT_FORM_EMBED}
              loading="lazy"
              className="w-full h-[650px] sm:h-[800px] md:h-[950px] lg:h-[1000px] border-0"
              aria-label="Contact form"
            />

            <div className="p-6 text-center">
              <p className="text-sm text-gray-600 mb-3">
                If the form doesn’t load, open it in a new tab:
              </p>
              <a
                href={CONTACT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl px-6 py-3 font-semibold text-white shadow transition hover:-translate-y-1"
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
                Open Contact Form
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div
          className="mt-14 rounded-2xl overflow-hidden border animate-fadeUpContact"
          style={{ borderColor: LOGO_YELLOW }}
        >
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

/* ---------- UI helpers ---------- */

function InfoCard({ icon, title, children }) {
  return (
    <div
      className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md animate-fadeUpContact"
      style={{ borderColor: LOGO_YELLOW }}
    >
      {icon && (
        <div
          className="mb-3 h-10 w-10 flex items-center justify-center rounded-lg animate-iconPulse"
          style={{ backgroundColor: BLUE_TINT, color: LOGO_BLUE }}
        >
          {icon}
        </div>
      )}
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function MiniBtn({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm transition hover:-translate-y-0.5"
      style={{ borderColor: LOGO_YELLOW, color: LOGO_BLUE }}
    >
      {children}
    </a>
  );
}

function SocialBtn({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 flex items-center justify-center rounded-full transition hover:-translate-y-1 animate-floatSocial"
      style={{
        backgroundColor: LOGO_BLUE,
        color: "white",
        border: `2px solid ${LOGO_YELLOW}`,
      }}
    >
      {children}
    </a>
  );
}
