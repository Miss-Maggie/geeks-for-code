
const Footer = () => (
  <footer className="w-full py-6 border-t border-gray-100 mt-12 flex flex-col items-center bg-white">
    <nav className="flex gap-8 mb-3">
      <a
        href="#"
        className="text-[#070A52] font-bold story-link hover-scale transition"
        style={{ textDecoration: 'none' }}
      >
        Home
      </a>
      <a
        href="#contact"
        className="text-[#070A52] font-bold story-link hover-scale transition"
        style={{ textDecoration: 'none' }}
      >
        Contact
      </a>
      <a
        href="mailto:geeksforcode@example.com"
        className="text-[#070A52] font-bold story-link hover-scale transition"
        style={{ textDecoration: 'none' }}
      >
        Email Us
      </a>
    </nav>
    <p className="text-sm text-muted-foreground">
      © {new Date().getFullYear()} Geeks for Code. All rights reserved.
    </p>
  </footer>
);

export default Footer;
