import { Hero } from "@/app/components/Hero";
import AboutSection from "@/app/components/AboutSection";
import AboutCommisioner from "@/app/components/AboutCommisioner";
import QuickLinks from "@/app/components/QuickLinks";
// import Stats from "@/app/components/Stats";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import FeaturedInitiatives from "./components/FeaturedInitiatives";
import FeaturedPartners from "./components/FeaturedPartners";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Hero
        title="Imo State Ministry of Power and Electrification" 
        caption= "Providing Power for Every Community in Imo State" 
        subtitle="The Imo State Ministry of Power and Electrification is responsible for driving sustainable and accessible electricity across the state. Under the leadership of Governor Hope Uzodimma, the ministry has taken significant steps toward improving the state’s energy infrastructure. Join us in building a reliable, independent, and people-centered electricity ecosystem."
      />
      <AboutSection 
        title="About Us"
        subtitle= "The Imo State Ministry of Power and Electrification is responsible for driving sustainable and accessible electricity across the state. Under the leadership of Governor Hope Uzodimma, the ministry has taken significant steps toward improving the state’s energy infrastructure. One of its major initiatives includes a statewide power audit aimed at assessing electricity demands in over 700 autonomous communities, urban centers, and the capital city. This data-driven approach guides planning for equitable electrification."
        image1="/images/Electricity-Distribution.jpg"
        image2="/images/engineers.jpg"
      />
      <AboutCommisioner 
        imgSrc="/images/commissioner.png" 
        title="About The Commissioner" 
      />
      <section className="w-full flex flex-col gap-4">
        <FeaturedInitiatives />
        <FeaturedPartners />
        <QuickLinks />
        {/* <Advertisement /> */}
      </section>
      {/* <Stats /> */}
      {/* <FeaturedPartners /> */}
      <CTASection 
        heading="Join us in powering the future of Imo State."
        subtext="Together, we can light up every community, drive industrial growth, and build a sustainable energy ecosystem that empowers lives and strengthens our economy."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer/>
    </div>
  );
}
