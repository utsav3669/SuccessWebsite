export interface BlogPost {
  slug: string;
  title: string;
  category: "Destination Guide" | "Visa & Immigration" | "Scholarships" | "Student Life";
  readTime: string;
  publishedDate: string;
  author: string;
  excerpt: string;
  image: string;
  content: string[];
}

export interface StudyGuide {
  slug: string;
  country: string;
  title: string;
  description: string;
  keyTopics: string[];
  pdfAvailable?: boolean;
}

export interface VisaGuide {
  slug: string;
  country: string;
  title: string;
  processingTime: string;
  financialRequirements: string;
  keyChecklist: string[];
}

export interface ScholarshipItem {
  id: string;
  title: string;
  country: string;
  provider: string;
  coverage: string;
  deadline: string;
  eligibility: string[];
}

export interface DidYouKnowItem {
  id: string;
  fact: string;
  context: string;
  tag: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "complete-guide-studying-in-hungary-2025",
    title: "Studying in Hungary from Nepal: Cost, English Degrees, and Residence Rules",
    category: "Destination Guide",
    readTime: "6 min read",
    publishedDate: "January 14, 2025",
    author: "SEC Academic Research Team",
    excerpt: "Why Hungary has become one of the premier study destinations in Central Europe for Nepalese students seeking quality, affordable degrees.",
    image: "/images/blog/eotvos-lorand-university-budapest.jpg",
    content: [
      "In recent years, higher education in Hungary has earned international acclaim for balancing rigorous European standards with practical accessibility. Hungarian universities—such as the University of Debrecen, Eötvös Loránd University (ELTE), and Corvinus University—offer hundreds of Bachelor's and Master's programs fully taught in English.",
      "Cost is a pivotal factor for international families. Unlike Western European destinations where annual tuition often exceeds €15,000, reputable Hungarian universities frequently offer degree programs starting from €2,500 to €6,000 per year, accompanied by living costs that are significantly lower than Western capitals.",
      "Furthermore, Hungary's strategic location inside the Schengen Area gives students the unique benefit of traveling across 27 European countries without needing additional visas during semester breaks, broadening both cultural perspective and professional outlook."
    ]
  },
  {
    slug: "eotvos-lorand-university-elte-budapest-guide",
    title: "Eötvös Loránd University (ELTE): Academic Excellence and Degree Programs in Budapest",
    category: "Destination Guide",
    readTime: "5 min read",
    publishedDate: "February 10, 2025",
    author: "SEC European Admissions Desk",
    excerpt: "An in-depth guide to Eötvös Loránd University (ELTE)—Hungary's prestigious research institution located in central Budapest, offering top-tier Computer Science and Psychology curricula.",
    image: "/images/universities/eotvos-lorand-university.jpg",
    content: [
      "Founded in 1635, Eötvös Loránd University (ELTE) stands as Hungary's premier public research university and one of Central Europe's most distinguished centers of higher education, having educated five Nobel laureates and leading global researchers.",
      "Situated in the historical and cultural center of Budapest, ELTE offers a comprehensive suite of internationally accredited Bachelor's, Master's, and Doctoral programs fully delivered in English—most prominently in Computer Science, Psychology, Applied Economics, and International Relations.",
      "With semester tuition rates starting from €2,500 to €3,500 and extensive European Union research consortia, ELTE presents Nepalese applicants with a world-class academic environment, high visa credibility, and transparent admission pathways through Success Educational Consultancy."
    ]
  },
  {
    slug: "understanding-student-visa-interview-nepal",
    title: "Mastering the Student Visa Interview: Preparation, Integrity, and Clarity",
    category: "Visa & Immigration",
    readTime: "5 min read",
    publishedDate: "February 2, 2025",
    author: "Visa Counselling Department",
    excerpt: "How to articulate your academic intent, financial sponsorship, and long-term career aspirations with confidence during your embassy interview.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Whether applying for a European National (Type D) Visa, a US F-1 visa, or a UK Student Visa, the visa interview is not an interrogation—it is an evaluation of your genuine academic intent and your understanding of your chosen course.",
      "Visa officers look for three core fundamentals: academic coherence (does this degree make sense with your previous studies?), financial transparency (can your family or sponsors sustain your study without illegal hardship?), and future outlook (how does this education contribute to your professional trajectory?).",
      "At Success Educational Consultancy, we coach students through realistic mock interview simulations to help them eliminate rote-memorized answers and speak naturally about their genuine motivations."
    ]
  },
  {
    slug: "scholarships-in-europe-for-nepalese-students",
    title: "Government-Funded Scholarships in Europe: What Nepalese Applicants Need to Know",
    category: "Scholarships",
    readTime: "7 min read",
    publishedDate: "February 20, 2025",
    author: "Scholarship Advisory Desk",
    excerpt: "A factual overview of prestigious government grants including Stipendium Hungaricum, DAAD, and Erasmus Mundus.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Navigating scholarship applications requires early preparation, honest evaluation of academic merit, and clear motivation essays. Many European governments actively invite international scholars to enrich campus diversity.",
      "For instance, the Stipendium Hungaricum program—administered by the Hungarian government—covers full tuition fees, provides monthly stipends, and offers accommodation support for eligible Bachelor's, Master's, and Doctoral candidates nominated by participating partner countries.",
      "Similarly, Germany's DAAD scholarships provide comprehensive funding for development-related postgraduate courses, provided applicants demonstrate relevant academic records and community engagement."
    ]
  }
];

export const studyGuides: StudyGuide[] = [
  {
    slug: "hungary-study-guide",
    country: "Hungary",
    title: "Comprehensive Study in Hungary Handbook",
    description: "Everything you need to know about universities, application deadlines, English language requirements, and living in Budapest and Debrecen.",
    keyTopics: ["Higher Education Structure", "Tuition & Living Budgets", "Schengen Visa Procedures", "Part-Time Work Guidelines"]
  },
  {
    slug: "netherlands-study-guide",
    country: "Netherlands",
    title: "Navigating Dutch Higher Education",
    description: "Guide to Research Universities (WO) vs. Universities of Applied Sciences (HBO), housing search strategies, and the Zoekjaar orientation year.",
    keyTopics: ["WO vs HBO System", "Application Portals (Studielink)", "Student Housing Reality", "1-Year Post-Study Visa"]
  },
  {
    slug: "germany-study-guide",
    country: "Germany",
    title: "German Public Universities & Engineering Pathways",
    description: "Understanding tuition-free public education, Blocked Account requirements, and post-study career opportunities in Europe's largest economy.",
    keyTopics: ["Tuition-Free Structure", "Blocked Account (Sperrkonto)", "English vs German Medium", "18-Month Stay-Back"]
  },
  {
    slug: "uk-study-guide",
    country: "United Kingdom",
    title: "UK Higher Education & Graduate Route",
    description: "Step-by-step roadmap for 1-year master's degrees, CAS issuance, financial evidence, and the 2-year Graduate Route visa.",
    keyTopics: ["1-Year Master's Advantage", "CAS & SELT Rules", "Graduate Route Work Visa", "Cost of Living by City"]
  }
];

export const visaGuides: VisaGuide[] = [
  {
    slug: "hungary-visa-guide",
    country: "Hungary",
    title: "Hungary Student Residence Permit (Type D Visa)",
    processingTime: "4 to 8 weeks following biometric interview",
    financialRequirements: "Proof of tuition fee payment, bank statements with 6 months financial trail, accommodation proof in Hungary",
    keyChecklist: [
      "Official University Acceptance / Admission Letter",
      "Tuition fee payment confirmation / receipt",
      "Accommodation contract / dormitory verification letter",
      "Sponsor's verified bank balance and income source verification",
      "Valid passport with at least 18 months remaining validity",
      "Certified and legalized educational transcripts and character certificates"
    ]
  },
  {
    slug: "germany-visa-guide",
    country: "Germany",
    title: "German National Student Visa (Subcategory D)",
    processingTime: "6 to 12 weeks",
    financialRequirements: "Official German Blocked Account (€11,208/year minimum benchmark) + Health Insurance certificate",
    keyChecklist: [
      "Unconditional Admission Letter or Studienkolleg confirmation",
      "Confirmation of Blocked Account opening and funding deposit",
      "Comprehensive German travel and statutory health insurance coverage",
      "Detailed motivational letter explaining academic goals in Germany",
      "Language proficiency certificates matching university requirements"
    ]
  },
  {
    slug: "uk-visa-guide",
    country: "United Kingdom",
    title: "UK Student Visa (Points-Based Immigration)",
    processingTime: "3 to 4 weeks (Standard service)",
    financialRequirements: "Full tuition fee balance + UKVI living allowance held for consecutive 28-day banking window",
    keyChecklist: [
      "Confirmation of Acceptance for Studies (CAS) from a licensed UK sponsor",
      "Official bank statement meeting the strict 28-day holding rule",
      "Tuberculosis (TB) test certificate from an approved IOM clinic in Kathmandu",
      "Original academic certificates matching qualifications listed on CAS",
      "Valid passport and biometric appointment confirmation"
    ]
  }
];

export const scholarshipsList: ScholarshipItem[] = [
  {
    id: "stipendium-hungaricum",
    title: "Stipendium Hungaricum Scholarship Programme",
    country: "Hungary",
    provider: "Government of Hungary (Tempus Public Foundation)",
    coverage: "Full tuition fee waiver, monthly living stipend, dormitory contribution, and health insurance",
    deadline: "Mid-January annually",
    eligibility: [
      "Academic excellence in secondary or tertiary education",
      "Nomination through relevant partner ministries in Nepal",
      "Proficiency in English meeting chosen program requirements"
    ]
  },
  {
    id: "daad-germany",
    title: "DAAD Development-Related Postgraduate Courses (EPOS)",
    country: "Germany",
    provider: "German Academic Exchange Service (DAAD)",
    coverage: "Monthly allowance (€934), health insurance, travel grant, and family allowances where applicable",
    deadline: "Varies by selected master's course (typically August–November)",
    eligibility: [
      "Bachelor's degree with above-average grades",
      "Minimum 2 years of relevant professional experience",
      "Academic degrees obtained within past 6 years"
    ]
  },
  {
    id: "australia-awards",
    title: "Australia Awards Scholarships",
    country: "Australia",
    provider: "Department of Foreign Affairs and Trade (DFAT)",
    coverage: "Full tuition, return air travel, establishment allowance, and contribution to living expenses (CLE)",
    deadline: "April 30 annually",
    eligibility: [
      "Citizens of participating partner countries",
      "Demonstrated leadership capacity and intent to contribute to home country development",
      "Satisfactory academic qualifications and minimum work experience"
    ]
  }
];

export const didYouKnowFacts: DidYouKnowItem[] = [
  {
    id: "dyk-1",
    tag: "Hungary",
    fact: "Hungarian universities have educated numerous Nobel laureates across Medicine, Physics, and Chemistry.",
    context: "Hungary's scientific tradition produced pioneers like Albert Szent-Györgyi (vitamin C discovery) and Katalin Karikó (mRNA technology)."
  },
  {
    id: "dyk-2",
    tag: "Netherlands",
    fact: "Over 95% of the population in the Netherlands speaks English fluently.",
    context: "This makes the Netherlands one of the easiest non-native English countries for international students to navigate daily life and internships."
  },
  {
    id: "dyk-3",
    tag: "Germany",
    fact: "Most public universities in Germany charge zero tuition fees to international students.",
    context: "Higher education is regarded as a public good funded by federal states, requiring only a nominal semester administration fee."
  },
  {
    id: "dyk-4",
    tag: "Sweden",
    fact: "Sweden ranks as one of the top 3 most innovative nations in the Global Innovation Index.",
    context: "Academic projects frequently partner with multinational innovation hubs such as Volvo, Ericsson, and Spotify."
  }
];
