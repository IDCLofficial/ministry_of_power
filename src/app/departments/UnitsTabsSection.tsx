"use client"

import { useState } from "react";
import Image from "next/image";
import { departments } from "./departments";


export default function UnitsTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = departments[activeIdx];

  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 py-12 sm:py-16 px-4 sm:px-6 md:px-8">
      {/* Tabs */}
      <div className="w-full lg:w-2/6 pr-0 sm:pr-4">
        <ul className="space-y-2 flex gap-2 sm:gap-3 lg:flex-col lg:gap-2 overflow-x-auto pb-2 lg:pb-0">
          {departments.map((dept, idx) => (
            <li key={dept.name} className="flex-1 min-w-[200px] sm:min-w-[250px] lg:min-w-0">
              <button
                className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg border text-nowrap text-sm sm:text-base ${activeIdx === idx ? 'bg-green-600 text-white border-green-600' : 'bg-white text-black border-gray-300'} transition`}
                onClick={() => setActiveIdx(idx)}
              >
                {dept.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Content */}
      <div className="flex-1 px-0 sm:px-4 lg:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 sm:mb-6">{active.name}</h2>
        <div className="w-full mb-4 rounded-xl overflow-hidden">
          <Image src={active.image} alt={active.name} width={600} height={300} className="rounded-xl object-cover w-full h-[200px] sm:h-[250px] md:h-[300px]" />
        </div>
        <p className="text-dark-primary-body text-base sm:text-lg md:text-[1rem]">{active.description}</p>
      </div>
    </section>
  );
}