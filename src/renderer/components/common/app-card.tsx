import type { HTMLAttributes } from "react";
import { cn } from "@/renderer/utils/cn";

type AppCardProps = HTMLAttributes<HTMLDivElement>;

function AppCard({ className, ...props }: AppCardProps) {
  return (
    <div
      className={cn("rounded-lg border bg-card p-4", className)}
      {...props}
    />
  );
}

type SectionProps = HTMLAttributes<HTMLDivElement>;

function Header({ className, ...props }: SectionProps) {
  return (
    <div className={cn("mb-4 flex items-center gap-2", className)} {...props} />
  );
}

type TitleProps = HTMLAttributes<HTMLHeadingElement>;

function Title({ className, ...props }: TitleProps) {
  return <h3 className={cn("text-sm font-medium", className)} {...props} />;
}

function Content({ className, ...props }: SectionProps) {
  return <div className={cn("", className)} {...props} />;
}

AppCard.Header = Header;
AppCard.Title = Title;
AppCard.Content = Content;

export default AppCard;
