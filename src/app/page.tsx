import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OfferBanner from "./components/OfferBanner";
import DestinationCategories from "./components/pages/home/destination-categories";
import TripSection from "./components/sections/TripSection";
import HeroSection from "./components/HeroSection";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection/>
        <DestinationCategories />
        <OfferBanner />
        <TripSection />
        <TripSection />
      </main>
      <Footer />
    </div>
  );
}
