import ServiceCard from "./ServiceCard";

const services = [
  {
    imgSrc: "",
    title: "Complaint Submission & Dispute Resolution",
    description: "Submit complaints about power supply issues and get timely resolution for disputes related to electricity services."
  },
  {
    imgSrc: "",
    title: "Meter Request Process",
    description: "Apply for new electricity meters or request meter replacements through our streamlined process."
  },
  {
    imgSrc: "",
    title: "Fault Reporting",
    description: "Report power outages, electrical faults, or infrastructure issues for prompt attention and resolution."
  },
  {
    imgSrc: "",
    title: "Licensing for Embedded Generation/Mini-Grids",
    description: "Obtain licenses for private electricity generation and mini-grid operations in accordance with state regulations."
  },
  {
    imgSrc: "",
    title: "Partnership Opportunities",
    description: "Explore collaboration opportunities with the Ministry for power infrastructure development and electrification projects."
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
} 