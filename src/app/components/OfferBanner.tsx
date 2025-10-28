"use client";
import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image from "next/image";
import useInterval from "@/hooks/use-interval";

const OfferBanner = () => {
  const [autoplayDelay, setAutoplayDelay] = useState<number | null>(2000);
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
    setAutoplayDelay(2000);
  }, []);

  const banners = [
    {
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
    <section className="relative max-container bg-white w-full py-6 overflow-hidden">
      <div
        className="overflow-hidden rounded-2xl"
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex">
          {banners.map((banner) => (
            <div key={banner.id} className="flex-[0_0_100%] min-w-0">
              <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={banner.img}
                  alt={`Offer ${banner.id}`}
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-linear-to-t from-[#00000099] to-transparent flex flex-col items-center justify-center text-center px-4">
                  <p className="text-white text-sm sm:text-base font-medium">
                    Exclusive <span className="text-yellow-400">Deepawali</span>{" "}
                    Deals on Tours & Packages
                  </p>
                  <h1 className="text-yellow-400 text-5xl sm:text-6xl md:text-7xl font-extrabold mt-2">
                    1000{" "}
                    <span className="text-white italic text-4xl sm:text-5xl ml-1">
                      Sale
                    </span>
                  </h1>
                  <p className="text-white mt-3 text-sm sm:text-base">
                    Enjoy{" "}
                    <span className="text-yellow-400 font-semibold">
                      ₹1000 OFF
                    </span>{" "}
                    on Every Package – Hurry, Offer Valid{" "}
                    <span className="font-semibold">5th – 25th Oct Only</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
