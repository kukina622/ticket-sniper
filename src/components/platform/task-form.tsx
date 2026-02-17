/** biome-ignore-all lint/suspicious/noExplicitAny: <> */
import { useMemo } from "react";
import AppCard from "@/components/app-card";
import { Input } from "@/components/shadcn-ui/input";
import { Label } from "@/components/shadcn-ui/label";
import { Switch } from "@/components/shadcn-ui/switch";
import type { SectionDef } from "@/types/platform-form/schema";

type TaskFormProps<T> = {
  sections: SectionDef<T>[];
  values: T;
  setValue: (name: keyof T, value: any) => void;
  errors?: Record<string, string>;
};

export default function TaskForm<T>({
  sections,
  values,
  setValue,
  errors
}: TaskFormProps<T>) {
  const errorMap = useMemo(() => errors ?? {}, [errors]);

  const leftSections = sections.filter((s) => s.layout?.column === "left");
  const rightSections = sections.filter((s) => s.layout?.column === "right");
  const fullSections = sections.filter((s) => s.layout?.column === "full");

  const defaultSections = sections.filter((s) => !s.layout?.column);

  const renderSection = (section: SectionDef<T>) => (
    <AppCard key={section.key}>
      <AppCard.Header>
        {section.icon}
        <AppCard.Title>{section.title}</AppCard.Title>
      </AppCard.Header>
      <AppCard.Content className="grid gap-3">
        {section.fields.map((item, idx) => {
          const row = Array.isArray(item) ? item : [item];
          const visibleRow = row.filter(
            (field) => !(field.when && !field.when(values))
          );

          if (visibleRow.length === 0) return null;

          return (
            <div
              key={`row-${idx}-${visibleRow.map((f) => String(f.name)).join("-")}`}
              className="flex flex-col md:flex-row gap-3"
            >
              {visibleRow.map((field) => {
                const name = field.name.toString();
                const value = (values as any)[field.name];
                const err = errorMap[name];

                if (field.type === "switch") {
                  return (
                    <div key={name} className="flex-1 min-w-0">
                      <div className="flex items-center justify-between rounded-md border px-3 py-2">
                        <span className="text-xs text-muted-foreground">
                          {field.label}
                        </span>
                        <Switch
                          checked={Boolean(value)}
                          onCheckedChange={(v) => setValue(field.name, v)}
                        />
                      </div>
                      {err && (
                        <p className="text-xs text-destructive mt-1.5">{err}</p>
                      )}
                    </div>
                  );
                }

                return (
                  <div key={name} className="flex-1 min-w-0">
                    <Label className="text-xs text-muted-foreground">
                      {field.label}
                    </Label>
                    <Input
                      id={name}
                      type={field.type}
                      placeholder={field.placeholder}
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      className={`bg-background text-sm ${err ? "border-destructive" : ""}`}
                      value={value as any}
                      onChange={(e) => {
                        const raw = e.target.value;
                        const next =
                          field.type === "number"
                            ? raw === ""
                              ? ("" as any)
                              : Number(raw)
                            : raw;
                        setValue(field.name, next);
                      }}
                    />
                    {err && (
                      <p className="text-xs text-destructive mt-1.5">{err}</p>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </AppCard.Content>
    </AppCard>
  );

  return (
    <>
      {/* full 的 section 跨兩欄 */}
      {fullSections.length > 0 && (
        <div className="lg:col-span-2 space-y-6">
          {fullSections.map(renderSection)}
        </div>
      )}

      {/* 左側欄位 */}
      <div className="space-y-6">
        {[...leftSections, ...defaultSections].map(renderSection)}
      </div>

      {/* 右側欄位 */}
      <div className="space-y-6">{rightSections.map(renderSection)}</div>
    </>
  );
}
