"use client";
import Image from "next/image";
import { FaUserTie } from "react-icons/fa";

const cards = [
  { title: "MICE", desc: "Lorem ipsum dolor sit amet ipsum dolor sit amet" },
  {
    title: "Collage Diaries",
    desc: "Lorem ipsum dolor sit amet ipsum dolor sit amet",
  },
  {
    title: "Honeymoon Escapes",
    desc: "Lorem ipsum dolor sit amet ipsum dolor sit amet",
  },
];

export default function ExploreMore() {
  return (
    <section className="w-full max-container bg-white py-12">
      <h2 className="text-3xl font-bold mb-10 text-black ">Explore More</h2>

      <div className="max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 ">
        {/* LEFT CARDS */}
        <div className="lg:col-span-3 grid sm:grid-cols-3 gap-8 ">
          {cards.map((c, i) => (
            <div
              key={i}
              className="relative rounded-md overflow-hidden bg-black group"
              style={{ height: 380 }}
            >
              {/* BG IMAGE */}
              <Image
                src="/assets/hero.jpg"
                alt="bg"
                fill
                className="object-cover group-hover:scale-105 duration-300"
              />

              {/* FRAME */}
              <div className="absolute inset-2 border-8 border-white rounded pointer-events-none">
                {" "}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 ">
                  <h3 className="text-lg text-black font-bold">{c.title}</h3>
                  <p className="text-sm text-black">{c.desc}</p>
                </div>
              </div>

              {/* CONTENT */}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE EXPERT BOXES */}
        <div className="flex flex-col gap-8">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-[#FAFAF5] rounded-xl p-5 border border-gray-200 shadow-sm flex gap-3 items-start"
            >
              <FaUserTie className="text-xl text-black mt-1" />
              <div>
                <h4 className="font-semibold text-black ">Expert Guidance</h4>
                <p className=" text-black text-sm">
                  Travel specialists ensure smooth and stress-free trips.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-black text-lg mt-10">
        We make travel simple and memorable.
        <span className="text-yellow-600 font-semibold">
          Explore dream destinations
        </span>{" "}
        with zero stress.
      </p>
    </section>
  );
}
