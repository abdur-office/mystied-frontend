"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function PostCartImage() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mb-2 select-none">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="h-[200px] sm:h-[300px] lg:h-[392px]">
                <Image
                  src="https://ui.shadcn.com/placeholder.svg"
                  alt="Post Card"
                  width={1000}
                  height={1000}
                  className="h-full w-full rounded-[20px] object-cover"
                />
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
