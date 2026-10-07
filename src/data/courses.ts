export interface Course {
  slug: string;
  title: string;
  field: string;
  degree: "Bachelor's" | "Master's" | "PhD" | "Diploma" | "Foundation" | "Language Programs";
  country: string;
  university: string;
  duration: string;
  intake: string[];
  tuition: string;
  description: string;
  overview: string;
  entryRequirements: string[];
  careerOpportunities: string[];
}

export const courseFields = [
  "Business & Management",
  "Information Technology",
  "Computer Science",
  "Engineering",
  "Healthcare",
  "Hospitality & Tourism",
  "Social Sciences",
  "Arts & Design",
  "Education"
] as const;

export const studyLevels = [
  "Bachelor's",
  "Master's",
  "PhD",
  "Diploma",
  "Foundation",
  "Language Programs"
] as const;

export const courses: Course[] = [
  {
    slug: "bsc-computer-science-hungary",
    title: "BSc in Computer Science",
    field: "Computer Science",
    degree: "Bachelor's",
    country: "Hungary",
    university: "University of Debrecen",
    duration: "3.5 Years (7 Semesters)",
    intake: ["September", "February"],
    tuition: "€6,000 / year",
    description: "Solid theoretical foundation in algorithmic design, modern programming paradigms, databases, and software engineering in a European university setting.",
    overview: "This program equips students with modern software engineering competencies, discrete mathematics, network architecture, and cloud systems. Taught entirely in English, it opens pathways across European tech hubs and global IT sectors.",
    entryRequirements: [
      "Completed Higher Secondary Education (10+2 / A-Levels) with Science/Math background",
      "Entrance examination / interview in Mathematics and Basic Informatics",
      "IELTS 5.5+ or English language proficiency equivalent"
    ],
    careerOpportunities: [
      "Full-Stack Software Developer",
      "Systems Architect",
      "Cloud Solutions Associate",
      "Data Analyst"
    ]
  },
  {
    slug: "msc-software-engineering-hungary",
    title: "MSc in Software Engineering",
    field: "Computer Science",
    degree: "Master's",
    country: "Hungary",
    university: "Eötvös Loránd University (ELTE)",
    duration: "2 Years (4 Semesters)",
    intake: ["September", "February"],
    tuition: "€3,200 – €4,000 / semester",
    description: "Advanced study of distributed systems, AI architectures, cybersecurity principles, and enterprise software engineering.",
    overview: "Designed for graduates seeking senior technical roles, this Master of Science program dives deep into artificial intelligence, microservices, database theory, and scientific computing in Budapest.",
    entryRequirements: [
      "Bachelor's degree in Computer Science, IT, or related computational discipline",
      "Minimum 60 ECTS credits in mathematics and informatics",
      "IELTS 6.0+ or equivalent"
    ],
    careerOpportunities: [
      "Lead Software Engineer",
      "AI & Machine Learning Engineer",
      "Security Architect",
      "Technical Project Manager"
    ]
  },
  {
    slug: "bba-international-business-hungary",
    title: "BSc in International Business Economics",
    field: "Business & Management",
    degree: "Bachelor's",
    country: "Hungary",
    university: "Corvinus University of Budapest",
    duration: "3.5 Years",
    intake: ["September"],
    tuition: "€3,800 / semester",
    description: "Global business strategy, international trade economics, financial analysis, and cross-cultural management.",
    overview: "Corvinus University is Hungary's leading institution for business education. The program immerses students in European market integration, corporate finance, market research, and international supply chain logistics.",
    entryRequirements: [
      "Completed 10+2 / High School Diploma with strong social science or mathematics marks",
      "Satisfactory academic record and motivational interview",
      "IELTS 6.0+"
    ],
    careerOpportunities: [
      "International Trade Analyst",
      "Business Development Executive",
      "Financial Analyst",
      "Management Consultant"
    ]
  },
  {
    slug: "msc-data-science-netherlands",
    title: "MSc in Data Science & Artificial Intelligence",
    field: "Information Technology",
    degree: "Master's",
    country: "Netherlands",
    university: "University of Amsterdam",
    duration: "2 Years",
    intake: ["September"],
    tuition: "€16,500 / year",
    description: "Pioneering curriculum exploring machine learning, statistical modelling, deep neural networks, and ethical AI deployment.",
    overview: "Taught at one of Europe's top computational research departments, this master's degree offers specialized tracks in machine learning, information retrieval, and medical data science.",
    entryRequirements: [
      "4-year Bachelor's degree in Computer Science, Mathematics, or Data Engineering",
      "Strong background in linear algebra, multivariable calculus, and programming",
      "IELTS 6.5 (min 6.0 in sub-scores)"
    ],
    careerOpportunities: [
      "Senior Data Scientist",
      "Machine Learning Specialist",
      "Quantitative Research Analyst",
      "AI Product Strategist"
    ]
  },
  {
    slug: "bsc-mechanical-engineering-germany",
    title: "BSc in Mechanical & Industrial Engineering",
    field: "Engineering",
    degree: "Bachelor's",
    country: "Germany",
    university: "RWTH Aachen University / FH Aachen",
    duration: "3.5 Years",
    intake: ["October (Winter)"],
    tuition: "€350 / semester contribution (Tuition Free)",
    description: "Rigorous German engineering training emphasizing precision manufacturing, thermodynamics, mechanics, and industrial robotics.",
    overview: "Study in Germany's technological heartland with direct access to automotive, robotics, and industrial technology research institutes. Combines theoretical mechanics with hands-on workshop practice.",
    entryRequirements: [
      "Recognized University Entrance Qualification (13 years or Studienkolleg T-Course)",
      "Strong marks in Physics and Advanced Mathematics",
      "German proficiency (B2/C1) or English depending on module stream"
    ],
    careerOpportunities: [
      "Mechanical Design Engineer",
      "Robotics Systems Specialist",
      "Automotive Production Engineer",
      "Operations & Quality Manager"
    ]
  },
  {
    slug: "msc-public-health-uk",
    title: "Master of Public Health (MPH)",
    field: "Healthcare",
    degree: "Master's",
    country: "United Kingdom",
    university: "University of Birmingham",
    duration: "1 Year",
    intake: ["September"],
    tuition: "£21,500 total",
    description: "Interdisciplinary epidemiology, global health economics, health policy, and disease prevention strategies.",
    overview: "Accredited British qualification equipping healthcare practitioners, nursing graduates, and social science researchers to lead international public health initiatives, epidemiological tracking, and community wellness programs.",
    entryRequirements: [
      "Bachelor's degree in Medicine, Nursing, Public Health, Pharmacy, or Biological Sciences (min 2:1 equivalent)",
      "Statement of Purpose detailing career alignment with public health goals",
      "IELTS 6.5 (minimum 6.0 across all bands)"
    ],
    careerOpportunities: [
      "Public Health Epidemiologist",
      "Health Policy Advisor",
      "NGO Program Director",
      "Health Services Administrator"
    ]
  },
  {
    slug: "bachelor-nursing-australia",
    title: "Bachelor of Nursing",
    field: "Healthcare",
    degree: "Bachelor's",
    country: "Australia",
    university: "Deakin University",
    duration: "3 Years",
    intake: ["March", "July"],
    tuition: "AUD $36,000 / year",
    description: "Comprehensive clinical nursing education accredited by the Australian Nursing and Midwifery Accreditation Council (ANMAC).",
    overview: "Prepares students for registered nursing practice in Australia. Features over 800 hours of supervised clinical placements across hospitals, aged care, and community healthcare clinics.",
    entryRequirements: [
      "Completed 10+2 with good academic standing (Science / Biology stream preferred)",
      "IELTS Academic 7.0 overall (minimum 7.0 in each subtest) or PTE Academic 65",
      "Health and immunisation verification clearances"
    ],
    careerOpportunities: [
      "Registered Nurse (RN - AHPRA Accredited)",
      "Critical Care Nurse",
      "Community Health Nurse",
      "Clinical Nurse Educator"
    ]
  },
  {
    slug: "msc-cybersecurity-usa",
    title: "MSc in Cybersecurity Operations",
    field: "Information Technology",
    degree: "Master's",
    country: "USA",
    university: "Arizona State University",
    duration: "2 Years",
    intake: ["August", "January"],
    tuition: "$24,000 / year",
    description: "Hands-on threat intelligence, defensive network operations, cloud security architecture, and digital forensics.",
    overview: "Designated as a National Center of Academic Excellence in Information Assurance, ASU's program combines cyber defence laboratories with enterprise incident response simulations.",
    entryRequirements: [
      "4-year Bachelor's degree in Computer Science, IT, or Engineering",
      "Minimum 3.0 GPA on a 4.0 scale",
      "TOEFL iBT 80+ or IELTS 6.5+"
    ],
    careerOpportunities: [
      "Information Security Analyst",
      "Penetration Tester / Ethical Hacker",
      "Cloud Security Engineer",
      "Chief Information Security Officer (CISO) track"
    ]
  },
  {
    slug: "msc-sustainable-energy-sweden",
    title: "MSc in Sustainable Energy Engineering",
    field: "Engineering",
    degree: "Master's",
    country: "Sweden",
    university: "KTH Royal Institute of Technology",
    duration: "2 Years",
    intake: ["August"],
    tuition: "SEK 155,000 / year",
    description: "Leading-edge education in renewable energy integration, solar thermal technology, smart grids, and lifecycle sustainability.",
    overview: "Sweden's premier engineering institute offers advanced scientific training in green energy transition, working in conjunction with European clean-tech consortia and industrial laboratories.",
    entryRequirements: [
      "Bachelor's degree in Mechanical, Chemical, or Electrical Engineering",
      "Solid coursework in thermodynamics and fluid mechanics",
      "IELTS 6.5 (minimum 5.5 in each band)"
    ],
    careerOpportunities: [
      "Renewable Energy Systems Designer",
      "Sustainability Consultant",
      "Smart Grid Specialist",
      "Energy Policy Researcher"
    ]
  },
  {
    slug: "diploma-hospitality-management-hungary",
    title: "University Diploma in International Hospitality & Tourism",
    field: "Hospitality & Tourism",
    degree: "Diploma",
    country: "Hungary",
    university: "Budapest Metropolitan University",
    duration: "2 Years",
    intake: ["September", "February"],
    tuition: "€2,800 / semester",
    description: "Practical hospitality administration, international event planning, customer experience management, and hotel operations.",
    overview: "A career-focused vocational diploma tailored for students seeking direct entry into international hotel management, airline operations, and resort tourism throughout Europe.",
    entryRequirements: [
      "Completed Higher Secondary Education (+2 in any stream)",
      "High level of motivation for international service sectors",
      "IELTS 5.0+ or university English interview"
    ],
    careerOpportunities: [
      "Hotel Operations Supervisor",
      "Guest Relations Executive",
      "Event Planning Coordinator",
      "Tourism Services Executive"
    ]
  }
];
