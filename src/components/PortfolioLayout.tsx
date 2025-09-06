"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPageUrl } from "@/lib/utils";
import { Home, FileText, BarChart3, Brain, User as UserIcon, Mail, Github, Linkedin, GanttChart, Plus } from "lucide-react";
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
const getNavigationItems = (isAdmin: boolean) => {
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
    icon: UserIcon,
  });

  return baseItems;
};

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  const [navigationItems, setNavigationItems] = useState(getNavigationItems(false));

  useEffect(() => {
    // For now, we'll set admin to true so you can access all features
    // In a real implementation, you would check user authentication here
    setIsAdmin(true);
    setNavigationItems(getNavigationItems(true));
  }, []);

  return (
    <SidebarProvider>
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
                          pathname === item.url 
                            ? 'bg-emerald-50 text-emerald-700 border-l-4 border-emerald-600' 
                            : 'text-slate-600'
                        }`}
                      >
                        <Link href={item.url} className="flex items-center gap-3 px-3 py-3">
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
