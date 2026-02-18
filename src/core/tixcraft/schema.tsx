import { Calendar, Clock, MapPin, Settings2, Ticket, User } from "lucide-react";
import type { SectionDef } from "@/types/platform-form/schema";
import type { TixcraftTaskConfig } from "./config";

export const tixcraftTaskSections: SectionDef<TixcraftTaskConfig>[] = [
  {
    key: "event",
    title: "活動資訊",
    icon: <Ticket className="h-4 w-4 text-primary" />,
    layout: { column: "left" },
    fields: [
      {
        name: "eventUrl",
        label: "活動網址",
        type: "text",
        required: true,
        placeholder: "https://tixcraft.com/activity/detail/..."
      },
      {
        name: "eventName",
        label: "活動名稱",
        type: "text",
        placeholder: "例如：五月天 2026 巡迴演唱會"
      },
      [
        {
          name: "eventDate",
          label: (
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 活動日期
            </span>
          ),
          type: "date"
        },
        {
          name: "startTime",
          label: (
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> 開賣時間
            </span>
          ),
          type: "time",
          step: 1
        }
      ],
      {
        name: "targetArea",
        label: (
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3 w-3" /> 目標區域
          </span>
        ),
        type: "text",
        placeholder: "搖滾區、VIP 區..."
      },
      {
        name: "quantity",
        label: "張數",
        type: "number",
        min: 1,
        max: 10
      },
      {
        name: "maxPrice",
        label: "最高價格 (0 = 不限)",
        type: "number",
        min: 0
      }
    ]
  },
  {
    key: "buyer",
    title: "購票人資料",
    icon: <User className="h-4 w-4 text-primary" />,
    layout: { column: "right" },
    fields: [
      { name: "autoFill", label: "自動填寫", type: "switch" },
      {
        name: "buyerName",
        label: "姓名",
        type: "text",
        placeholder: "王小明"
      },
      {
        name: "buyerId",
        label: "身分證字號",
        type: "text",
        placeholder: "A123456789"
      },
      {
        name: "buyerPhone",
        label: "手機號碼",
        type: "text",
        placeholder: "0912345678"
      },
      {
        name: "buyerEmail",
        label: "Email",
        type: "email",
        placeholder: "example@mail.com"
      }
    ]
  },
  {
    key: "advanced",
    title: "進階設定",
    icon: <Settings2 className="h-4 w-4 text-primary" />,
    layout: { column: "right" },
    fields: [
      [
        {
          name: "refreshInterval",
          label: "刷新間隔 (ms)",
          type: "number",
          min: 100,
          step: 100
        },
        {
          name: "maxRetries",
          label: "最大重試次數",
          type: "number",
          min: 1
        }
      ]
    ]
  }
];

export const tixcraftAuthSections: SectionDef<{ sid: string }>[] = [
  {
    key: "auth",
    title: "驗證資訊",
    icon: <User className="h-4 w-4 text-primary" />,
    layout: { column: "full" },
    fields: [
      {
        name: "sid",
        label: "SID",
        type: "text",
        required: true,
        placeholder: "從 Cookie 中取得的 SID"
      }
    ]
  }
];
