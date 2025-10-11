// Testimonials.jsx — JS + Tailwind, no external libs
export default function Testimonials() {
  const quotes = [
    {
      name: "Priya S.",
      role: "Parent of Jr KG",
      text:
        "My child loves going to school now. The teachers are caring and the activities are so creative!",
    },
    {
      name: "Rahul & Meera",
      role: "Playgroup Parents",
      text:
        "Separation was handled so gently. We got regular updates and felt truly involved.",
    },
    {
      name: "Aisha K.",
      role: "Sr KG Parent",
      text:
        "We’ve seen big improvements in confidence and language. The environment is bright and safe.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-orange-50/40">
      {/* background accent */}
      <div aria-hidden className="pointer-events-none absolute -top-16 right-10 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="relative container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">What Parents Say</h2>
          <p className="mt-3 text-gray-600">Real words from our school community.</p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-orange-100" />
                <figcaption>
                  <p className="font-semibold text-gray-900">{q.name}</p>
                  <p className="text-xs text-gray-500">{q.role}</p>
                </figcaption>
              </div>
              <blockquote className="mt-4 text-gray-700 text-sm leading-relaxed">“{q.text}”</blockquote>
              <div className="mt-4 h-1 w-10 rounded-full bg-orange-200" />
            </figure>
          ))}
        </div>

        {/* Small CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-orange-300 bg-white/60 p-5 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-700">Ready to know more or see our classrooms?</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/about" className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-2.5 text-white text-sm font-semibold hover:bg-orange-600">About Us</a>
            <a href="/contact" className="inline-flex items-center justify-center rounded-xl border border-orange-300 bg-white px-5 py-2.5 text-sm font-semibold text-orange-600 hover:bg-orange-50">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}