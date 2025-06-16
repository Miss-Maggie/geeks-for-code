
import { Link, NavLink, useLocation } from "react-router-dom";
import { Rocket, Home, Phone, Hammer } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "Home", to: "/", icon: <Home size={20} /> },
  { label: "Services", to: "/services", icon: <Hammer size={20} /> },
  { label: "Contact", to: "/contact", icon: <Phone size={20} /> },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <>
      {/* Top Bar (Desktop full nav, Mobile: title + toggle only) */}
      <nav className="w-full bg-white dark:bg-[#171823] shadow sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 font-extrabold text-xl sm:text-2xl tracking-tight text-primary dark:text-white"
          >
            <img src="./logo-1.png" alt="" className="block dark:hidden" />
            <img src="./logo-1-bg.png" alt="" className="hidden dark:block" />
            <span className="pt-3 text-2xl font-extrabold"> Geeks For Code<br /><sup className="pt-[-10%] text-lg font-bold">Code.Create.Connet</sup></span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden sm:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded font-semibold transition ${
                      isActive
                        ? "bg-primary text-background"
                        : "text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-background"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <div className="flex items-center">
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

      {/* Bottom Nav (Mobile only) */}
      <nav className="fixed bottom-0 inset-x-0 z-30 bg-white dark:bg-[#171823] border-t dark:border-gray-700 sm:hidden">
        <div className="flex justify-around items-center py-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex flex-col items-center text-xs font-medium px-2 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
