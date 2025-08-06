import { MVSCard } from "./MVSCard"

const mvs = [
    {
        title: "Our Mission",
        description: "To make power available, affordable and sustainable for every imolite. Through strategic investments, private partnerships, and regulatory reforms, we are reshaping the power sector in Imo State to deliver long-term impact"
    },
    {
        title: "Our Vision",
        description: "To power homes, energize businesses, and electrify our future."
    }
]   

export const MVSSection = () => {
    return(
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 p-4 sm:p-6 md:p-8 py-16 sm:py-20 justify-center items-center w-full bg-[#F1F1F1]">
            {mvs.map((mvs, index) => (
                <MVSCard key={index} title={mvs.title} description={mvs.description} />
            ))}
        </div>
    )
}