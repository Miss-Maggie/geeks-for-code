import { Rocket, Users2, Code2, Sparkles } from "lucide-react";

const HeroSection = () => (
  <header className="w-full py-8 xs:py-12 flex flex-col items-center relative animate-fade-in px-3 xs:px-1 sm:px-0">
    <div className="absolute left-2 xs:left-4 top-3 xs:top-4 opacity-30 pointer-events-none max-xs:hidden">
      <Rocket size={60} xs-size={80} className="text-primary dark:text-white" strokeWidth={1.5} />
    </div>
    <div className="absolute right-2 xs:right-8 top-5 xs:top-8 opacity-30 pointer-events-none max-xs:hidden">
      <Sparkles size={52} xs-size={70} className="text-primary dark:text-white" strokeWidth={1.5} />
    </div>
    <h1 className="text-2xl xs:text-4xl sm:text-5xl font-extrabold mb-3 xs:mb-4 tracking-tight text-primary dark:text-white animate-fade-in text-center">
      Geeks for Code
    </h1>
    <p className="max-w-xs xs:max-w-md sm:max-w-2xl text-sm xs:text-base sm:text-xl text-center text-muted-foreground mb-4 xs:mb-6">
      <span className="font-semibold text-primary dark:text-white">10 passionate members</span> collaborating to learn, build, and help others with coding, assignments, and upskilling.
    </p>
    <div className="flex gap-2 xs:gap-4 sm:gap-6 mb-6 xs:mb-8">
      <Code2 size={24} xs-size={28} className="text-primary dark:text-white hover-scale" />
      <Users2 size={24} xs-size={28} className="text-primary dark:text-white hover-scale" />
      <Sparkles size={24} xs-size={28} className="text-primary dark:text-white hover-scale" />
    </div>
    <a
      href="#contact"
      className="px-4 xs:px-6 sm:px-8 py-2 xs:py-3 rounded-lg font-medium bg-primary text-primary-foreground text-base xs:text-lg shadow-lg story-link hover-scale transition-all focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      style={{ textDecoration: 'none' }}
    >
      Get Coding Help
    </a>
  </header>
);

export default HeroSection;
