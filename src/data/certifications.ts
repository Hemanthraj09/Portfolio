// Certifications data - update with your actual details
export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  type: "image" | "pdf";
  category: "course" | "hackathon" | "leadership";
}

export const certifications: Certification[] = [
  // Featured (first 3 appear on homepage): Amagi, IBM, VISA Hackathon
  {
    id: 1,
    title: "Amagi Media Technology",
    issuer: "Amagi Learning Hub",
    date: "2025",
    image: "/certificates/Amagi.jpg",
    type: "image",
    category: "course",
  },
  {
    id: 15,
    title: "IBM",
    issuer: "IBM",
    date: "2026",
    image: "/certificates/IBM.png",
    type: "image",
    category: "course",
  },
  {
    id: 16,
    title: "VISA Hackathon",
    issuer: "IIT Madras",
    date: "2026",
    image: "/certificates/Visa.png",
    type: "image",
    category: "hackathon",
  },
  // Courses
  {
    id: 2,
    title: "CeNS Research",
    issuer: "Centre for Nano & Soft Matter Sciences",
    date: "2022",
    image: "/certificates/CeNS.jpg",
    type: "image",
    category: "course",
  },
  {
    id: 4,
    title: "Machine Learning",
    issuer: "Certification Provider",
    date: "2025",
    image: "/certificates/ML_page-0001.jpg",
    type: "image",
    category: "course",
  },
  // Hackathon
  {
    id: 5,
    title: "L'Oréal Brandstorm",
    issuer: "L'Oréal",
    date: "2025",
    image: "/certificates/LOreal_page-0001.jpg",
    type: "image",
    category: "hackathon",
  },
  // Leadership and Participation
  {
    id: 3,
    title: "Blood Donation",
    issuer: "Blood Bank",
    date: "2024",
    image: "/certificates/BloodDonation.jpg",
    type: "image",
    category: "leadership",
  },
  {
    id: 6,
    title: "Decode AI",
    issuer: "Decode AI",
    date: "2025",
    image: "/certificates/DecodeAI.jpg",
    type: "image",
    category: "leadership",
  },
  {
    id: 7,
    title: "Encode-Mania",
    issuer: "Event Organizer",
    date: "2024",
    image: "/certificates/Encode-Mania_page-0001.jpg",
    type: "image",
    category: "leadership",
  },
  {
    id: 8,
    title: "BioGenesis Participation",
    issuer: "BioGenesis",
    date: "2024",
    image: "/certificates/BioGenesis_page-0001.jpg",
    type: "image",
    category: "leadership",
  },
  {
    id: 9,
    title: "Department Coordinator",
    issuer: "College",
    date: "2024",
    image: "/certificates/HemanthRaj_Department_Coordinator_page-0001.jpg",
    type: "image",
    category: "leadership",
  },
  {
    id: 10,
    title: "Sponsorship POC",
    issuer: "Event Organizer",
    date: "2025",
    image: "/certificates/SponsorshipPOC_page-0001.jpg",
    type: "image",
    category: "leadership",
  },
  {
    id: 11,
    title: "Sponsorship POC (PS)",
    issuer: "Event Organizer",
    date: "2024",
    image: "/certificates/HemanthRaj_Sponsorship_POC_(PS)_page-0001.jpg",
    type: "image",
    category: "leadership",
  },
  {
    id: 12,
    title: "Campaigning 1",
    issuer: "Phase Shift 2024",
    date: "2024",
    image: "/certificates/OCC1.png",
    type: "image",
    category: "leadership",
  },
  {
    id: 13,
    title: "Campaigning 2",
    issuer: "Phase Shift 2024",
    date: "2024",
    image: "/certificates/OCC2.png",
    type: "image",
    category: "leadership",
  },
  {
    id: 14,
    title: "Volunteering Certificate",
    issuer: "Organization",
    date: "2024",
    image: "/certificates/Volunteering.png",
    type: "image",
    category: "leadership",
  },
];
