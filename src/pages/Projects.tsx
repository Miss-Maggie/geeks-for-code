
import { Code2, Globe, Layers3, Database } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectsMain";
import { Link } from "react-router-dom";
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


const Projects = () => (
  <>
   <Navbar />
    <main className="min-h-screen bg-[#edeef5] dark:bg-[#191b24] pt-9 pb-16 px-4">
    <div className="max-w-3xl mx-auto text-center mb-14">
      <h1 className="text-4xl font-extrabold text-primary dark:text-white mb-3">Our Projects</h1>
    </div>
    <ProjectSection/>
    <div className="text-center mt-14">
      <Link
        to='/contact'
        className="inline-block px-8 py-3 rounded-lg font-medium bg-primary text-primary-foreground text-lg shadow-lg story-link hover-scale transition-all focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        style={{ textDecoration: 'none' }}
      >
        Reach Out
      </Link>
    </div>
  </main>

  <Footer />
  </>

);

export default Projects;
