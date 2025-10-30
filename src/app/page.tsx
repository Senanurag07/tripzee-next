import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OfferBanner from "./components/OfferBanner";
import DestinationCategories from "./components/pages/home/destination-categories";
import TripSection from "./components/sections/TripSection";
import HeroSection from "./components/HeroSection";
import ReelsCarousel from "./components/ReelsCarousel";
import ExploreMore from "./components/ExploreMore";
import FaqSection from "./components/FaqSection";
import BlogStories from "./components/blogs";
import WhyTripzeeSection from "./components/WhyTripzeeSection";
import BottomBar from "./components/global/BottomBar";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <BottomBar/>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <DestinationCategories />
        <OfferBanner />
        <TripSection title="Trending Trips"  />
        <ReelsCarousel />
        <TripSection title="Popular Trips"  />
        <OfferBanner />
        <ExploreMore />
        <WhyTripzeeSection />

        <FaqSection />
        <BlogStories />
      </main>
      <Footer />
    </div>
  );
}
