import { ChatIcon } from "@/components/icons/Chat";
import { ListIcon } from "@/components/icons/List";
import { MoreIcon } from "@/components/icons/More";

import {
  AlarmClock,
  Image as IMGIcon,
  Link2,
  Mic,
  Smile,
  Video,
} from "lucide-react";
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
              <Smile className="size-3.5 text-[#9B9A9D]" />
            </button>
          </li>
          <li>
            <button className="size-5">
              <MoreIcon className="stroke-[#777777]" />
            </button>
          </li>
          <li>
            <button className="size-5">
              <AlarmClock className="size-3.5 text-[#9B9A9D]" />
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
        <textarea
          placeholder="Type a message..."
          className="min-h-[30px] w-full border-t border-[#C7C7CC] pt-2.5 text-xs font-normal text-black outline-none placeholder:text-[#9B9A9D] dark:border-[#303234] dark:text-white"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-1 *:inline-flex">
          <li>
            <button>
              <IMGIcon className="size-3.5 text-[#9B9A9D]" />
            </button>
          </li>
          <li>
            <button>
              <Mic className="size-3.5 text-[#9B9A9D]" />
            </button>
          </li>
          <li>
            <button>
              <Video className="size-3.5 text-[#9B9A9D]" />
            </button>
          </li>
          <li>
            <button>
              <Smile className="size-3.5 text-[#9B9A9D]" />
            </button>
          </li>
          <li>
            <button>
              <Link2 className="size-3.5 text-[#9B9A9D]" />
            </button>
          </li>
          <li>
            <button className="unlock-btn-2 h-[22px]! w-[30px]! pt-0.5">
              $
            </button>
          </li>
        </ul>
        <div>
          <button className="message-send-btn">SEND</button>
        </div>
      </div>
    </div>
  );
}
