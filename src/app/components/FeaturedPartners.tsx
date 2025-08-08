'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { src: "/images/orashi.png", alt: "Orashi Electricity Company Limited" },
  { src: "/images/madkour.webp", alt: "Madkour Group (Egypt)" },
  { src: "/images/iserc.png", alt: "Imo State Electricity Regulatory Commission" },
];

export default function FeaturedPartners() {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#f7f9fa] mx-auto px-4 sm:px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-2xl sm:text-3xl md:text-[40px] lg:text-[43px] font-medium text-center mb-8 sm:mb-10 md:mb-12"
      >
        Featured Partners
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden whitespace-nowrap py-4"
      >
        <div className="flex justify-center animate-scroll">
          {partners.concat(partners).concat(partners).concat(partners).map((partner, idx) => (
            <div key={idx} className="inline-block mx-3 sm:mx-4 md:mx-6 lg:mx-8">
              <div className="bg-white rounded-lg shadow p-3 sm:p-4 flex items-center justify-center w-[120px] sm:w-[140px] md:w-[150px] h-[60px] sm:h-[70px] md:h-[80px]">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={50}
                  height={50}
                  className="object-contain inline-block align-middle h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}