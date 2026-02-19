import { Ticket } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { useParams } from "react-router";
import { platforms } from "@/core/platforms";
import { DummyTasks } from "@/core/tasks";
import TaskCard from "@/renderer/components/platform/task-card";
import type { TicketPlatform } from "@/types/platform";
import type { TicketTask } from "@/types/task";

type TaskListProps = {
  platformTasks: TicketTask[];
  platform?: TicketPlatform;
};

function TaskList({ platformTasks, platform }: TaskListProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set(platformTasks.map((task) => task.id))
  );

  const handleToggle = useCallback((taskId: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(taskId)) {
        next.delete(taskId);
      } else {
        next.add(taskId);
      }
      return next;
    });
  }, []);

  return (
    <div className="grid gap-3">
      {platformTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          platform={platform}
          isExpanded={expandedIds.has(task.id)}
          onToggle={() => handleToggle(task.id)}
        />
      ))}
    </div>
  );
}

export default function ActiveTasksTab() {
  const { platformId } = useParams();

  const platform = platforms.find((p) => p.id === platformId);

  const platformTasks = useMemo(
    () => DummyTasks.filter((task) => task.platformId === platformId),
    [platformId]
  );

  if (platformTasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <Ticket className="h-10 w-10 text-muted-foreground mb-3" />
        <p className="text-sm text-muted-foreground mb-1">
          此平台沒有進行中的任務
        </p>
        <p className="text-xs text-muted-foreground">
          切換到「新增任務」開始搶票
        </p>
      </div>
    );
  }

  return (
    <TaskList
      key={platformId}
      platformTasks={platformTasks}
      platform={platform}
    />
  );
}
