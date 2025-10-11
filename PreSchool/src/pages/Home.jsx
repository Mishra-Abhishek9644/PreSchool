// Home.jsx
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import ProgramsTeaser from "../components/ProgramsTeaser";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTAsection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Highlights />
      <ProgramsTeaser />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
