
import { Rocket, Users2, Code2, Sparkles } from "lucide-react";

const HeroSection = () => (
  <header className="w-full py-12 sm:py-16 flex flex-col items-center relative animate-fade-in px-4 sm:px-0">
    <div className="absolute left-4 top-4 opacity-30 pointer-events-none max-sm:hidden">
      <Rocket size={80} className="text-primary dark:text-white" strokeWidth={1.5} />
    </div>
    <div className="absolute right-8 top-8 opacity-30 pointer-events-none max-sm:hidden">
      <Sparkles size={70} className="text-primary dark:text-white" strokeWidth={1.5} />
    </div>
    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-primary dark:text-white animate-fade-in text-center">
      Geeks for Code
    </h1>
    <p className="max-w-2xl text-lg sm:text-xl text-center text-muted-foreground mb-6 px-2">
      <span className="font-semibold text-primary dark:text-white">Our Team</span>, whether you need help with a coding assignment, want to collaborate on a project, or just have a question — is here for you.
    Geeks for Code is built on support, growth, and shared passion for tech.
    </p>
    <div className="flex gap-4 sm:gap-6 mb-8 flex-wrap justify-center">
      <Code2 size={40} className="text-primary dark:text-white hover-scale" />
      <Users2 size={40} className="text-primary dark:text-white hover-scale" />
      <Sparkles size={40} className="text-primary dark:text-white hover-scale" />
    </div>
  </header>
);

export default HeroSection;
