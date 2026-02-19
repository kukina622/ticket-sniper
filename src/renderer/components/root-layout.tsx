import { LayoutDashboard, ListChecks, Settings } from "lucide-react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import AppHeader from "./app-header";
import AppSidebar, { type NavItem } from "./app-sidebar";

export default function RootLayout() {
  const navItems: NavItem[] = [
    {
      id: "dashboard",
      label: "控制台",
      icon: LayoutDashboard,
      path: "/"
    },
    {
      id: "task-manager",
      label: "任務管理",
      icon: ListChecks,
      path: "/task-manager"
    },
    {
      id: "global-settings",
      label: "設定",
      icon: Settings,
      path: "/global-settings"
    }
  ];

  const [currentView, setCurrentView] = useState("dashboard");

  const navigate = useNavigate();

  const onNavigate = (view: string) => {
    setCurrentView(view);
    const path = navItems.find((item) => item.id === view)?.path;
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar
        navItems={navItems}
        currentView={currentView}
        onNavigate={onNavigate}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        <AppHeader />
        <Outlet />
      </main>
    </div>
  );
}
