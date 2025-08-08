"use client";

import React from "react";
import "./objectives-animation.css";

export const ObjectivesSection = () => {
    const objectives: { title: string; description: string }[] = [
        {
            title: "Universal Electrification",
            description: "Ensure access to reliable electricity for all communities across Imo State through targeted infrastructure development and grid expansion programs."
        },
        {
            title: "Renewable Energy Focus",
            description: "Promote sustainable energy solutions by investing in solar, hydro, and other renewable energy technologies to reduce carbon footprint."
        },
        {
            title: "Infrastructure Modernization",
            description: "Upgrade and modernize power transmission and distribution systems to improve efficiency and reduce energy losses."
        },
        {
            title: "Private Partnerships",
            description: "Foster public-private partnerships to leverage additional resources and expertise for accelerated power sector development."
        }
    ];

    const coreValues = [
        "Reliability",
        "Sustainability",
        "Innovation",
        "Community Impact"
    ];

    return (
        <section className="w-full bg-white py-10 sm:py-16 md:py-20">
            <div className="mmx-auto px-4 sm:px-6 md:px-8">
                {/* IMDEEG's Objectives */}
                <div className="mb-12 sm:mb-14 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-center mb-8 sm:mb-10 md:mb-12">
                        Our Strategic Objectives
                    </h2>
                    <div className="overflow-hidden py-4">
                        <div className="flex animate-scroll space-x-6">
                            {/* Duplicate the objectives to create a seamless infinite scroll */}
                            {[...objectives, ...objectives].map((objective, index) => (
                                <div key={index} className="flex-shrink-0 bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-[300px] md:w-[350px]">
                                    <h3 className="font-medium text-lg sm:text-xl md:text-[22px] mb-2 sm:mb-2.5 md:mb-3">
                                        {objective.title}
                                    </h3>
                                    <p className="text-dark-primary-body text-sm sm:text-base md:text-[1rem]">
                                        {objective.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-center mb-8 sm:mb-10 md:mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full">
                                <span className="font-medium text-base sm:text-lg md:text-lg text-dark-primary-body">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 