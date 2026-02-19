import { Play, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { useParams } from "react-router";
import type { PlatformTaskConfig } from "@/core/platforms";
import TaskForm from "@/renderer/components/platform/task-form";
import { Button } from "@/renderer/components/shadcn-ui/button";
import usePlatformAdapter from "@/renderer/hooks/use-platform-adapter";

export default function NewTaskTab() {
  const { platformId } = useParams();

  const platformAdapter = usePlatformAdapter(platformId);

  const sections = useMemo(
    () => platformAdapter?.getTaskSections() ?? [],
    [platformAdapter]
  );

  const [config, setConfig] = useState<PlatformTaskConfig | undefined>(
    platformAdapter?.getTaskDefaultConfig()
  );

  const onFieldChange = <K extends keyof PlatformTaskConfig>(
    name: K,
    value: PlatformTaskConfig[K]
  ) => {
    setConfig((prev) => (prev ? { ...prev, [name]: value } : prev));
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <TaskForm sections={sections} values={config} setValue={onFieldChange} />
      <div className="lg:col-start-2 flex items-center gap-2">
        <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
          <Play className="h-4 w-4 mr-2" />
          <span>建立搶票任務</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="hover:bg-muted text-muted-foreground hover:text-foreground"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
