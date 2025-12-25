import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const LOGO_BLUE = "#0778BE";
const BLUE_TINT = "#D7E6F3";
const BLUE_LIGHT = "#A7CDE7";
const LOGO_YELLOW = "#FACC15";

// Local default images
import pooja from "../assets/pooja.jpeg";
import rose from "../assets/rose.jpeg";
import kids from "../assets/kids.jpeg";
import kids2 from "../assets/kids2.jpeg";
import santa from "../assets/santa.jpeg";
import santaa from "../assets/santa2.jpeg";

// 🔐 ADMIN PASSWORD
const ADMIN_PASSWORD = "admin123";

export default function Gallery() {
  const defaultImages = [pooja, rose, kids, kids2, santa, santaa];

  const [images, setImages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [preview, setPreview] = useState(null);

  /* ================= LOAD FROM STORAGE ================= */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("galleryImages"));
    setImages(stored?.length ? stored : defaultImages);
  }, []);

  /* ================= SAVE TO STORAGE ================= */
  useEffect(() => {
    if (images.length) {
      localStorage.setItem("galleryImages", JSON.stringify(images));
    }
  }, [images]);

  /* ================= ADMIN LOGIN ================= */
  const handleAdminLogin = () => {
    const password = prompt("Enter admin password:");
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      alert("Admin mode enabled ✅");
    } else {
      alert("Incorrect password ❌");
    }
  };

  /* ================= ADD IMAGE ================= */
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Please upload an image under 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImages((prev) => [reader.result, ...prev]);
    };
    reader.readAsDataURL(file);

    e.target.value = "";
  };

  /* ================= DELETE IMAGE ================= */
  const handleDelete = (index) => {
    if (!window.confirm("Delete this image?")) return;
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 py-14">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto animate-fadeUpGallery">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            School{" "}
            <span className="relative inline-block">
              <span style={{ color: LOGO_BLUE }}>Gallery</span>
              
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            A glimpse of our classrooms, activities and daycare moments.
          </p>

          {/* Admin Button */}
          <button
            onClick={
              isAdmin
                ? () => document.getElementById("galleryUpload").click()
                : handleAdminLogin
            }
            className="mt-4 text-xs underline opacity-40 hover:opacity-70"
          >
            {isAdmin ? "Admin: Add Photo" : "Admin Login"}
          </button>

          <input
            id="galleryUpload"
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileUpload}
          />
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fadeUpGallery">
          {images.map((src, i) => (
            <figure
              key={i}
              className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              style={{ borderColor: LOGO_YELLOW }}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="h-56 w-full object-cover cursor-pointer hover-zoom"
                loading="lazy"
                onClick={() => setPreview(src)}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />

              {/* Delete (Admin only) */}
              {isAdmin && (
                <button
                  onClick={() => handleDelete(i)}
                  className="absolute top-3 right-3 hidden group-hover:block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-red-600 shadow hover:bg-red-50"
                >
                  Delete
                </button>
              )}
            </figure>
          ))}
        </div>

        {/* Empty State */}
        {images.length === 0 && (
          <div
            className="mt-12 rounded-2xl border p-6 text-center text-sm text-gray-600 animate-fadeUpGallery"
            style={{ borderColor: LOGO_YELLOW, backgroundColor: "#F9FBFD" }}
          >
            We’re preparing photos.{" "}
            <Link to="/contact" className="font-semibold" style={{ color: LOGO_BLUE }}>
              Book a campus visit
            </Link>{" "}
            to see us live.
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border p-6 shadow-sm animate-yellowGlowSoft"
          style={{ borderColor: LOGO_YELLOW, backgroundColor: "#F9FBFD" }}
        >
          <p className="text-gray-700">
            Want to visit our classrooms and daycare spaces in person?
          </p>
          <div className="flex gap-3">
            <Link
              to="/contact"
              className="rounded-xl px-6 py-3 font-semibold text-white transition hover:-translate-y-1"
              style={{ backgroundColor: LOGO_BLUE, border: `2px solid ${LOGO_YELLOW}` }}
            >
              Book a Visit
            </Link>
            <a
              href="https://www.instagram.com/growingkids_official/?__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-6 py-3 font-semibold transition hover:-translate-y-1"
              style={{ border: `2px solid ${LOGO_YELLOW}`, color: LOGO_BLUE }}
            >
              See Instagram
            </a>
          </div>
        </div>

        {/* Lightbox Preview */}
        {preview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <button
              className="absolute top-6 right-6 text-white text-2xl"
              onClick={() => setPreview(null)}
            >
              ✕
            </button>
            <img
              src={preview}
              alt="Preview"
              className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl border"
              style={{ borderColor: LOGO_YELLOW }}
            />
          </div>
        )}

      </div>
    </section>
  );
}
