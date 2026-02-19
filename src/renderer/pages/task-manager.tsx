import { Pause, Ticket, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { dummyTasks } from "@/core/tasks";
import TaskCard from "@/renderer/components/platform/task-card";
import { Button } from "@/renderer/components/shadcn-ui/button";
import { cn } from "@/renderer/utils/cn";
import type { TicketTask } from "@/types/task";

type FilterStatus = "all" | TicketTask["status"];
const filters: { id: FilterStatus; label: string }[] = [
  { id: "all", label: "全部" },
  { id: "running", label: "執行中" },
  { id: "waiting", label: "等待中" },
  { id: "success", label: "已成功" },
  { id: "failed", label: "已失敗" }
];

export default function TaskManager() {
  const [filter, setFilter] = useState<FilterStatus>("all");

  const filteredTasks = useMemo(() => {
    if (filter === "all") return dummyTasks;
    return dummyTasks.filter((task) => task.status === filter);
  }, [filter]);

  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">任務管理</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            管理所有搶票任務的狀態與日誌
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-xs hover:bg-muted hover:text-foreground"
          >
            <Pause className="h-3.5 w-3.5 mr-1" />
            全部暫停
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-xs text-destructive hover:text-destructive bg-transparent hover:bg-destructive/30"
          >
            <Trash2 className="h-3.5 w-3.5 mr-1" />
            清除已完成
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-1.5 mb-4 border-b pb-3">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-colors cursor-pointer",
              filter === f.id
                ? "bg-primary/15 text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid gap-2">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            isExpanded={expandedTaskId === task.id}
            onToggle={() =>
              setExpandedTaskId(expandedTaskId === task.id ? null : task.id)
            }
            platform={undefined}
          />
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16">
          <Ticket className="h-10 w-10 text-muted-foreground mb-3" />
          <p className="text-sm text-muted-foreground">沒有符合篩選的任務</p>
        </div>
      )}
    </div>
  );
}
