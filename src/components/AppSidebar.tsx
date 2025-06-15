
import { Home, BookOpen, MessageSquare } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Services", url: "/services", icon: BookOpen },
  { title: "Contact", url: "#contact", icon: MessageSquare },
];

export default function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) =>
    path === "#contact"
      ? window.location.hash === "#contact" || currentPath === "/" // treat as active on index with #contact
      : currentPath === path;
  const isExpanded = navItems.some((item) => isActive(item.url));

  return (
    <Sidebar
      className={`fixed top-0 left-0 h-screen z-40 bg-white dark:bg-[#171823] w-64 max-w-full transition-all duration-200 md:hidden`}
      style={{ boxShadow: state === "expanded" ? "0 0 12px rgba(0,0,0,.12)" : "none" }}
    >
      <SidebarTrigger className="m-2 self-end" />
      <SidebarContent>
        <SidebarGroup open={isExpanded}>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {item.url.startsWith("#") ? (
                      <a
                        href={item.url}
                        className={`flex items-center px-3 py-2 rounded w-full text-primary dark:text-white hover:bg-primary/10 transition
                          ${isActive(item.url) ? "bg-primary/10 font-bold" : ""}
                        `}
                        onClick={() => {
                          // smooth scroll to contact
                          if (item.url === "#contact") {
                            const el = document.getElementById("contact");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        <item.icon className="mr-2 h-5 w-5" />
                        <span>{item.title}</span>
                      </a>
                    ) : (
                      <NavLink
                        to={item.url}
                        end
                        className={({ isActive }) =>
                          `flex items-center px-3 py-2 rounded w-full
                           ${isActive ? "bg-primary/10 font-bold" : ""}`
                        }
                      >
                        <item.icon className="mr-2 h-5 w-5" />
                        <span>{item.title}</span>
                      </NavLink>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
