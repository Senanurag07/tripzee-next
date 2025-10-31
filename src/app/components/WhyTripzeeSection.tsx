"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsShieldCheck, BsPeople, BsGift, BsHeadset } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import useEmblaCarousel from "embla-carousel-react";

export default function WhyTripzeeSection() {
  const features = [
    {
      icon: <BsPeople size={28} />,
      title: "No Third Party",
      desc: "Enjoy a hassle-free experience without middlemen for smoother planning and communication.",
    },
    {
      icon: <BsShieldCheck size={28} />,
      title: "Transparency & Security",
      desc: "Enjoy a hassle-free experience without middlemen for smoother planning and communication.",
    },
    {
      icon: <BsGift size={28} />,
      title: "Exclusive Deals & Offers",
      desc: "Enjoy a hassle-free experience without middlemen for smoother planning and communication.",
    },
    {
      icon: <BsHeadset size={28} />,
      title: "24/7 Support",
      desc: "Enjoy a hassle-free experience without middlemen for smoother planning and communication.",
    },
  ];

  const reviews = [1, 2, 3, 4, 5]; // add more to see scroll properly

  // ✅ Embla
  const [scrollProgress, setScrollProgress] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

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
    <section className="w-full max-container bg-white ">
      {/* HEADING */}
      <div className="flex flex-col gap-3">
        <h2 className="text-[36px] text-black font-bold tracking-tight">
          Why Tripzee Holidays?
        </h2>
        <p className="max-w-[600px] text-[16px] text-gray-600 leading-normal">
          We make travel simple and memorable. Explore dream destinations with
          zero stress.
        </p>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px bg-gray-200 my-8"></div>

      {/* FEATURES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-4 ${
              index % 2 === 0 ? "border-b-4" : "border-t-4"
            } border-yellow-400 hover:-translate-y-1 transition-all duration-200`}
          >
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center">
              {item.icon}
            </div>

            <h3 className="text-[18px] text-black font-semibold">
              {item.title}
            </h3>

            <p className="text-[14px] text-gray-800 leading-[1.45]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA BOX */}
      <div className="mt-12 flex-col-reverse bg-[#FFFBDF] rounded-xl p-6 flex  md:flex-row justify-between md:items-center gap-8 relative">
        {/* TEXT */}
        <div className="max-w-[600px] flex flex-col gap-4">
          <h3 className="text-[24px] text-black md:text-[28px] font-semibold">
            Not sure where your next adventure should be?
          </h3>
          <p className="text-[15px] text-gray-800 leading-[1.45]">
            Leave the details to us! Our experts design trips that match your
            energy and bring your travel dreams alive.
          </p>

          <button className="bg-yellow-400 py-3 sm:w-68  w-52  mt-2 rounded-full font-medium text-gray-800 hover:bg-yellow-500 transition-all">
            Connect with Expert
          </button>
        </div>

        {/* IMAGES CLUSTER */}
        <div className="flex  ">
          <div className="md:w-28 md:h-28 h-22 w-22 rounded-full overflow-hidden relative border-4 border-white shadow-lg">
            <Image
              src="/assets/hero.jpg"
              fill
              alt="Trip"
              className="object-cover"
              sizes="(max-width: 112px) 100vw, 112px"
            />
          </div>
          <div className="md:w-28 md:h-28 h-22 w-22 rounded-full overflow-hidden relative border-4 border-white -ml-5 shadow-lg">
            <Image
              src="/assets/hero.jpg"
              fill
              alt="Trip"
              className="object-cover"
              sizes="(max-width: 112px) 100vw, 112px"
            />
          </div>
          <div className="md:w-28 md:h-28 h-22 w-22 rounded-full overflow-hidden relative border-4 border-white -ml-5 shadow-lg">
            <Image
              src="/assets/hero.jpg"
              fill
              alt="Trip"
              className="object-cover"
              sizes="(max-width: 112px) 100vw, 112px"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 ">
        <h2 className="text-[32px] text-black font-bold tracking-tight">
          Bucket List Experiences
        </h2>
        <p className="max-w-[600px] text-[16px] text-gray-600 my-2 leading-normal">
          We make travel simple and memorable. Explore dream destinations with
          zero stress.
        </p>
        <div className="block sm:hidden w-full my-8 ">
          <div className="h-px sm:hidden block w-full bg-linear-to-r from-transparent via-black to-transparent"></div>
        </div>
        {/* Embla viewport */}
        <div className="overflow-hidden mt-12" ref={emblaRef}>
          <div className="flex gap-6">
            {reviews.map((_, i) => (
              <div
                key={i}
                className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-xl px-6 py-8 min-w-[320px] md:min-w-[400px] border border-gray-200"
              >
                {/* stars */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <AiFillStar key={n} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-[14px] text-gray-800 leading-[1.45]">
                  “I have been extremely happy with the results of working with
                  the creative agency, and I would highly recommend them…”
                </p>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative">
                      <Image
                        src="/assets/hero.jpg"
                        fill
                        alt="User"
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[14px] text-black font-medium">
                      Sujood Qureshi
                    </p>
                  </div>
                  <button className="rounded-full border px-4 py-2 text-[13px] text-black transition">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 px-4 max-w-[500px] mx-auto">
          <div className="h-1 bg-gray-200 rounded-full relative overflow-hidden">
            <div
              className="h-full bg-black rounded-full transition-transform duration-300 ease-out absolute left-0 top-0"
              style={{
                transform: `translateX(${(scrollProgress - 1) * 100}%)`,
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
