import Image from "next/image";
import { Title } from "./Title";
import { AppLink } from "./AppLink";
import PageTransition from "./PageTransition";

interface AboutSectionProps {
    title: string;
    subtitle: string;
    image1: string;
    image2: string;
}

export default function AboutSection({title, subtitle, image1, image2}: AboutSectionProps) {
  return (
    <section className={`relative w-full p-4 sm:p-6 md:px-4 py-12 sm:py-16 md:py-20 bg-[url('/images/gradient.png')] bg-no-repeat bg-cover shadow-lg overflow-hidden`}>
      <div className="flex flex-col gap-8 items-left w-full md:w-[95%] mx-auto">
        {/* Left: Text Content */}
        <div className="flex flex-col lg:flex-row h-full justify-between w-full gap-6">
            <PageTransition type="fadeUp">
              <div className="flex flex-col gap-2 w-full md:w-auto">
                <Title label={title}/>
                <h2 className="text-2xl sm:text-3xl lg:text-[43px] font-bold text-white leading-tight py-4">
                  Our Mandate — Mininstry of <br/>
                  <span className="text-green-400"> Power and Electrification</span>
                </h2>
              </div>
            <div className="relative rounded-lg overflow-hidden w-full lg:w-[40%] h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] lg:hidden">
              <Image 
                src={image1} 
                alt="Mandate 1" 
                width={1280}
                height={1280}
                className="object-cover object-[40%_40%] w-full h-full" 
              />
            </div>
              </PageTransition>
            <div className="w-full lg:w-[40%] flex flex-col gap-4">
              <PageTransition type="fadeUp">
                <p className="text-gray-200 text-[0.9rem] sm:text-[1rem] md:text-[16px] max-w-lg text-justify">
                    {subtitle}
                </p>
              </PageTransition>
              <AppLink href="/about-us" label="Learn More" variant="secondary" className="border border-primary-green text-[14px] sm:text-[15px] px-[1.5rem] sm:px-[2rem] py-[10px] sm:py-[12px] rounded-[3.4px] font-medium hover:bg-primary-green hover:text-white transition-all duration-300 w-max hidden lg:block"/>
            </div>
        </div>
        {/* Right: Images */}

        <div className="flex gap-2 items-stretch">
          <div className="relative rounded-lg overflow-hidden w-full h-[180px] sm:h-[300px] mb-4 max-lg:hidden">
            <Image 
              src={image1} 
              alt="Mandate 1" 
              width={1280}
              height={1280}
              className="object-cover object-[40%_40%] w-full h-full" 
            />
          </div>
          <div className="relative bg-red-500 rounded-lg overflow-hidden w-full h-[180px] sm:h-[300px] mb-6">
            <Image 
              src={image2} 
              alt="Mandate 2"
              width={1280}
              height={1280} 
              // fill 
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              className="object-cover object-[40%_40%] w-full h-full" 
            />
          </div>
        </div>
        <AppLink href="/about-us" label="Learn More" variant="secondary" className="w-max border border-primary-green text-[14px] sm:text-[15px] px-[1.5rem] sm:px-[2rem] py-[10px] sm:py-[12px] rounded-[3.4px] font-medium hover:bg-primary-green hover:text-white transition-all duration-300 mx-auto block lg:hidden"/>
      </div>
    </section>
  );
}
