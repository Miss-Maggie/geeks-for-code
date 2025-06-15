
import { Link, NavLink } from "react-router-dom";
import { Rocket } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "#contact" },
];

const Navbar = () => (
  <nav className="w-full bg-white shadow sticky top-0 z-30">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
      <Link to="/" className="flex items-center gap-2 text-[#070A52] font-extrabold text-2xl tracking-tight">
        <Rocket size={32} color="#070A52" className="mr-1" />
        Geeks for Code
      </Link>
      <ul className="flex space-x-8">
        {navLinks.map((link) => (
          <li key={link.to}>
            {link.to.startsWith("#") ? (
              <a
                href={link.to}
                className="text-[#070A52] px-4 py-2 rounded transition font-semibold hover:bg-[#070A52] hover:text-white"
                style={{ textDecoration: "none" }}
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-[#070A52] px-4 py-2 rounded font-semibold transition hover:bg-[#070A52] hover:text-white ${
                    isActive ? "bg-[#070A52] text-white" : ""
                  }`
                }
                style={{ textDecoration: "none" }}
              >
                {link.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
