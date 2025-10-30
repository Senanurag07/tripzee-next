"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image from "next/image";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ReelsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      dragFree: false,
      skipSnaps: false,
    },
    [WheelGesturesPlugin()]
  );

  const videosRef = useRef<Array<HTMLVideoElement | null>>([]);

  const reels = [
    { id: 1, video: "/reels/IMG_4185.MOV", poster: "/assets/reel-poster-1.jpg" },
    { id: 2, video: "/reels/IMG_4185.MOV", poster: "/assets/reel-poster-2.jpg" },
    { id: 3, video: "/reels/IMG_4185.MOV", poster: "/assets/reel-poster-3.jpg" },
    { id: 4, video: "/reels/reel2.mp4", poster: "/assets/reel-poster-4.jpg" },
    { id: 5, video: "/reels/reel3.mp4", poster: "/assets/reel-poster-5.jpg" },
    { id: 6, video: "/reels/reel4.mp4", poster: "/assets/reel-poster-6.jpg" },
    { id: 7, video: "/reels/reel5.mp4", poster: "/assets/reel-poster-7.jpg" },
  ];

  // ✅ Global mute state
  const [isMuted, setIsMuted] = useState(true);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setCanPrev(Boolean(emblaApi.canScrollPrev()));
      setCanNext(Boolean(emblaApi.canScrollNext()));
    };
    emblaApi.on("select", update);
    emblaApi.on("init", update);
    emblaApi.on("reInit", update);
    update();
    return () => {
      emblaApi.off("select", update);
      emblaApi.off("init", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi]);

  const pauseAll = useCallback(() => {
    videosRef.current.forEach((v) => v && v.pause());
  }, []);

  const playIndex = useCallback(
    async (index: number) => {
      pauseAll();
      const vid = videosRef.current[index];
      if (!vid) return;
      try {
        await vid.play();
      } catch {}
    },
    [pauseAll]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const handleSelect = () => {
      playIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", handleSelect);
    emblaApi.on("settle", handleSelect);
    handleSelect();
    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("settle", handleSelect);
    };
  }, [emblaApi, playIndex]);

  const handleEnded = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.canScrollNext() && emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.canScrollPrev() && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.canScrollNext() && emblaApi.scrollNext();
  }, [emblaApi]);

  // ✅ Toggle ALL videos
  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      videosRef.current.forEach((v) => v && (v.muted = next));
      return next;
    });
  };

  // ✅ Sync global mute to all elements on change
  useEffect(() => {
    videosRef.current.forEach((v) => v && (v.muted = isMuted));
  }, [isMuted]);

  const handleVideoClick = useCallback(
    (index: number) => {
      if (!emblaApi) {
        const v = videosRef.current[index];
        if (!v) return;
        v.paused ? v.play() : v.pause();
        return;
      }
      const selected = emblaApi.selectedScrollSnap();
      if (selected !== index) {
        emblaApi.scrollTo(index);
      } else {
        const v = videosRef.current[index];
        if (!v) return;
        v.paused ? v.play() : v.pause();
      }
    },
    [emblaApi]
  );

  useEffect(() => () => pauseAll(), [pauseAll]);

  return (
    <section className="w-full sm:block hidden max-container bg-white py-2 md:py-16 relative">
      <h2 className="text-3xl font-bold mb-6 text-black px-4">
        Live the Adventure
      </h2>

      <div className="overflow-hidden px-4" ref={emblaRef}>
        <div className="flex gap-4">
          {reels.map((item, i) => (
            <div
              key={item.id}
              className="
                relative rounded-2xl overflow-hidden bg-black
                flex-[0_0_80%]
                md:flex-[0_0_45%]
                xl:flex-[0_0_24.3%]
                md:h-[500px]
                h-[380px]
                select-none
              "
            >
              <Image
                src="/assets/tripzelogo.png"
                alt="logo"
                width={80}
                height={40}
                className="absolute top-3 right-3 z-10"
              />

              {item.poster && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.poster}
                    alt="poster"
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <video
                ref={(el) => { videosRef.current[i] = el; }}
                src={item.video}
                loop
                muted={isMuted}
                onClick={() => handleVideoClick(i)}
                onEnded={handleEnded}
                className="w-full h-full object-cover relative z-5"
                playsInline
                preload="metadata"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className="
                  absolute bottom-4 right-4 z-20
                  bg-black/60 text-white p-2 rounded-full text-md
                "
              >
                {isMuted ? <HiVolumeOff size={18} /> : <HiVolumeUp size={18} />}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center items-center gap-4">
  <div
    className={`p-2 border rounded-full cursor-pointer transition ${
      canPrev ? "border-black text-black" : "border-gray-300 text-gray-300 cursor-not-allowed"
    }`}
    onClick={canPrev ? scrollPrev : undefined}
  >
    <ArrowLeft size={20} />
  </div>

  <div
    className={`p-2 border rounded-full cursor-pointer transition ${
      canNext ? "border-black text-black" : "border-gray-300 text-gray-300 cursor-not-allowed"
    }`}
    onClick={canNext ? scrollNext : undefined}
  >
    <ArrowRight size={20} />
  </div>
</div>

    </section>
  );
}
