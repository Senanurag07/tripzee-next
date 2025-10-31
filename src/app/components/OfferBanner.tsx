"use client";
import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image from "next/image";
import useInterval from "@/hooks/use-interval";

const OfferBanner = () => {
  const [autoplayDelay, setAutoplayDelay] = useState<number | null>(3000);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      dragFree: true,
    },
    [WheelGesturesPlugin({ forceWheelAxis: "x" })]
  );

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Handle autoplay
  useInterval(scrollNext, autoplayDelay);

  // Handle hover pause/resume
  const handleMouseEnter = useCallback(() => {
    setAutoplayDelay(null);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setAutoplayDelay(3000);
  }, []);

  const banners = [
    {
      id: 1,
      img: "/assets/hero.jpg",
    },
    {
      id: 1,
      img: "/assets/hero.jpg",
    },{
      id: 1,
      img: "/assets/hero.jpg",
    },{
      id: 1,
      img: "/assets/hero.jpg",
    },{
      id: 1,
      img: "/assets/hero.jpg",
    },{
      id: 1,
      img: "/assets/hero.jpg",
    },
    {
      id: 2,
      img: "/assets/hero.jpg",
    },
    {
      id: 3,
      img: "/assets/hero.jpg",
    },
  ];

  return (
    <section className="relative bg-white w-full py-2 overflow-hidden">
  <div
    className="overflow-visible rounded-2xl"
    ref={emblaRef}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <div className="flex gap-4 px-4">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="flex-[0_0_110%] sm:flex-[100%] md:flex-[0_0_92%] min-w-0 transition-transform"
        >
          <div className="relative w-full h-[200px] sm:h-[330px] md:h-[364px] sm:rounded-2xl shadow-md overflow-hidden">
            <Image
              src={banner.img}
              alt={`Offer ${banner.id}`}
              fill
              className="object-cover "
              priority
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default OfferBanner;
