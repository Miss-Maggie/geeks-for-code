
import { Link, NavLink, useLocation } from "react-router-dom";
import { Rocket, Home } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/useTheme";
import { SidebarTrigger } from "@/components/ui/sidebar";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "#contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="w-full bg-white dark:bg-[#171823] shadow sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Mobile sidebar trigger -- shown on small screens */}
        <div className="flex items-center gap-3">
          <div className="md:hidden mr-2">
            <SidebarTrigger aria-label="Open menu" />
          </div>
          <Link to="/" className="flex items-center" aria-label="Home">
            <Home size={28} className="text-primary dark:text-white hover:scale-110 transition" />
          </Link>
          <Link to="/" className="flex items-center gap-2 font-extrabold text-2xl tracking-tight text-primary dark:text-white">
            <Rocket size={32} className="text-primary dark:text-white mr-1" />
            Geeks for Code
          </Link>
        </div>
        <ul className="flex space-x-8 max-md:hidden">
          {navLinks.map((link) => (
            <li key={link.to}>
              {link.to.startsWith("#") ? (
                <a
                  href={link.to}
                  className="text-primary dark:text-white px-4 py-2 rounded transition font-semibold hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary"
                  style={{ textDecoration: "none" }}
                  onClick={(e) => {
                    // If not home page, navigate home and scroll to contact
                    if (link.to === "#contact") {
                      e.preventDefault();
                      if (location.pathname !== "/") {
                        window.location.href = "/#contact";
                      } else {
                        const contact = document.getElementById("contact");
                        if (contact) {
                          contact.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded font-semibold transition ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary"
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
        {/* Theme Toggle */}
        <div className="ml-4 flex items-center">
          <span className="text-xs text-muted-foreground mr-1">🌞</span>
          <Switch
            checked={theme === "dark"}
            onCheckedChange={toggleTheme}
            aria-label="Toggle dark mode"
          />
          <span className="text-xs text-muted-foreground ml-1">🌜</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
