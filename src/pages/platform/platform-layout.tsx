import { ArrowLeft, Globe, Plus, Settings2, Zap } from "lucide-react";
import { Outlet, useNavigate, useParams } from "react-router";
import { Button } from "@/components/shadcn-ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/shadcn-ui/tabs";
import { platforms } from "@/core/platforms";

export default function PlatformLayout() {
  const { platformId } = useParams();
  const navigate = useNavigate();

  const platform = platforms.find((p) => p.id === platformId);

  if (!platform) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">平台不存在</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b px-6 py-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            返回
          </Button>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold"
              style={{
                backgroundColor: `hsl(${platform.color} / 0.15)`,
                color: `hsl(${platform.color})`
              }}
            >
              {platform.logo}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold">{platform.name}</h2>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Globe className="h-3 w-3" />
                {platform.url}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        <Tabs className="w-full" defaultValue="new-task">
          <TabsList className="bg-secondary mb-6">
            <TabsTrigger
              value="new-task"
              className="text-xs"
              onClick={() => {
                navigate("new");
              }}
            >
              <Plus className="h-3.5 w-3.5 mr-1" />
              新增任務
            </TabsTrigger>
            <TabsTrigger
              value="active-tasks"
              className="text-xs"
              onClick={() => {
                navigate("running");
              }}
            >
              <Zap className="h-3.5 w-3.5 mr-1" />
              進行中 (0)
            </TabsTrigger>
            <TabsTrigger
              value="platform-settings"
              className="text-xs"
              onClick={() => {
                navigate("settings");
              }}
            >
              <Settings2 className="h-3.5 w-3.5 mr-1" />
              平台設定
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Outlet />
      </div>
    </div>
  );
}
