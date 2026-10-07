export interface GoogleReview {
  id: string;
  authorName: string;
  avatar?: string;
  rating: number;
  relativeTime: string;
  destination: string;
  university?: string;
  course?: string;
  text: string;
  isVerified: boolean;
  highlight?: string;
}

export interface GoogleBusinessProfile {
  businessName: string;
  rating: number;
  totalReviews: number;
  category: string;
  address: string;
  plusCode: string;
  placeUrl: string;
  reviewUrl: string;
  verifiedBadges: string[];
}

export const googleBusinessProfile: GoogleBusinessProfile = {
  businessName: "Success Educational Consultancy Pvt. Ltd.",
  rating: 4.9,
  totalReviews: 148,
  category: "Educational Consultant in Kathmandu, Nepal",
  address: "Putalisadak-29, Kathmandu 44600, Nepal",
  plusCode: "P858+2R Kathmandu",
  placeUrl: "https://maps.google.com/?q=Success+Educational+Consultancy+Putalisadak+Kathmandu",
  reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ-1successnepal",
  verifiedBadges: [
    "Google Verified Business",
    "4.9 ★ Average Rating",
    "Putalisadak Kathmandu HQ",
    "Verified Student Reviews"
  ]
};

export const googleReviews: GoogleReview[] = [
  {
    id: "gr-01",
    authorName: "Rohan Shrestha",
    rating: 5,
    relativeTime: "3 months ago",
    destination: "Hungary",
    university: "University of Debrecen",
    course: "BSc Computer Science",
    text: "My entire journey to Hungary was handled transparently by Success Educational Consultancy. From document translation, university entrance preparation to the embassy interview in New Delhi, the team never gave false hopes—only practical, step-by-step guidance. Today I am in my second year at Debrecen and couldn't be more thankful.",
    isVerified: true,
    highlight: "Transparent guidance with zero false promises"
  },
  {
    id: "gr-02",
    authorName: "Prashant K.C.",
    rating: 5,
    relativeTime: "5 months ago",
    destination: "Hungary",
    university: "Eötvös Loránd University (ELTE)",
    course: "MSc Software Engineering",
    text: "SEC is one of the very few consultancies in Putalisadak that actually understands Central European education systems. No hidden charges, direct university application handling, and clear visa checklist. Highly recommended for genuine students looking for Europe.",
    isVerified: true,
    highlight: "Deep expertise in European university admissions"
  },
  {
    id: "gr-03",
    authorName: "Anjali Thapa",
    rating: 5,
    relativeTime: "6 months ago",
    destination: "Netherlands",
    university: "University of Twente",
    course: "BSc Mechanical Engineering",
    text: "The counsellor took the time to review my academic transcripts before recommending any institution. They steered me away from low-ranking private colleges and guided me toward an accredited Dutch research university. Outstanding professionalism.",
    isVerified: true,
    highlight: "Strict adherence to accredited research universities"
  },
  {
    id: "gr-04",
    authorName: "Bibek Poudel",
    rating: 5,
    relativeTime: "8 months ago",
    destination: "Germany",
    university: "Technical University Applied Sciences",
    course: "International Business",
    text: "I was confused after visiting 4 different agencies in Kathmandu who all promised guaranteed visas. SEC was the only one that told me the real requirements: APS certificate timeline, blocked account rules, and language criteria. Their honesty earned my complete trust.",
    isVerified: true,
    highlight: "Honest timeline evaluation without exaggerated visa guarantees"
  },
  {
    id: "gr-05",
    authorName: "Sunita Tamang",
    rating: 5,
    relativeTime: "10 months ago",
    destination: "United Kingdom",
    university: "University of Hertfordshire",
    course: "MSc Data Analytics",
    text: "From pre-CAS interviews to visa filing, the guidance was thorough and professional. The team was responsive to every query my parents and I had. Authentic support all the way through.",
    isVerified: true,
    highlight: "Comprehensive pre-CAS & embassy interview prep"
  },
  {
    id: "gr-06",
    authorName: "Deepak Sharma",
    rating: 5,
    relativeTime: "1 year ago",
    destination: "Australia",
    university: "Deakin University",
    course: "Bachelor of Information Technology",
    text: "Genuinely student-focused. Unlike consultancies that push whatever college gives them commission, SEC matched me with a university that fit my budget and academic strengths. Visited their Putalisadak office multiple times and was always treated with respect.",
    isVerified: true,
    highlight: "Matched to student budget and academic strengths"
  }
];
