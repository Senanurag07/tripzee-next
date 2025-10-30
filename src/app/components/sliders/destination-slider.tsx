"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import DestinationCard, { demoDestinations } from "../cards/destination-card";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function DestinationSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      breakpoints: {
        "(min-width: 200px)": { slidesToScroll: 1 },
        "(min-width: 350px)": { slidesToScroll: 1 },
        "(min-width: 420px)": { slidesToScroll: 1 },
        "(min-width: 500px)": { slidesToScroll: 1 },
        "(min-width: 550px)": { slidesToScroll: 1 },
        "(min-width: 650px)": { slidesToScroll: 1 },
        "(min-width: 750px)": { slidesToScroll: 1 },
        "(min-width: 850px)": { slidesToScroll: 1 },
        "(min-width: 1000px)": { slidesToScroll: 1 },
        "(min-width: 1200px)": { slidesToScroll: 1 },
        "(min-width: 1400px)": { slidesToScroll: 1 },
      },
    },
    [WheelGesturesPlugin({ forceWheelAxis: "x" })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative h-full w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-3 sm:-ml-4 lg:-ml-6">
          {demoDestinations.map((destination) => (
            <div
              key={destination.id}
              className="flex-[0_0_100%] pl-3 sm:pl-4 lg:pl-6 min-[350px]:flex-[0_0_66.666%] min-[650px]:flex-[0_0_40%] min-[850px]:flex-[0_0_33.333%] min-[1400px]:flex-[0_0_25%]"
            >
              <DestinationCard
                title={destination.attributes.title}
                packages={destination.attributes.packages}
                duration={destination.attributes.duration}
                image={destination.attributes.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center items-center gap-4">
        <div
          className="p-2 border rounded-full cursor-pointer border-black text-black transition"
          onClick={scrollPrev}
        >
          <ArrowLeft size={20} />
        </div>
        <div
          className="p-2 border rounded-full cursor-pointer border-black text-black transition"
          onClick={scrollNext}
        >
          <ArrowRight size={20} />
        </div>
      </div>
    </div>
  );
}
