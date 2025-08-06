import React from "react";
import { AppLink } from "./AppLink";

interface CTABlockProps {
  heading: string;
  subtext?: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function CTABlock({ heading, subtext, buttonLabel, buttonHref }: CTABlockProps) {
  return (
    <section className="w-full bg-white rounded-[12px] p-4 sm:p-6 md:p-8 lg:p-10 shadow-md mx-auto max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl md:text-[32px] lg:text-[36px] xl:text-[40px] font-medium text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">{heading}</h2>
          {subtext && <p className="text-[0.9rem] sm:text-base md:text-lg text-dark-primary-body mb-4 lg:mb-0">{subtext}</p>}
        </div>
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <AppLink 
            href={buttonHref} 
            label={buttonLabel} 
            variant="primary" 
            className="w-full sm:w-auto max-w-xs text-[0.9rem] sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded font-medium flex justify-center"
          />
        </div>
      </div>
    </section>
  );
} 