export interface Testimonial {
  id: string;
  name: string;
  course: string;
  degree: string;
  destination: string;
  university: string;
  intake: string;
  image: string;
  quote: string;
  detailedStory: string;
  isFeatured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "aarav-shrestha",
    name: "Aarav Shrestha",
    course: "BSc in Computer Science",
    degree: "Bachelor's",
    destination: "Hungary",
    university: "University of Debrecen",
    intake: "Autumn Intake",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    quote: "SEC's transparency about Hungarian visa requirements and real living costs helped my family make a confident decision without any misleading claims.",
    detailedStory: "When looking at European destinations, I wanted a university with genuine international recognition and affordable tuition. The team at SEC in Putilisadak walked me through every step: from the entrance exam syllabus for Debrecen to mock visa interview drills. Having clear guidance made the entire journey from Kathmandu to Debrecen structured and stress-free.",
    isFeatured: true
  },
  {
    id: "prakriti-adhikari",
    name: "Prakriti Adhikari",
    course: "MSc in Data Science & Artificial Intelligence",
    degree: "Master's",
    destination: "Netherlands",
    university: "University of Amsterdam",
    intake: "September Intake",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    quote: "The personalized attention I received for my Statement of Purpose and research alignment set SEC completely apart from traditional agencies.",
    detailedStory: "Applying to Dutch research universities requires meticulous credit evaluation and academic prerequisites. SEC helped me map my 4-year undergraduate syllabus from Nepal to the European ECTS requirements, ensuring my application was accepted on the first submission.",
    isFeatured: false
  },
  {
    id: "rohan-karki",
    name: "Rohan Karki",
    course: "BSc in Mechanical & Industrial Engineering",
    degree: "Bachelor's",
    destination: "Germany",
    university: "FH Aachen / RWTH Partner Stream",
    intake: "Winter Semester",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    quote: "No false promises of 'guaranteed visas' — just precise, honest document verification and thorough guidance on blocked accounts and APS requirements.",
    detailedStory: "Germany's visa and admission process requires rigorous compliance. What I respected most about SEC was their honesty: they were clear about language requirements, bridge course requirements, and the true timeline involved.",
    isFeatured: false
  },
  {
    id: "sneha-thapa",
    name: "Sneha Thapa",
    course: "Master of Public Health (MPH)",
    degree: "Master's",
    destination: "United Kingdom",
    university: "University of Birmingham",
    intake: "September Intake",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    quote: "From course comparison across Russell Group universities to CAS document checklists, SEC made my 1-year master's transition smooth.",
    detailedStory: "Navigating UK healthcare master's degree options was daunting until I consulted with the counsellors at SEC. They helped me evaluate course modules that aligned with international health policies and guided me through financial verification with complete transparency.",
    isFeatured: false
  }
];
