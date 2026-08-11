import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Hero, About, Work, Process, Expertise, Resume, Contact } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Work />
        <Process />
        <Expertise />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
