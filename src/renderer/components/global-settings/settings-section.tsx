import AppCard from "@/renderer/components/common/app-card";

export default function SettingsSection(props: {
  title: string;
  isEditing: boolean;
  onToggleEdit: () => void;
  children: React.ReactNode;
}) {
  const { title, isEditing, onToggleEdit, children } = props;

  return (
    <AppCard>
      <AppCard.Header className="justify-between">
        <AppCard.Title>{title}</AppCard.Title>
        <button
          type="button"
          className="text-xs px-3 py-1 rounded-md border hover:bg-muted"
          onClick={onToggleEdit}
        >
          {isEditing ? "儲存" : "編輯"}
        </button>
      </AppCard.Header>
      <AppCard.Content className="grid gap-3">{children}</AppCard.Content>
    </AppCard>
  );
}
