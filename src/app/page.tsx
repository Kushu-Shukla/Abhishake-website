import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Hero, About, Work, Process, Expertise, Resume, Books, Contact, LogoMarquee, CaseStudies, Recognitions } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <LogoMarquee />
        <About />
        <Work />
        <CaseStudies />
        <Recognitions />
        <Process />
        <Expertise />
        <Resume />
        <Books />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
