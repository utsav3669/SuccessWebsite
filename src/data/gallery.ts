export interface GalleryItem {
  id: string;
  title: string;
  category: "counselling" | "university_sessions" | "office" | "events" | "recognition";
  image: string;
  caption: string;
  year?: string;
  verified: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-01",
    title: "One-on-One Student Academic Counselling",
    category: "counselling",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    caption: "Senior advisor guiding prospective European degree applicants through credential audits in Kathmandu.",
    year: "Recent",
    verified: true
  },
  {
    id: "gal-02",
    title: "European Higher Education Advisory Session",
    category: "university_sessions",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    caption: "Institutional presentation detailing English-taught medical and engineering curricula in Hungary.",
    year: "Historical Archive",
    verified: true
  },
  {
    id: "gal-03",
    title: "Kathmandu Central Office Advisory Desk",
    category: "office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    caption: "The student reception and private counselling rooms at Putalisadak-29, Kathmandu.",
    year: "Operational",
    verified: true
  },
  {
    id: "gal-04",
    title: "Pre-Departure Orientation for Europe",
    category: "events",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    caption: "Briefing session on accommodation, student visas, and cultural transition for departed cohorts.",
    year: "Annual Series",
    verified: true
  },
  {
    id: "gal-05",
    title: "Library & Academic Resources Desk",
    category: "counselling",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    caption: "Students preparing standardized exam materials for international higher education.",
    year: "Ongoing",
    verified: true
  },
  {
    id: "gal-06",
    title: "Institutional Registration & Milestones",
    category: "recognition",
    image: "/images/sec-logo-transparent.png",
    caption: "Success Educational Consultancy foundational crest and Ministry of Education registration archive (Reg. No. 396).",
    year: "Established 2007",
    verified: true
  }
];
