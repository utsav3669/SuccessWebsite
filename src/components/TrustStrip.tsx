import React from "react";

const pillars = [
  "Expert Counselling",
  "Course Alignment",
  "University Selection",
  "Application Support",
  "Visa Guidance",
  "Pre-Departure Briefing",
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-sec-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Editorial Philosophy Statement */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sec-red font-semibold block">
                Since 2007 • Putalisadak HQ
              </span>
            </div>
            <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-sec-dark leading-tight">
              Higher education guidance based on fact, not promises.
            </h2>
            <p className="font-inter text-xs text-sec-muted italic">
              &ldquo;Supporting students on their international education journey since 2007.&rdquo;
            </p>
          </div>

          {/* Spacious Typographic Pillars */}
          <div className="lg:col-span-7">
            <p className="font-inter text-sm sm:text-base text-sec-muted leading-relaxed mb-8">
              Success Educational Consultancy advises Nepalese students with complete transparency. We verify every entry criterion directly with accredited faculties in Europe, the UK, the USA, and Australia, ensuring zero misleading claims or inflated success rates.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-sec-gray-light text-xs font-poppins">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-[10px] font-mono text-sec-red font-semibold block">
                    0{idx + 1}
                  </span>
                  <span className="font-semibold text-sec-dark block">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
