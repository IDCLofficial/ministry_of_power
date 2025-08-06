'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface AboutCommisionerProps {
    imgSrc: string;
    title: string;
}

export default function AboutCommisioner({imgSrc, title}: AboutCommisionerProps) {
  return (
    <section className="w-full bg-[#f3f8fa] py-12 sm:py-16 md:py-20 flex justify-center">
        <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: false }}
            className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16 w-full px-4 sm:px-6 md:px-8 lg:px-[3rem] max-w-7xl mx-auto"
        >
            {/* Left: Commissioner Image */}
            <div className="bg-white rounded-xl shadow-lg flex-shrink-0 w-full lg:w-auto flex justify-center">
                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:w-[350px] lg:h-[400px] xl:w-[400px] xl:h-[450px]">
                    <Image
                    src={imgSrc}
                    alt="Commissioner"
                    fill
                    className="object-cover object-center rounded-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />
                </div>
            </div>
            {/* Right: Text Content */}
            <div className="flex-1 w-full lg:w-auto mt-6 lg:mt-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[43px] font-bold text-dark-primary mb-4">{title}</h2>
                <p className="text-dark-primary-body text-[0.9rem] sm:text-base md:text-lg mb-4">
                    Hon. Engr. Nwabueze Oguchienti is the current Commissioner for Power and Electrification in Imo State, appointed by his Excellency, Governor Hope Uzodimma. A seasoned engineer and energy sector expert, he brings over 20 years of professional experience in electrical infrastructure, rural electrification, and project development.
                </p>
                <blockquote className="text-dark-primary-body text-[0.9rem] sm:text-base md:text-lg mb-4 italic">
                    &quot;Electricity is not luxury - it is a necessity. My mission is to make power available, affordable and sustainable for every imolite. Through strategic investments, private partnerships, and regulatory reforms, we are reshaping the power sector in Imo State to deliver long-term impact. Our focus is clear: to power homes, energize businesses, and electrify our future.&quot;
                    - Hon. Engr. Nwabueze Oguchienti.
                </blockquote>
            </div>
        </motion.div>
    </section>
  );
} 