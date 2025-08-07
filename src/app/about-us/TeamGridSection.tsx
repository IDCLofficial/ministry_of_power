"use client"

import Image from "next/image";
import React from "react";

interface TeamMember {
  name: string;
  position: string;
  imgSrc: string;
}

interface TeamGridSectionProps {
  members: TeamMember[];
}

const TeamGridSection: React.FC<TeamGridSectionProps> = ({ members }) => {
  return (
    <section className="w-full py-10 md:py-16 px-2 md:px-4 bg-white mx-auto" id="team">
      <h2 className="text-2xl md:text-3xl lg:text-[43px] font-medium text-center mb-6 md:mb-10 text-dark-primary">Our Team</h2>
      
      <div className="w-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto items-center justify-center" id="team">
        {members.map((member, idx) => (
          <div key={idx} className="flex flex-col rounded-xl w-full max-w-[280px]">
            <div className="w-full mb-2 sm:mb-3 md:mb-4 relative">
              <Image src={member.imgSrc} alt={member.name} width={100} height={100} className="w-full h-[140px] sm:h-[160px] md:h-[200px] lg:h-[230px] object-fill rounded-xl" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-lg lg:text-xl font-semibold text-[#232c39] mb-1 text-center">{member.name}</h3>
            <span className="text-green-600 text-xs sm:text-sm md:text-sm lg:text-base font-medium text-center">{member.position}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamGridSection;