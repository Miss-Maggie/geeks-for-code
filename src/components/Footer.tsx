
const Footer = () => (
  <footer className="w-full py-6 border-t border-gray-100 mt-12 flex flex-col items-center bg-white dark:bg-[#171823] px-2 sm:px-0">
    <nav className="flex flex-wrap gap-4 sm:gap-8 mb-3 justify-center text-center">
      <a
        href="/"
        className="font-bold story-link hover-scale transition text-primary dark:text-white"
        style={{ textDecoration: 'none' }}
      >
        Home
      </a>
      <a
        href="/services"
        className="font-bold story-link hover-scale transition text-primary dark:text-white"
        style={{ textDecoration: 'none' }}
      >
        Services
      </a>
      <a
        href="#contact"
        className="font-bold story-link hover-scale transition text-primary dark:text-white"
        style={{ textDecoration: 'none' }}
      >
        Contact
      </a>
      <a
        href="mailto:geeksforcode@example.com"
        className="font-bold story-link hover-scale transition text-primary dark:text-white"
        style={{ textDecoration: 'none' }}
      >
        Email Us
      </a>
    </nav>
    <p className="text-sm text-muted-foreground text-center">
      © {new Date().getFullYear()} Geeks for Code. All rights reserved.
    </p>
  </footer>
);

export default Footer;
