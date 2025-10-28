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
    <main className="bg-white max-container">
      <section className="w-full bg-white max-w-[1400px] mx-auto py-12">
        {/* Title */}
        <h2 className="text-[32px] md:text-[42px] font-bold mb-10 text-black">
          Explore Destinations
        </h2>

        {/* Filter Tabs */}
        <div className="flex items-center gap-3 md:gap-6 mb-10 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-full text-[15px] font-semibold transition-all border whitespace-nowrap",
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
