/** biome-ignore-all lint/suspicious/noExplicitAny: <> */
import { useMemo } from "react";
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

  return (
    <>
      {sections.map((section) => (
        <div className="space-y-4" key={section.key}>
          <div className="rounded-lg border bg-card p-4">
            <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
              {section.icon}
              {section.title}
            </h3>
            <div className="grid gap-3">
              {section.fields.map((item, idx) => {
                const row = Array.isArray(item) ? item : [item];

                const visibleRow = row.filter(
                  (field) => !(field.when && !field.when(values))
                );

                if (visibleRow.length === 0) return null;

                const cols = `md:grid-cols-${visibleRow.length}`;

                return (
                  <div
                    key={`row-${idx}-${visibleRow.map((f) => String(f.name)).join("-")}`}
                    className={`grid grid-cols-1 gap-3 ${cols}`}
                  >
                    {visibleRow.map((field) => {
                      const name = field.name.toString();
                      const value = (values as any)[field.name];
                      const err = errorMap[name];

                      if (field.type === "switch") {
                        return (
                          <div key={name} className="grid gap-1.5">
                            <div className="flex items-center justify-between rounded-md border px-3 py-2">
                              <span className="text-xs text-muted-foreground">
                                {field.label}
                              </span>
                              <Switch
                                checked={Boolean(value)}
                                onCheckedChange={(v) => setValue(field.name, v)}
                              />
                            </div>

                            {err ? (
                              <p className="text-xs text-destructive">{err}</p>
                            ) : null}
                          </div>
                        );
                      }

                      return (
                        <div key={name} className="grid gap-1.5">
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
                          {err ? (
                            <p className="text-xs text-destructive">{err}</p>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
