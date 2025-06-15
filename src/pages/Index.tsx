
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BackToHomeButton from "@/components/BackToHomeButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <HeroSection />
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <WhatWeDoSection />
        <TeamSection />
        <ContactForm />
      </div>
      <Footer />
      <BackToHomeButton />
    </div>
  );
};

export default Index;
