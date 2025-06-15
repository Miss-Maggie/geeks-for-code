
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
      {/* Navbar: show only on desktop */}
      <div className="hidden md:block w-full">
        <Navbar />
      </div>
      {/* Sidebar: show only on mobile */}
      <div className="block md:hidden fixed z-[60] top-0 left-0">
        <AppSidebar />
      </div>
      <div className="flex flex-col min-h-screen bg-background">
        <HeroSection />
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8">
          <WhatWeDoSection />
          <TeamSection />
          <ContactForm />
        </div>
        <Footer />
        <BackToHomeButton />
      </div>
    </SidebarProvider>
  );
};

export default Index;
