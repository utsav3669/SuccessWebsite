import React from "react";

const reasons = [
  {
    num: "01",
    title: "Personalized Counselling",
    desc: "Every student has unique strengths, test scores, and family considerations. We take time to understand your individual profile rather than pushing generic packages.",
  },
  {
    num: "02",
    title: "Destination Guidance",
    desc: "Honest comparative insights across European, British, American, and Australian education systems, clarifying real living costs, academic requirements, and work rights.",
  },
  {
    num: "03",
    title: "Course & University Selection",
    desc: "Unbiased recommendations matching your career aspirations with verified, accredited higher education institutions known for academic excellence.",
  },
  {
    num: "04",
    title: "Application Support",
    desc: "Meticulous guidance on Statements of Purpose, CV preparation, reference letters, and transcript authentication ensuring zero procedural disqualifications.",
  },
  {
    num: "05",
    title: "Visa Guidance",
    desc: "Strict adherence to official embassy financial regulations and extensive one-on-one mock interview coaching that prepares you to articulate genuine student intent.",
  },
  {
    num: "06",
    title: "Student-Focused Service",
    desc: "No misleading claims, no hidden commissions, and no false guarantees. We work ethically on your behalf from our office in Putilisadak-29.",
  },
];

export const WhySecSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-sec-offwhite border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="font-poppins text-[11px] uppercase tracking-[0.2em] text-sec-red font-semibold block mb-3">
            Core Principles
          </span>
          <h2 className="font-poppins text-3xl sm:text-5xl font-bold text-sec-dark tracking-tight leading-tight">
            Why Students Choose SEC
          </h2>
          <p className="font-inter text-base sm:text-lg text-sec-muted mt-4 leading-relaxed font-normal">
            Built on integrity, precision, and student-first educational planning in Kathmandu.
          </p>
        </div>

        {/* 6 Number-Based Editorial Pillars (No rounded cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {reasons.map((item) => (
            <div key={item.num} className="space-y-3 pt-6 border-t border-sec-gray-light">
              <span className="font-mono text-xs text-sec-red font-semibold block">
                {item.num}
              </span>
              <h3 className="font-poppins text-lg sm:text-xl font-bold text-sec-dark">
                {item.title}
              </h3>
              <p className="font-inter text-xs sm:text-sm text-sec-muted leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
