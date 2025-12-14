"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import Image from "next/image";

export default function PostCartImage() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const slides = React.useMemo(
    () => [
      {
        type: "video" as const,
        src: "/video/video.mp4",
        poster: "https://ui.shadcn.com/placeholder.svg",
        alt: "Post Card video",
      },
      {
        type: "image" as const,
        src: "https://ui.shadcn.com/placeholder.svg",
        alt: "Post Card image 1",
      },
      {
        type: "image" as const,
        src: "https://ui.shadcn.com/placeholder.svg",
        alt: "Post Card image 2",
      },
    ],
    [],
  );

  const videoIndex = React.useMemo(
    () => slides.findIndex((slide) => slide.type === "video"),
    [slides],
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
      const selectedIndex = api.selectedScrollSnap();

      if (
        videoRef.current &&
        videoIndex !== -1 &&
        selectedIndex !== videoIndex
      ) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsVideoPlaying(false);
      }
    };

    api.on("select", handleSelect);
  }, [api, videoIndex]);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => setIsVideoPlaying(false);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const handleVideoPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    video.play();
    setIsVideoPlaying(true);
  };

  return (
    <div className="mb-2 select-none">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="h-[200px] sm:h-[300px] lg:h-[392px]">
                {slide.type === "image" ? (
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={1000}
                    height={1000}
                    className="h-full w-full rounded-[20px] object-cover"
                  />
                ) : (
                  <div className="relative h-full w-full overflow-hidden rounded-[20px]">
                    <video
                      ref={videoRef}
                      className="h-full w-full object-cover"
                      poster={slide.poster}
                      controls={isVideoPlaying}
                      src={slide.src}
                    />
                    {!isVideoPlaying && (
                      <button
                        type="button"
                        onClick={handleVideoPlay}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
                        aria-label="Play video"
                      >
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/70 text-white shadow-lg">
                          <Play className="h-6 w-6" />
                        </span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-3 flex items-center justify-center gap-1">
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
