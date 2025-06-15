
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
  <section className="my-16">
    <h2 className="text-3xl font-semibold text-[#070A52] text-center mb-4">
      What We Do
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skills.map((skill) => (
        <div
          key={skill.title}
          className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center border border-gray-100 hover:shadow-lg transition-shadow animate-scale-in"
        >
          <div>{skill.icon}</div>
          <h3 className="mt-4 text-xl font-bold text-[#070A52]">{skill.title}</h3>
          <p className="text-muted-foreground mt-2 text-center">{skill.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhatWeDoSection;
