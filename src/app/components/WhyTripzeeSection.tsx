import Image from "next/image";
import React from "react";
import { BsShieldCheck, BsPeople, BsGift, BsHeadset } from "react-icons/bs";

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

  return (
    <section className="w-full max-w-[1300px] bg-white max-container mx-auto px-6 py-16">

      {/* HEADING */}
      <div className="flex flex-col gap-3">
        <h2 className="text-[36px] text-black font-bold tracking-tight">
          Why Tripzee Holidays?
        </h2>
        <p className="max-w-[600px] text-[16px] text-gray-600 leading-[1.5]">
          We make travel simple and memorable. Explore dream destinations
          with zero stress.
        </p>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px bg-gray-200 my-8"></div>

      {/* FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-4 border-b-4 border-yellow-400 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center">
              {item.icon}
            </div>

            <h3 className="text-[18px] text-black font-semibold">{item.title}</h3>

            <p className="text-[14px] text-gray-800 leading-[1.45]">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

      {/* CTA BOX */}
      <div className="mt-14 bg-[#FFFBDF] rounded-xl p-10 flex flex-col md:flex-row justify-between items-center gap-8 relative">

        {/* TEXT */}
        <div className="max-w-[600px] flex flex-col gap-4">
          <h3 className="text-[24px] text-black md:text-[28px] font-semibold">
            Not sure where your next adventure should be?
          </h3>
          <p className="text-[15px] text-gray-800 leading-[1.45]">
            Leave the details to us! Our experts design trips that match your energy
            and bring your travel dreams alive.
          </p>

          <button className="bg-yellow-400  py-3 w-60 mt-2 rounded-full font-medium text-gray-800 hover:bg-yellow-500 transition-all">
            Connect with Expert
          </button>
        </div>

{/* IMAGES CLUSTER */}
<div className="flex items-center">
  <Image
    src="/assets/hero.jpg"
    width={112} // w-28 = 112px
    height={112} // h-28 = 112px
    className="object-cover rounded-full border-4 border-white"
    alt="Trip"
  />
  <Image
    src="/assets/hero.jpg"
    width={112}
    height={112}
    className="object-cover rounded-full border-4 border-white -ml-5"
    alt="Trip"
  />
  <Image
    src="/assets/hero.jpg"
    width={112}
    height={112}
    className="object-cover rounded-full border-4 border-white -ml-5"
    alt="Trip"
  />
</div>


      </div>
    </section>
  );
}
