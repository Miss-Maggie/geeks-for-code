
import { Link, NavLink, useLocation } from "react-router-dom";
import { Rocket, Home, Menu } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/useTheme";
import * as React from "react";
import { AppSidebar } from "./AppSidebar";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "#contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Sidebar open state (for mobile)
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <AppSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <nav className="w-full bg-white dark:bg-[#171823] shadow sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-8 py-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center" aria-label="Home">
              <Home size={28} className="text-primary dark:text-white hover:scale-110 transition" />
            </Link>
            <Link to="/" className="flex items-center gap-2 font-extrabold text-2xl tracking-tight text-primary dark:text-white">
              <Rocket size={32} className="text-primary dark:text-white mr-1" />
              Geeks for Code
            </Link>
          </div>
          {/* Desktop nav links */}
          <ul className="hidden md:flex space-x-4 sm:space-x-8 overflow-x-auto py-2 whitespace-nowrap mb-2 sm:mb-0">
            {navLinks.map((link) => (
              <li key={link.to}>
                {link.to.startsWith("#") ? (
                  <a
                    href={link.to}
                    className="text-primary dark:text-white px-4 py-2 rounded transition font-semibold hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary"
                    style={{ textDecoration: "none" }}
                    onClick={(e) => {
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
          {/* Mobile sidebar trigger button */}
          <button
            className="md:hidden p-2 rounded hover:bg-primary/10 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
            type="button"
          >
            <Menu className="w-7 h-7 text-primary dark:text-white" />
          </button>
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
    </>
  );
};

export default Navbar;

