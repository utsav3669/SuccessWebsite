export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  historicalTagline: string;
  establishedYear: number;
  category: string;
  address: string;
  city: string;
  phones: string[];
  email: string;
  website: string;
  whatsapp: string;
  whatsappDefaultMessage: string;
  workingHours: string;
  registrationNumberHistorical: string;
  registrationStatus: "verification_pending" | "verified";
  socials: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

export const companyInfo: CompanyInfo = {
  name: "Success Educational Consultancy Pvt. Ltd.",
  shortName: "SEC",
  tagline: "Empowering Education for a Global Future",
  historicalTagline: "Educating the World for Success",
  establishedYear: 2007,
  category: "Educational Consultancy / International Education Advisory",
  address: "Putalisadak-29, Kathmandu, Nepal",
  city: "Kathmandu, Nepal",
  phones: [
    "01-4513517",
    "9841323688"
  ],
  email: "edu.success@gmail.com",
  website: "successnepal.edu.np",
  whatsapp: "9779841323688",
  whatsappDefaultMessage: "Hello Success Educational Consultancy, I would like to know more about studying abroad and would like counselling about destinations, courses and universities.",
  workingHours: "Sunday to Friday: 9:30 AM to 5:30 PM (NPT)",
  registrationNumberHistorical: "Ministry of Education Registration No. 396",
  registrationStatus: "verification_pending",
  socials: {
    facebook: "https://www.facebook.com/successeducationalconsultancy",
    instagram: "https://www.instagram.com/successeducationalconsultancy",
    linkedin: "https://www.linkedin.com/company/successeducationalconsultancy",
  },
};

