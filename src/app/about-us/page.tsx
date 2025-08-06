import { AboutUsHero } from "./AboutUsHero";
import { AboutSection } from "./AboutSection";
import { ObjectivesSection } from "./ObjectivesSection";
import { StructuresSection } from "./StructuresSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { MVSSection } from "./MVSSection";
import TeamGridSection from "./TeamGridSection";
import { teamMembers } from "./teamMembers";



export default function AboutUs() {
    return (
        <div className="h-screen">
            <AboutUsHero ministryName="Ministry of Power and Electrification" />
            <AboutSection 
                aboutText="The Imo State Ministry of Power and Electrification is the state's primary agency responsible for ensuring universal access to reliable, affordable, and sustainable electricity. The ministry coordinates power sector development, implements electrification programs, and promotes renewable energy initiatives to transform Imo State into a modern, energy-sufficient economy."
                imgSrc="/images/power-ministry.jpg" 
                altText="Ministry of Power and Electrification building" 
            />
            <MVSSection />   
            <TeamGridSection members={teamMembers} />
            <ObjectivesSection />
            <StructuresSection 
                imgSrc="/images/fed-sec.jpg"
            />
            <CTASection 
                heading="Partner with Us to Power Every Community in Imo State"
                subtext="Want to get involved in our electrification initiatives or partner with us? Reach out today"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}