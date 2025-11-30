// Gallery.jsx — minimal, classy gallery that works with few images
import { Link } from "react-router-dom";
const LOGO_BLUE = "#0778BE";
const BLUE_TINT  = "#D7E6F3";
const BLUE_LIGHT = "#A7CDE7";
import pooja from '../assets/pooja.jpeg'
import rose from '../assets/rose.jpeg'
import kids from '../assets/kids.jpeg'
import kids2 from '../assets/kids2.jpeg'
import santa from '../assets/santa.jpeg'
import santaa from '../assets/santa2.jpeg'

// If you have local images, import them and add below.
// import img1 from "../assets/gallery/classroom1.jpg";
// import img2 from "../assets/gallery/activity1.jpg";
// import img3 from "../assets/gallery/daycare1.jpg";

export default function Gallery() {
  // Use your local imports if available; otherwise these safe stock placeholders will show.
  const images = [pooja,rose,kids,kids2,santa,santaa];

  return (
    <section className="relative bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            School <span style={{ color: LOGO_BLUE }}>Gallery</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            A quick peek at our classrooms, activities and daycare spaces.
            We’re still adding more photos — best way is to book a short visit!
          </p>
        </div>

        {/* Grid (works even with 2–3 images) */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <figure
              key={i}
              className="relative overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md transition"
              style={{ borderColor: BLUE_TINT }}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              
            </figure>
          ))}
        </div>

        {/* If you truly have 0 images, you can show a friendly placeholder */}
        {images.length === 0 && (
          <div
            className="mt-10 rounded-2xl border p-6 text-center text-sm text-gray-600"
            style={{ borderColor: BLUE_TINT, backgroundColor: "#F9FBFD" }}
          >
            We’re preparing photos. In the meantime,{" "}
            <Link to="/contact" className="font-semibold" style={{ color: LOGO_BLUE }}>
              book a quick campus visit
            </Link>{" "}
            and see our spaces in person.
          </div>
        )}

        {/* CTA row */}
        <div
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border p-6 text-center md:text-left shadow-sm"
          style={{ borderColor: BLUE_TINT, backgroundColor: "#F9FBFD" }}
        >
          <p className="text-gray-700">
            Want to see classrooms and daycare live? We’d love to host you for a short tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="rounded-xl px-5 py-2.5 font-semibold text-white shadow"
              style={{ backgroundColor: LOGO_BLUE }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#055A8F")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = LOGO_BLUE)}
            >
              Book a Visit
            </Link>
            <a
              href="https://www.instagram.com/growingkids_official/?__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-5 py-2.5 font-semibold"
              style={{ border: `1px solid ${BLUE_LIGHT}`, color: LOGO_BLUE, backgroundColor: "white" }}
            >
              See Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
