
import { Code2, Globe, Layers3, Database } from "lucide-react";

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

const Services = () => (
  <main className="min-h-screen bg-background pt-9 pb-16 px-4">
    <div className="max-w-3xl mx-auto text-center mb-14">
      <h1 className="text-4xl font-extrabold text-[#070A52] mb-3">Our Services</h1>
      <p className="text-lg text-muted-foreground">
        At <span className="font-semibold text-[#070A52]">Geeks for Code</span>, our team can help you with website creation, app development, and all sorts of coding or automation challenges. Whether you’re building your first site or scaling your app, we can lend a hand!
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-9 max-w-5xl mx-auto">
      {services.map((service) => (
        <div
          key={service.title}
          className="bg-white rounded-xl border border-gray-100 shadow-md p-8 flex flex-col items-center hover:shadow-lg transition"
        >
          <div>{service.icon}</div>
          <h3 className="mt-4 mb-2 text-2xl font-bold text-[#070A52]">{service.title}</h3>
          <p className="text-muted-foreground text-center">{service.desc}</p>
        </div>
      ))}
    </div>
    <div className="text-center mt-14">
      <a
        href="#contact"
        className="inline-block px-8 py-3 rounded-lg font-medium bg-[#070A52] text-white text-lg shadow-lg story-link hover-scale transition-all focus:ring-2 focus:ring-offset-2 focus:ring-[#070A52]"
        style={{ textDecoration: 'none' }}
      >
        Request Help Now
      </a>
    </div>
  </main>
);

export default Services;
