import { useMemo, useState } from "react";
import EditableField from "@/renderer/components/global-settings/editable-field";
import SettingsSection from "@/renderer/components/global-settings/settings-section";

type EditKey = "browser" | "buyer";

export default function GlobalSettings() {
  const [edit, setEdit] = useState<Record<EditKey, boolean>>({
    browser: false,
    buyer: false
  });

  const data = useMemo(
    () => ({
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64)",
      buyer: {
        name: "",
        id: "",
        phone: "",
        email: ""
      }
    }),
    []
  );

  const toggle = (key: EditKey) =>
    setEdit((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">全域設定</h2>
        <div className="text-xs text-muted-foreground">已是最新設定</div>
      </div>

      <div className="grid gap-4 max-w-2xl">
        <SettingsSection
          title="瀏覽器設定"
          isEditing={edit.browser}
          onToggleEdit={() => toggle("browser")}
        >
          <EditableField
            label="User Agent"
            isEditing={edit.browser}
            value={data.userAgent}
            placeholder="輸入 User Agent"
            mono
          />
        </SettingsSection>

        <SettingsSection
          title="購票人預設資料"
          isEditing={edit.buyer}
          onToggleEdit={() => toggle("buyer")}
        >
          <EditableField
            label="姓名"
            isEditing={edit.buyer}
            value={data.buyer.name}
            placeholder="輸入姓名"
          />
          <EditableField
            label="身分證字號"
            isEditing={edit.buyer}
            value={data.buyer.id}
            placeholder="例：A123456789"
          />
          <EditableField
            label="手機號碼"
            isEditing={edit.buyer}
            value={data.buyer.phone}
            placeholder="例：0912345678"
          />
          <EditableField
            label="Email"
            isEditing={edit.buyer}
            value={data.buyer.email}
            placeholder="例：name@example.com"
            inputProps={{ inputMode: "email" }}
          />
        </SettingsSection>
      </div>
    </div>
  );
}
