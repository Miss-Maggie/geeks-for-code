
import { Code2, Globe, Layers3, Database } from "lucide-react";
import BackToHomeButton from "@/components/BackToHomeButton";

const services = [
  {
    icon: <Globe size={34} color="#070A52" />,
    title: "Website Creation",
    desc: "Custom, modern websites tailored to your needs—portfolio, blog, e-commerce and more.",
  },
  {
    icon: <Code2 size={34} color="#070A52" />,
    title: "Web & App Development",
    desc: "Full-stack app development: landing pages, business apps, learning tools, and more.",
  },
  {
    icon: <Layers3 size={34} color="#070A52" />,
    title: "UI/UX & Design",
    desc: "Beautiful, user-friendly interfaces and experiences for any digital project.",
  },
  {
    icon: <Database size={34} color="#070A52" />,
    title: "Automation & Integrations",
    desc: "Connect APIs, automate tasks, and streamline your workflow using the latest tech.",
  },
];

const scrollToContact = () => {
  // Try to scroll to contact form if on home
  const contact = document.getElementById("contact");
  if (contact) {
    contact.scrollIntoView({ behavior: "smooth" });
  } else {
    // Navigate to home with hash
    window.location.href = "/#contact";
  }
};

const Services = () => (
  <main className="min-h-screen bg-[#edeef5] dark:bg-[#191b24] pt-9 pb-16 px-4">
    <div className="max-w-3xl mx-auto text-center mb-14">
      <h1 className="text-4xl font-extrabold text-primary dark:text-white mb-3">Our Services</h1>
      <p className="text-lg text-muted-foreground mb-6">
        At <span className="font-semibold text-primary dark:text-white">Geeks for Code</span>, we do more than just build websites!
      </p>
      <p className="text-base text-muted-foreground">
        Need a modern website, a new app, or help automating your workflow? <span className="font-bold text-primary dark:text-white">Request help today</span> and collaborate with our group of talented developers to get your coding, development, or assignment challenges solved. <br />
        Our group of 10 skilled members can assist with:
      </p>
      <ul className="list-disc text-left text-base text-primary dark:text-white font-medium mt-5 ml-8">
        <li>Website and portfolio creation</li>
        <li>Custom web and mobile apps</li>
        <li>UI/UX improvements</li>
        <li>APIs & integrations</li>
        <li>Coursework, assignments, and mentoring</li>
        <li>Debugging, code reviews, and more!</li>
      </ul>
      <p className="text-base text-muted-foreground mt-8">
        To request help, just scroll down and fill out the contact form, or click the button below. We'll get back to you fast!
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-9 max-w-5xl mx-auto">
      {services.map((service) => (
        <div
          key={service.title}
          className="bg-white dark:bg-[#232437] rounded-xl border border-gray-100 dark:border-[#323247] shadow-md p-8 flex flex-col items-center hover:shadow-lg transition"
        >
          <div className="text-primary dark:text-white">{service.icon}</div>
          <h3 className="mt-4 mb-2 text-2xl font-bold text-primary dark:text-white">{service.title}</h3>
          <p className="text-muted-foreground text-center">{service.desc}</p>
        </div>
      ))}
    </div>
    <div className="text-center mt-14">
      <button
        onClick={scrollToContact}
        className="inline-block px-8 py-3 rounded-lg font-medium bg-primary text-primary-foreground text-lg shadow-lg story-link hover-scale transition-all focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        style={{ textDecoration: 'none' }}
      >
        Request Help Now
      </button>
    </div>
    <BackToHomeButton />
  </main>
);

export default Services;
