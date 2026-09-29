import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { About, ProfessionalRecognition } from "@/components/sections";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 bg-white pt-24">
        <About />
        <ProfessionalRecognition />
      </main>
      <Footer />
    </>
  );
}
