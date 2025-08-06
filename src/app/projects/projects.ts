interface project {
  title: string;
  image: string;
  ongoing: boolean;
  description: string;
}


export const projects:project[] = [
  {
    title: "Light Up Imo",
    image: "/images/light.jpg",
    ongoing: true,
    description: "Electrification of over 300 communities by 2026."
  },
  {
    title: "Renewable Energy Intergration",
    image: "/images/solar.jpg",
    ongoing: true,
    description: "Rollout of solar mini grids to communities in Imo State."
  },
  {
    title: "Infrastructure Upgrades",
    image: "/images/substation.jpg",
    ongoing:false,
    description: "Modernization of transformers, substations, and distribution lines."
  }
];