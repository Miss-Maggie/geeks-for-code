
import { Code2, Globe, Layers3, Database } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const services = [
  {
    icon: <Globe size={34} />,
    title: "Website Creation",
    desc: "Custom, modern websites tailored to your needs—portfolio, blog, e-commerce and more.",
  },
  {
    icon: <Code2 size={34} />,
    title: "Web & App Development",
    desc: "Full-stack app development: landing pages, business apps, learning tools, and more.",
  },
  {
    icon: <Layers3 size={34} />,
    title: "UI/UX & Design",
    desc: "Beautiful, user-friendly interfaces and experiences for any digital project.",
  },
  {
    icon: <Database size={34} />,
    title: "Automation & Integrations",
    desc: "Connect APIs, automate tasks, and streamline your workflow using the latest tech.",
  },
];

const scrollToContact = () => {
  // Try to scroll to contact form if on home
  const contact = document.getElementById("contact");
  if (contact) {
    contact.scrollIntoView({ behavior: "smooth" });
  } else {
    // Navigate to home with hash
    window.location.href = "/contact";
  }
};

const Projects = () => (
  <>
   <Navbar />
    <main className="min-h-screen bg-[#edeef5] dark:bg-[#191b24] pt-9 pb-16 px-4">
    <div className="max-w-3xl mx-auto text-center mb-14">
      <h1 className="text-4xl font-extrabold text-primary dark:text-white mb-3">Our Projects</h1>
      <p className="text-lg text-muted-foreground mb-6">
        <span className="font-semibold text-primary dark:text-white">Geeks for Code Portfolio</span>
      </p>
    </div>
     <h1 className="text-center text-6xl">Comming Soon </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-9 max-w-5xl mx-auto">

      {/* {services.map((service) => (
        <div
          key={service.title}
          className="bg-white dark:bg-[#232437] rounded-xl border border-gray-100 dark:border-[#323247] shadow-md p-8 flex flex-col items-center hover:shadow-lg transition"
        >
          <div className="text-primary dark:text-white">{service.icon}</div>
          <h3 className="mt-4 mb-2 text-2xl font-bold text-primary dark:text-white">{service.title}</h3>
          <p className="text-muted-foreground text-center">{service.desc}</p>
        </div>
      ))} */}
    </div>
    <div className="text-center mt-14">
      <button
        onClick={scrollToContact}
        className="inline-block px-8 py-3 rounded-lg font-medium bg-primary text-primary-foreground text-lg shadow-lg story-link hover-scale transition-all focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        style={{ textDecoration: 'none' }}
      >
        Request Help Now
      </button>
    </div>
  </main>

  <Footer />
  </>

);

export default Projects;
