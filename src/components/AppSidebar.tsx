
import { Home, Code2, Users2, Mail } from "lucide-react";
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
  { title: "Services", url: "/services", icon: Code2 },
  { title: "Team", url: "#team", icon: Users2 },
  { title: "Contact", url: "#contact", icon: Mail },
];

export default function AppSidebar() {
  const location = useLocation();
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  // In mini/collapsed view, hide labels
  return (
    <Sidebar className={collapsed ? "w-14" : "w-56"} collapsible="offcanvas">
      {/* Trigger inside the sidebar for bringing it back on mobile/mini */}
      <SidebarTrigger className="m-2 self-end" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {/* Anchor tag for hash, NavLink for pages */}
                    {item.url.startsWith("#") ? (
                      <a
                        href={item.url}
                        className="flex items-center px-2 py-2 hover:bg-muted rounded gap-3"
                      >
                        <item.icon className="w-5 h-5" />
                        {!collapsed && <span>{item.title}</span>}
                      </a>
                    ) : (
                      <NavLink
                        to={item.url}
                        end
                        className={({ isActive }) =>
                          `flex items-center px-2 py-2 rounded gap-3 ${isActive
                            ? "bg-primary text-white font-semibold"
                            : "hover:bg-muted transition"}`
                        }
                        style={{ textDecoration: 'none' }}
                      >
                        <item.icon className="w-5 h-5" />
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
