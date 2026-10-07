"use client";

import React from "react";
import { companyInfo } from "@/data/company";

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    companyInfo.whatsappDefaultMessage
  )}`;

  return (
    <aside
      aria-label="Contact options"
      className="fixed z-40 right-6 bottom-6"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Success Educational Consultancy on WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-sec-navy text-white border border-white/20 shadow-xl hover:bg-sec-dark transition-all duration-200 focus:outline-none"
      >
        {/* Official WhatsApp Vector Logo */}
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          className="text-[#25D366] drop-shadow-sm flex-shrink-0"
        >
          <path d="M12.031 0C5.395 0 0 5.395 0 12.031c0 2.12.552 4.17 1.6 5.975L.05 24l6.195-1.517a12.04 12.04 0 0 0 5.786 1.488h.005c6.634 0 12.03-5.395 12.03-12.032C24.066 5.395 18.669 0 12.031 0zm0 21.996h-.005a9.98 9.98 0 0 1-5.09-1.393l-.365-.216-3.784.927.943-3.688-.238-.378a9.966 9.966 0 0 1-1.528-5.217C1.964 6.478 6.477 1.965 12.031 1.965c2.69 0 5.217 1.047 7.12 2.951a10.02 10.02 0 0 1 2.95 7.119c0 5.555-4.515 10.06-10.07 10.06zm5.518-7.533c-.302-.152-1.789-.883-2.066-.984-.277-.1-.479-.151-.68.152-.202.302-.781.984-.957 1.186-.176.201-.353.226-.655.075-.302-.15-1.277-.47-2.433-1.5-1.002-.894-1.68-2-1.882-2.352-.201-.352-.022-.542.13-.693.136-.136.302-.352.453-.529.151-.176.201-.302.302-.503.1-.202.05-.377-.025-.529-.076-.151-.68-1.637-.932-2.242-.245-.589-.494-.509-.68-.519l-.58-.01c-.201 0-.528.075-.805.377-.277.302-1.057 1.033-1.057 2.52 0 1.487 1.082 2.923 1.233 3.125.151.201 2.128 3.25 5.156 4.557.72.311 1.282.497 1.721.637.724.23 1.383.197 1.904.12.58-.088 1.789-.73 2.041-1.434.252-.705.252-1.309.176-1.434-.075-.126-.277-.202-.58-.353z" />
        </svg>

        <span className="font-satoshi text-xs font-medium uppercase tracking-wider text-white">
          WhatsApp Desk
        </span>
      </a>
    </aside>
  );
};
