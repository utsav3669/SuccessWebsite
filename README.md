# Success Educational Consultancy (SEC)

> **Empowering Education for a Global Future**  
> Premium, Minimal, International Education Frontend Website  
> Putilisadak-29, Kathmandu, Nepal

---

## 1. Company Information — Source of Truth

All company contact details, addresses, and identifiers are centralized in [`src/data/company.ts`](file:///c:/Users/acer/Downloads/agent/agent/src/data/company.ts):

```typescript
export const companyInfo = {
  name: "Success Educational Consultancy",
  shortName: "SEC",
  tagline: "Empowering Education for a Global Future",
  category: "Educational Consultancy / International Education Consultancy",
  address: "Putilisadak-29, Kathmandu, Nepal",
  city: "Kathmandu, Nepal",
  phones: ["01-4513517", "9841323688"],
  email: "edu.success@gmail.com",
  website: "successnepal.edu.np",
  whatsapp: "9779841323688",
  whatsappDefaultMessage:
    "Hello Success Educational Consultancy, I would like to know more about studying abroad and would like counselling about destinations, courses and universities.",
  workingHours: "Sunday to Friday: 9:30 AM to 5:30 PM (NPT)"
};
```

---

## 2. Visual Design System

The visual language follows an international editorial standard: **White + typography + photography + subtle navy + controlled red accents** (less than 5% screen accent).

### Brand Colors
- **SEC Red:** `#E02030`
- **Dark Red:** `#B81726`
- **SEC Navy:** `#2B4292`
- **Dark Navy:** `#1D2F6F`
- **White:** `#FFFFFF`
- **Off White:** `#F7F8FA`
- **Light Gray:** `#E9EAED`
- **Dark Text:** `#202124`
- **Muted Text:** `#6B7280`
- **Accent Gold:** `#D6A62E`

### Typography
- **Headings, Navigation & Buttons:** `Poppins` (Google Font)
- **Body, Forms & Descriptions:** `Inter` (Google Font)

### Border Radii
- **Buttons & Inputs:** `6–8px`
- **Cards:** `10–14px`
- **Images:** `10–16px`

---

## 3. Motion System & Signature Airplane Interaction

Following the **80% Static / 20% Motion** design philosophy:

- **Signature Airplane Scroll Animation:**
  - As the user scrolls through the homepage hero, the aircraft departs from Kathmandu (left) and travels toward the Global Destination (right) along a realistic SVG Bézier curved flight trajectory.
  - The aircraft calculates the exact tangent angle via native SVG geometry (`path.getPointAtLength`) and dynamically tilts and rotates to match its altitude, ascent, and descent banking.
  - Accompanied by a subtle dotted flight trail and an arrival beacon ping.
  - Full respect for `prefers-reduced-motion` for accessibility.
- **Student Journey Progressive Line:**
  - Vertical 9-stage progression line that draws down dynamically as the user scrolls through stages 01 to 09.
- **Subtle Editorial Image Reveals:**
  - Micro-scale transitions on hover (1.0 to 1.03), hairline borders, and calm transitions.

---

## 4. Routes & Architecture

| Route | Description |
|---|---|
| [`/`](file:///c:/Users/acer/Downloads/agent/agent/src/app/page.tsx) | Homepage (Hero, Trust Strip, Destinations, Featured Hungary, Course Finder, Journey, Services, Why SEC, Universities, Stories, Resources, CTA) |
| [`/about`](file:///c:/Users/acer/Downloads/agent/agent/src/app/about/page.tsx) | About SEC, Mission, Vision, Values, Ethical Consulting |
| [`/study-destinations`](file:///c:/Users/acer/Downloads/agent/agent/src/app/study-destinations/page.tsx) | Comparative study destinations directory |
| [`/study-destinations/[slug]`](file:///c:/Users/acer/Downloads/agent/agent/src/app/study-destinations/[slug]/page.tsx) | Detailed country hubs (`hungary`, `netherlands`, `germany`, `united-kingdom`, `usa`, `australia`, `sweden`) |
| [`/courses`](file:///c:/Users/acer/Downloads/agent/agent/src/app/courses/page.tsx) | Course search & live filtering directory |
| [`/courses/[slug]`](file:///c:/Users/acer/Downloads/agent/agent/src/app/courses/[slug]/page.tsx) | Course details, prerequisites, tuition, career pathways |
| [`/universities`](file:///c:/Users/acer/Downloads/agent/agent/src/app/universities/page.tsx) | University directory filtered by country |
| [`/universities/[slug]`](file:///c:/Users/acer/Downloads/agent/agent/src/app/universities/[slug]/page.tsx) | University campus profiles and key degree offerings |
| [`/services`](file:///c:/Users/acer/Downloads/agent/agent/src/app/services/page.tsx) | 7 Core Services overview |
| [`/services/[slug]`](file:///c:/Users/acer/Downloads/agent/agent/src/app/services/[slug]/page.tsx) | Dedicated service breakdown (`career-counselling`, `visa-guidance`, etc.) |
| [`/resources`](file:///c:/Users/acer/Downloads/agent/agent/src/app/resources/page.tsx) | Knowledge hub overview |
| [`/resources/blog`](file:///c:/Users/acer/Downloads/agent/agent/src/app/resources/blog/page.tsx) | Educational articles & updates |
| [`/resources/blog/[slug]`](file:///c:/Users/acer/Downloads/agent/agent/src/app/resources/blog/[slug]/page.tsx) | Individual editorial blog posts |
| [`/resources/study-guides`](file:///c:/Users/acer/Downloads/agent/agent/src/app/resources/study-guides/page.tsx) | Downloadable country study guides |
| [`/resources/visa-guides`](file:///c:/Users/acer/Downloads/agent/agent/src/app/resources/visa-guides/page.tsx) | Official embassy document checklists and financial standards |
| [`/resources/scholarships`](file:///c:/Users/acer/Downloads/agent/agent/src/app/resources/scholarships/page.tsx) | Verified government scholarship programs |
| [`/resources/faqs`](file:///c:/Users/acer/Downloads/agent/agent/src/app/resources/faqs/page.tsx) | Categorized FAQ accordion with search |
| [`/book-counselling`](file:///c:/Users/acer/Downloads/agent/agent/src/app/book-counselling/page.tsx) | Multi-field counselling booking form with validation states |
| [`/contact`](file:///c:/Users/acer/Downloads/agent/agent/src/app/contact/page.tsx) | Office contact info, directions in Putilisadak, inquiry form |

---

## 5. Development & Production Run

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build production bundle (52 pre-rendered static routes)
pnpm build

# Start production server
pnpm start -p 3001
```

The production server is active and accessible at **[http://localhost:3001](http://localhost:3001)**.
