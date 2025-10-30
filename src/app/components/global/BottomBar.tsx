"use client";

import { usePathname } from "next/navigation";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Link from "next/link";

import { FaWhatsapp } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import {
  MdOutlineExplore,
  MdOutlinePermContactCalendar,
  MdOutlineTravelExplore,
} from "react-icons/md";
import { Mail, PhoneCall } from "lucide-react";

export default function BottomBar() {
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  return (
    <div className="
      md:hidden
      fixed bottom-0 left-0 right-0
      z-30 bg-black text-white
      h-20 rounded-t-2xl
      px-6 sm:px-10
      grid grid-cols-4 gap-4
      font-montserrat
      shadow-[0_0_20px_rgba(0,0,0,0.35)]
    "
    >
      {/* HOME */}
      <Link
        href="/"
        className="flex flex-col items-center justify-center gap-1"
      >
        <TiHome
          className={`size-6 ${
            isActive("/") ? "text-[#FFE926] scale-110" : "opacity-80"
          }`}
        />
        <p
          className={`text-[11px] ${
            isActive("/") ? "text-[#FFE926]" : "opacity-70"
          }`}
        >
          Home
        </p>
      </Link>

      {/* UPCOMING */}
      <Link
        href="/upcoming-trips"
        className="flex flex-col items-center justify-center gap-1"
      >
        <MdOutlineExplore
          className={`size-6 ${
            isActive("/upcoming-trips")
              ? "text-[#FFE926] scale-110"
              : "opacity-80"
          }`}
        />
        <p
          className={`text-[11px] ${
            isActive("/upcoming-trips") ? "text-[#FFE926]" : "opacity-70"
          }`}
        >
          Upcoming
        </p>
      </Link>

      {/* SEARCH */}
      <Link
        href="/search"
        className="flex flex-col items-center justify-center gap-1"
      >
        <MdOutlineTravelExplore
          className={`size-6 ${
            isActive("/search") ? "text-[#FFE926] scale-110" : "opacity-80"
          }`}
        />
        <p
          className={`text-[11px] ${
            isActive("/search") ? "text-[#FFE926]" : "opacity-70"
          }`}
        >
          Search
        </p>
      </Link>

      {/* CONTACT DRAWER */}
      <Drawer>
        <DrawerTrigger>
          <div className="flex flex-col items-center justify-center gap-1">
            <MdOutlinePermContactCalendar
              className="size-6 opacity-90"
            />
            <p className="text-[11px] opacity-70">
              Contact
            </p>
          </div>
        </DrawerTrigger>

        <DrawerContent className="h-fit bg-white rounded-t-xl pb-6">
          <div className="flex items-center justify-evenly gap-6 py-8 px-6">
            <Link
              href="https://wa.me/+919512858781"
              target="_blank"
              rel="nofollow"
              className="flex flex-col items-center"
            >
              <div className="h-14 w-14 p-2 bg-white shadow-lg border rounded-xl">
                <FaWhatsapp className="h-full w-full text-green-500" />
              </div>
              <p className="text-xs mt-2">WhatsApp</p>
            </Link>

            <Link
              href="tel:+919512858781"
              target="_blank"
              className="flex flex-col items-center"
            >
              <div className="h-14 w-14 p-3.5 bg-white shadow-lg border rounded-xl">
                <PhoneCall className="h-full w-full text-custom-primary" />
              </div>
              <p className="text-xs mt-2">Call Now</p>
            </Link>

            <Link
              href="mailto:info@tripzee.com"
              className="flex flex-col items-center"
            >
              <div className="h-14 w-14 p-3.5 bg-white shadow-lg border rounded-xl">
                <Mail className="h-full w-full text-custom-primary" />
              </div>
              <p className="text-xs mt-2">Email Us</p>
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
