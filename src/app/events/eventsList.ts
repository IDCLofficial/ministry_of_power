type event = {
  slug: string;
  date: string;
  location: string;
  title: string;
  description: string;
  img: string;
  time: string;
  organizer: string;
  phone: string;
  address: string;
  speakers: {
    name: string;
    img: string;
    role: string;
  }[];
}

export const events: event[] = [
  {
    slug: "2025-budget-signing-ministry-of-power",
    date: "2024-12-31",
    location: "Government House, New Exco Chambers, Owerri",
    title: "Signing of 2025 Budget — Ministry of Power Allocation",
    description:
      "Governor Hope Uzodimma signed the 2025 Appropriation Bill into law, allocating ₦74.76 billion (10.8%) to the Ministry of Power and Electrification to boost electricity infrastructure and 24/7 power goals.",
    img: "/images/events/governor.jpg",
    time: "10:00 am",
    organizer: "Governor's Office, Imo State",
    phone: "",
    address: "Government House, Owerri",
    speakers: [
      {
        name: "His Excellency, Hope Uzodimma",
        img: "/images/events/governor.jpg",
        role: "Governor of Imo State"
      }
    ]
  },
  {
    slug: "state-electrical-bill-passed",
    date: "2024-11-09",
    location: "Imo State House of Assembly, Owerri",
    title: "Imo State Electrical Bill Passed into Law",
    description:
      "Imo State House of Assembly passed the State Electrical Bill, enabling the state to issue licences for mini-grids and power plants under the framework of the Federal Electricity Act 2023.",
    img: "/images/events/governor.jpg",
    time: "10:00 am",
    organizer: "Imo State House of Assembly",
    phone: "",
    address: "Owerri",
    speakers: [
      {
        name: "Kanayo Onyemaechi",
        img: "/images/events/Hon-Chief-Kanayo-Onyemaechi.jpg",
        role: "Majority Leader, Chief Sponsor"
      }
    ]
  },
  {
    slug: "iserc-inaugurates-customer-complaints-forum",
    date: "2025-01-18",
    location: "ISERC Offices, Imo State",
    title: "ISERC Inaugurates Customer Complaints Forum",
    description:
      "ISERC inaugurated a five-member forum to resolve electricity consumer complaints and appeals against distribution companies, reinforcing consumer protection in the state's power sector.",
    img: "/images/events/governor2.jpg",
    time: "10:00 am",
    organizer: "Imo State Electricity Regulatory Commission (ISERC)",
    phone: "",
    address: "Owerri",
    speakers: [
      {
        name: "Bede Opara",
        img: "/images/no-image-icon-23485.png",
        role: "Chairman, ISERC"
      },
      {
        name: "Prince Uchegbu",
        img: "/images/no-image-icon-23485.png",
        role: "Head, Complaints Forum"
      }
    ]
  },
  {
    slug: "iserc-holds-second-customers-forum",
    date: "2025-03-05",
    location: "ISERC Offices, Owerri",
    title: "Second Customers’ Forum by ISERC",
    description:
      "ISERC organized its second customers’ forum where electricity consumers presented their challenges; the commission reaffirmed its commitment to resolving backlog complaints and delivering reliable power access.",
    img: "/images/events/iserc.png",
    time: "10:00 am",
    organizer: "Imo State Electricity Regulatory Commission (ISERC)",
    phone: "",
    address: "Owerri",
    speakers: [
      {
        name: "Bede Opara",
        img: "/images/no-image-icon-23485.png",
        role: "Chairman, ISERC"
      }
    ]
  }
];


export default events;