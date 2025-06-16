
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#edeef5] dark:bg-[#191b24] flex flex-col">
      <Navbar />
      <HeroSection />
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <WhatWeDoSection />
        <TeamSection />
        <ProjectSection/>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
