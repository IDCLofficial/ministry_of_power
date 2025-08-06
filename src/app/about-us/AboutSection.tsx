import Image from "next/image";

interface AboutSectionProps {
    aboutText: string;
    imgSrc: string;
    altText: string;
}

export const AboutSection = ({ aboutText, imgSrc, altText }: AboutSectionProps) => {
    return (
        <section className="w-full py-10 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10 md:gap-0">
                    {/* Left Section - Text Content */}
                    <div className="w-full lg:w-[50%] p-0 sm:p-6 md:p-10 rounded-xl">
                        <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-black mb-4 sm:mb-6 md:mb-8">
                            About the Ministry
                        </h2>
                        <p className="text-dark-primary-body text-base sm:text-lg md:text-[1rem] leading-7 sm:leading-8 md:leading-8">
                            {aboutText}
                        </p>
                    </div>
                    {/* Right Section - Image */}
                    <div className="relative w-full lg:w-[30%] h-[250px] sm:h-[300px] md:h-[500px] bg-[#F1F1F1] flex items-center justify-center rounded-lg">
                        <Image 
                            src={imgSrc}
                            alt={altText}                       
                            className="object-cover w-full h-full sm:h-[350px] md:h-[400px] rounded-lg"
                            width={400}
                            height={400}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}; 