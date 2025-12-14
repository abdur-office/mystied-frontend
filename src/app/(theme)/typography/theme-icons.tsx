import {
  AngleUpIcon,
  ArrowUpIcon,
  BlockIcon,
  CallIcon,
  ChartIcon,
  ChatIcon,
  ClockIcon,
  ElectricityIcon,
  EyeIcon,
  FileIcon,
  FilesIcon,
  FingerPrintIcon,
  GifIcon,
  GoogleIcon,
  HeartIcon,
  ImageIcon,
  KeyIcon,
  KingIcon,
  LinkIcon,
  ListIcon,
  MediaIcon,
  MoreIcon,
  PrintIcon,
  SmileIcon,
  Twitter,
  UndoIcon,
  UserIcon,
  UserScan,
  VideoIcon,
  VideoMd,
  VideoPlay,
  VoiceIcon,
  WarningTriangleIcon,
  X2Icon,
  XIcon,
} from "@/components/icons";
import CopyButton from "@/components/ui/copy-button";
import { IconProps } from "@/type/icon";
import type { ComponentType } from "react";

type ThemeIcon = {
  name: string;
  Icon: ComponentType<IconProps>;
};

export const themeIcons: ThemeIcon[] = [
  { name: "BlockIcon", Icon: BlockIcon },
  { name: "CallIcon", Icon: CallIcon },
  { name: "ChatIcon", Icon: ChatIcon },
  { name: "ClockIcon", Icon: ClockIcon },
  { name: "ElectricityIcon", Icon: ElectricityIcon },
  { name: "EyeIcon", Icon: EyeIcon },
  { name: "FileIcon", Icon: FileIcon },
  { name: "FilesIcon", Icon: FilesIcon },
  { name: "FingerPrintIcon", Icon: FingerPrintIcon },
  { name: "GoogleIcon", Icon: GoogleIcon },
  { name: "HeartIcon", Icon: HeartIcon },
  { name: "KeyIcon", Icon: KeyIcon },
  { name: "KingIcon", Icon: KingIcon },
  { name: "ListIcon", Icon: ListIcon },
  { name: "MoreIcon", Icon: MoreIcon },
  { name: "PrintIcon", Icon: PrintIcon },
  { name: "SmileIcon", Icon: SmileIcon },
  { name: "Twitter", Icon: Twitter },
  { name: "UserIcon", Icon: UserIcon },
  { name: "WarningTriangleIcon", Icon: WarningTriangleIcon },
  { name: "XIcon", Icon: XIcon },
  { name: "X2Icon", Icon: X2Icon },
  { name: "ImageIcon", Icon: ImageIcon },
  { name: "VoiceIcon", Icon: VoiceIcon },
  { name: "VideoIcon", Icon: VideoIcon },
  { name: "LinkIcon", Icon: LinkIcon },
  { name: "ArrowUpIcon", Icon: ArrowUpIcon },
  { name: "AngleUpIcon", Icon: AngleUpIcon },
  { name: "UndoIcon", Icon: UndoIcon },
  { name: "ChartIcon", Icon: ChartIcon },
  { name: "MediaIcon", Icon: MediaIcon },
  { name: "GifIcon", Icon: GifIcon },
  { name: "VideoMdIcon", Icon: VideoMd },
  { name: "VideoPlayIcon", Icon: VideoPlay },
  { name: "UserScanIcon", Icon: UserScan },
];

export function ThemeIconsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {themeIcons.map(({ name, Icon }) => (
        <div
          key={name}
          className="rounded-xl border border-white/10 bg-[#1C1C1E] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
        >
          <div className="flex items-center justify-center rounded-lg bg-white/5 p-4">
            <Icon size={28} className="stroke-white text-white" />
          </div>
          <p className="mt-3 text-sm font-medium text-white">{name}</p>
          <div className="text-theme-gray mt-2 flex items-center justify-between text-[11px]">
            <code className="truncate">&lt;{name} /&gt;</code>
            <CopyButton
              text={`<${name} size={28} className="stroke-white text-white" />`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
