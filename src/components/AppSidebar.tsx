import { Home, Rocket, Sparkles } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Services",
    url: "/services",
    icon: Rocket,
  },
  {
    title: "Contact",
    url: "#contact",
    icon: Sparkles,
  },
];

function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const collapsed = state === "collapsed";
  const currentPath = location.pathname;

  // Always keep "Main" group open for simplicity (do NOT pass open prop)
  return (
    <Sidebar
      className="block md:hidden min-h-screen z-50 w-60"
      collapsible="offcanvas"
      variant="sidebar"
    >
      {/* Always-visible menu trigger (mini mode) */}
      <SidebarTrigger className="m-2 self-end" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="pl-2 pt-3 pb-1 text-xs text-muted-foreground tracking-wide">Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    {item.url.startsWith("#") ? (
                      <a
                        href={item.url}
                        className="flex items-center px-3 py-2 rounded hover:bg-muted/50 text-primary dark:text-white font-semibold"
                        style={{ textDecoration: "none" }}
                        onClick={(e) => {
                          e.preventDefault();
                          // Only scroll if on homepage, else go to home
                          if (location.pathname !== "/") {
                            window.location.href = "/#contact";
                          } else {
                            const contact = document.getElementById("contact");
                            if (contact) {
                              contact.scrollIntoView({ behavior: "smooth" });
                            }
                          }
                        }}
                      >
                        <item.icon className="mr-2 h-5 w-5" />
                        {!collapsed && <span>{item.title}</span>}
                      </a>
                    ) : (
                      <NavLink
                        to={item.url}
                        end
                        className={({ isActive }) =>
                          `flex items-center px-3 py-2 rounded ${
                            isActive
                              ? "bg-primary text-white"
                              : "hover:bg-muted/50 text-primary dark:text-white"
                          } font-semibold`
                        }
                        style={{ textDecoration: "none" }}
                      >
                        <item.icon className="mr-2 h-5 w-5" />
                        {!collapsed && <span>{item.title}</span>}
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
export default AppSidebar;
