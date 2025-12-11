import {
  ImageIcon,
  LinkIcon,
  UserIcon,
  VideoIcon,
  VoiceIcon,
} from "@/components/icons";
import { ChatIcon } from "@/components/icons/Chat";
import { ClockIcon } from "@/components/icons/Clock";
import { ListIcon } from "@/components/icons/List";
import { MoreIcon } from "@/components/icons/More";
import Image from "next/image";
export default function MessageSend() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-1">
          <li>
            <button className="size-5">
              <Image
                src="/svgs/kiss-mark.png"
                alt="camera"
                width={50}
                height={50}
              />
            </button>
          </li>
          <li>
            <button>
              <Image src="/svgs/love.gif" alt="camera" width={20} height={20} />
            </button>
          </li>
          <li>
            <button>
              <Image
                src="/svgs/heart.gif"
                alt="camera"
                width={20}
                height={20}
              />
            </button>
          </li>
          <li>
            <button>
              <Image
                src="/svgs/hand-rise.gif"
                alt="camera"
                width={20}
                height={20}
              />
            </button>
          </li>
          <li>
            <button>
              <Image src="/svgs/hand.gif" alt="camera" width={20} height={20} />
            </button>
          </li>
        </ul>
        <ul className="flex items-center gap-1">
          <li>
            <button className="size-5">
              <UserIcon size={14} className="stroke-black text-white" />
            </button>
          </li>
          <li>
            <button className="size-5">
              <MoreIcon className="stroke-[#777777]" />
            </button>
          </li>
          <li>
            <button className="size-5">
              <ClockIcon className="stroke-[#777777]" />
            </button>
          </li>
          <li>
            <button className="size-5">
              <ChatIcon className="stroke-[#777777]" />
            </button>
          </li>
          <li>
            <button className="size-5">
              <ListIcon className="fill-[#777777]" />
            </button>
          </li>
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full border-t border-[#303234] pt-2.5 text-xs font-normal text-black outline-none placeholder:text-[#9B9A9D]"
        />
      </div>
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-1 *:inline-flex">
          <li>
            <button>
              <ImageIcon size={14} className="fill-white text-white" />
            </button>
          </li>
          <li>
            <button>
              <VoiceIcon size={14} className="stroke-white text-white" />
            </button>
          </li>
          <li>
            <button>
              <VideoIcon size={14} className="fill-[#9B9A9D] text-[#9B9A9D]" />
            </button>
          </li>
          <li>
            <button>
              <UserIcon size={14} className="fill-[#9B9A9D] text-[#9B9A9D]" />
            </button>
          </li>
          <li>
            <button>
              <LinkIcon size={14} className="fill-[#9B9A9D] text-[#9B9A9D]" />
            </button>
          </li>
          <li>
            <button className="unlock-btn-2 h-[22px]! w-[30px]!">$</button>
          </li>
        </ul>
        <div>
          <button className="message-send-btn">SEND</button>
        </div>
      </div>
    </div>
  );
}
