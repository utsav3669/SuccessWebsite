export interface FAQItem {
  id: string;
  category: "General" | "Destinations" | "Courses" | "Universities" | "Applications" | "Visa" | "Scholarships" | "Pre-Departure";
  question: string;
  answer: string;
}

export const faqCategories = [
  "General",
  "Destinations",
  "Courses",
  "Universities",
  "Applications",
  "Visa",
  "Scholarships",
  "Pre-Departure"
] as const;

export const faqs: FAQItem[] = [
  {
    id: "g-1",
    category: "General",
    question: "Where is Success Educational Consultancy located in Kathmandu?",
    answer: "Our main office is conveniently located in Putilisadak-29, Kathmandu, Nepal. We welcome students and parents for in-person counselling sessions Sunday through Friday from 9:30 AM to 5:30 PM."
  },
  {
    id: "g-2",
    category: "General",
    question: "Does SEC charge for the initial education counselling session?",
    answer: "No, our initial educational counselling, profile evaluation, and course discovery sessions are completely free of charge. We believe every student deserves honest, transparent guidance before committing to any study pathway."
  },
  {
    id: "g-3",
    category: "General",
    question: "How does SEC ensure honesty and avoid unrealistic claims?",
    answer: "SEC strictly avoids misleading marketing promises like '100% visa guarantee' or 'instant scholarships'. We adhere to ethical educational consulting: verifying all documents according to official embassy and university regulations, providing realistic timelines, and setting honest expectations."
  },
  {
    id: "d-1",
    category: "Destinations",
    question: "Which international destinations does SEC currently focus on?",
    answer: "Our current core destinations are Hungary, the Netherlands, Germany, the United Kingdom, the USA, Australia, and Sweden. Each country offers distinct strengths in terms of tuition affordability, program duration, research focus, and post-study opportunities."
  },
  {
    id: "d-2",
    category: "Destinations",
    question: "Why is Hungary gaining popularity among Nepalese students?",
    answer: "Hungary offers accredited European degrees taught entirely in English, reasonable annual tuition fees (often €2,500 to €6,000/year), low living costs compared to Western Europe, 24 hours/week part-time work rights, and access to the European Schengen Area."
  },
  {
    id: "c-1",
    category: "Courses",
    question: "Can I switch my study field from my +2 or Bachelor's background?",
    answer: "It depends on the course and university prerequisites. While STEM and medical degrees require specific foundational credits in mathematics or biology, fields like Business Administration, International Tourism, and select IT conversion programs welcome applicants from varied backgrounds."
  },
  {
    id: "c-2",
    category: "Courses",
    question: "Are English proficiency tests (IELTS / PTE / TOEFL) mandatory for all programs?",
    answer: "Most reputable institutions require standardized test scores (typically IELTS 5.5–6.5 or PTE 50–65). However, certain universities in Hungary and Germany may accept Medium of Instruction (MOI) certificates from accredited English-medium colleges following an academic interview."
  },
  {
    id: "u-1",
    category: "Universities",
    question: "How does SEC help me choose between research and applied universities?",
    answer: "We assess your career objective: if your goal is scholarly research, doctoral studies, or foundational theory, a traditional Research University is ideal. If you prefer practical workshops, mandatory corporate internships, and immediate industry entry, a University of Applied Sciences is frequently the superior fit."
  },
  {
    id: "a-1",
    category: "Applications",
    question: "What documents are required to initiate an international university application?",
    answer: "Typically you will need: academic transcripts and certificates (+2 / Bachelor's), a valid passport, a tailored Statement of Purpose (SOP), two letters of recommendation, an updated academic CV, and English proficiency test scores (if available)."
  },
  {
    id: "a-2",
    category: "Applications",
    question: "How long before the intake should I begin my application?",
    answer: "We strongly recommend beginning 6 to 9 months before your target semester. This allows sufficient time for transcript authentication, entrance exams, admissions decisions, financial documentation, and embassy visa processing."
  },
  {
    id: "v-1",
    category: "Visa",
    question: "What is the most crucial factor for student visa approval?",
    answer: "Immigration authorities focus on three elements: genuine student intent (clearly explaining why you selected this course and country), transparent and verifiable financial capability (legitimate source of funds and banking history), and ties to your home country."
  },
  {
    id: "v-2",
    category: "Visa",
    question: "Does SEC provide mock visa interview preparation?",
    answer: "Yes! Mock interview training is one of our hallmark services. We conduct realistic, one-on-one simulated interviews covering course knowledge, financial justification, and future career plans until you feel confident and composed."
  },
  {
    id: "s-1",
    category: "Scholarships",
    question: "Can I get a full scholarship for international study?",
    answer: "Competitive government scholarships such as the Stipendium Hungaricum in Hungary and DAAD in Germany offer full tuition coverage and stipends for high-achieving applicants. Many universities also offer partial merit waivers (10% to 50%) based on high grades."
  },
  {
    id: "p-1",
    category: "Pre-Departure",
    question: "Does SEC assist with student accommodation and flights?",
    answer: "Yes, during our pre-departure briefing, we assist students in applying for university dormitories, finding verified private student housing, advising on flight booking dates, and connecting them with seniors and alumni already living at their destination."
  }
];
