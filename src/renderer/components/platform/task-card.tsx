import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Loader2,
  MapPin,
  Play,
  Square,
  Ticket,
  Trash2,
  XCircle,
  Zap
} from "lucide-react";
import { Badge } from "@/renderer/components/shadcn-ui/badge";
import { Button } from "@/renderer/components/shadcn-ui/button";
import { cn } from "@/renderer/utils/cn";
import type { TicketPlatform } from "@/types/platform";
import type { TicketTask } from "@/types/task";

type TaskCardProps = {
  platform: TicketPlatform;
  task: TicketTask;
  isExpanded?: boolean;
  onToggle?: () => void;
};

type Status = {
  [key in TicketTask["status"]]: {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    className: string;
    badgeClass: string;
  };
};

export default function TaskCard({
  task,
  platform,
  isExpanded = true,
  onToggle
}: TaskCardProps) {
  const statusConfig: Status = {
    waiting: {
      label: "等待中",
      icon: Clock,
      className: "text-warning",
      badgeClass: "bg-warning/15 text-warning border-warning/20"
    },
    running: {
      label: "執行中",
      icon: Loader2,
      className: "text-primary",
      badgeClass: "bg-primary/15 text-primary border-primary/20"
    },
    success: {
      label: "已成功",
      icon: CheckCircle2,
      className: "text-accent",
      badgeClass: "bg-accent/15 text-accent border-accent/20"
    },
    failed: {
      label: "已失敗",
      icon: XCircle,
      className: "text-destructive",
      badgeClass: "bg-destructive/15 text-destructive border-destructive/20"
    },
    stopped: {
      label: "已停止",
      icon: Square,
      className: "text-muted-foreground",
      badgeClass: "bg-muted/50 text-muted-foreground border-muted-foreground/20"
    }
  };

  const statusInfo = statusConfig[task.status];
  const Icon = statusInfo.icon;

  return (
    <div className="rounded-lg border bg-card overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center w-full px-4 py-3 text-left hover:bg-secondary/50 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {isExpanded ? (
            <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
          ) : (
            <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
          )}
          <Icon
            className={cn(
              "h-4 w-4 shrink-0",
              statusInfo.className,
              task.status === "running" && "animate-spin"
            )}
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium truncate">
                {task.eventName}
              </span>
              {platform && (
                <span
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0"
                  style={{
                    backgroundColor: `hsl(${platform.color} / 0.1)`,
                    color: `hsl(${platform.color})`
                  }}
                >
                  {platform.name}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-3">
          <span className="text-xs text-muted-foreground hidden sm:flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {task.eventDate}
          </span>
          <Badge
            variant="outline"
            className={cn("text-[10px]", statusInfo.badgeClass)}
          >
            {statusInfo.label}
          </Badge>
        </div>
      </button>

      {isExpanded && (
        <div className="border-t">
          <div className="px-4 py-3">
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {task.targetArea}
              </span>
              <span className="flex items-center gap-1">
                <Ticket className="h-3 w-3" />
                {task.quantity} 張
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                建立於 {task.createdAt.split("T")[1]?.slice(0, 5)}
              </span>
            </div>

            {/* Logs */}
            <div className="rounded-md bg-background border p-3 max-h-48 overflow-auto">
              <div className="flex items-center gap-1.5 mb-2">
                <Zap className="h-3 w-3 text-primary" />
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                  任務日誌
                </span>
              </div>
              {task.logs.map((log, i) => (
                <div
                  key={`${log.timestamp}-${i}`}
                  className="flex items-start gap-2 py-0.5"
                >
                  <span className="text-[10px] font-mono text-muted-foreground shrink-0">
                    [{log.timestamp}]
                  </span>
                  <span
                    className={cn("text-[11px]", {
                      "text-foreground": log.type === "info",
                      "text-accent": log.type === "success",
                      "text-warning": log.type === "warning",
                      "text-destructive": log.type === "error"
                    })}
                  >
                    {log.message}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 mt-3">
              {task.status === "running" && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs text-destructive hover:text-destructive bg-transparent hover:bg-destructive/50"
                >
                  <Square className="h-3 w-3 mr-1" />
                  停止任務
                </Button>
              )}
              {task.status === "waiting" && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs text-primary hover:text-primary bg-transparent hover:bg-primary/50"
                >
                  <Play className="h-3 w-3 mr-1" />
                  立即啟動
                </Button>
              )}
              {(task.status === "success" ||
                task.status === "failed" ||
                task.status === "stopped") && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs text-success hover:text-success bg-transparent hover:bg-success/50 transition-colors"
                >
                  <Play className="h-3 w-3 mr-1" />
                  重新執行
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="h-7 text-xs border border-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                <Trash2 className="h-3 w-3 mr-1" />
                刪除
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
