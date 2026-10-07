export interface University {
  slug: string;
  name: string;
  country: string;
  city: string;
  location: string;
  logo: string;
  image: string;
  type: string;
  overview: string;
  programs: string[];
  intakes: string[];
  establishedYear: number;
  keyStrengths: string[];
}

export const universities: University[] = [
  {
    slug: "university-of-debrecen",
    name: "University of Debrecen",
    country: "Hungary",
    city: "Debrecen",
    location: "Debrecen, Eastern Hungary",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    type: "Public Research University",
    establishedYear: 1538,
    overview: "One of Hungary's oldest continuously operating institutions of higher education, the University of Debrecen welcomes over 7,000 international students from 120+ nations across diverse English-taught medical, scientific, and humanities programs.",
    programs: [
      "General Medicine (MD)",
      "BSc in Computer Science",
      "BSc in Mechatronics Engineering",
      "BSc in Business Administration",
      "MSc in Applied Mathematics"
    ],
    intakes: ["September", "February"],
    keyStrengths: [
      "WHO and EU accredited medical and health sciences faculty",
      "Spacious modern campus with state-of-the-art sports and research facilities",
      "Affordable cost of living in Debrecen compared to capital cities",
      "Vibrant international student community"
    ]
  },
  {
    slug: "eotvos-lorand-university",
    name: "Eötvös Loránd University (ELTE)",
    country: "Hungary",
    city: "Budapest",
    location: "Budapest, Central Hungary",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80",
    image: "/images/universities/eotvos-lorand-university.jpg",
    type: "National Public Research University",
    establishedYear: 1635,
    overview: "ELTE is Hungary's prestigious research university located right in the heart of Budapest, educating Nobel laureates, scientists, and thinkers across its historic faculties.",
    programs: [
      "BSc & MSc Computer Science",
      "BSc in Psychology",
      "MSc in International Relations",
      "BSc in Applied Economics"
    ],
    intakes: ["September"],
    keyStrengths: [
      "Ranked among the leading universities in Central Europe",
      "Located in the vibrant center of Budapest",
      "Extensive European research consortia and exchange programs"
    ]
  },
  {
    slug: "corvinus-university-of-budapest",
    name: "Corvinus University of Budapest",
    country: "Hungary",
    city: "Budapest",
    location: "Danube Riverfront, Budapest",
    logo: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=1200&q=80",
    type: "Leading University for Business & Social Sciences",
    establishedYear: 1920,
    overview: "Corvinus University is widely celebrated for its elite business, economics, and management education, holding prestigious international accreditation and close corporate ties.",
    programs: [
      "BSc in International Business",
      "MSc in Finance & Accounting",
      "BSc in Applied Economics",
      "Executive MBA"
    ],
    intakes: ["September"],
    keyStrengths: [
      "Triple-crown standard management accreditation credentials",
      "Direct internship pipelines with multinational corporate regional headquarters",
      "Iconic riverside campus in central Budapest"
    ]
  },
  {
    slug: "university-of-amsterdam",
    name: "University of Amsterdam",
    country: "Netherlands",
    city: "Amsterdam",
    location: "Amsterdam, Netherlands",
    logo: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80",
    type: "Public Research University",
    establishedYear: 1632,
    overview: "Consistently ranked in the world's top 60 universities, the University of Amsterdam offers innovative English-taught research degrees surrounded by Amsterdam's historic canal district.",
    programs: [
      "BSc in Economics and Business Economics",
      "MSc in Data Science & AI",
      "BSc in Communication Science",
      "MSc in International Law"
    ],
    intakes: ["September"],
    keyStrengths: [
      "Global top-tier university ranking (QS Top 60)",
      "Pioneering artificial intelligence and media labs",
      "Highly international student body in an English-fluent capital"
    ]
  },
  {
    slug: "rwth-aachen-university",
    name: "RWTH Aachen University",
    country: "Germany",
    city: "Aachen",
    location: "Aachen, North Rhine-Westphalia",
    logo: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    type: "Leading German Technical University",
    establishedYear: 1870,
    overview: "A founding member of the TU9 alliance of leading German Institutes of Technology, RWTH Aachen is world-famous for mechanical, civil, and automotive engineering research.",
    programs: [
      "BSc in Mechanical Engineering",
      "MSc in Automotive Engineering",
      "MSc in Data Analytics and Decision Science",
      "MSc in Electrical Power Engineering"
    ],
    intakes: ["October (Winter)", "April (Summer)"],
    keyStrengths: [
      "Virtually zero tuition fee structure at public university rate",
      "Direct cooperation with industrial giants such as BMW, Siemens, and Bosch",
      "Unmatched European reputation in engineering and computer science"
    ]
  },
  {
    slug: "university-of-birmingham",
    name: "University of Birmingham",
    country: "United Kingdom",
    city: "Birmingham",
    location: "Edgbaston, Birmingham, UK",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    type: "Russell Group Research University",
    establishedYear: 1900,
    overview: "A prestigious British Russell Group institution with a scenic redbrick parkland campus and exceptional graduate employability rankings worldwide.",
    programs: [
      "BSc in Computer Science",
      "Master of Public Health (MPH)",
      "MSc in Advanced Mechanical Engineering",
      "BSc in International Relations"
    ],
    intakes: ["September"],
    keyStrengths: [
      "Prestigious UK Russell Group status",
      "Dedicated campus train station and self-contained university village",
      "Eligible for 2-year UK Graduate Route post-study work visa"
    ]
  },
  {
    slug: "arizona-state-university",
    name: "Arizona State University",
    country: "USA",
    city: "Tempe, AZ",
    location: "Phoenix Metropolitan Area, Arizona",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
    type: "Public Research University",
    establishedYear: 1885,
    overview: "Ranked #1 for innovation by U.S. News & World Report for multiple consecutive years, ASU offers world-class faculty and extensive career recruitment pipelines.",
    programs: [
      "BSc in Software Engineering",
      "MSc in Cybersecurity",
      "BSc in Supply Chain Management",
      "MSc in Biomedical Informatics"
    ],
    intakes: ["August (Fall)", "January (Spring)"],
    keyStrengths: [
      "STEM designated degree programs with up to 3 years OPT extension",
      "Tier-1 Research University with extensive laboratory facilities",
      "Generous merit scholarship evaluations for qualified international applicants"
    ]
  },
  {
    slug: "deakin-university",
    name: "Deakin University",
    country: "Australia",
    city: "Melbourne / Geelong",
    location: "Victoria, Australia",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=200&q=80",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    type: "Comprehensive Public University",
    establishedYear: 1974,
    overview: "A top 1% global university known for outstanding student satisfaction, modern clinical healthcare simulation centers, and strong industry placements.",
    programs: [
      "Bachelor of Nursing",
      "Master of Information Technology",
      "Bachelor of Cyber Security",
      "Master of Business Analytics"
    ],
    intakes: ["March", "July", "November"],
    keyStrengths: [
      "Ranked top 20 globally for nursing education",
      "Options for both Melbourne metropolitan and Geelong regional campus study",
      "Comprehensive career guidance and workplace internship programs"
    ]
  }
];
