"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default function SignUpCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);
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
    <div>
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <CarouselItem key={index}>
                <div>
                  <h2 className="mb-4 text-3xl leading-tight font-semibold">
                    Sign up to support your favorite creators
                  </h2>
                  <p className="text-paragraph max-w-[360px] text-base font-normal">
                    View all the analytics and grow your business from anywhere
                  </p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div className="mt-4 flex items-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-1 w-1 rounded-full bg-gray-600 transition-all duration-300 ease-out",
              {
                "w-3.5 bg-blue-500": current === index + 1,
              },
            )}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
