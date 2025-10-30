"use client";
import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image from "next/image";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";

export default function ReelsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      dragFree: true,
    },
    [WheelGesturesPlugin()]
  );

  const videosRef = useRef<(HTMLVideoElement | null)[]>([]);

  const reels = [
    { id: 1, video: "/reels/IMG_4185.MOV" },
    { id: 2, video: "/reels/IMG_4185.MOV" },
    { id: 3, video: "/reels/IMG_4185.MOV" },
    { id: 4, video: "/reels/reel2.mp4" },
    { id: 5, video: "/reels/reel3.mp4" },
    { id: 6, video: "/reels/reel4.mp4" },
    { id: 7, video: "/reels/reel5.mp4" },
  ];

  // per-video mute state (boolean array)
  const [muteStates, setMuteStates] = useState<boolean[]>(
    () => reels.map(() => true)
  );

  // helper: pause all videos
  const pauseAll = () => {
    videosRef.current.forEach((v) => v && v.pause());
  };

  // helper: play selected index (if video exists)
  const playIndex = (index: number) => {
    const vid = videosRef.current[index];
    if (!vid) return;
    // ensure others paused
    pauseAll();
    // try to play (some browsers require user gesture — clicking video will satisfy)
    vid.play().catch(() => {
      /* ignore autoplay errors */
    });
  };

  // When Embla selection changes (user swiped or scrollNext called)
  useEffect(() => {
    if (!emblaApi) return;

    const handleSettle = () => {
      const idx = emblaApi.selectedScrollSnap();
      playIndex(idx);
    };

    const handleSelect = () => {
      // also respond to select — play selected snap
      const idx = emblaApi.selectedScrollSnap();
      playIndex(idx);
    };

    emblaApi.on("settle", handleSettle);
    emblaApi.on("select", handleSelect);

    // initial play
    handleSelect();

    return () => {
      emblaApi.off("settle", handleSettle);
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi]);

  // When a video ends -> scroll to next and play when settled
  const handleEnded = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    // play will be handled by settle event (above)
  };

  // Wheel scroll (vertical -> horizontal)
  useEffect(() => {
    if (!emblaApi) return;
    const node = emblaApi.rootNode();
    if (!node) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      emblaApi.scrollTo(emblaApi.scrollProgress() + e.deltaY * 0.001);
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, [emblaApi]);

  // pagination handlers
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  // toggle mute for a specific video only
  const toggleMute = (index: number) => {
    setMuteStates((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      // apply to actual video element (if loaded)
      const v = videosRef.current[index];
      if (v) v.muted = next[index];
      return next;
    });
  };

  // click on a video: if clicked not selected -> scroll to it and play; otherwise toggle play/pause
  const handleVideoClick = (index: number) => {
    if (!emblaApi) {
      // fallback if embla not ready: toggle play/pause
      const v = videosRef.current[index];
      if (!v) return;
      v.paused ? v.play() : v.pause();
      return;
    }

    const selected = emblaApi.selectedScrollSnap();
    if (selected !== index) {
      emblaApi.scrollTo(index);
      // play will be triggered by settle/select event after scroll ends
    } else {
      // same slide clicked: toggle play/pause for it
      const v = videosRef.current[index];
      if (!v) return;
      v.paused ? v.play() : v.pause();
    }
  };

  return (
    <section className="w-full max-container bg-white py-2 md:py-16 relative">
      <h2 className="text-3xl font-bold mb-6 text-black px-4">Live the Adventure</h2>

      <div className="overflow-hidden px-4" ref={emblaRef}>
        <div className="flex gap-4">
          {reels.map((item, i) => (
            <div
              key={item.id}
              className="
                relative rounded-2xl overflow-hidden bg-black
                flex-[0_0_80%]
                md:flex-[0_0_45%]
                xl:flex-[0_0_23%]
                md:h-[520px]
                h-[400px]
              "
            >
              {/* Logo (always visible) */}
              <Image
                src="/assets/tripzelogo.png"
                alt="logo"
                width={80}
                height={40}
                className="absolute top-3 right-3 z-10 opacity-90"
              />

              {/* Video */}
              <video
                ref={(el) => {
                  videosRef.current[i] = el;
                  // ensure the DOM element's muted matches state if present
                  if (el) el.muted = muteStates[i];
                }}
                src={item.video}
                loop
                muted={muteStates[i]}
                onClick={() => handleVideoClick(i)}
                onEnded={handleEnded}
                className="w-full h-full object-cover "
                playsInline
              />

              {/* Mute Toggle (per-video) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute(i);
                }}
                className="
                  absolute bottom-4 right-4 z-10
                  bg-black/60 text-white p-2 rounded-full text-md
                "
                aria-label={muteStates[i] ? "Unmute" : "Mute"}
              >
                {muteStates[i] ? <HiVolumeOff size={18} /> : <HiVolumeUp size={18} />}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={scrollPrev}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Prev
        </button>
        <button
          onClick={scrollNext}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Next
        </button>
      </div>
    </section>
  );
}
