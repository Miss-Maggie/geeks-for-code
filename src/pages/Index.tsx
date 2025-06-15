
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BackToHomeButton from "@/components/BackToHomeButton";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <HeroSection />
          <div className="flex-1 w-full max-w-7xl mx-auto px-8">
            <WhatWeDoSection />
            <TeamSection />
            <ContactForm />
          </div>
          <Footer />
          <BackToHomeButton />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
