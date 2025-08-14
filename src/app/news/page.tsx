"use client";
import NewsHeroSection from "./NewsHeroSection";
import NewsSidebar from "./NewsSidebar";
import NewsGrid from "./NewsGrid";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { useState } from "react";
import type { FilterOption } from "./NewsSidebar";

export default function NewsPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>('Latest Updates');
  return (
    <div className="bg-white">
      <NewsHeroSection />
      <div className="w-full max-w-[100%] mx-auto flex flex-col md:flex-row gap-4 md:gap-8 px-2 md:px-8 py-8 md:py-20">
        <NewsSidebar selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
        <div className="flex-1">
          <NewsGrid selectedFilter={selectedFilter} />
        </div>
      </div>
      <CTASection heading="Partner with Us to Power Every Community in Imo State" subtext="Want to get involved in our electrification initiatives or partner with us? Reach out today" buttonLabel="Contact Us" buttonHref="/contact-us"/>
      <Footer />
    </div>
  );
}
