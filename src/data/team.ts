export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  status: "verified" | "historical_record" | "verification_pending";
  bio: string;
  specialization?: string;
  historicalNote?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "tm-prajyol",
    name: "Prajyol Basnet",
    role: "Managing Director",
    qualification: "MBA",
    status: "verified",
    bio: "Guiding students with individualized academic counselling, ensuring degree selections are rooted in long-term career viability rather than marketing hype.",
    specialization: "Strategic Advisory & European University Relations",
    historicalNote: "Documented in SEC foundational leadership archives."
  },
  {
    id: "tm-nirjwal",
    name: "Nirjwal Basnet",
    role: "Chief Executive Officer",
    qualification: "MPhil in Finance",
    status: "historical_record",
    bio: "Oversaw institutional financial integrity, governance, and transparent compliance standards for overseas education services.",
    specialization: "Executive Governance & Financial Advisory",
    historicalNote: "Archived historical executive record from SEC foundational portal."
  },
  {
    id: "tm-srijana",
    name: "Srijana Adhikari Basnet",
    role: "Manager / Senior Education Counselor",
    qualification: "MBS",
    status: "historical_record",
    bio: "Spearheaded student counselling workflows and university application documentation for European and Asian faculties.",
    specialization: "Admissions Management & Profile Assessment",
    historicalNote: "Archived historical counselling team record."
  },
  {
    id: "tm-sushmita",
    name: "Sushmita Thapa",
    role: "Education Counselor for Australia",
    qualification: "MBS",
    status: "historical_record",
    bio: "Advised students on CRICOS accredited courses, GTE/GS requirements, and Australian institutional admissions.",
    specialization: "Australian Admissions",
    historicalNote: "Historical specialist counselling record."
  },
  {
    id: "tm-bibhuti",
    name: "Bibhuti Bhattarai",
    role: "Education Counselor",
    qualification: "MBA in English",
    status: "historical_record",
    bio: "Guided applicants through statement of purpose reviews and language prerequisite documentation.",
    specialization: "Language Prerequisites & SOP Review",
    historicalNote: "Historical counselling staff record."
  },
  {
    id: "tm-nila",
    name: "Nila Basnet",
    role: "International Relations Officer",
    qualification: "BA",
    status: "historical_record",
    bio: "Coordinated institutional communications with overseas university international admission desks.",
    specialization: "Institutional Liaison",
    historicalNote: "Historical relations coordinator record."
  }
];

export const mdMessage = {
  author: "Prajyol Basnet",
  role: "Managing Director",
  qualification: "MBA",
  statusNote: "Adapted from SEC foundational leadership philosophy",
  paragraphs: [
    "Every student who walks through our doors arrives with distinct ambitions, academic backgrounds, and financial parameters. In an overseas educational landscape often dominated by inflated claims and one-size-fits-all quotas, our foremost commitment is honesty.",
    "We believe that selecting a university and a country is not simply about securing an admission letter—it is about positioning yourself for an accredited, globally respected degree. Our responsibility is to evaluate each profile objectively, present realistic requirements, and support students with transparent guidance from initial consultation through enrollment abroad.",
    "Empowering education for a global future requires integrity at every step. That is the standard we have maintained since 2007, and the standard we continue to uphold."
  ]
};
