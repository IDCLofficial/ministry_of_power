"use client"

import Image from "next/image";
import { departments } from "../departments/departments";

interface StructuresSectionProps {
    imgSrc: string;
}

export const StructuresSection = ({imgSrc}: StructuresSectionProps) => {
    

    return (
        <section className="w-full bg-[#1D1D1D] py-10 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center">
                {/* Header */}
                <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-white">
                    Our Structure
                </h2>
                <p className="text-white text-base sm:text-lg md:text-[1rem] mb-8 sm:mb-12 md:mb-16 w-full sm:w-[80%] md:w-[60%] mx-auto">
                    The Imo State Ministry of Power and Electrification operates through specialized departments that work together to ensure universal access to reliable, affordable, and sustainable electricity. Each department focuses on specific aspects of power sector development, from rural electrification to renewable energy integration, ensuring comprehensive coverage of the state&apos;s energy needs.
                </p>
                {/* Main Image */}
                <div className="relative w-full h-[180px] sm:h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-8 sm:mb-12 md:mb-20">
                    <Image
                        src={imgSrc}
                        alt="Ministry Building"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Department Cards Grid */}
                <div className="flex flex-col gap-4 sm:gap-6 w-full">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-between">
                        {departments.slice(0,3).map((department, index) => (
                            <div key={index} className="flex-1 bg-white p-4 sm:p-6 md:p-8 shadow-md border border-gray-200 mb-0 rounded-lg">
                                <h3 className="font-bold text-lg sm:text-xl md:text-[22px] text-dark-primary mb-2 sm:mb-3 md:mb-3">
                                    {department?.name}
                                </h3>
                                <p className="text-dark-secondary-body text-sm sm:text-base md:text-[16px]">
                                    {department?.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-between">
                        {departments.slice(3,5).map((department, index) => (
                            <div key={index} className="flex-1 bg-white p-4 sm:p-6 md:p-8 shadow-md border border-gray-200 mb-0 rounded-lg">
                                <h3 className="font-bold text-lg sm:text-xl md:text-[22px] text-dark-primary mb-2 sm:mb-3 md:mb-3">
                                    {department?.name}
                                </h3>
                                <p className="text-dark-secondary-body text-sm sm:text-base md:text-[16px]">
                                    {department?.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* <div className="flex flex-col md:flex-row w-full gap-2">
                        {departments.row2.map((department, index) => (
                            <div key={index} className="flex-1 bg-white p-4 md:p-8 shadow-md border border-gray-200 mb-2 md:mb-0">
                                <h3 className="font-bold text-base md:text-[22px] text-dark-primary mb-2 md:mb-3">
                                    {department?.title}
                                </h3>
                                <p className="text-dark-secondary-body text-sm md:text-[16px]">
                                    {department?.description}
                                </p>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
}; 