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
    title: "The E-Enhancement Center",
    image: "./enhancement.jpeg",
    description: "Welcome to The e-Enhancement Center, an internationally recognized Information Communication Technology (ICT) consultancy firm, providing services to organizations in the government, public networks, corporate sectors and International NGOs.",
    tech: ["WordPress"],
    live: "https://e-enhancement.com/",
  },
  {
    title: "Lite Coin Sourcing",
    image: "./litecoin.jpeg",
    description: "Your trusted partner in China-Africa trade. We help African businesses source quality products from verified Chinese manufacturers with complete quality assurance and logistics support.",
    tech: ["Django", "DRF", "React", "SQL", "OAuth2", "Swagger"],
    live: "https://litecoin.co.ke/",
  },
  {
    title: "Utensilia Home Mart",
    image: "./utensilia.jpeg",
    description: "Utensilia is a center for stylish, durable, and affordable kitchenware to make every cooking experience a joy. From everyday essentials to specialty tools, our products are designed to help home chefs create with confidence and flair.",
    tech: ["Django", "Bootstrap", "SQL", "JWT"],
    live: "https://utensiliahomemart.co.ke/",
  },
];

const ProjectSection = () => {
  return (
    <section className="my-12 sm:my-20">
      <h2 className="text-2xl sm:text-3xl font-semibold text-primary dark:text-white text-center mb-6 sm:mb-8">
        Featured Projects
      </h2>
      {/* <h1 className="text-3xl text-center font-extrabold">Comming Soon</h1> */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 justify-center">
        {projects.map((project) => (
          <Dialog key={project.title}>
            <DialogTrigger asChild>
              <div className="cursor-pointer flex flex-col items-center bg-white dark:bg-[#232437] rounded-xl shadow p-5 sm:p-6 border border-gray-200 dark:border-[#323247] hover:shadow-lg transition">
                <div className="w-full h-40 sm:h-48 overflow-hidden rounded-md mb-4">
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
