"use client"

import { motion } from "framer-motion";
import PageTransition from "./PageTransition";
import { Title } from "./Title";

interface HeroProps {
    title: string;
    caption: string;
    subtitle: string;
}

export const Hero = ({title, caption, subtitle}: HeroProps) => {
    // const { bgImage } = heroImages[current];
    const bgImage = "/images/heroImage.png";

    return(
        <div className={`h-screen px-4 sm:px-6 md:px-12 lg:px-[3rem] flex flex-col justify-center bg-cover bg-center overflow-hidden`}>
            <motion.img
                key={bgImage}
                src={bgImage}
                className="absolute inset-0 w-full h-full object-cover z-0"
                initial={{ scale: .99}}
                whileInView={{ scale: 1}}
                transition={{ duration: 2, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent z-0"></div>
            <div className="relative z-10 py-8 sm:py-10">
                <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] flex flex-col gap-3 sm:gap-4 pt-[1rem]">
                    <PageTransition type="fadeUp">
                        <Title label={title}/>
                        <h1 className="text-[1.75rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3rem] font-bold text-white leading-tight py-2">{caption}</h1>
                        <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.05rem] leading-[1.5] text-white">
                            {subtitle}
                        </p>
                        <AppLink href="/contact-us" label="Join Us" variant="primary" className="block w-max border border-primary-green text-[14px] sm:text-[15px] px-[1.5rem] sm:px-[2rem] py-[10px] sm:py-[12px] rounded-[3.4px] font-medium hover:bg-white hover:text-black transition-all duration-300 mt-4 sm:mt-6 animate-bounce animate-ease-in-out hover:animate-none"/>
                    </PageTransition>
                </div>
            </div>
        </div>
    )
}

import { ReactNode } from "react";
import { AppLink } from "./AppLink";

interface SubsequentHeroProps {
    children: ReactNode,
    className?: string;
}

export const SubsequentHero = ({ children, className }: SubsequentHeroProps) => {
    return (
        <div className="relative min-h-[85vh] px-2 md:px-[3rem] py-8 md:pt-10 flex flex-col justify-center gap-4 bg-gradient-to-r from-green-900/20 via-black to-black">
            <div className={`absolute inset-0 bg-cover bg-center z-0 ${className}`}></div>
            {children}
        </div>
    );
}