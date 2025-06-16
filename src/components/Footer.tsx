
// const Footer = () => (
//   <footer className="w-full py-5 sm:py-6 border-t border-gray-100 mt-10 sm:mt-12 flex flex-col items-center bg-white dark:bg-[#171823] px-4">
//     <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center mb-2 sm:mb-3">
//       <a
//         href="/"
//         className="font-bold story-link hover-scale transition text-primary dark:text-white"
//         style={{ textDecoration: 'none' }}
//       >
//         Home
//       </a>
//       <a
//         href="/services"
//         className="font-bold story-link hover-scale transition text-primary dark:text-white"
//         style={{ textDecoration: 'none' }}
//       >
//         Services
//       </a>
//       <a
//         href="#contact"
//         className="font-bold story-link hover-scale transition text-primary dark:text-white"
//         style={{ textDecoration: 'none' }}
//       >
//         Contact
//       </a>
//       <a
//         href="mailto:geeksforcode@example.com"
//         className="font-bold story-link hover-scale transition text-primary dark:text-white"
//         style={{ textDecoration: 'none' }}
//       >
//         Email Us
//       </a>
//     </nav>
//     <p className="text-xs sm:text-sm text-muted-foreground text-center">
//       © {new Date().getFullYear()} Geeks for Code. All rights reserved.
//     </p>
//   </footer>
// );

// export default Footer;

const Footer = () => (
  <footer className="hidden lg:flex w-full py-5 sm:py-6 border-t border-gray-100 mt-10 sm:mt-12 flex-col items-center bg-white dark:bg-[#171823] px-4">
    <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center mb-2 sm:mb-3">
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
    <p className="text-xs sm:text-sm text-muted-foreground text-center">
      © {new Date().getFullYear()} Geeks for Code. All rights reserved.
    </p>
  </footer>
);

export default Footer;
