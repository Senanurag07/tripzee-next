"use client";
import Image from "next/image";
import { PhoneIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { NavigationMenuDemo } from "./dropdown";
import { FaGoogle, FaInstagram, FaUserCircle } from "react-icons/fa";

interface TopBarItemProps {
  icon: React.ElementType;
  text: string;
  className?: string;
  onClick?: () => void;
}

const TopBarItem = ({
  icon: Icon,
  text,
  className = "",
  onClick,
}: TopBarItemProps) => (
  <div onClick={onClick} className={`flex items-center gap-2 ${className}`}>
    <Icon className="w-4 h-4" />
    <span>{text}</span>
  </div>
);

interface PhoneButtonProps {
  mobile?: boolean;
}

const PhoneButton = ({ mobile = false }: PhoneButtonProps) => (
 <div
  className={`
    ${mobile ? "flex" : "hidden md:flex"}  
    items-center
    ${
      mobile
        ? "bg-yellow-100 rounded-full border border-yellow-300 px-2 py-2" /* reduced vertical padding */
        : "bg-yellow-100 text-black px-2 my-2.5 rounded-md font-medium text-sm border border-yellow-200 "
    }
  `}
>
  <PhoneIcon
    className={`${mobile ? "w-4 h-4" : "w-4 h-4 mr-2"} text-yellow-600`}
  />

  {!mobile && (
    <>
      <span className="text-gray-700">(+91)</span>
      <span className="ml-1 whitespace-nowrap font-semibold">
        93106 52154
      </span>
    </>
  )}
</div>

);

const Navbar = () => (
  <header className="w-full sticky top-0 z-50">
    <div className="hidden md:block bg-black text-white py-2">
      <div className="max-container mx-auto flex items-center justify-center px-6 space-x-6 text-sm">
        <TopBarItem
          icon={FaGoogle}
          text="4.7(2800+ Reviews)"
          className="text-white"
        />
        <TopBarItem
          icon={FaInstagram}
          text="30k+ Followers"
          className="text-white"
        />
        <TopBarItem
          icon={FaUserCircle}
          text="10+ Years Experience"
          className="cursor-pointer hover:text-gray-300 transition"
          onClick={() => {}}
        />
      </div>
    </div>
    <nav className="w-full bg-white shadow-sm">
      <div className="max-container mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        <div className="flex gap-3">
          <Image
            src="/assets/tripzelogo.png"
            alt="Tripzee Holidays"
            width={120}
            height={40}
            className="object-contain"
          />
          <PhoneButton />
        </div>
        <div className="hidden  xl:flex items-center space-x-6">
          <NavigationMenuDemo />
        </div>
        <div className="flex xl:hidden items-center gap-3">
          <a href="tel:+919310652154">
            <PhoneButton mobile />
          </a>
          <button className="p-2 bg-gray-100 rounded-full">
            <MagnifyingGlassIcon className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
