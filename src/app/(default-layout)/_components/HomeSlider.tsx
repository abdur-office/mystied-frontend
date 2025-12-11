"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function SlideStatus() {
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
    <div className="relative drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] select-none">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[200px] w-full overflow-hidden sm:h-[300px] lg:h-[391px]">
                <Image
                  src="https://i.ibb.co.com/F4Mrd1rP/Rectangle-34624857.png"
                  alt="Home Slider"
                  width={1000}
                  height={1000}
                  className="h-full w-full rounded-[20px] object-cover object-center"
                  priority
                  loading="eager"
                  quality={100}
                />
                <div className="absolute right-0 bottom-[70px] left-6 max-w-[350px]">
                  <Link
                    href="/"
                    className="line-clamp-2 text-[30px] leading-[120%] font-semibold tracking-[0.33px] text-white"
                  >
                    Cheerleader Ahn Ji-hyun, the goddess of innocence
                  </Link>
                </div>
                <div className="absolute right-0 bottom-6 left-6 max-w-[460px]">
                  <Link
                    href="/"
                    className="font-primary line-clamp-1 text-base font-medium text-white"
                  >
                    ［安芝儇 Anjihyeon
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute right-28 bottom-4 z-10 hidden h-[33px] w-[71px] items-center justify-center gap-[10px] bg-[url('/images/slider-bg.png')] bg-contain bg-center px-[14px] py-[6px] lg:flex">
          {current}/{count}
        </div>
        <div>
          <CarouselPrevious className="top-[calc(100%-50px)] right-16 left-auto translate-x-0 translate-y-0" />
          <CarouselNext className="top-[calc(100%-50px)] right-6 translate-x-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
}

import { type UseEmblaCarouselType } from "embla-carousel-react";

import { ArrowIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "bg-accent absolute size-[30px] rounded-full border-none bg-[url('/images/round.png')] bg-contain bg-center",
        orientation === "horizontal"
          ? "top-1/2 -left-8 -translate-y-1/2"
          : "-top-8 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowIcon className="rotate-180" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "bg-accent absolute size-[30px] rounded-full border-none bg-[url('/images/round.png')] bg-contain bg-center",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowIcon />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}
