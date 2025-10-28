import Image from "next/image";
import { MapPin, CalendarDays } from "lucide-react";

export const tripsData = [
  {
    image: "/assets/hero.jpg",
    days: "8 Days / 7 Nights",
    title: "Delhi - Kasol - Manali",
    location: "Delhi - Delhi",
    date: "5 Nov, 23 Nov",
    batches: "+2 Batches",
    price: "50,000 INR/-",
    oldPrice: "89,999 INR/-",
    badge: "Group Tour",
  },
  {
    image: "/assets/hero.jpg",
    days: "8 Days / 7 Nights",
    title: "Delhi - Kasol - Manali",
    location: "Delhi - Delhi",
    date: "5 Nov, 23 Nov",
    batches: "+2 Batches",
    price: "50,000 INR/-",
    oldPrice: "89,999 INR/-",
    badge: "Group Tour",
  },
  {
    image: "/assets/hero.jpg",
    days: "8 Days / 7 Nights",
    title: "Delhi - Kasol - Manali",
    location: "Delhi - Delhi",
    date: "5 Nov, 23 Nov",
    batches: "+2 Batches",
    price: "50,000 INR/-",
    oldPrice: "89,999 INR/-",
    badge: "Group Tour",
  },
  {
    image: "/assets/hero.jpg",
    days: "8 Days / 7 Nights",
    title: "Delhi - Kasol - Manali",
    location: "Delhi - Delhi",
    date: "5 Nov, 23 Nov",
    batches: "+2 Batches",
    price: "50,000 INR/-",
    oldPrice: "89,999 INR/-",
    badge: "Group Tour",
  },
  {
    image: "/assets/hero.jpg",
    days: "6 Days / 5 Nights",
    title: "Srinagar - Gulmarg - Sonmarg",
    location: "Delhi - Kashmir",
    date: "12 Nov, 27 Nov",
    batches: "+3 Batches",
    price: "35,000 INR/-",
    oldPrice: "57,999 INR/-",
    badge: "Trending",
  },
  {
    image: "/images/hero.jpg",
    days: "4 Days / 3 Nights",
    title: "Goa Beach Party Trip",
    location: "Mumbai - Goa",
    date: "9 Dec, 19 Dec",
    batches: "+1 Batch",
    price: "22,499 INR/-",
    oldPrice: "29,999 INR/-",
    badge: "Best Seller",
  },
  {
    image: "/images/hero.jpg",
    days: "7 Days / 6 Nights",
    title: "Shimla - Kullu - Manali",
    location: "Delhi - Himachal",
    date: "14 Nov, 30 Nov",
    batches: "+4 Batches",
    price: "28,999 INR/-",
    oldPrice: "44,999 INR/-",
    badge: "Special Offer",
  },
];

interface TripCardProps {
  image: string;
  days: string;
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
  days,
  title,
  location,
  date,
  batches,
  price,
  oldPrice,
  badge,
}: TripCardProps) {
  return (
    <div className="relative w-full max-w-[360px] h-[480px] rounded-2xl overflow-hidden shadow-md border border-[#EAEAEA] group">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover brightness-50 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between p-5 text-white">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <p className="bg-[#FDDC39] text-black font-bold text-[12px] px-3 py-1 rounded-full">
            {days}
          </p>
          <p className="bg-[#FDDC39] text-black font-semibold text-[12px] px-4 py-1.5 rounded-full">
            {badge}
          </p>
        </div>

        {/* Main Content - Pushed to bottom */}
        <div className="space-y-4">
          {/* Title */}
          <h3 className="text-xl lg:text-[22px] font-bold leading-snug">
            {title}
          </h3>

          {/* Location + Date */}
          <div className="flex items-center gap-4 text-sm opacity-90 font-medium flex-wrap">
            <span className="flex items-center gap-1">
              <MapPin size={16} /> {location}
            </span>
            <span className="flex items-center gap-1 whitespace-nowrap">
              <CalendarDays size={16} /> {date}
            </span>
          </div>

          {/* Batches */}
          <span className="block text-[#FDDC39] text-[13px]">{batches}</span>

          {/* Pricing */}
          <div className="border-t border-white/30 pt-3 flex items-center gap-3">
            <span className="text-sm opacity-80">Price From</span>
            <span className="text-[22px] font-extrabold">{price}</span>
            <span className="text-sm line-through text-gray-400">
              {oldPrice}
            </span>
          </div>

          {/* Hover Button */}
          <button className="w-full bg-[#FFE926] text-black font-bold py-2.5 rounded-lg opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}
