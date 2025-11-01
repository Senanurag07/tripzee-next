"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  const slides = [
    {
      id: 1,
      title: "Kerala",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      img: "/assets/hero.jpg",
    },
    {
      id: 2,
      title: "Kerala",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      img: "/assets/hero.jpg",
    },
    {
      id: 3,
      title: "Kerala",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      img: "/assets/hero.jpg",
    },
    {
      id: 4,
      title: "Kerala",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      img: "/assets/hero.jpg",
    },
    {
      id: 5,
      title: "Spiti Valley",
      desc: "Adventure in the Himalayas awaits.",
      img: "/assets/hero.jpg",
    },
    {
      id: 6,
      title: "Goa",
      desc: "Sun, sand, and sea — perfect getaway.",
      img: "/assets/hero.jpg",
    },
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const totalSlides = slides.length;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % totalSlides;
        setProgress(nextIndex / (totalSlides - 1));
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <section className="relative  pb-6 h-[540px] md:pb-0  md:h-[88vh] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/assets/hero.jpg"
        alt="Background"
        fill
        priority
        className="object-cover brightness-[0.65]"
      />

      {/* Overlay Content */}
      <div className="relative z-10 max-container px-5 lg:px-16 h-full flex flex-col lg:justify-between">
        {/* Top Text Section */}
        <div className="pt-10 lg:pt-28 w-full max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-snug text-left sm:text-left">
            Sirf Trip Nahi, <br /> Memories Banao
          </h1>
          <p className="text-white/90 md:mt-4 mt-2 font-medium text-base md:text-lg leading-tight">
            From Insta-worthy stays to bucket-list adventures – we plan it all,
            you just live the vibe.
          </p>

          {/* Search Bar */}
          <div className="sm:mt-8 mt-6 bg-white rounded-full flex items-center w-full max-w-md shadow-lg overflow-hidden">
            <div className="flex items-center pl-4 py-3 w-full">
              <MapPin className="w-5 h-5 text-yellow-500 mr-3" />
              <div className="flex  flex-col"> 
                <span className="text-xs text-gray-500">Destinations</span>
                <input
                  type="text"
                  placeholder='Search "Dubai"'
                  className="text-[16px] font-medium text-gray placeholder-black outline-none border-none bg-transparent w-full"
                />
              </div>
            </div>
            <button className="bg-secondary hover:bg-yellow-500 transition-all text-black font-semibold px-6 py-3 rounded-full mr-2">
              Explore
            </button>
          </div>
        </div>

        {/* Auto-scrolling Carousel Section (Bottom Left Fixed Position) */}
        <div className="relative w-full sm:mt-23 mt-25  lg:absolute lg:bottom-10 lg:left-4/7 lg:-translate-x-5 lg:w-[600px]"
        >
          <div
            className="overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex gap-26 sm:gap-5 transition-transform duration-500"
              style={{ transform: `translateX(-${activeIndex * 50}%)` }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-[0_0_calc(50%-10px)] min-w-0 md:flex-[0_0_calc(50%-20px)]"
                >
                  <div className="bg-white/10 md:w-full w-3xs border-white sm:w-full backdrop-blur-[1px] border-[0.2px] rounded-2xl flex items-center gap-4 p-3 transition-all duration-300">
                    <div className="shrink-0 sm:w-20 w-20 border-[0.5px] border-white h-18 overflow-hidden rounded-lg">
                      <Image
                        src={slide.img}
                        alt={slide.title}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-white font-semibold text-base sm:text-lg">
                        {slide.title}
                      </h3>
                      <p className="text-white/80 text-[12px] sm:text-sm">{slide.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center max-w-xl gap-3 mt-5">
            <span className="text-white/90 font-medium text-sm tracking-wider min-w-[2ch]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/80 rounded-full backdrop-blur-sm transition-all duration-500 ease-out"
                style={{
                  width: `${(progress || 0) * 100}%`,
                }}
              />
            </div>
            <span className="text-white/90 font-medium text-sm tracking-wider min-w-[2ch]">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
