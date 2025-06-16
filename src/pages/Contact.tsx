
import HeroSection from "@/components/HeroSectionContact";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#edeef5] dark:bg-[#191b24] flex flex-col">
      <Navbar />
      <HeroSection />
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;