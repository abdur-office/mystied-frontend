"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Edit2 } from "iconsax-reactjs";

export default function PostCartImage() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const slides = React.useMemo(
    () => [
      {
        text: "Personal notes (Only you can see )",
      },

      {
        text: "Personal notes (Only you can see )",
      },
    ],
    [],
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);
  }, [api]);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => setIsVideoPlaying(false);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="mb-2 select-none">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <div className="max-w-[190px] ps-10 pt-5">
                <p className="text-[17px] font-medium tracking-[0.187px] text-[#947DCB] dark:text-[#FFED77]">
                  {slide.text}
                </p>
                <button className="edit-btn absolute right-2 bottom-0">
                  <Edit2
                    variant="Broken"
                    className="text-common-text size-[22px]"
                  />
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-3 flex items-center justify-center gap-1 pb-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn("bg-paragraph h-1.5 w-1.5 rounded-full", {
              "bg-[#956FBBCC]": current === index + 1,
            })}
          />
        ))}
      </div>
    </div>
  );
}
