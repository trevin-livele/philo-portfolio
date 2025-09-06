
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { User } from "@/entities/User"; // Added User import
import { Home, FileText, BarChart3, Brain, User as UserIcon, Mail, Github, Linkedin, GanttChart, Plus } from "lucide-react"; // Renamed User to UserIcon to avoid conflict with imported User entity
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Function to dynamically generate navigation items based on admin status
const getNavigationItems = (isAdmin) => {
  const baseItems = [
    {
      title: "Home",
      url: createPageUrl("Home"),
      icon: Home,
    },
    {
      title: "Blog",
      url: createPageUrl("Blog"),
      icon: FileText,
    },
    {
      title: "Data Reports",
      url: createPageUrl("DataReports"),
      icon: BarChart3,
    },
    {
      title: "ML Projects",
      url: createPageUrl("MLProjects"),
      icon: Brain,
    },
    {
      title: "Project Management",
      url: createPageUrl("ProjectManagement"),
      icon: GanttChart,
    }
  ];

  // Only add admin-only items if user is an admin
  if (isAdmin) {
    baseItems.push({
      title: "Add from GitHub",
      url: createPageUrl("AddFromGitHub"),
      icon: Plus,
    });
  }

  // Always add the "About" item
  baseItems.push({
    title: "About",
    url: createPageUrl("About"),
    icon: UserIcon, // Use UserIcon here as lucide-react User
  });

  return baseItems;
};

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);
  const [navigationItems, setNavigationItems] = useState([]);

  useEffect(() => {
    checkAdminStatus();
  }, []);

  const checkAdminStatus = async () => {
    try {
      // Assuming User.me() returns a user object with a 'role' property,
      // or throws an error if no user is logged in/available.
      const user = await User.me();
      const adminStatus = user.role === 'admin';
      setIsAdmin(adminStatus);
      setNavigationItems(getNavigationItems(adminStatus));
    } catch (error) {
      // User not logged in, error fetching user, or not an admin.
      // Default to non-admin view.
      console.error("Failed to check admin status:", error);
      setIsAdmin(false);
      setNavigationItems(getNavigationItems(false));
    }
  };

  return (
    <SidebarProvider>
      <style>{`
        :root {
          --primary-navy: #0F172A;
          --primary-emerald: #059669;
          --accent-emerald: #10B981;
          --light-emerald: #D1FAE5;
          --text-primary: #1E293B;
          --text-secondary: #64748B;
          --bg-primary: #FFFFFF;
          --bg-secondary: #F8FAFC;
          --border-color: #E2E8F0;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, #FFFFFF 100%);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-emerald) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .smooth-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      
      <div className="min-h-screen flex w-full gradient-bg">
        <Sidebar className="border-r border-slate-200 bg-white/80 backdrop-blur-sm">
          <SidebarHeader className="border-b border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-emerald-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 text-lg">M&E.tech</h2>
                <p className="text-xs text-slate-500 font-medium">Smart Monitoring & Evaluation</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 py-3">
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`smooth-transition hover:bg-emerald-50 hover:text-emerald-700 rounded-lg mb-1 ${
                          location.pathname === item.url 
                            ? 'bg-emerald-50 text-emerald-700 border-l-4 border-emerald-600' 
                            : 'text-slate-600'
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-3 py-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-8">
              <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 py-3">
                Focus Areas
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="px-3 py-2 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Impact Assessment</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Data Analytics</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>ML for M&E</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Program Evaluation</span>
                  </div>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-slate-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">ME</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900 text-sm">M&E Specialist</p>
                <p className="text-xs text-slate-500">Data • Analytics • Impact</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <a href="#" className="p-2 text-slate-400 hover:text-slate-600 smooth-transition">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-slate-600 smooth-transition">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-slate-600 smooth-transition">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 px-6 py-4 md:hidden">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-slate-100 p-2 rounded-lg smooth-transition" />
              <h1 className="text-xl font-bold text-slate-900">M&E.tech</h1>
            </div>
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
