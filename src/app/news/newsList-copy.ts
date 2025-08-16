type newsItem = {
    title: string;
    date: string;
    img: string;
    badge: string;
    desc: string;
}

export const newsList: newsItem[] = [
  {
    title: "Uzodimma unveils 63 MVA Mobitra Substation in Owerri",
    date: "2025-02-10",
    img: "/images/news/132kV-Sub-station-at-Owerri.png", // add URL for first image if available
    badge: "Infrastructure",
    desc: "Governor Hope Uzodimma commissioned the 63 MVA, 132KV/33KV Mobitra Substation at Obinze, boosting Owerri's power capacity by ~50 MW. This project is part of a broader plan including multiple transmission lines and transformers across the state."
  },
  {
    title: "Imo State launches Electricity Regulatory Commission (ISERC)",
    date: "2025-04-18",
    img: "/images/news/ISERC_inauguration.jpg", // add URL for second image if available
    badge: "Regulation",
    desc: "Governor Uzodimma inaugurated the Imo State Electricity Regulatory Commission, appointing Engr. Sam Nwire as Chairman. The commission will oversee state-level power generation, transmission and distribution, backed by $200 million in private support for power projects."
  },
  {
    title: "Imo grants licence to Orashi Electricity Company for state-wide supply",
    date: "2024-07-13",
    img: "/images/news/Imo-and-Orashi-Electricity.webp", // add URL for third image if available
    badge: "Policy",
    desc: "Imo State granted an interim licence to Orashi Electricity Company to generate, transmit and distribute electricity across all 27 LGAs, superseding reliance on the Enugu Disco. The move follows the 2023 Electricity Act amendment."
  },
  {
    title: "Egbema 378 MW Power Plant nears completion",
    date: "2024-05-27",
    img: "/images/news/Egbema-Power-Plant-in-Imo-State-1.jpg", // add URL for fourth image if available
    badge: "Projects",
    desc: "The Federal and Imo State governments, together with NDPHC, confirmed that the 378.3 MW Egbema Power Plant is 70 % complete. Completion of the switchyard and transmission network will significantly improve power supply in Imo State."
  },
  {
    title: "FG begins ₦63 billion electricity restoration in Okigwe zone",
    date: "2025-04-22",
    img: "/images/news/AA1JkehI.jpg", // optional image
    badge: "Federal",
    desc: "The Federal Government commenced a ₦63 billion power restoration project in the Okigwe Senatorial Zone—bringing light after 22 years of darkness in several LGAs."
  }
];


export default newsList;