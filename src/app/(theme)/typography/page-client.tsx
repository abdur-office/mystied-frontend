"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CopyButton from "@/components/ui/copy-button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import ThemeAlertConfirm from "./theme-alert-confirm";
import { themeBadges } from "./theme-badge";
import { themeButtons } from "./theme-buttons";
import { themeCards } from "./theme-card";
import { themeColors } from "./theme-colors";
import { DropdownMenuDialog } from "./theme-dropdown";
import { ThemeIconsGrid } from "./theme-icons";
import { themeText } from "./theme-text";

export default function PageClient() {
  return (
    <section className="container mx-auto space-y-10 py-5">
      <DropdownMenuDialog />
      <ThemeAlertConfirm />
      {/* THEME COLORS */}
      <div className="space-y-6">
        <h2 className="mb-4 underline">Theme Colors:</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {themeColors.map((color) => (
            <div key={color.name} className="flex items-center gap-4">
              <p className={`font-semibold ${color.text}`}>
                {color.name}
                <span className="ml-2 text-xs">
                  <code className="text-theme-blue">.{color.text}</code>
                  <CopyButton text={color.text} />
                </span>
              </p>

              {/* Background color preview */}
              <div className="flex items-center gap-2">
                <div className={`h-6 w-16 rounded ${color.bg}`}></div>
                <code className="text-xs opacity-70">.{color.bg}</code>
                <CopyButton text={color.bg} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* TEXT CLASSES */}
      <div className="space-y-6">
        <h2 className="mb-4 underline">Text Classes:</h2>
        <div className="space-y-4">
          <table className="w-full text-left text-sm">
            <tbody className="divide-y divide-white/10">
              {themeText.map((item) => (
                <tr key={item.class}>
                  <td className="py-2">
                    <span className="mr-4 ml-2 text-xs">
                      <code className="text-theme-blue">.{item.class}</code>
                    </span>
                    <span className={item.class}>{item.example}</span>
                    <CopyButton text={item.class} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* ICONS */}
      <div className="space-y-6">
        <h2 className="mb-4 underline">Iconography:</h2>
        <ThemeIconsGrid />
      </div>

      {/* BUTTON   */}
      <div className="space-y-6">
        <h2 className="mb-4 underline">Button Designs:</h2>
        <div className="flex flex-wrap gap-6">
          {themeButtons.map((btn) => (
            <div key={btn.name}>
              {/* Live Button Preview */}
              <Button
                className={btn.className}
                variant={btn.variant}
                size={btn.size}
              >
                {btn.name}
              </Button>
              <CopyButton text={btn.example} />
            </div>
          ))}
        </div>
      </div>

      {/* BADGE */}
      <div className="space-y-6">
        <h2 className="mb-4 underline">Badge Designs:</h2>
        <div className="flex flex-wrap gap-6">
          {themeBadges.map((badge) => (
            <div key={badge.name}>
              <Badge
                variant={badge.variant}
                size={badge.size}
                rounded={badge.rounded}
              >
                {badge.name}
              </Badge>
              <CopyButton text={badge.example} />
            </div>
          ))}
        </div>
      </div>

      {/* CARD */}
      <div className="space-y-6">
        <h2 className="mb-4 underline">Theme Cards:</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {themeCards.map((card, index) => (
            <div key={index}>
              {/* Card Preview */}
              <Card
                padding={card.padding}
                rounded={card.rounded}
                border={card.border}
                bg={card.bg}
                className="relative h-32"
              >
                <CardContent>
                  <p className="text-white">{card.name}</p>
                  {/* Copy JSX Button */}
                  <div className="absolute top-2 right-2">
                    <CopyButton text={card.example} />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
          <Card
            rounded="22"
            shadow="inset"
            bg="primary"
            className="relative overflow-hidden bg-gradient-to-br from-[#413F47FF] to-[#34333A00] before:pointer-events-none before:absolute before:inset-0 before:rounded-lg before:border-[1.5px] before:border-[#413F47FF] before:content-['']"
          >
            Test
          </Card>
        </div>
      </div>

      {/* INPUT */}
      <div className="space-y-6">
        <h2 className="mb-4 underline">Input Designs:</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Input placeholder="Input" />

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Textarea placeholder="Type your message here." />
        </div>
      </div>
    </section>
  );
}
