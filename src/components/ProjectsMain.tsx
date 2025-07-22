"use client";

import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Features Collaboration Platform",
    image: "./features.jpeg",
    description:
      "Features is a real-time collaboration tool with a sleek interface. Merging all the features from Slack, Trello, and Discord, Features is set to make collaboration easy and project management simple. Including also personal features and goal setting",
    tech: ["React", "Express", "JWT", "PostgreSQL"],
    live: "https://features-lime.vercel.app/",
  },
  {
    title: "The E-Enhancement Center",
    image: "./enhancement.jpeg",
    description:
      "Welcome to The e-Enhancement Center, an internationally recognized Information Communication Technology (ICT) consultancy firm, providing services to organizations in the government, public networks, corporate sectors and International NGOs.",
    tech: ["WordPress"],
    live: "https://e-enhancement.com/",
  },
  {
    title: "Lite Coin Sourcing",
    image: "./litecoin.jpeg",
    description:
      "Your trusted partner in China-Africa trade. We help African businesses source quality products from verified Chinese manufacturers with complete quality assurance and logistics support.",
    tech: ["Django", "DRF", "React", "SQL", "OAuth2", "Swagger"],
    live: "https://litecoin.co.ke/",
  },
  {
    title: "Utensilia Home Mart",
    image: "./utensilia.jpeg",
    description:
      "Utensilia is a center for stylish, durable, and affordable kitchenware to make every cooking experience a joy. From everyday essentials to specialty tools, our products are designed to help home chefs create with confidence and flair.",
    tech: ["Django", "Bootstrap", "SQL", "JWT"],
    live: "https://utensiliahomemart.co.ke/",
  },
  {
    title: "Zote Ziko Africa",
    image: "./zoteziko.jpeg",
    description:
      "Zote ziko is an e-commerce platform for all items but electronics focused in Africa bridging the gap between people and access to these items and dedicated to providing people with the latest updates on gadgets, mobile devices, and tech trends that matter to people.",
    tech: ["Django", "Bootstrap", "SQL", "JWT"],
    live: "https://zotezikoafrica.com/",
  },
  {
    title: "Max Digital PR",
    image: "./maxdigital.jpeg",
    description:
      "Max Digital PR is a Strategic PR and publicity solutions for top-level, mid-level, and startup companies across diverse industries.",
    tech: ["React", "Django", "DRF", "JWT"],
    live: "https://maxdigitalpr.com/",
  },
  {
    title: "Caribbean Shoes",
    image: "./caribbean.jpeg",
    description:
      "Caribbean Shoes is an e-commerce platform for classic men's apparel. If you are looking for a place to get your new style kicking, this is just the place",
    tech: ["Django", "Bootstrap", "SQL", "JWT", "HTML", "CSS"],
    live: "https://caribbeanshoe.co.ke/",
  },
  {
    title: "CodeVista",
    image: "./codevista.jpeg",
    description:
      "Code Vista Limited is your trusted partner for quality products and exceptional service. Committed to delivering the best shopping experience.",
    tech: ["React", "Django", "DRF", "JWT"],

    live: "https://codevista.co.ke/",
  },
];

const ProjectSection = () => {
  return (
    <section className="my-12 sm:my-20">
      {/* <h1 className="text-3xl text-center font-extrabold">Comming Soon</h1> */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-center">
        {projects.map((project) => (
          <Dialog key={project.title}>
            <DialogTrigger asChild>
              <div className="cursor-pointer flex flex-col items-center bg-white dark:bg-[#232437] rounded-xl shadow p-1 sm:p-4 border border-gray-200 dark:border-[#323247] hover:shadow-lg transition">
                <div className="w-full overflow-hidden rounded-md mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-white text-center">
                  {project.title}
                </h3>
              </div>
            </DialogTrigger>

            <DialogContent className="max-w-md sm:max-w-xl bg-white dark:bg-[#1a1a1a]">
              <DialogHeader>
                <DialogTitle className="text-center text-xl sm:text-2xl text-primary dark:text-white">
                  {project.title}
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center mt-4 gap-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-h-64 rounded-lg object-cover"
                />
                <p className="text-sm text-muted-foreground text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary dark:text-white dark:bg-white/10 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm text-primary dark:text-white font-medium hover:underline"
                >
                  View Live <ExternalLink size={16} />
                </a>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
