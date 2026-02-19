import { Pause, Trash2 } from "lucide-react";
import { Button } from "@/renderer/components/shadcn-ui/button";

export default function TaskManager() {
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
      <div className="flex items-center gap-1.5 mb-4 border-b pb-3"></div>
    </div>
  );
}
