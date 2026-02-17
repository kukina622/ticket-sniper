"use client";

import { ExternalLink } from "lucide-react";
import type { TicketPlatform } from "@/types/platform";

interface PlatformCardProps {
  platform: TicketPlatform;
  taskCount: number;
  onSelect: () => void;
}

export function PlatformCard({
  platform,
  taskCount,
  onSelect
}: PlatformCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group relative flex flex-col rounded-lg border bg-card p-4 text-left cursor-pointer transition-all hover:border-primary/40 hover:bg-card/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold"
          style={{
            backgroundColor: `hsl(${platform.color} / 0.15)`,
            color: `hsl(${platform.color})`
          }}
        >
          {platform.logo}
        </div>
      </div>

      {/* Info */}
      <h3 className="text-sm font-semibold mb-1 flex items-center gap-1.5">
        {platform.name}
        <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </h3>
      <p className="text-xs text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
        {platform.description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-1 mb-3">
        {platform.features.slice(0, 3).map((feature) => (
          <span
            key={feature}
            className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground"
          >
            {feature}
          </span>
        ))}
        {platform.features.length > 3 && (
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">
            +{platform.features.length - 3}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between pt-2 border-t">
        <span className="text-[11px] text-muted-foreground">
          {platform.category}
        </span>
        {taskCount > 0 && (
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary">
            {taskCount} 個任務
          </span>
        )}
      </div>
    </button>
  );
}
