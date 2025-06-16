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
    title: "Real Estate Platform",
    image: "./project.jpg",
    description: "A real estate listing platform that allows agents and buyers to interact, manage property data, and perform secure transactions.",
    tech: ["Next.js", "Tailwind", "PostgreSQL", "Supabase", "Prisma"],
    live: "https://makao-demo.vercel.app",
  },
  {
    title: "HealthSync Medical System",
    image: "./project.jpg",
    description: "Modular hospital appointment and record system with real-time notifications, role-based access, and OAuth 2.0 authentication.",
    tech: ["Django", "DRF", "PostgreSQL", "OAuth2", "Swagger"],
    live: "https://healthsync-demo.vercel.app",
  },
  {
    title: "Shopverse E-Commerce API",
    image: "./project.jpg",
    description: "A RESTful backend for a modern e-commerce platform with cart, wishlist, payment integrations, and admin dashboard.",
    tech: ["Express", "TypeScript", "MongoDB", "JWT", "Stripe"],
    live: "https://shopverse.vercel.app",
  },
];

const ProjectSection = () => {
  return (
    <section className="my-12 sm:my-20">
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
