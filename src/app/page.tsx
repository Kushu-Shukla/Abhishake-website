import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Hero, 
  CredibilityBar, 
  BusinessProblem, 
  Organizations, 
  Professionals, 
  Expertise, 
  HowIWork, 
  SelectedWork, 
  AiCx, 
  Leadership, 
  ProfessionalRecognition, 
  Author, 
  Insights, 
  WhyAbhishek, 
  WorkWithAbhishek, 
  Contact 
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1 bg-white">
        <Hero />
        <CredibilityBar />
        <BusinessProblem />
        <Organizations />
        <Professionals />
        <Expertise />
        <HowIWork />
        <SelectedWork />
        <AiCx />
        <Leadership />
        <ProfessionalRecognition />
        <Author />
        <Insights />
        <WhyAbhishek />
        <WorkWithAbhishek />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
