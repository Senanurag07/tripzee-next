"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

const blogs = [
  {
    id: 1,
    title: "How to Pick the Perfect Stay for Any Trip",
    desc: "From budget to luxury, find accommodations that suit your travel style.",
    img: "/assets/hero.jpg",
  },
  {
    id: 2,
    title: "How to Pick the Perfect Stay for Any Trip",
    desc: "From budget to luxury, find accommodations that suit your travel style.",
    img: "/assets/hero.jpg",
  },
  {
    id: 3,
    title: "How to Pick the Perfect Stay for Any Trip",
    desc: "From budget to luxury, find accommodations that suit your travel style.",
    img: "/assets/hero.jpg",
  },
  {
    id: 1,
    title: "How to Pick the Perfect Stay for Any Trip",
    desc: "From budget to luxury, find accommodations that suit your travel style.",
    img: "/assets/hero.jpg",
  },
  {
    id: 2,
    title: "How to Pick the Perfect Stay for Any Trip",
    desc: "From budget to luxury, find accommodations that suit your travel style.",
    img: "/assets/hero.jpg",
  },
  {
    id: 3,
    title: "How to Pick the Perfect Stay for Any Trip",
    desc: "From budget to luxury, find accommodations that suit your travel style.",
    img: "/assets/hero.jpg",
  },
  {
    id: 1,
    title: "How to Pick the Perfect Stay for Any Trip",
    desc: "From budget to luxury, find accommodations that suit your travel style.",
    img: "/assets/hero.jpg",
  },
  {
    id: 2,
    title: "How to Pick the Perfect Stay for Any Trip",
    desc: "From budget to luxury, find accommodations that suit your travel style.",
    img: "/assets/hero.jpg",
  },
  {
    id: 3,
    title: "How to Pick the Perfect Stay for Any Trip",
    desc: "From budget to luxury, find accommodations that suit your travel style.",
    img: "/assets/hero.jpg",
  },
];

export default function BlogStories() {
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
    <main className="bg-white overflow-hidden py-6">
      <section className="w-full max-container mx-auto  md:px-6 lg:px-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[28px] text-nowrap md:text-[40px] font-bold text-[#1C1C1C]">
            Blog & Stories
          </h2>

          <button className="bg-[#FFE66D] hover:bg-[#ffdd50] transition-all text-nowrap px-6 py-2 rounded-full text-[14px] font-medium text-[#1c1c1c]">
            View all
          </button>
        </div>

        {/* Embla Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="min-w-full sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%]"
                >
                  {/* Image */}
                  <div className="relative w-full h-[360px] sm:h-[370px] rounded-xl overflow-hidden">
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      priority
                    />

                    <button className="absolute bottom-5 left-5 bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 font-medium text-sm hover:bg-gray-100 transition-all">
                      Read more <ArrowRight size={16} />
                    </button>
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 font-semibold text-[16px] text-[#1C1C1C]">
                    {blog.title}
                  </h3>

                  <p className="text-[#8B8B8B] text-[14px] mt-1 leading-normal">
                    {blog.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 px-4 max-w-[300px] mx-auto">
            <div className="h-0.5 bg-gray-200 rounded-full relative overflow-hidden">
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
    </main>
  );
}
