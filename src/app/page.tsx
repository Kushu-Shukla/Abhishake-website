import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Hero, 
  CredibilityStrip, 
  AudiencePathways, 
  WhyItMatters, 
  OrganizationSolutions, 
  ProfessionalServices, 
  TalentHiring, 
  Methodology, 
  AIPhilosophy, 
  LeadershipArchitecture, 
  CaseStudies, 
  Testimonials, 
  ResourceHub, 
  PublishedBook, 
  Insights, 
  Credentials,
  Collaborations 
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <CredibilityStrip />
        <AudiencePathways />
        <WhyItMatters />
        <OrganizationSolutions />
        <ProfessionalServices />
        <TalentHiring />
        <Methodology />
        <AIPhilosophy />
        <LeadershipArchitecture />
        <CaseStudies />
        <Testimonials />
        <ResourceHub />
        <PublishedBook />
        <Insights />
        <Credentials />
        <Collaborations />
      </main>
      <Footer />
    </>
  );
}
