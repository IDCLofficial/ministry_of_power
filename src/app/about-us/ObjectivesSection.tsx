export const ObjectivesSection = () => {
    const agencies: { title: string; description: string }[] = [
        {
            title: "Universal Electrification",
            description: "Ensure access to reliable electricity for all communities across Imo State through targeted infrastructure development and grid expansion programs."
        },
        {
            title: "Renewable Energy Focus",
            description: "Promote sustainable energy solutions by investing in solar, hydro, and other renewable energy technologies to reduce carbon footprint."
        },
        {
            title: "Infrastructure Modernization",
            description: "Upgrade and modernize power transmission and distribution systems to improve efficiency and reduce energy losses."
        },
        {
            title: "Private Partnerships",
            description: "Foster public-private partnerships to leverage additional resources and expertise for accelerated power sector development."
        }
    ];

    const coreValues = [
        "Reliability",
        "Sustainability",
        "Innovation",
        "Community Impact"
    ];

    return (
        <section className="w-full bg-white py-10 sm:py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                {/* IMDEEG's Objectives */}
                <div className="mb-12 sm:mb-14 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-center mb-8 sm:mb-10 md:mb-12">
                        Our Strategic Objectives
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {agencies.map((agency, index) => (
                            <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full">
                                <h3 className="font-medium text-lg sm:text-xl md:text-[22px] mb-2 sm:mb-2.5 md:mb-3">
                                    {agency.title}
                                </h3>
                                <p className="text-dark-primary-body text-sm sm:text-base md:text-[1rem]">
                                    {agency.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-center mb-8 sm:mb-10 md:mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full">
                                <span className="font-medium text-base sm:text-lg md:text-lg text-dark-primary-body">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 