export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  status?: "current" | "historical" | "verification_pending";
  image: string;
  flag: string;
  capital: string;
  currency: string;
  language: string;
  intakes: string;
  averageTuition: string;
  livingCosts: string;
  workRights: string;
  postStudyWork: string;
  popularFields: string[];
  keyBenefits: string[];
  universities: {
    name: string;
    city: string;
    type: string;
  }[];
  applicationRequirements: {
    bachelors: string[];
    masters: string[];
    languageTests: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const destinations: Destination[] = [
  {
    slug: "hungary",
    name: "Hungary",
    tagline: "High Quality European Education in the Heart of Europe",
    shortDescription: "Study in the heart of Europe with accessible tuition, internationally recognized degrees, and rich student life.",
    description: "Hungary stands at the historic heart of Central Europe, offering higher education with prestigious universities dating back centuries. With degrees accredited across the European Union and worldwide, students benefit from modern laboratories, vibrant student cities such as Budapest and Debrecen, and affordable living compared to Western Europe.",
    image: "https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=1600&q=80", // Budapest parliament / Danube
    flag: "🇭🇺",
    capital: "Budapest",
    currency: "Hungarian Forint (HUF) / Euro (€)",
    language: "English (Program medium) & Hungarian",
    intakes: "September (Autumn) & February (Spring)",
    averageTuition: "€2,500 – €7,000 / year",
    livingCosts: "€450 – €750 / month",
    workRights: "Up to 24 hours/week during semester",
    postStudyWork: "9-month 'Study-to-Work' residence permit",
    popularFields: [
      "Medicine & Health Sciences",
      "Computer Science & IT",
      "Engineering & Technology",
      "Business & Economics",
      "Agricultural Sciences",
      "Tourism & Hospitality"
    ],
    keyBenefits: [
      "Degrees fully recognized across the European Union, UK, US, and globally",
      "Very competitive tuition fees and reasonable living costs for international students",
      "Safe, culturally vibrant European cities with active student communities",
      "Accessible European Schengen zone travel opportunities during study breaks",
      "Opportunity to apply for renowned government-backed scholarship schemes such as Stipendium Hungaricum"
    ],
    universities: [
      { name: "University of Debrecen", city: "Debrecen", type: "Public Research University" },
      { name: "Eötvös Loránd University (ELTE)", city: "Budapest", type: "Public University" },
      { name: "Budapest University of Technology & Economics (BME)", city: "Budapest", type: "Technical University" },
      { name: "University of Szeged", city: "Szeged", type: "Comprehensive Public University" },
      { name: "Corvinus University of Budapest", city: "Budapest", type: "Business & Social Sciences" }
    ],
    applicationRequirements: {
      bachelors: [
        "Higher Secondary Examination (+2 / A-Levels) with minimum recognized division",
        "Official academic transcripts and character certificates",
        "Valid passport with minimum 18 months validity"
      ],
      masters: [
        "Bachelor's degree in a relevant academic discipline",
        "Official graduation diploma and semester-wise transcripts",
        "Statement of Purpose (SOP) tailored to academic objectives",
        "Two letters of academic or professional recommendation"
      ],
      languageTests: [
        "IELTS (usually 5.5 to 6.5 depending on course)",
        "TOEFL iBT (70 to 85)",
        "Medium of Instruction (MOI) certificates accepted by selected universities upon assessment"
      ]
    },
    faqs: [
      {
        question: "Are Hungarian university programs taught entirely in English?",
        answer: "Yes, our recommended Hungarian universities offer full degree programs taught in English designed specifically for international students, with professors fluent in international academic English."
      },
      {
        question: "Can Nepalese students work part-time while studying in Hungary?",
        answer: "Yes, students holding a valid Hungarian residence permit for studies are legally allowed to work up to 24 hours per week during term time and full-time during holidays."
      },
      {
        question: "How does SEC guide students through the Hungarian visa process?",
        answer: "SEC provides end-to-end guidance including document verification, interview preparation, certified translations, accommodation proof assistance, and appointment scheduling with the relevant authorities."
      }
    ]
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    tagline: "Pioneering Innovation and World-Class English Programs",
    shortDescription: "World-class education with over 2,100 programs taught in English and a culture centered on problem-solving.",
    description: "The Netherlands is known for its progressive teaching style, high standard of living, and an extensive selection of English-taught degree programs in continental Europe. Dutch universities rank consistently in the world's top 200, emphasizing practical problem-based learning and international research collaboration.",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1600&q=80", // Amsterdam canal
    flag: "🇳🇱",
    capital: "Amsterdam",
    currency: "Euro (€)",
    language: "English (100% fluent environment) & Dutch",
    intakes: "September (Primary) & February",
    averageTuition: "€8,000 – €16,000 / year",
    livingCosts: "€850 – €1,200 / month",
    workRights: "Up to 16 hours/week (work permit required)",
    postStudyWork: "Orientation Year (Zoekjaar) permit for 1 year",
    popularFields: [
      "Data Science & AI",
      "Sustainable Engineering",
      "International Business & Finance",
      "Water Resource Management",
      "Social Sciences & Law"
    ],
    keyBenefits: [
      "Over 2,100 programs taught entirely in English across Research & Applied Sciences universities",
      "Interactive, problem-based learning system encouraging collaborative teamwork",
      "One-year 'Zoekjaar' post-study work visa for graduates to find high-skilled employment",
      "Strategically located in Western Europe with outstanding transport connections"
    ],
    universities: [
      { name: "University of Amsterdam", city: "Amsterdam", type: "Research University" },
      { name: "Delft University of Technology", city: "Delft", type: "Technical University" },
      { name: "Erasmus University Rotterdam", city: "Rotterdam", type: "Research University" },
      { name: "Hanze University of Applied Sciences", city: "Groningen", type: "Applied Sciences" }
    ],
    applicationRequirements: {
      bachelors: ["Completed 10+2 / A-Levels / IB Diploma", "Motivation Letter and CV", "Mathematics requirements for technical degrees"],
      masters: ["Recognized 3- or 4-year Bachelor's degree", "Detailed course syllabus match", "Research proposal for specific master tracks"],
      languageTests: ["IELTS 6.0 – 6.5 overall", "TOEFL iBT 80 – 92"]
    },
    faqs: [
      {
        question: "What is the difference between Research Universities and Universities of Applied Sciences in the Netherlands?",
        answer: "Research Universities (WO) focus on independent academic and scientific investigation, whereas Universities of Applied Sciences (HBO) emphasize practical vocational preparation, internships, and professional application."
      }
    ]
  },
  {
    slug: "germany",
    name: "Germany",
    tagline: "Engineering Excellence and Tuition-Free Public Universities",
    shortDescription: "Renowned for tuition-free public universities, technological leadership, and Europe's largest economy.",
    description: "Germany is Europe's economic powerhouse, offering rigorous academic standards, cutting-edge laboratory facilities, and highly affordable public education. Most public universities charge minimal administrative semester contributions rather than steep tuition fees.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80", // Germany architecture
    flag: "🇩🇪",
    capital: "Berlin",
    currency: "Euro (€)",
    language: "English & German",
    intakes: "Winter (October) & Summer (April)",
    averageTuition: "€0 – €3,000 / year (Public universities tuition-free)",
    livingCosts: "€850 – €950 / month (Blocked Account required)",
    workRights: "140 full days or 280 half days per year",
    postStudyWork: "18-month Job Seeker Visa for graduates",
    popularFields: [
      "Mechanical & Automotive Engineering",
      "Computer Science & Data Analytics",
      "Renewable Energy & Sustainability",
      "International Management & Logistics",
      "Biotechnology & Pharmacy"
    ],
    keyBenefits: [
      "Tuition-free higher education at majority of prestigious public universities",
      "Europe's strongest job market with significant demand for STEM and business graduates",
      "18 months stay-back visa to search for employment matching your qualifications",
      "High degree of academic independence and practical industry ties"
    ],
    universities: [
      { name: "Technical University of Munich (TUM)", city: "Munich", type: "Technical University" },
      { name: "RWTH Aachen University", city: "Aachen", type: "Technical Research University" },
      { name: "Free University of Berlin", city: "Berlin", type: "Comprehensive University" },
      { name: "IU International University of Applied Sciences", city: "Erfurt / Berlin", type: "Applied Sciences" }
    ],
    applicationRequirements: {
      bachelors: ["13 years of previous education or 1 year Studienkolleg / bachelor bridge", "High academic marks in relevant disciplines"],
      masters: ["Four-year accredited Bachelor's degree (ECTS credit alignment)", "APS Certificate for verified verification"],
      languageTests: ["IELTS 6.5+ or German language level (B1–C1) depending on medium"]
    },
    faqs: [
      {
        question: "What is an APS Certificate and do Nepalese students need it?",
        answer: "Currently the German Embassy in New Delhi and associated verification centers have specific verification guidelines. SEC guides students on whether an APS or university-direct verification applies for their case."
      }
    ]
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    tagline: "Globally Celebrated Degrees and Century-Old Traditions",
    shortDescription: "World-renowned academic pedigree, 1-year master's degrees, and a 2-year Graduate Route visa.",
    description: "The UK is home to some of the world's most historic and respected educational institutions. British universities are recognized worldwide by employers and academic bodies, offering focused degree durations (typically 3 years for Bachelor's and 1 year for Master's) that save time and tuition.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80", // London Westminster
    flag: "🇬🇧",
    capital: "London",
    currency: "British Pound (£)",
    language: "English",
    intakes: "September/October & January/February",
    averageTuition: "£12,000 – £22,000 / year",
    livingCosts: "£900 – £1,300 / month",
    workRights: "20 hours/week during term time",
    postStudyWork: "2-year Graduate Route (3 years for PhD)",
    popularFields: [
      "Business, Finance & Accounting",
      "Law & International Relations",
      "Artificial Intelligence & Software Engineering",
      "Public Health & Nursing",
      "Creative Arts, Architecture & Design"
    ],
    keyBenefits: [
      "Accelerated course durations: 3 years for Bachelor's and 1 year for Master's",
      "2-year post-study work visa (Graduate Route) upon successful degree completion",
      "Direct international networking in global corporate and creative hubs",
      "Diverse scholarships including university bursaries and international grants"
    ],
    universities: [
      { name: "University of Manchester", city: "Manchester", type: "Russell Group University" },
      { name: "University of Birmingham", city: "Birmingham", type: "Russell Group University" },
      { name: "Coventry University", city: "Coventry", type: "Modern Public University" },
      { name: "University of Greenwich", city: "London", type: "Public University" }
    ],
    applicationRequirements: {
      bachelors: ["10+2 / A-Levels / Foundation course", "Personal Statement", "Academic Reference"],
      masters: ["Bachelor's degree with satisfactory GPA", "CV / Resume", "Relevant work experience (for select MBA programs)"],
      languageTests: ["IELTS 6.0 – 6.5 (SELT / UKVI where needed)", "PTE Academic (58 – 65)"]
    },
    faqs: [
      {
        question: "Can Nepalese students bring dependents to the UK?",
        answer: "Under current UK immigration rules, only students enrolled in postgraduate research programs (such as PhDs) can sponsor dependents. Standard taught master's students cannot."
      }
    ]
  },
  {
    slug: "usa",
    name: "USA",
    tagline: "Unmatched Academic Flexibility and Research Resources",
    shortDescription: "Diverse course options, campus culture, generous research grants, and STEM OPT extension opportunities.",
    description: "The United States hosts the largest number of international students globally, recognized for campus diversity, flexible curriculum choices (majors/minors), and cutting-edge research facilities across thousands of accredited colleges and universities.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80", // San Francisco / US Campus
    flag: "🇺🇸",
    capital: "Washington, D.C.",
    currency: "US Dollar ($)",
    language: "English",
    intakes: "Fall (August) & Spring (January)",
    averageTuition: "$18,000 – $35,000 / year",
    livingCosts: "$900 – $1,500 / month",
    workRights: "20 hours/week on-campus during semester",
    postStudyWork: "12-month OPT + 24-month STEM extension (up to 3 years total)",
    popularFields: [
      "Computer Science & Cybersecurity",
      "Biomedical Engineering & Biotech",
      "Finance, MBA & Entrepreneurship",
      "Data Analytics & Machine Learning",
      "Liberal Arts & Communication"
    ],
    keyBenefits: [
      "STEM degree graduates can qualify for up to 3 years of OPT employment in the USA",
      "Unrivalled flexibility to explore interdisciplinary subjects before declaring a major",
      "Campus assistantships (Graduate Assistant, Teaching Assistant) for qualified students",
      "Global alumni networks and enterprise recruitment pipelines"
    ],
    universities: [
      { name: "Arizona State University", city: "Tempe, AZ", type: "Public Research University" },
      { name: "University of South Florida", city: "Tampa, FL", type: "Public Research University" },
      { name: "Northeastern University", city: "Boston, MA", type: "Private Research University" },
      { name: "Wichita State University", city: "Wichita, KS", type: "Public University" }
    ],
    applicationRequirements: {
      bachelors: ["High School Transcripts (+2 / A-Levels)", "SAT / ACT (often test-optional)", "Personal Essay and Letters of Recommendation"],
      masters: ["4-year Bachelor's degree (or 3-year with evaluation/bridge)", "GRE / GMAT (where required)", "Statement of Purpose"],
      languageTests: ["TOEFL iBT 80+", "IELTS 6.5+", "Duolingo English Test (110+) accepted by many"]
    },
    faqs: [
      {
        question: "How important is the F-1 visa interview at the US Embassy in Kathmandu?",
        answer: "The visa interview is the deciding factor. SEC conducts realistic mock interview sessions focused on your academic intent, financial sponsorship verification, and strong ties to your home country."
      }
    ]
  },
  {
    slug: "australia",
    name: "Australia",
    tagline: "World-Class Quality of Life, Research and Post-Study Pathways",
    shortDescription: "High standard of living, rigorous quality assurance under ESOS, and progressive post-study work opportunities.",
    description: "Australia delivers exceptional educational standards backed by government consumer protections (ESOS and CRICOS frameworks). Renowned for welcoming multicultural cities, clean outdoor lifestyle, and strong industry linkages across healthcare, engineering, and digital sectors.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80", // Sydney Opera House
    flag: "🇦🇺",
    capital: "Canberra",
    currency: "Australian Dollar (AUD $)",
    language: "English",
    intakes: "Semester 1 (Feb/March) & Semester 2 (July)",
    averageTuition: "AUD $20,000 – $38,000 / year",
    livingCosts: "AUD $1,400 – $2,000 / month",
    workRights: "48 hours per fortnight during study terms",
    postStudyWork: "Temporary Graduate Visa (Subclass 485)",
    popularFields: [
      "Nursing & Allied Health",
      "Civil & Mining Engineering",
      "Information Technology & Cloud Architecture",
      "Accounting & Professional Business",
      "Early Childhood Education"
    ],
    keyBenefits: [
      "Rigorous government frameworks guaranteeing course accreditation and student fee protection",
      "Post-study work rights allowing practical international experience",
      "Regional study incentives with additional post-study visa duration",
      "Culturally diverse environment with strong support systems for international students"
    ],
    universities: [
      { name: "University of Melbourne", city: "Melbourne", type: "Group of Eight" },
      { name: "University of Sydney", city: "Sydney", type: "Group of Eight" },
      { name: "Deakin University", city: "Geelong / Melbourne", type: "Public University" },
      { name: "Griffith University", city: "Brisbane / Gold Coast", type: "Public University" }
    ],
    applicationRequirements: {
      bachelors: ["10+2 with minimum academic percentage", "Genuine Student (GS) assessment statement", "Financial capacity verification"],
      masters: ["Recognized Bachelor's degree", "Statement of Purpose aligning career plans", "Work experience documentation if applicable"],
      languageTests: ["IELTS 6.0 – 6.5", "PTE Academic 50 – 58"]
    },
    faqs: [
      {
        question: "What is the Genuine Student (GS) requirement for Australian student visas?",
        answer: "The GS requirement assesses whether a student is genuinely seeking education in Australia, reviewing academic history, ties to home country, future career value of the course, and realistic financial plans."
      }
    ]
  },
  {
    slug: "sweden",
    name: "Sweden",
    tagline: "Sustainability, Innovation, and Critical Thinking in Scandinavia",
    shortDescription: "Study in one of the most innovative and sustainable societies in the world, renowned for research and equality.",
    description: "Sweden is a global pioneer in sustainability, clean technology, and creative design. Swedish universities foster an informal, non-hierarchical learning environment where students are encouraged to think critically, challenge conventions, and turn concepts into practical innovation.",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1600&q=80", // Stockholm
    flag: "🇸🇪",
    capital: "Stockholm",
    currency: "Swedish Krona (SEK)",
    language: "English (fluently spoken nationwide) & Swedish",
    intakes: "Autumn (August/September) & Spring (January)",
    averageTuition: "SEK 80,000 – 140,000 / year",
    livingCosts: "SEK 8,500 – 11,000 / month",
    workRights: "No official hour restriction while maintaining study progress",
    postStudyWork: "12-month residence permit to seek employment",
    popularFields: [
      "Sustainable Energy & Environmental Sciences",
      "Computer Science & Interactive Media",
      "Industrial Engineering & Design",
      "Biomedicine & Public Health",
      "International Human Rights & Social Policy"
    ],
    keyBenefits: [
      "Ranked among the top most innovative countries in the world (home of Spotify, Skype, IKEA)",
      "High English proficiency—over 90% of the population speaks fluent English",
      "No legal hour limit on student work, provided academic requirements are fully fulfilled",
      "12-month post-study residence permit for career development"
    ],
    universities: [
      { name: "KTH Royal Institute of Technology", city: "Stockholm", type: "Technical University" },
      { name: "Lund University", city: "Lund", type: "Comprehensive Research University" },
      { name: "Uppsala University", city: "Uppsala", type: "Historic Research University" },
      { name: "Chalmers University of Technology", city: "Gothenburg", type: "Technical University" }
    ],
    applicationRequirements: {
      bachelors: ["High School Certificate with mathematics and science alignments", "Universityadmissions.se centralized portal application"],
      masters: ["Bachelor's degree of at least 180 ECTS credits", "Specific course prerequisites for advanced courses"],
      languageTests: ["IELTS 6.5 (no band below 5.5) / English 6 equivalent", "TOEFL iBT 90+"]
    },
    faqs: [
      {
        question: "How does the centralized Swedish application portal work?",
        answer: "Applications for all Swedish universities are processed through Universityadmissions.se, allowing students to apply to multiple institutions with one set of verified documents. SEC assists through every portal step."
      }
    ]
  }
];

export const featuredDestination = destinations.find(d => d.slug === "hungary") || destinations[0];

export interface HistoricalDestinationRecord {
  slug: string;
  name: string;
  flag: string;
  status: "historical" | "verification_pending";
  historicalThemes: string[];
  notes: string;
}

export const historicalDestinations: HistoricalDestinationRecord[] = [
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    status: "verification_pending",
    historicalThemes: [
      "Pacific island biodiversity & alpine geography",
      "Wellington & Auckland academic environments",
      "Practical vocational & research institutions",
      "Student lifestyle and outdoor culture"
    ],
    notes: "Present in historical SEC portal records; current institutional representation status undergoing verification."
  },
  {
    slug: "denmark",
    name: "Denmark",
    flag: "🇩🇰",
    status: "verification_pending",
    historicalThemes: [
      "Nordic theory- and practice-based higher education",
      "Historical reference to VIA University College programs",
      "Software, Civil Engineering & Construction Management",
      "English-taught degree structures in Scandinavia"
    ],
    notes: "Archived from historical European study sessions; current active enrollment pending formal validation."
  },
  {
    slug: "finland",
    name: "Finland",
    flag: "🇫🇮",
    status: "historical",
    historicalThemes: [
      "Universities of Applied Sciences joint application sessions",
      "Technology & Business English-taught Bachelor degrees",
      "Entrance exam orientation for Nordic universities"
    ],
    notes: "Documented in historical SEC university events; archived under historical seminars."
  },
  {
    slug: "poland",
    name: "Poland",
    flag: "🇵🇱",
    status: "verification_pending",
    historicalThemes: [
      "Warsaw academic hub & Central European universities",
      "Affordable undergraduate and Master's tuition",
      "ECTS credit compliance across faculties"
    ],
    notes: "Historically referenced study destination; all admission prerequisites subject to current embassy regulations."
  }
];

