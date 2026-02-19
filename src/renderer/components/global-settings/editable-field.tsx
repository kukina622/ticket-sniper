import { Input } from "@/renderer/components/shadcn-ui/input";

export default function EditableField(props: {
  label: string;
  isEditing: boolean;
  value?: string | null;
  placeholder?: string;
  mono?: boolean;
  inputProps?: React.ComponentProps<typeof Input>;
}) {
  const { label, isEditing, value, placeholder, mono, inputProps } = props;

  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground shrink-0">{label}</span>

      {!isEditing ? (
        <span
          className={[
            "text-xs text-muted-foreground truncate max-w-75",
            mono ? "font-mono" : ""
          ].join(" ")}
          title={value ?? ""}
        >
          {value?.trim() ? value : "尚未設定"}
        </span>
      ) : (
        <Input
          className="max-w-90 text-xs"
          placeholder={placeholder}
          defaultValue={value ?? ""}
          {...inputProps}
        />
      )}
    </div>
  );
}
