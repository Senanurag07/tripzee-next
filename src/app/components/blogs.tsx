import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
];

export default function BlogStories() {
  return (
    <main className="bg-white max-container py-8">
    <section className="w-full max-w-7xl  mx-auto px-4 md:px-6 lg:px-0 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#1C1C1C]">
          Blog & Stories
        </h2>

        <button className="bg-[#FFE66D] hover:bg-[#ffdd50] transition-all px-6 py-2 rounded-full text-[14px] font-medium text-[#1c1c1c]">
          View all
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {blogs.map((blog) => (
          <div key={blog.id} className="w-full">
            {/* Image */}
            <div className="relative w-full h-[260px] sm:h-[370px] rounded-xl overflow-hidden">
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

            <p className="text-[#8B8B8B] text-[14px] mt-1 leading-[1.5]">
              {blog.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
    </main>
  );
}
