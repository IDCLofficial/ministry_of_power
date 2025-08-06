"use client"

import Image from "next/image";
import React, { useState, useMemo } from "react";

interface TeamMember {
  name: string;
  position: string;
  imgSrc: string;
}

interface TeamGridSectionProps {
  members: TeamMember[];
}

const TeamGridSection: React.FC<TeamGridSectionProps> = ({ members }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredMembers = useMemo(() => {
    if (!searchTerm) return members;
    
    const term = searchTerm.toLowerCase();
    return members.filter(member => 
      member.name.toLowerCase().includes(term) || 
      member.position.toLowerCase().includes(term)
    );
  }, [members, searchTerm]);
  
  return (
    <section className="w-full py-10 md:py-16 px-2 md:px-4 bg-white mx-auto" id="team">
      <h2 className="text-2xl md:text-3xl lg:text-[43px] font-medium text-center mb-6 md:mb-10 text-dark-primary">Our Team</h2>
      
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8 px-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search team members by name or position..."
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <div className="w-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto items-center justify-center" id="team">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col rounded-xl w-full max-w-[280px]">
              <div className="w-full mb-2 sm:mb-3 md:mb-4 relative">
                <Image src={member.imgSrc} alt={member.name} width={100} height={100} className="w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] object-cover rounded-xl" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-lg lg:text-xl font-semibold text-[#232c39] mb-1 text-center">{member.name}</h3>
              <span className="text-green-600 text-xs sm:text-sm md:text-sm lg:text-base font-medium text-center">{member.position}</span>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No team members found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamGridSection;