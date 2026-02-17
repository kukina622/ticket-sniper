import { Crosshair, Zap } from "lucide-react";

export default function AppHeader() {
  return (
    <header className="flex items-center justify-between border-b px-6 py-3">
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4 text-primary" />
        <span className="text-sm text-muted-foreground font-mono">
          Ticket Armamenter v{__APP_VERSION__}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs text-muted-foreground">系統就緒</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-md border px-2.5 py-1">
          <Crosshair className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-mono text-foreground">3 個任務</span>
        </div>
      </div>
    </header>
  );
}
