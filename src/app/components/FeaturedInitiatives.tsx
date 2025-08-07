"use client"

import Image from "next/image";
import { AppLink } from "./AppLink";
import { projects } from "../projects/projects";
import {motion} from 'framer-motion'

export default function FeaturedInitiatives() {
  return (
    <section className="w-full p-4 sm:p-6 md:p-8 py-10 sm:py-12 md:py-16 bg-white flex flex-col items-center gap-6 sm:gap-8 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-dark-primary text-2xl sm:text-2xl md:text-3xl lg:text-[43px] font-medium text-center mb-6 sm:mb-8 md:mb-12"
      >
        Featured Initiatives
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-0"
      >
        {projects?.slice(0, 4).map((project) => (
          <div key={project.title} className="flex-1 border border-gray-200 bg-white flex flex-col h-full relative cursor-pointer hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden">
            <div className="relative w-full h-[140px] sm:h-[160px] md:h-[200px] lg:h-[220px] z-0">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <div className="w-full flex-1 flex flex-col justify-between p-3 sm:p-4 md:p-5 bg-white shadow-md">
                <div>
                    <h3 className={`text-dark-secondary text-base sm:text-lg md:text-xl font-bold mb-1 md:mb-2`}>{project.title}</h3>
                    <span className="text-gray-500 text-[0.8rem] sm:text-[0.85rem] md:text-sm">{project.description}</span>
                </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="flex justify-center">
        <AppLink href="/projects" label="Learn More" variant="primary" className="border border-primary-green text-[14px] sm:text-[15px] px-[1.5rem] sm:px-[2rem] py-[10px] sm:py-[12px] rounded-[3.4px] font-medium hover:bg-white hover:text-primary-green transition-all duration-300"/>
      </div>
    </section>
  );
}