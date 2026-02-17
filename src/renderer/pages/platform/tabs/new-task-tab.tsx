import { Play, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { useParams } from "react-router";
import {
  isPlatformId,
  type PlatformConfig,
  platformAdapterMapping
} from "@/core/platforms";
import TaskForm from "@/renderer/components/platform/task-form";
import { Button } from "@/renderer/components/shadcn-ui/button";

export default function NewTaskTab() {
  const { platformId } = useParams();

  const platformAdapter = useMemo(
    () =>
      isPlatformId(platformId) ? platformAdapterMapping[platformId] : undefined,
    [platformId]
  );

  const sections = useMemo(
    () => platformAdapter?.getSections() ?? [],
    [platformAdapter]
  );

  const [config, setConfig] = useState<PlatformConfig | undefined>(
    platformAdapter?.getDefaultConfig()
  );

  const onFieldChange = <K extends keyof PlatformConfig>(
    name: K,
    value: PlatformConfig[K]
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
        <Button variant="outline" size="icon">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
