import { Play, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { useParams } from "react-router";
import TaskForm from "@/components/platform/task-form";
import { Button } from "@/components/shadcn-ui/button";
import { platformAdapterMapping } from "@/core/platforms";

export default function NewTaskTab() {
  const { platformId } = useParams();

  const platformAdapter = useMemo(
    () => platformAdapterMapping[platformId],
    [platformId]
  );

  const sections = useMemo(
    () => platformAdapter?.getSections() ?? [],
    [platformAdapter]
  );

  const [config, setConfig] = useState(platformAdapter?.getDefaultConfig());

  const onFieldChange = (name: string | number | symbol, value: any) => {
    setConfig((prev: any) => ({ ...prev, [name]: value }));
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
