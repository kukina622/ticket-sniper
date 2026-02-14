import { useMemo } from "react";
import { useParams } from "react-router";
import TaskForm from "@/components/platform/task-form";
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

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <TaskForm sections={sections} values={{}} setValue={() => {}} />
    </div>
  );
}
