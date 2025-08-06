"use client"

import React, { useState } from "react";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

const mediaItems = [
  {
    image: "/images/power-grid.jpg",
    title: "Universal Electrification Initiative Launch",
    isVideo: false
  },
  {
    image: "/images/solar-panels.jpg",
    title: "Renewable Energy Summit 2025",
    isVideo: false
  },
  {
    image: "/images/transformer.jpg",
    title: "Infrastructure Modernization Showcase",
    isVideo: false
  },
  {
    image: "/images/community-electrification.jpg",
    title: "Rural Community Electrification Project",
    isVideo: false
  },
  {
    image: "/images/minister-meeting.jpg",
    title: "Commissioner Nwabueze Oguchienti at National Energy Conference",
    isVideo: false
  },
  {
    image: "/images/power-station.jpg",
    title: "New Power Generation Facility Inauguration",
    isVideo: false
  }
];

export default function MediaPage() {
  const [filteredItems, setFilteredItems] = useState(mediaItems);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredItems(mediaItems);
      return;
    }
    
    const filtered = mediaItems.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredItems(filtered);
  };

  return (
    <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="Our Media Gallery"
        subtitle="Explore our initiatives, projects, and events as we work to power every community in Imo State."
        backgroundImage="/images/heroImage.png"
        onSearch={handleSearch}
      />
      <section className="w-full max-w-7xl mx-auto py-12 px-4">
        <MediaGalleryGrid items={filteredItems} />
      </section>
      <CTASection 
        heading="Partner with Us to Power Every Community in Imo State" 
        subtext="Want to get involved in our electrification initiatives or partner with us? Reach out today" 
        buttonLabel="Contact Us" 
        buttonHref="/contact-us"
      />
      <Footer />
    </main>
  );
}
