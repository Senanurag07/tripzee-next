import Image from "next/image";
import { MapPin, CalendarDays } from "lucide-react";

export const tripsData = [
  {
    image: "/assets/tripcardsimg.webp",
    days: "8 Days / 7 Nights",
    title: "Delhi - Kasol - Manali",
    location: "Delhi - Delhi",
    date: "5 Nov, 23 Nov",
    batches: "+2 ",
    price: "50,000 INR/-",
    oldPrice: "89,999 INR/-",
    badge: "Group Tour",
  },
  {
    image: "/assets/tripcardsimg.webp",
    days: "8 Days / 7 Nights",
    title: "Delhi - Kasol - Manali",
    location: "Delhi - Delhi",
    date: "5 Nov, 23 Nov",
    batches: "+2",
    price: "50,000 INR/-",
    oldPrice: "89,999 INR/-",
    badge: "Group Tour",
  },
  {
    image: "/assets/tripcardsimg.webp",
    days: "8 Days / 7 Nights",
    title: "Delhi - Kasol - Manali",
    location: "Delhi - Delhi",
    date: "5 Nov, 23 Nov",
    batches: "+2",
    price: "50,000 INR/-",
    oldPrice: "89,999 INR/-",
    badge: "Group Tour",
  },
  {
    image: "/assets/tripcardsimg.webp",
    days: "8 Days / 7 Nights",
    title: "Delhi - Kasol - Manali",
    location: "Delhi - Delhi",
    date: "5 Nov, 23 Nov",
    batches: "+2 ",
    price: "50,000 INR/-",
    oldPrice: "89,999 INR/-",
    badge: "Group Tour",
  },
  {
    image: "/assets/tripcardsimg.webp",
    days: "6 Days / 5 Nights",
    title: "Srinagar - Gulmarg - Sonmarg",
    location: "Delhi - Kashmir",
    date: "12 Nov, 27 Nov",
    batches: "+3 ",
    price: "35,000 INR/-",
    oldPrice: "57,999 INR/-",
    badge: "Trending",
  },
  {
    image: "/assets/tripcardsimg.webp",
    days: "4 Days / 3 Nights",
    title: "Goa Beach Party Trip",
    location: "Mumbai - Goa",
    date: "9 Dec, 19 Dec",
    batches: "+1 ",
    price: "22,499 INR/-",
    oldPrice: "29,999 INR/-",
    badge: "Best Seller",
  },
  {
    image: "/assets/tripcardsimg.webp",
    days: "7 Days / 6 Nights",
    title: "Shimla - Kullu - Manali",
    location: "Delhi - Himachal",
    date: "14 Nov, 30 Nov",
    batches: "+4 ",
    price: "28,999 INR/-",
    oldPrice: "44,999 INR/-",
    badge: "Special Offer",
  },
];

interface TripCardProps {
  image: string;
  title: string;
  location: string;
  date: string;
  batches: string;
  price: string;
  oldPrice: string;
  badge: string;
}

export default function TripCard({
  image,
  title,
  location,
  date,
  batches,
  price,
  oldPrice,
  badge,
}: TripCardProps) {
  return (
    <div className="relative  w-[296px] h-[364px] rounded-2xl overflow-hidden shadow-md border border-[#EAEAEA] group">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between p-3.5 text-white">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent pointer-events-none"></div>

        {/* Top Section */}
        <div className="relative space-y-1 flex flex-col justify-end h-full">
          <p className="bg-secondary w-26 text-nowrap text-black font-semibold text-[12px] px-4 py-1 rounded-full">
            {badge}
          </p>

          <h3 className="text-xl lg:text-[22px] font-bold leading-snug">
            {title}
          </h3>

          <div className="flex items-center justify-between text-sm opacity-90 font-medium ">
            <span className="flex text-nowrap  text-[13px] text-white items-center gap-1.5">
              <MapPin size={13} /> {location}
            </span>
            <div className="flex items-center gap-1.5">
              {" "}
              <span className="flex text-nowrap text-[13px] items-center text-center text-white gap-1.5 whitespace-nowrap">
                <CalendarDays size={13} /> {date}
              </span>
              <span className="block text-[#FDDC39] h-5 text-center w-5 rounded-full bg-white/25 font-bold p-0.5 text-nowrap text-[10px]">
                {batches}
              </span>
            </div>
          </div>
          <span className="h-px my-2 w-full bg-white"></span>
          {/* Pricing */}
          <div className=" flex items-center gap-2">
            <span className="text-sm text-white"> From</span>
            <span className="text-[18px] text-nowrap font-semibold">
              {price}
            </span>
            <span className="text-[10px] line-through text-nowrap text-white">
              {oldPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
