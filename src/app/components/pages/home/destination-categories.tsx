"use client";
import React, { useState } from "react";
import DestinationSlider from "../../sliders/destination-slider";
import { FaGlobeAsia, FaFlag } from "react-icons/fa";
import { MdOutlineAllInclusive } from "react-icons/md";
import { cn } from "@/lib/utils"; // if not available, remove usage

const tabs = [
  {
    id: "all",
    label: "All",
    icon: <MdOutlineAllInclusive size={18} />,
  },
  {
    id: "global",
    label: "Global Escapes",
    icon: <FaGlobeAsia size={18} />,
  },
  {
    id: "india",
    label: "India Gateways",
    icon: <FaFlag size={18} />,
  },
];

export default function DestinationCategories() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className="bg-white  overflow-hidden">
      <section className="w-full  max-container mx-auto py-10">
        {/* Title */}
        <h2 className="text-[28px] md:text-[42px] font-bold mb-4 md:mb-6 text-black">
          Explore Destinations
        </h2>

        {/* Filter Tabs */}
        <div className="flex items-center gap-3 md:gap-6 md:mt-2 mb-8 overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-full text-[12px] md:text-[15px] font-semibold transition-all border whitespace-nowrap",
                activeTab === tab.id
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-200 hover:bg-gray-100"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Slider with selected tab */}
        <DestinationSlider />
      </section>
    </main>
  );
}
