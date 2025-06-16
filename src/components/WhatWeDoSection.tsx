
import { Brain, Users, GraduationCap, BookOpen , Rocket} from "lucide-react";

const skills = [
  {
    icon: <Brain size={32} />,
    title: "Upskilling",
    desc: "Grow technical skills and embrace the latest in coding.",
  },
  {
    icon: <Rocket size={32} />,
    title: "Development",
    desc: "Providing Solutions to our clients and peers need by developing clean, scalable solutions.",
  },
  {
    icon: <Users size={32} />,
    title: "Collaboration",
    desc: "Team up on real-world projects—learn and ship together.",
  },
  {
    icon: <GraduationCap size={32}/>,
    title: "Peer Support",
    desc: "Offer assistance to fellow developers and contributing in open source and community initiatives!",
  },
];

const WhatWeDoSection = () => (
  <section className="my-12 sm:my-16">
    <h2 className="text-2xl sm:text-3xl font-semibold text-primary dark:text-white text-center mb-4">
      What We Do
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {skills.map((skill) => (
        <div
          key={skill.title}
          className="bg-white dark:bg-[#232437] rounded-xl shadow-md p-6 sm:p-8 flex flex-col items-center border border-gray-100 dark:border-[#323247] hover:shadow-lg transition-shadow animate-scale-in"
        >
          <div className="text-primary dark:text-white">{skill.icon}</div>
          <h3 className="mt-4 text-lg sm:text-xl font-bold text-primary dark:text-white">{skill.title}</h3>
          <p className="text-muted-foreground mt-2 text-center text-sm sm:text-base">{skill.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhatWeDoSection;
