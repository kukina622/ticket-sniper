import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { useParams } from "react-router";
import { platforms } from "@/core/platforms";
import AppCard from "@/renderer/components/common/app-card";
import ExternalLink from "@/renderer/components/common/external-link";

export default function SettingsTab() {
  const { platformId } = useParams();
  const platform = platforms.find((p) => p.id === platformId);

  return (
    <div className="max-w-xl space-y-4">
      <AppCard>
        <AppCard.Header>
          <AppCard.Title>平台資訊</AppCard.Title>
        </AppCard.Header>
        <AppCard.Content className="grid gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">名稱</span>
            <span className="text-sm">{platform.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">分類</span>
            <span className="text-sm">{platform.category}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">網址</span>
            <ExternalLink
              link={platform.url}
              rel="noopener noreferrer"
              className="text-sm text-primary flex items-center gap-1 hover:underline"
            >
              {platform.url}
              <ExternalLinkIcon className="h-3 w-3" />
            </ExternalLink>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">支援功能</span>
            <div className="flex items-center gap-1">
              {platform.features.map((f) => (
                <span
                  key={f}
                  className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </AppCard.Content>
      </AppCard>
    </div>
  );
}
