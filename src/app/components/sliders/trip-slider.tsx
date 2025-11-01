"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import TripCard from "../cards/trip-cards";
import ProgressBar from "../ui/ProgressBar";

interface TripSliderProps {
  data: {
    image: string;
    days: string;
    title: string;
    location: string;
    date: string;
    batches: string;
    price: string;
    oldPrice: string;
    badge: string;
  }[];
}

export default function TripSlider({ data }: TripSliderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
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

  useEffect(() => {
    if (!emblaApi) return;

    const onScroll = () => {
      const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
      setScrollProgress(progress);
    };

    emblaApi.on("scroll", onScroll);
    onScroll();

    return () => {
      emblaApi.off("scroll", onScroll);
    };
  }, [emblaApi]);

  return (
    <div className="relative h-full w-full">
      <div className="" ref={emblaRef}>
        <div className="flex gap-6 ">
          {data.map((trip, index) => (
            <div key={index} className="flex-[0_0_20%]">
              <TripCard
                image={trip.image}
                title={trip.title}
                location={trip.location}
                date={trip.date}
                batches={trip.batches}
                price={trip.price}
                oldPrice={trip.oldPrice}
                badge={trip.badge}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Progress Bar */}
      <div className="mt-6 px-4 max-w-[300px] mx-auto">
        <ProgressBar
          progress={scrollProgress}
          activeIndex={0}
          total={data.length}
        />
      </div>
    </div>
  );
}
