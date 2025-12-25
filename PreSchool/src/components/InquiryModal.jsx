import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function InquiryModal() {
  const [open, setOpen] = useState(false);
  const BLUE_TINT = "#0778BE";

  useEffect(() => {
    // Open modal when site loads
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="relative z-10 w-[92%] max-w-xl rounded-2xl bg-white p-6 sm:p-8 shadow-2xl animate-fadeUpAdmission">
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Dear Parents,
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Thank you for your overwhelming response. We would like to inform
            you that the registration process for the{" "}
            <span className="font-semibold" 
              style={{color:BLUE_TINT}}
            >

              Academic Session 2026–27
            </span>{" "}
            is now closed.
          </p>

          <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            However, interested parents may still fill out the Inquiry Form to
            stay connected with us and receive future updates and
            opportunities.
          </p>

          <p className="mt-4 font-medium text-gray-800">
            Kindly click on the link below to fill the Inquiry form:
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
           <Link 
            onClick={() => setOpen(false)}
              to="/admission"
              className="rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 "
               style={{ backgroundColor: BLUE_TINT }}
            >
              Inquire Now
              <br />
              <span className="text-xs font-normal">
                (Nursery, Jr. KG & Sr. KG)
              </span>
            </Link>

           
          </div>
        </div>
      </div>
    </div>
  );
}
