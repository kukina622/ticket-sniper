import { Activity } from "lucide-react";
import { useNavigate } from "react-router";
import { PlatformCard } from "@/components/platform/platform-card";
import { platforms } from "@/core/platforms";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">售票平台</h2>
            <span className="text-xs text-muted-foreground">
              ({platforms.length} 個平台)
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {platforms.map((platform) => (
          <PlatformCard
            platform={platform}
            taskCount={Math.floor(Math.random() * 10)}
            onSelect={() => {
              navigate(`/platform/${platform.id}/new`);
            }}
            key={platform.id}
          />
        ))}
      </div>
    </div>
  );
}
