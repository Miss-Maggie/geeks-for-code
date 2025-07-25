

// export default HeroSection;
import { Rocket, Users2, Code2, Sparkles, Mail, MapPin, Phone } from "lucide-react";

const HeroSection = () => (
  <header className="w-full py-12 sm:py-16 flex flex-col items-center relative animate-fade-in px-4 sm:px-0">
    {/* Background icons */}
    <div className="absolute left-4 top-4 opacity-30 pointer-events-none max-sm:hidden">
      <Rocket size={80} className="text-primary dark:text-white" strokeWidth={1.5} />
    </div>
    <div className="absolute right-8 top-8 opacity-30 pointer-events-none max-sm:hidden">
      <Sparkles size={70} className="text-primary dark:text-white" strokeWidth={1.5} />
    </div>

    {/* Main Title */}
    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-primary dark:text-white animate-fade-in text-center">
      Geeks for Code
    </h1>

    {/* Subtitle */}
    <p className="max-w-2xl text-lg sm:text-xl text-center text-muted-foreground mb-8 px-2">
      <span className="font-semibold text-primary dark:text-white">Our Team</span>, whether you need help with a coding assignment,
      want to collaborate on a project, or just have a question — is here for you.
      Geeks for Code is built on support, growth, and shared passion for tech.
    </p>


    {/* Contact Icons */}
    <div className="flex flex-wrap justify-center gap-6 mb-10">
      {/* Contact */}
      <a
        href="https://wa.me/254758039176?text=Hi%2C%20I%20would%20like%20to%20inquire%20something%20from%20Geeks%20for%20Code."
        className="flex flex-col items-center gap-2 text-center"
        aria-label="Contact"
      >
        <div className="w-40 h-20 sm:w-40 sm:h-24 flex items-center justify-center rounded-full border border-primary text-primary dark:text-white hover:bg-primary hover:text-white hover:dark:text-background transition">
          <Phone size={28} />
        </div>
        <span className="text-sm sm:text-base font-medium text-muted-foreground">Call Us</span>
      </a>

      {/* Email */}
      <a
        href="mailto:geeksforcodeint@gmail.com"
        className="flex flex-col items-center gap-2 text-center"
        aria-label="Email"
      >
        <div className="w-40 h-20 sm:w-40 sm:h-24 flex items-center justify-center rounded-full border border-primary text-primary dark:text-white hover:bg-primary hover:text-white hover:dark:text-background transition">
          <Mail size={28} />
        </div>
        <span className="text-sm sm:text-base font-medium text-muted-foreground">Email</span>
      </a>

      {/* Location */}
      <a
        href="https://maps.google.com?q=Nairobi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 text-center"
        aria-label="Location"
      >
        <div className="w-40 h-20 sm:w-40 sm:h-24 flex items-center justify-center rounded-full border border-primary text-primary dark:text-white hover:bg-primary hover:text-white hover:dark:text-background transition">
          <MapPin size={28} />
        </div>
        <span className="text-sm sm:text-base font-medium text-muted-foreground">Our Location</span>
      </a>
    </div>

    {/* Tech Icons */}
    <div className="flex gap-4 sm:gap-6 mb-8 flex-wrap justify-center">
      <Code2 size={40} className="text-primary dark:text-white hover-scale" />
      <Users2 size={40} className="text-primary dark:text-white hover-scale" />
      <Sparkles size={40} className="text-primary dark:text-white hover-scale" />
    </div>
  </header>
);

export default HeroSection;
