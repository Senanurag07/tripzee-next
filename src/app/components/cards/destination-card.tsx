import Image from "next/image";
import React from "react";

export const demoDestinations = [
  {
    id: 1,
    attributes: {
      title: "KERALA",
      packages: 2,
      duration: "8 Days / 7 Nights",
      image: "/assets/hero.jpg",
      position: 1,
    },
  },
  {
    id: 2,
    attributes: {
      title: "GOA",
      packages: 3,
      duration: "5 Days / 4 Nights",
      image: "/assets/hero.jpg",
      position: 2,
    },
  },
  {
    id: 3,
    attributes: {
      title: "RAJASTHAN",
      packages: 4,
      duration: "7 Days / 6 Nights",
      image: "/assets/hero.jpg",
      position: 3,
    },
  },
  {
    id: 4,
    attributes: {
      title: "KASHMIR",
      packages: 5,
      duration: "6 Days / 5 Nights",
      image: "/assets/hero.jpg",
      position: 4,
    },
  },
  {
    id: 5,
    attributes: {
      title: "LADAKH",
      packages: 3,
      duration: "9 Days / 8 Nights",
      image: "/assets/hero.jpg",
      position: 5,
    },
  },
  {
    id: 6,
    attributes: {
      title: "HIMACHAL",
      packages: 4,
      duration: "7 Days / 6 Nights",
      image: "/assets/hero.jpg",
      position: 6,
    },
  },
  {
    id: 7,
    attributes: {
      title: "SIKKIM",
      packages: 2,
      duration: "8 Days / 7 Nights",
      image: "/assets/hero.jpg",
      position: 7,
    },
  },
  {
    id: 8,
    attributes: {
      title: "ANDAMAN",
      packages: 3,
      duration: "6 Days / 5 Nights",
      image: "/assets/hero.jpg",
      position: 8,
    },
  },
];

interface DestinationCardProps {
  title: string;
  packages: number;
  duration: string;
  image: string;
}

const DestinationCard = ({
  title,
  packages,
  duration,
  image,
}: DestinationCardProps) => {
  return (
    <div className="group relative flex flex-col items-start w-[302px] h-[380px] p-2 gap-2.5 flex-shrink-0 overflow-hidden rounded-xl shadow-lg cursor-pointer">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={302}
        height={380}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay Content */}
      <div className="absolute top-4 left-4 bg-white text-black px-3 py-[5px] rounded-lg text-xs font-semibold shadow z-10">
        {packages.toString().padStart(2, "0")} Packages
      </div>

      <h2 className="absolute top-16 left-4 text-5xl font-extrabold tracking-widest text-[#D3F238] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] z-10">
        {title}
      </h2>

      <div className="absolute top-32 left-4 bg-[#FFE97B] text-black px-2 py-[3px] rounded-md text-[12px] font-bold shadow z-10">
        {duration}
      </div>

      {/* Hover Button */}
      <div
        className="
          absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%]
          bg-[#FFE926] text-black font-bold py-2.5 rounded-lg text-center
          opacity-0 translate-y-4
          transition-all duration-500 ease-out
          group-hover:opacity-100 group-hover:translate-y-0
          shadow-lg z-20
        "
      >
        Explore Now
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default DestinationCard;
