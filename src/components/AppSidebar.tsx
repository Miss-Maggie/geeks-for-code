
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
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";
import { Home, Rocket } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/", icon: Home },
  { label: "Services", to: "/services", icon: Rocket },
  { label: "Contact", to: "#contact", icon: Rocket },
];

export function AppSidebar({ open, setOpen }: { open: boolean; setOpen: (val: boolean) => void }) {
  return (
    <Sidebar open={open} collapsible="offcanvas" className="md:hidden fixed z-40">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navLinks.map(link => (
                <SidebarMenuItem key={link.to}>
                  <SidebarMenuButton asChild onClick={() => setOpen(false)}>
                    {
                      link.to.startsWith("#") ? (
                        <a
                          href={link.to}
                          className="flex items-center gap-2 py-2 px-3 text-base"
                        >
                          <link.icon className="w-4 h-4" />
                          <span>{link.label}</span>
                        </a>
                      ) : (
                        <NavLink
                          to={link.to}
                          className={({ isActive }) => `flex items-center gap-2 py-2 px-3 text-base${isActive ? ' text-primary font-semibold' : ''}`}
                        >
                          <link.icon className="w-4 h-4" />
                          <span>{link.label}</span>
                        </NavLink>
                      )
                    }
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Optional: Add close/trigger button if desired */}
    </Sidebar>
  );
}

