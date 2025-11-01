"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import DestinationCard, { demoDestinations } from "../cards/destination-card";
import ProgressBar from "../ui/ProgressBar";

const OPTIONS = {
  loop: false,
  align: "start" as const,
  dragFree: true,
  slidesToScroll: 1,
};

export default function DestinationSlider() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [, setPrevBtnEnabled] = useState(false);
  const [, setNextBtnEnabled] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    WheelGesturesPlugin({ forceWheelAxis: "x" }),
  ]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress);

    // Update button states
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);

    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onScroll);
    };
  }, [emblaApi, onScroll]);

  return (
    <div className="relative h-full w-full">
      <div className="" ref={emblaRef}>
        <div className="flex -ml-3 sm:-ml-4 lg:-ml-6">
          {demoDestinations.map((destination) => (
            <div
              key={destination.id}
              className="flex-[0_0_100%] pl-4 sm:pl-4 lg:pl-4 min-[350px]:flex-[0_0_66.666%] min-[650px]:flex-[0_0_40%] min-[850px]:flex-[0_0_33.333%] min-[1400px]:flex-[0_0_24%]"
            >
              <DestinationCard
                title={destination.attributes.title}
                packages={destination.attributes.packages}
                image={destination.attributes.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 px-4 max-w-[300px] mx-auto">
        <ProgressBar
          progress={scrollProgress}
          activeIndex={0}
          total={demoDestinations.length}
        />
      </div>
    </div>
  );
}
