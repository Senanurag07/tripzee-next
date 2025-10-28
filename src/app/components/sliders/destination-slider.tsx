"use client";

import React, { useCallback, useEffect, useState } from "react";
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

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

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
      <button
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        className="slidePrev absolute top-1/3 -translate-x-1/2 left-0 translate-y-full z-20 lg:h-8 lg:w-8 md:h-7 md:w-7 h-6 w-6 p-0.5 lg:p-1 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out shadow-[0px_2px_8px_0px_rgba(0,0,0,0.25)] hover:shadow-none disabled:hidden hidden md:block"
      >
        <ArrowLeft className="h-full w-full" />
      </button>
      <button
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        className="slideNext absolute top-1/3 translate-x-1/2 right-0 translate-y-full z-20 lg:h-8 lg:w-8 md:h-7 md:w-7 h-6 w-6 p-0.5 lg:p-1 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out shadow-[0px_2px_8px_0px_rgba(0,0,0,0.25)] hover:shadow-none disabled:hidden hidden md:block"
      >
        <ArrowRight className="h-full w-full" />
      </button>
    </div>
  );
}
