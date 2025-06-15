
import { Brain, Users, GraduationCap, BookOpen } from "lucide-react";

const skills = [
  {
    icon: <Brain size={32} color="#070A52" />,
    title: "Upskilling",
    desc: "Grow technical skills and embrace the latest in coding.",
  },
  {
    icon: <BookOpen size={32} color="#070A52" />,
    title: "Assignment Help",
    desc: "Members assist on coding assignments, projects, and exam prep.",
  },
  {
    icon: <Users size={32} color="#070A52" />,
    title: "Collaboration",
    desc: "Team up on real-world projects—learn and ship together.",
  },
  {
    icon: <GraduationCap size={32} color="#070A52" />,
    title: "Peer Support",
    desc: "Everyone helps each other to grow as coders—no question too simple!",
  },
];

const WhatWeDoSection = () => (
  <section className="my-10 xs:my-12 sm:my-16 px-2 xs:px-0">
    <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-primary dark:text-white text-center mb-4">
      What We Do
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xs:gap-8">
      {skills.map((skill) => (
        <div
          key={skill.title}
          className="bg-white dark:bg-[#232437] rounded-xl shadow-md p-4 xs:p-6 sm:p-8 flex flex-col items-center border border-gray-100 dark:border-[#323247] hover:shadow-lg transition-shadow animate-scale-in"
        >
          <div className="text-primary dark:text-white">{skill.icon}</div>
          <h3 className="mt-4 text-base xs:text-lg sm:text-xl font-bold text-primary dark:text-white">{skill.title}</h3>
          <p className="text-muted-foreground mt-2 text-center text-xs xs:text-sm sm:text-base">{skill.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhatWeDoSection;
