"use client";

import React, { useState } from "react";
import { faqs, faqCategories, FAQItem } from "@/data/faqs";
import { ChevronDown, Search, HelpCircle } from "lucide-react";

interface FaqAccordionProps {
  initialCategory?: string;
  showCategoryTabs?: boolean;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  initialCategory = "General",
  showCategoryTabs = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [openIds, setOpenIds] = useState<string[]>(["g-1"]); // first open by default
  const [query, setQuery] = useState("");

  const toggleOpen = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchCategory =
      !showCategoryTabs || query.trim() !== "" || faq.category === activeCategory;
    const matchQuery =
      query.trim() === "" ||
      faq.question.toLowerCase().includes(query.toLowerCase()) ||
      faq.answer.toLowerCase().includes(query.toLowerCase());
    return matchCategory && matchQuery;
  });

  return (
    <div className="w-full space-y-5 font-satoshi">
      {/* Category Tabs & Search Bar */}
      <div className="space-y-3.5">
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-sec-muted" />
          <input
            type="text"
            placeholder="Search questions (e.g. visa, cost, Hungary, IELTS)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-sec-gray-light rounded-input text-sec-dark focus:border-sec-navy transition-colors font-satoshi"
          />
        </div>

        {/* Categories */}
        {showCategoryTabs && query.trim() === "" && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all font-satoshi ${
                  activeCategory === cat
                    ? "bg-sec-navy text-white shadow-sm"
                    : "bg-white text-sec-dark border border-sec-gray-light hover:bg-sec-offwhite"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Accordion List */}
      <div className="space-y-2.5">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-card border border-sec-gray-light overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleOpen(faq.id)}
                  className="w-full text-left px-5 py-3.5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-satoshi text-sm sm:text-base font-semibold text-sec-dark">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-sec-muted flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-sec-red" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-sec-muted leading-relaxed border-t border-sec-gray-light/60 font-satoshi">
                    <p>{faq.answer}</p>
                    <span className="inline-block mt-2.5 px-2 py-0.5 text-[10px] font-medium text-sec-navy bg-sec-navy/5 rounded font-satoshi">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 bg-white rounded-card border border-sec-gray-light text-sec-muted text-xs">
            <HelpCircle className="w-6 h-6 mx-auto mb-2 text-sec-muted/60" />
            <p>No questions matched your search query. Contact our office for immediate answers.</p>
          </div>
        )}
      </div>
    </div>
  );
};
