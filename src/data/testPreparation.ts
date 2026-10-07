export interface TestSection {
  name: string;
  duration: string;
  description: string;
  questionType: string;
}

export interface TestPrepProgram {
  slug: string;
  code: string;
  name: string;
  fullName: string;
  tagline: string;
  scoringRange: string;
  validity: string;
  format: string;
  duration: string;
  sections: TestSection[];
  targetAudience: string;
  recognizedBy: string;
  overview: string;
  whyTake: string[];
  secSupport: string[];
  registrationGuidance: string;
  preparationRoadmap: {
    week: string;
    focus: string;
  }[];
}

export const testPrepPrograms: TestPrepProgram[] = [
  {
    slug: "ielts",
    code: "01",
    name: "IELTS",
    fullName: "International English Language Testing System",
    tagline: "The gold standard for studying in the UK, Australia, Europe, and Canada",
    scoringRange: "Band 0 – 9.0 (Half-band increments)",
    validity: "2 Years",
    format: "Computer-delivered or Paper-based",
    duration: "Approx. 2 hours 45 minutes",
    sections: [
      {
        name: "Listening",
        duration: "30 minutes + 10 min transfer",
        description: "4 recorded monologues and conversations with diverse native accents.",
        questionType: "Multiple choice, sentence completion, matching, map/diagram labelling"
      },
      {
        name: "Reading",
        duration: "60 minutes",
        description: "3 long academic texts taken from books, journals, magazines, and newspapers.",
        questionType: "True/False/Not Given, heading matching, summary completion"
      },
      {
        name: "Writing",
        duration: "60 minutes",
        description: "Task 1 (report on visual data, 150 words) and Task 2 (argumentative essay, 250 words).",
        questionType: "Data interpretation & academic opinion essay"
      },
      {
        name: "Speaking",
        duration: "11 – 14 minutes",
        description: "Face-to-face or video-call interview covering personal topics, cue-card talk, and discussion.",
        questionType: "Interactive one-on-one interview"
      }
    ],
    targetAudience: "Undergraduate and postgraduate applicants targeting the UK, Hungary, Netherlands, Germany, Australia, and Canada.",
    recognizedBy: "Over 12,000 universities, employers, and immigration bodies worldwide.",
    overview: "IELTS evaluates comprehensive English proficiency across four essential communicative dimensions. SEC provides individualized coaching targeting 6.5 to 7.5+ overall bands required by accredited European and international institutions.",
    whyTake: [
      "Required for visa and admission across UK, Hungary, Netherlands, Germany, and Australia",
      "Widely accepted by European English-taught degree faculties",
      "Regular testing dates available across Kathmandu testing centers",
      "Transparent band-based scoring criteria recognized by embassies"
    ],
    secSupport: [
      "Diagnostic baseline band assessment prior to class enrollment",
      "Exam-simulated mock tests with individual writing and speaking feedback",
      "Access to authentic British Council & Cambridge practice repositories",
      "Direct assistance with test date booking and venue selection in Kathmandu"
    ],
    registrationGuidance: "Registered through British Council Nepal or IDP Nepal. SEC assists students directly in selecting test dates, preparing identification documentation, and payment verification.",
    preparationRoadmap: [
      { week: "Weeks 1–2", focus: "Diagnostic assessment, question taxonomy, and core listening/reading skimming techniques" },
      { week: "Weeks 3–4", focus: "Academic Task 1 visual data analysis and Task 2 structured argumentative essay writing" },
      { week: "Weeks 5–6", focus: "Speaking fluency drills, vocabulary range expansion, and timed full-length simulations" },
      { week: "Weeks 7–8", focus: "Final exam simulations, personalized weakness remediation, and test-day strategy" }
    ]
  },
  {
    slug: "toefl",
    code: "02",
    name: "TOEFL iBT",
    fullName: "Test of English as a Foreign Language (Internet-Based Test)",
    tagline: "Premier university-level English evaluation for the US, Europe, and global institutions",
    scoringRange: "0 – 120 points (0–30 per section)",
    validity: "2 Years",
    format: "Computer-delivered (Official ETS Center)",
    duration: "Under 2 hours (Modern streamlined format)",
    sections: [
      {
        name: "Reading",
        duration: "35 minutes",
        description: "2 reading passages (approx. 700 words each) with 10 questions per passage.",
        questionType: "Vocabulary in context, inference, factual information, purpose"
      },
      {
        name: "Listening",
        duration: "36 minutes",
        description: "3 lectures and 2 campus conversations with natural speech patterns.",
        questionType: "Main idea, detail, speaker attitude, organization"
      },
      {
        name: "Speaking",
        duration: "16 minutes",
        description: "1 independent task and 3 integrated tasks combining reading, listening, and speaking.",
        questionType: "Structured response recorded via headset microphone"
      },
      {
        name: "Writing",
        duration: "29 minutes",
        description: "Integrated writing task (20 min) and 'Writing for an Academic Discussion' task (10 min).",
        questionType: "Source synthesis and concise academic forum contribution"
      }
    ],
    targetAudience: "Students planning higher education in the United States, research programs in Europe, and global universities.",
    recognizedBy: "100% of US universities and over 11,500 institutions in 160+ countries.",
    overview: "The TOEFL iBT exam measures your ability to use and understand English at the university level. It accurately reflects how combined listening, reading, speaking, and writing are applied in academic lecture halls and seminar discussions.",
    whyTake: [
      "Preferred English test for US university admissions and assistantships",
      "Shorter, modernized test duration of under 2 hours",
      "Fair, standardized scoring with centralized AI and human evaluators",
      "Accepted by 100% of top universities worldwide"
    ],
    secSupport: [
      "Familiarization with ETS official testing interface and modern exam formats",
      "Academic discussion writing workshops with real-time feedback",
      "Speaking recording analysis focusing on pronunciation and synthesis clarity",
      "Official ETS voucher guidance and Kathmandu test center orientation"
    ],
    registrationGuidance: "Registered online through the official ETS portal. SEC guides applicants with account creation, score recipient university codes, and payment options.",
    preparationRoadmap: [
      { week: "Weeks 1–2", focus: "ETS test structure review, note-taking strategies for academic lectures" },
      { week: "Weeks 3–4", focus: "Integrated speaking tasks and synthesis of reading-listening material" },
      { week: "Weeks 5–6", focus: "Modern 10-minute Academic Discussion writing drills and time management" },
      { week: "Weeks 7–8", focus: "Full computer-based mock tests and score optimization" }
    ]
  },
  {
    slug: "gre",
    code: "03",
    name: "GRE General Test",
    fullName: "Graduate Record Examinations",
    tagline: "The decisive benchmark for Master's, MS, MBA, and PhD admissions worldwide",
    scoringRange: "Verbal: 130–170 | Quant: 130–170 | Analytical Writing: 0–6.0",
    validity: "5 Years",
    format: "Computer-delivered (Shorter GRE Format)",
    duration: "1 hour 58 minutes",
    sections: [
      {
        name: "Analytical Writing",
        duration: "30 minutes",
        description: "One 'Analyze an Issue' task requiring critical evaluation of a complex topic.",
        questionType: "Typed essay with logical argument development"
      },
      {
        name: "Verbal Reasoning",
        duration: "41 minutes (2 sections)",
        description: "Reading comprehension, text completion, and sentence equivalence.",
        questionType: "Multi-blank completions, vocabulary in context, reading analysis"
      },
      {
        name: "Quantitative Reasoning",
        duration: "47 minutes (2 sections)",
        description: "Arithmetic, algebra, geometry, and data interpretation.",
        questionType: "Quantitative comparison, multiple choice, numeric entry"
      }
    ],
    targetAudience: "Graduate applicants pursuing MS, Engineering, Computer Science, Economics, and specialized business degrees in the US, Germany, Netherlands, and UK.",
    recognizedBy: "Thousands of graduate and business schools globally.",
    overview: "The GRE General Test assesses analytical writing, verbal reasoning, and quantitative reasoning skills acquired over time. It is a critical component for competitive graduate assistantships, fellowships, and top-tier admissions.",
    whyTake: [
      "Key criterion for STEM Master's programs and tuition scholarship awards",
      "Accepted by leading business schools as an alternative to the GMAT",
      "Shorter, modernized testing format designed to reduce examinee fatigue",
      "5-year score validity offers significant flexibility for application planning"
    ],
    secSupport: [
      "Comprehensive diagnostic math and verbal diagnostic assessment",
      "Algorithmic and shortcut problem-solving drills for Quant section",
      "Root-word vocabulary methodologies and logical elimination techniques",
      "Assistance in utilizing free official ETS PowerPrep practice materials"
    ],
    registrationGuidance: "Registered through ETS. SEC helps students navigate fee payments from Nepal, scheduling optimal dates aligned with university priority funding deadlines.",
    preparationRoadmap: [
      { week: "Weeks 1–3", focus: "Quant foundations review (Arithmetic, Algebra, Geometry) & Issue essay structure" },
      { week: "Weeks 4–6", focus: "Advanced data interpretation, text completion logic, and sentence equivalence" },
      { week: "Weeks 7–9", focus: "Section adaptive timing practice and high-frequency problem sets" },
      { week: "Weeks 10–12", focus: "Full-length timed computer exams and error log review" }
    ]
  },
  {
    slug: "gmat",
    code: "04",
    name: "GMAT Focus Edition",
    fullName: "Graduate Management Admission Test (Focus Edition)",
    tagline: "The tailored assessment for leading global business schools and MBA programs",
    scoringRange: "205 – 805 (Total score across 3 sections)",
    validity: "5 Years",
    format: "Computer-adaptive test",
    duration: "2 hours 15 minutes",
    sections: [
      {
        name: "Quantitative Reasoning",
        duration: "45 minutes (21 questions)",
        description: "Problem-solving focus without traditional geometry; emphasizes algebraic and arithmetic reasoning.",
        questionType: "Multi-choice problem solving"
      },
      {
        name: "Verbal Reasoning",
        duration: "45 minutes (23 questions)",
        description: "Reading comprehension and critical reasoning; sentence correction removed in Focus edition.",
        questionType: "Critical reasoning & academic reading comprehension"
      },
      {
        name: "Data Insights",
        duration: "45 minutes (20 questions)",
        description: "Synthesizing graphics, tables, multi-source reasoning, and two-part analysis.",
        questionType: "Integrated multi-source reasoning, table analysis, two-part analysis"
      }
    ],
    targetAudience: "Prospective MBA, Master in Finance, and Master in Management (MiM) students targeting leading business faculties.",
    recognizedBy: "Over 7,700 graduate business programs at 2,400+ universities worldwide.",
    overview: "The GMAT Focus Edition is exclusively designed for business schools. It focuses on higher-order critical thinking and data literacy skills that are essential in modern executive decision-making.",
    whyTake: [
      "Directly designed for business schools, MBA, and MiM admissions",
      "Flexible section order: choose the order in which you take the test",
      "Question review and edit feature allows editing up to 3 answers per section",
      "Strong differentiator for merit-based business school scholarships"
    ],
    secSupport: [
      "Targeted instruction on Data Insights question formats",
      "Critical reasoning logical fallacy identification frameworks",
      "Tailored section order strategy tailored to student strengths",
      "Business school profile matching aligned with GMAT score targets"
    ],
    registrationGuidance: "Administered by GMAC via mba.com. SEC guides candidates through registration, authorized testing center booking in Nepal, and school selection.",
    preparationRoadmap: [
      { week: "Weeks 1–3", focus: "Diagnostic test, quantitative problem-solving foundations, and critical reasoning basics" },
      { week: "Weeks 4–6", focus: "Data insights multi-source reasoning, table analysis, and graphic interpretation" },
      { week: "Weeks 7–9", focus: "Advanced reading comprehension and section order optimization" },
      { week: "Weeks 10–12", focus: "Official GMAC mock exams and question review/edit pacing drills" }
    ]
  },
  {
    slug: "sat",
    code: "05",
    name: "Digital SAT",
    fullName: "Scholastic Assessment Test",
    tagline: "The premier undergraduate admissions test for top universities in the US and abroad",
    scoringRange: "400 – 1600 (200–800 Reading/Writing, 200–800 Math)",
    validity: "5 Years",
    format: "Digital adaptive test via Bluebook app",
    duration: "2 hours 14 minutes",
    sections: [
      {
        name: "Reading and Writing",
        duration: "64 minutes (Two 32-min modules, 54 questions)",
        description: "Shorter passages with one question each covering craft, structure, information, ideas, and conventions.",
        questionType: "Multiple choice (craft, structure, expression, conventions)"
      },
      {
        name: "Math",
        duration: "70 minutes (Two 35-min modules, 44 questions)",
        description: "Algebra, advanced math, problem solving & data analysis, geometry & trigonometry.",
        questionType: "Multiple choice and student-produced response (grid-in)"
      }
    ],
    targetAudience: "High school / +2 / A-Level graduates applying for Bachelor's degrees and undergraduate scholarships.",
    recognizedBy: "Nearly all 4-year colleges and universities in the United States and international institutions.",
    overview: "The Digital SAT evaluates the skills and knowledge students are learning in high school and what they need to succeed in college. Delivered via College Board's secure Bluebook app, it features a built-in Desmos graphing calculator and adaptive modules.",
    whyTake: [
      "Major qualification for undergraduate merit-based scholarships in the US",
      "Accepted by select undergraduate programs in Europe and global universities",
      "Digital adaptive format provides faster score turnaround",
      "Built-in Desmos calculator available for the entire Math section"
    ],
    secSupport: [
      "Orientation with the official College Board Bluebook testing application",
      "Desmos graphing calculator mastery sessions for the Math section",
      "Pacing strategies for short-passage Reading and Writing questions",
      "Guidance on score submission and US university matching"
    ],
    registrationGuidance: "Registered through College Board. Test dates occur throughout the year at authorized international test centers in Kathmandu.",
    preparationRoadmap: [
      { week: "Weeks 1–2", focus: "Bluebook setup, diagnostic test, and fundamental algebraic concepts review" },
      { week: "Weeks 3–4", focus: "Standard English conventions, vocabulary in context, and Desmos calculator techniques" },
      { week: "Weeks 5–6", focus: "Advanced math (quadratics, functions, trigonometry) and rhetorical synthesis" },
      { week: "Weeks 7–8", focus: "Official adaptive practice tests and test-day endurance" }
    ]
  }
];
