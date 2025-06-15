
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
      {/* Mobile sidebar trigger button */}
      <div className="md:hidden fixed top-3 left-3 z-50">
        <AppSidebar />
      </div>
      {/* Top navbar (hidden on mobile) */}
      <Navbar />
      <div className="flex flex-col min-h-screen bg-background">
        <main className="flex-1 w-full max-w-7xl mx-auto px-2 xs:px-4 sm:px-8 pt-4 md:pt-0">
          <HeroSection />
          <WhatWeDoSection />
          <TeamSection />
          <ContactForm />
        </main>
        <Footer />
        <BackToHomeButton />
      </div>
    </SidebarProvider>
  );
};

export default Index;
