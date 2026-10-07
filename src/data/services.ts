export interface ServiceItem {
  slug: string;
  number: string;
  title: string;
  shortSummary: string;
  description: string;
  whatWeDo: string[];
  studentBenefits: string[];
  deliverables: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "career-counselling",
    number: "01",
    title: "Career Counselling",
    shortSummary: "Help students understand their options and plan their education journey.",
    description: "Our certified education counsellors begin by listening to your personal academic background, strengths, career aspirations, and financial expectations. We conduct honest, realistic profile assessments to help you navigate international study pathways with clarity.",
    whatWeDo: [
      "In-depth one-on-one consultation with experienced destination advisors",
      "Academic transcript review and prerequisite gap analysis",
      "Exploration of global employment trends matching your personality and interests",
      "Honest assessment of living costs, academic rigor, and post-study opportunities"
    ],
    studentBenefits: [
      "Clarity on which destinations and fields match your true career goals",
      "Realistic financial and timeline roadmaps without false promises",
      "Personalized guidance tailored for students and working professionals in Nepal"
    ],
    deliverables: [
      "Personalized Student Profile Assessment Report",
      "Strategic Study-Abroad Timeline Blueprint"
    ]
  },
  {
    slug: "course-selection",
    number: "02",
    title: "Course Selection",
    shortSummary: "Help students identify suitable study areas based on their goals.",
    description: "Choosing the right course determines your academic satisfaction, international career prospects, and future professional licensing. We evaluate curricula, credit transfers, practical internship modules, and accreditation standards.",
    whatWeDo: [
      "Comparative analysis of undergraduate, postgraduate, and diploma syllabi",
      "Verification of international professional accreditations (e.g. engineering, nursing, accounting)",
      "Assessment of subject prerequisites and bridge course requirements",
      "Evaluating future-proof disciplines such as AI, sustainable engineering, and public health"
    ],
    studentBenefits: [
      "Confidence that your chosen degree matches industry demand worldwide",
      "Clear understanding of practical work vs. theoretical coursework balance",
      "Avoidance of mismatched programs that complicate visa interviews"
    ],
    deliverables: [
      "Curated Shortlist of 3–5 Matching Academic Courses",
      "Course Syllabus & Accreditation Comparison Table"
    ]
  },
  {
    slug: "university-selection",
    number: "03",
    title: "University Selection",
    shortSummary: "Help students explore suitable university options.",
    description: "We guide students through verified, accredited higher education institutions across Europe, the UK, the USA, and Australia. We weigh research reputation, tuition costs, scholarship availability, campus facilities, and regional living expenses.",
    whatWeDo: [
      "Selecting target, reach, and safe institutions aligned with student profile",
      "Verification of institutional recognition and ministry approvals",
      "Comparing campus locations (metropolitan vs. regional cost advantages)",
      "Reviewing international student welfare services and housing availability"
    ],
    studentBenefits: [
      "Balanced choices optimizing both acceptance probability and budget",
      "Transparent insight into true semester costs and accommodation options",
      "Access to reputable universities with active international student bodies"
    ],
    deliverables: [
      "Institutional Profiles & Tuition Breakdown Sheet",
      "Target University Ranking & Entry Requirement Comparison"
    ]
  },
  {
    slug: "application-assistance",
    number: "04",
    title: "Application Assistance",
    shortSummary: "Support students through the application process.",
    description: "From preparing compelling Statements of Purpose (SOP) to organizing official academic transcripts and reference letters, SEC ensures every submission is thorough, authentic, and submitted well before university deadlines.",
    whatWeDo: [
      "Comprehensive document checklist tailored to each university portal",
      "Constructive feedback and editing on Statements of Purpose (SOP) and CVs",
      "Guidance on requesting effective academic and employer reference letters",
      "Liaison with university admissions offices to track application status"
    ],
    studentBenefits: [
      "Zero missed deadlines or disqualified applications due to formatting errors",
      "A compelling personal narrative showcasing genuine academic motivation",
      "Direct tracking and prompt responses to university requests for extra documentation"
    ],
    deliverables: [
      "Professionally Formatted Application Package",
      "Confirmed Application Submission Receipts & Portal Logins"
    ]
  },
  {
    slug: "visa-guidance",
    number: "05",
    title: "Visa Guidance",
    shortSummary: "Guide students through the visa preparation process.",
    description: "Student visa regulations are stringent and detail-sensitive. Our visa specialists guide you through official government requirements, financial sponsorship documentation, source-of-income proofs, and realistic mock interview coaching.",
    whatWeDo: [
      "Preparation of comprehensive financial sponsorship dossiers in compliance with embassy criteria",
      "Step-by-step guidance on police clearance, medical exams, and biometrics appointments",
      "Realistic mock visa interview sessions simulating embassy officer inquiries",
      "Verification of genuine student intent, family ties, and post-study career plans"
    ],
    studentBenefits: [
      "High document compliance aligned with official embassy regulations",
      "Confidence during face-to-face visa interviews through targeted mock rehearsals",
      "Transparent understanding of embassy processing timelines and protocols"
    ],
    deliverables: [
      "Verified Visa Dossier Checklist",
      "Personalized Visa Interview Question Bank & Practice Evaluations"
    ]
  },
  {
    slug: "scholarship-guidance",
    number: "06",
    title: "Scholarship Guidance",
    shortSummary: "Help students understand available scholarship opportunities.",
    description: "Many governments and universities provide merit scholarships, tuition fee waivers, and research grants for exceptional international students. We help eligible candidates identify, prepare for, and apply for legitimate scholarship opportunities.",
    whatWeDo: [
      "Identification of government-funded schemes (e.g. Stipendium Hungaricum in Hungary, DAAD in Germany)",
      "Review of university-specific merit waivers and early-bird bursaries",
      "Assistance with scholarship motivational essays and research concept notes",
      "Advising on academic GPA thresholds and documentation standards"
    ],
    studentBenefits: [
      "Awareness of verified scholarship schemes without unrealistic false guarantees",
      "Stronger scholarship essays articulating your leadership and academic merit",
      "Significant potential reduction in overall education financing"
    ],
    deliverables: [
      "Scholarship Eligibility Matrix & Calendar",
      "Scholarship Essay Guidance & Review Notes"
    ]
  },
  {
    slug: "pre-departure",
    number: "07",
    title: "Pre-Departure Support",
    shortSummary: "Help students prepare for their international education journey.",
    description: "Securing your visa is just the beginning. Our pre-departure sessions ensure you are thoroughly prepared for international travel, foreign exchange, accommodation booking, health insurance, and cultural adaptation in your new host country.",
    whatWeDo: [
      "Guidance on student accommodation (university dormitories vs. private rentals)",
      "Briefings on foreign exchange, international travel cards, and tuition fee wire transfers",
      "Packing advice, climate preparation, and airport arrival protocols",
      "Connecting new students with SEC alumni networks and student groups abroad"
    ],
    studentBenefits: [
      "Smooth transition into life in Europe, the UK, the USA, or Australia",
      "Peace of mind for both students and parents prior to boarding the flight",
      "Established contacts with senior students already residing at your destination"
    ],
    deliverables: [
      "Comprehensive Pre-Departure Travel & Settlement Handbook",
      "Alumni Contact Introductions & Accommodation Checklist"
    ]
  }
];
