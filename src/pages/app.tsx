import { LayoutDashboard, ListChecks, Settings } from "lucide-react";
import AppSidebar from "@/components/app-sidebar";

const App = () => {
  const navItems = [
    { id: "dashboard", label: "控制台", icon: LayoutDashboard },
    { id: "tasks", label: "任務管理", icon: ListChecks },
    { id: "settings", label: "設定", icon: Settings }
  ];
  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar
        navItems={navItems}
        currentView={"dashboard"}
        onNavigate={(view) => {}}
      />
    </div>
  );
};

export default App;
