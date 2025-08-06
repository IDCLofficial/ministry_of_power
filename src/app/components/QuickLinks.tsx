"use client"

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    title: "Services",
    desc: "Explore our comprehensive range of services.",
    img: "/images/fixingEng.jpg",
    href: "/services"
  },
  {
    title: "Projects",
    desc: "Discover our impactful initiatives.",
    img: "/images/project.jpg",
    href: "/projects"
  },
  {
    title: "Events",
    desc: "See our upcoming events.",
    img: "/images/event.jpg",
    href: "/events"
  },
  {
    title: "Media",
    desc: "Explore our media gallery.",
    img: "/images/media.jpg",
    href: "/media"
  },
];

export default function QuickLinks() {
  return (
    <section className="w-full p-4 sm:p-6 md:p-8 py-10 sm:py-12 md:py-16 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-dark-primary text-2xl sm:text-2xl md:text-3xl lg:text-[43px] font-medium text-center mb-8 sm:mb-10 md:mb-12"
      >
        Quick Links
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-0"
      >
        {links.map((link) => (
          <Link 
            key={link.href}
            href={link.href} 
            className="flex flex-col justify-between relative p-4 sm:p-5 md:p-6 bg-white
            w-full h-[150px] sm:h-[160px] md:h-[170px] lg:h-[180px] shadow-md hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 rounded-lg"
          >
            <div>
              <h3 className={`text-dark-secondary text-base sm:text-base md:text-lg font-bold mb-2`}>{link.title}</h3>
              <p className="text-dark-primary-body text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] mb-3 md:mb-4">{link.desc}</p>
            </div>
            <span className="self-end bg-green-700 hover:bg-green-800 text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </motion.div>
    </section>
  );
} 