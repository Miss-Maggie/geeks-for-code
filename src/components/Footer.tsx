import { Link } from "react-router-dom";

const Footer = () => (
  <footer className=" hidden md:block lg:flex w-full py-5 sm:py-6 border-t border-gray-100 mt-10 sm:mt-12 flex-col items-center bg-white dark:bg-[#171823] px-4">
    <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center mb-2 sm:mb-3">
      <Link
        to="/"
        className="font-bold story-link hover-scale transition text-primary dark:text-white"
        style={{ textDecoration: 'none' }}
      >
        Home
      </Link>
      <Link
      to="/services"
        className="font-bold story-link hover-scale transition text-primary dark:text-white"
        style={{ textDecoration: 'none' }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        className="font-bold story-link hover-scale transition text-primary dark:text-white"
        style={{ textDecoration: 'none' }}
      >
        Contact
      </Link>
      <Link
        to="mailto:geeksforcode@example.com"
        className="font-bold story-link hover-scale transition text-primary dark:text-white"
        style={{ textDecoration: 'none' }}
      >
        Email Us
      </Link>
    </nav>
    <p className="text-xs sm:text-sm text-muted-foreground text-center">
      © {new Date().getFullYear()} Geeks for Code. All rights reserved.
    </p>
  </footer>
);

export default Footer;
