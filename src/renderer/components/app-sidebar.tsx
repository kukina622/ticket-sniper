import type { LucideIcon } from "lucide-react";
import { Swords } from "lucide-react";
import { cn } from "@/renderer/utils/cn";

type View = string;

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
}

interface AppSidebarProps {
  navItems: NavItem[];
  currentView: View;
  onNavigate: (view: View) => void;
}

export default function AppSidebar({
  navItems,
  currentView,
  onNavigate
}: AppSidebarProps) {
  return (
    <aside className="w-16 lg:w-56 border-r flex flex-col bg-card shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-4 border-b">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary">
          <Swords className="h-4 w-4 text-primary-foreground" />
        </div>
        <div className="hidden lg:block">
          <h1 className="text-sm font-semibold tracking-tight">
            Ticket Armamenter
          </h1>
          <p className="text-[10px] text-muted-foreground">搶票助手</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-3">
        <ul className="grid gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors cursor-pointer",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="hidden lg:inline">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
