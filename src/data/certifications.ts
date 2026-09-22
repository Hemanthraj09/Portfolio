// Certifications data - update with your actual details
export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: "course" | "hackathon" | "leadership";
}

export const certifications: Certification[] = [
  // Featured (first 3 appear on homepage): Nutanix, Cisco, VISA Hackathon
  {
    id: 17,
    title: "Nutanix Certified Associate 6",
    issuer: "Nutanix",
    date: "2026",
    image: "/certificates/Nutanix.png",
    category: "course",
  },
  {
    id: 18,
    title: "Cisco Forecasting League",
    issuer: "CISCO",
    date: "2026",
    image: "/certificates/Cisco.png",
    category: "hackathon",
  },
  {
    id: 16,
    title: "VISA Hackathon",
    issuer: "IIT Madras",
    date: "2026",
    image: "/certificates/Visa.png",
    category: "hackathon",
  },
  // Courses
  {
    id: 1,
    title: "Amagi Media Technology",
    issuer: "Amagi Learning Hub",
    date: "2025",
    image: "/certificates/Amagi.jpg",
    category: "course",
  },
  {
    id: 15,
    title: "IBM",
    issuer: "IBM",
    date: "2026",
    image: "/certificates/IBM.png",
    category: "course",
  },
  {
    id: 2,
    title: "CeNS Research",
    issuer: "Centre for Nano & Soft Matter Sciences",
    date: "2022",
    image: "/certificates/CeNS.jpg",
    category: "course",
  },
  {
    id: 4,
    title: "Machine Learning",
    issuer: "Simplilearn SkillUP",
    date: "2025",
    image: "/certificates/ML_page-0001.jpg",
    category: "course",
  },
  // Hackathon
  {
    id: 5,
    title: "L'Oréal Brandstorm",
    issuer: "L'Oréal",
    date: "2025",
    image: "/certificates/LOreal_page-0001.jpg",
    category: "hackathon",
  },
  // Leadership and Participation
  {
    id: 6,
    title: "Decode AI",
    issuer: "Decode AI",
    date: "2025",
    image: "/certificates/DecodeAI.jpg",
    category: "leadership",
  },
  {
    id: 7,
    title: "Encode-Mania",
    issuer: "Phase Shift 2024",
    date: "2024",
    image: "/certificates/Encode-Mania_page-0001.jpg",
    category: "leadership",
  },
  {
    id: 8,
    title: "BioGenesis Participation",
    issuer: "BioGenesis",
    date: "2024",
    image: "/certificates/BioGenesis_page-0001.jpg",
    category: "leadership",
  },
  {
    id: 9,
    title: "Department Coordinator",
    issuer: "Phase Shift 2025",
    date: "2025",
    image: "/certificates/HemanthRaj_Department_Coordinator_page-0001.jpg",
    category: "leadership",
  },
  {
    id: 10,
    title: "Sponsorship POC",
    issuer: "UTSAV 2025",
    date: "2025",
    image: "/certificates/SponsorshipPOC_page-0001.jpg",
    category: "leadership",
  },
  {
    id: 11,
    title: "Sponsorship POC (PS)",
    issuer: "Phase Shift 2025",
    date: "2025",
    image: "/certificates/HemanthRaj_Sponsorship_POC_(PS)_page-0001.jpg",
    category: "leadership",
  },
  {
    id: 12,
    title: "Campaigning 1",
    issuer: "Phase Shift 2024",
    date: "2024",
    image: "/certificates/OCC1.png",
    category: "leadership",
  },
  {
    id: 13,
    title: "Campaigning 2",
    issuer: "Phase Shift 2024",
    date: "2024",
    image: "/certificates/OCC2.png",
    category: "leadership",
  },
  {
    id: 14,
    title: "Volunteering Certificate",
    issuer: "DSync, BMSCE",
    date: "2024",
    image: "/certificates/Volunteering.png",
    category: "leadership",
  },
];
