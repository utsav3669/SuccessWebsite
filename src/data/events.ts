export interface EventRecord {
  id: string;
  title: string;
  country: string;
  date: string;
  location: string;
  status: "PAST EVENT" | "ARCHIVE";
  description: string;
  focusAreas: string[];
  historicalContext: string;
}

export const eventsArchive: EventRecord[] = [
  {
    id: "ev-01",
    title: "Study in Hungary: University Admissions & Schengen Gateway",
    country: "Hungary",
    date: "Historical Archive",
    location: "SEC Putalisadak Auditorium, Kathmandu",
    status: "PAST EVENT",
    description: "Informational session on accredited European degree pathways in medical, engineering, and IT faculties at Hungarian universities including Debrecen and ELTE.",
    focusAreas: [
      "Stipendium Hungaricum overview",
      "Medical & Engineering English-taught programs",
      "Schengen mobility & living costs",
      "Document legalization workflow"
    ],
    historicalContext: "Organized as part of SEC European higher education outreach initiatives."
  },
  {
    id: "ev-02",
    title: "Study in Denmark: Higher Education & Applied Sciences",
    country: "Denmark",
    date: "Historical Archive",
    location: "SEC Putalisadak Seminar Hall, Kathmandu",
    status: "PAST EVENT",
    description: "Orientation session introducing Nordic education structures, university colleges, and professional academy degree programs taught in English.",
    focusAreas: [
      "Nordic academic methodology",
      "Applied science & technology degrees",
      "Institutional application timelines",
      "Prerequisite portfolio evaluation"
    ],
    historicalContext: "Historical event archive from SEC Nordic education advisory series."
  },
  {
    id: "ev-03",
    title: "Study in Finland: University Information & Representative Desk",
    country: "Finland",
    date: "Historical Archive",
    location: "Putalisadak-29, Kathmandu",
    status: "PAST EVENT",
    description: "Informative meeting covering Bachelor's and Master's admissions across Finnish universities of applied sciences.",
    focusAreas: [
      "Finnish joint application structure",
      "Entrance examination guidelines",
      "Degree structure & research orientation",
      "Student residence permit procedures"
    ],
    historicalContext: "Archived informational session from historical company records."
  },
  {
    id: "ev-04",
    title: "Study and Work in Poland: Central European Higher Education",
    country: "Poland",
    date: "Historical Archive",
    location: "Kathmandu Office",
    status: "ARCHIVE",
    description: "Educational seminar on higher education opportunities in Warsaw and major Polish university cities for international students.",
    focusAreas: [
      "Undergraduate and Master's curricula",
      "European credit transfer (ECTS) system",
      "Tuition benchmarking across public faculties",
      "Student visa documentation requirements"
    ],
    historicalContext: "Archived historical page reference from SEC early European study series."
  },
  {
    id: "ev-05",
    title: "Higher Education in Europe: Comprehensive Continental Roadmaps",
    country: "Continental Europe",
    date: "Historical Archive",
    location: "Kathmandu Educational Hub",
    status: "ARCHIVE",
    description: "Pan-European academic symposium comparing degree structures in Germany, the Netherlands, Hungary, and the UK.",
    focusAreas: [
      "Tuition-free vs. subsidized European tuition structures",
      "Blocked account and maintenance fund policies",
      "Post-study visa frameworks across EU nations",
      "Career alignment for Nepalese graduates"
    ],
    historicalContext: "Foundational seminar promoting structured European university awareness."
  }
];
