"use client";

import { useState } from "react";
import { Crown, Github, Linkedin, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const members = [
  {
    salutation: "",
    name: "Ephesians Lewis",
    role: "Leader",
    skill: "Senior Software Engineer",
    profile: "./lewis.png",
    github: "https://github.com/quiesscent",
    linkedin: "https://www.linkedin.com/in/ephesians-lewis-02992a260/",
    email: "mailto:ephesianslewis@gmail.com",
  },
  {
    salutation: "",
    name: "Vincent Odhiambo",
    skill: "Operations Engineer",
    profile: "./male.jpeg",
    github: "https://github.com/vincent",
    linkedin: "https://linkedin.com/in/vincent",
    email: "mailto:vincent@example.com",
  },
  {
    salutation: "",
    name: "Magdaline Muthui",
    skill: "Frontend Engineer",
    profile: "./maggie.jpg",
    github: "https://github.com/Miss-Maggie",
    linkedin: "https://linkedin.com/in/magdaline",
    email: "mailto:magdalinemutave001@gmail.com",
  },
  {
    salutation: "",
    name: "Protas Junior",
    skill: "FullStack Engineer",
    profile: "./male.jpeg",
    github: "https://github.com/protas",
    linkedin: "https://linkedin.com/in/protas",
    email: "mailto:protas@example.com",
  },
  {
    salutation: "",
    name: "Juliet Marcs",
    skill: "Frontend Engineer",
    profile: "./female.jpeg",
    github: "https://github.com/juliet",
    linkedin: "https://linkedin.com/in/juliet",
    email: "mailto:juliet@example.com",
  },
  {
    salutation: "",
    name: "Hazzel Mochoge",
    skill: "Cloud Engineer",
    profile: "./hazzel.jpeg",
    github: "https://github.com/hazzel",
    linkedin: "https://linkedin.com/in/hazzel",
    email: "mailto:hazzel@example.com",
  },
  {
    salutation: "",
    name: "Mary Wangari",
    skill: "Frontend Engineer",
    profile: "./mary.jpeg",
    github: "https://github.com/mary",
    linkedin: "https://linkedin.com/in/mary",
    email: "mailto:mary@example.com",
  },
  {
    salutation: "",
    name: "Abel Sifuna",
    skill: "FullStack Engineer",
    profile: "./abel.jpeg",
    github: "https://github.com/abel",
    linkedin: "https://linkedin.com/in/abel",
    email: "mailto:abel@example.com",
  },
  {
    salutation: "",
    name: "Collins Maina",
    skill: "Frontend Engineer",
    profile: "./male.jpeg",
    github: "https://github.com/collins",
    linkedin: "https://linkedin.com/in/collins",
    email: "mailto:collins@example.com",
  },
  {
    salutation: "",
    name: "Yvonna Shiala",
    skill: "Frontend Engineer",
    profile: "./shiala.jpeg",
    github: "https://github.com/yvonna",
    linkedin: "https://linkedin.com/in/yvonna",
    email: "mailto:yvonna@example.com",
  },
];

const TeamSection = () => {
  return (
    <section className="my-12 sm:my-20">
      <h2 className="text-2xl sm:text-3xl font-semibold text-primary dark:text-white text-center mb-6 sm:mb-8">
        Meet the Team
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 justify-center">
        {members.map((member) => (
          <Dialog key={member.name}>
            <DialogTrigger asChild>
              <div
                className={`cursor-pointer flex flex-col items-center bg-white dark:bg-[#232437] rounded-xl shadow p-5 sm:p-6 border ${
                  member.role === "Leader"
                    ? "border-2 border-primary dark:border-white scale-105"
                    : "border-gray-200 dark:border-[#323247]"
                } hover:shadow-lg transition`}
              >
                <div className="bg-primary dark:bg-secondary text-white rounded-full w-28 h-28 sm:w-28 sm:h-28 flex items-center justify-center mb-3 text-2xl font-bold shadow-sm overflow-hidden">
                  <img
                    src={member.profile}
                    className="rounded-full w-28 h-28 object-cover"
                    alt={member.name}
                  />
                </div>
                <span className="font-medium text-base sm:text-lg mb-1 text-primary dark:text-white text-center">
                  {member.salutation} {member.name}
                </span>
                {member.role === "Leader" ? (
                  <span className="flex items-center gap-1 text-xs sm:text-sm text-primary dark:text-white font-semibold uppercase">
                    <Crown size={16} /> Leader
                  </span>
                ) : (
                  <span className="text-xs text-primary dark:text-gray-300 font-semibold uppercase">
                    Member
                  </span>
                )}
                <span className="text-xs text-primary dark:text-gray-300">
                  {member.skill}
                </span>
              </div>
            </DialogTrigger>

            <DialogContent className="max-w-sm sm:max-w-md bg-white dark:bg-[#1a1a1a]">
              <DialogHeader>
                <DialogTitle className="text-center text-xl sm:text-2xl text-primary dark:text-white">
                  {member.name}
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center mt-4 gap-2">
                <img
                  src={member.profile}
                  alt={member.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-primary"
                />
                <p className="text-sm font-semibold text-muted-foreground">
                  {member.role || "Member"} — {member.skill}
                </p>
                <div className="flex gap-4 mt-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="text-primary dark:text-white hover:scale-110 transition" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="text-primary dark:text-white hover:scale-110 transition" />
                  </a>
                  <a href={member.email}>
                    <Mail className="text-primary dark:text-white hover:scale-110 transition" />
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
