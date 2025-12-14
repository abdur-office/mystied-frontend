import { Comment1Icon, LikeFieldIcon, SendIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Flag, More } from "iconsax-reactjs";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import PostCartImage from "./PostCartImage";
export default function PostCard() {
  return (
    <div className="dark:bg-theme-dark-purple-2 rounded-[20px] bg-[#F0EEEE] p-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)_0_4px_4px_rgba(0,0,0,0.25)]">
      {/* author info  */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="border-theme-dark-blue-4 size-11 rounded-full border bg-[#D1D9DD]">
            <Image
              src="https://i.ibb.co.com/nNvS17w4/Ellipse-16964.png"
              alt="Post Card"
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="inline-flex items-center gap-1.5 text-base font-medium text-black dark:text-white">
              Mystied
              <Image
                src="/svgs/verify.svg"
                alt="Post Card"
                width={100}
                height={100}
                className="h-[18px] w-[18px] object-contain"
              />
            </h3>
            <p className="text-paragraph text-xs font-medium">@mystied</p>
          </div>
        </div>
        <div>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                aria-label="Open menu"
                className="text-black dark:text-white"
              >
                <More className="size-6 text-white" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Flag className="mr-1.5 size-4 text-white" /> Report
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Flag className="mr-1.5 size-4 text-white" /> Block
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="mb-4">
        <p className="line-clamp-2 text-base font-medium tracking-[0.192px] text-[#141414] dark:text-white">
          Step into luxury with
          <span className="text-[#1E72C1]"> @toochis_world </span> as she tours
          <span className="text-[#1E72C1]"> @daniibankstv's </span>
          stunning Miami penthouse, filled with style, glamour, and breathtaking
          views.
        </p>
      </div>
      <PostCartImage />

      {/* action buttons */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <LikeFieldIcon className="text-theme-danger fill-theme-danger" />
          <Comment1Icon className="size-6 fill-black dark:fill-white" />
          <SendIcon className="size-6 fill-black dark:fill-white" />
          <button className="h-[34px] w-[100px] bg-[url('/images/btn-tips.png')] bg-contain bg-center bg-no-repeat text-base font-normal tracking-[0.192px] text-black">
            Send Tips
          </button>
        </div>
        <div>
          <button>
            <Bookmark
              strokeWidth={1}
              className="size-6 text-black dark:text-white"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
