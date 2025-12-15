"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Timezone = {
  id: string;
  label: string;
};

const timezones: Timezone[] = [
  { id: "yangon", label: "(UTC+6:30) Yangon" },
  { id: "bangkok", label: "(UTC+7) Bangkok" },
  { id: "hochiminh", label: "(UTC+7) Ho Chi Minh" },
  { id: "jakarta", label: "(UTC+7) Jakarta" },
  { id: "chongqing", label: "(UTC+8) Chongqing" },
  { id: "hongkong", label: "(UTC+8) Hong Kong" },
  { id: "kualalumpur", label: "(UTC+8) Kuala Lumpur" },
  { id: "manila", label: "(UTC+8) Manila" },
  { id: "perth", label: "(UTC+8) Perth" },
  { id: "shanghai", label: "(UTC+8) Shanghai" },
  { id: "singapore", label: "(UTC+8) Singapore" },
  { id: "taipei", label: "(UTC+8) Taipei" },
  { id: "seoul", label: "(UTC+9) Seoul" },
  { id: "tokelau", label: "(UTC+13) Tokelau" },
  { id: "tokyo", label: "(UTC+9) Tokyo" },
  { id: "adelaide", label: "(UTC+9:30) Adelaide" },
];

interface TimezoneDialogProps {
  trigger?: ReactNode;
  onChange?: (timezone: Timezone) => void;
}

export default function TimezoneDialog({
  trigger,
  onChange,
}: TimezoneDialogProps) {
  const [selectedId, setSelectedId] = useState<string>("singapore");

  const handleSelect = (timezone: Timezone) => {
    setSelectedId(timezone.id);
    onChange?.(timezone);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? (
          <button className="text-sm text-[#141414] dark:text-white/80">
            Select Timezone
          </button>
        )}
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="w-[194px] rounded-[14px] border-none bg-[#E5E5EA] p-3 text-white dark:bg-[#1C1C1E]"
      >
        {/* Header */}
        <div hidden className="relative mb-2 flex items-center justify-between">
          <DialogTitle className="text-sm font-semibold text-[#141414] dark:text-white">
            Select Timezone
          </DialogTitle>
          <DialogClose aria-label="Close">
            <X className="size-5 text-black/70 dark:text-white/70" />
          </DialogClose>
        </div>

        {/* List */}
        <div className="cst-scrollbar-2 max-h-[320px] overflow-y-auto">
          {timezones.map((tz) => {
            const selected = tz.id === selectedId;

            return (
              <button
                key={tz.id}
                onClick={() => handleSelect(tz)}
                className={cn(
                  "w-full rounded-lg px-3 py-2 text-left text-xs text-[#9B9A9D] transition",
                  selected
                    ? "text-common-text bg-[#D6DBE0] dark:bg-[#393741] dark:text-[#B6B7C9]"
                    : "text-paragraph hover:text-common-text dark:hover:text-white",
                )}
              >
                {tz.label}
              </button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
