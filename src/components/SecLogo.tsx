import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SecLogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const SecLogo: React.FC<SecLogoProps> = ({
  variant = "light",
  showTagline = false,
  className = "",
  size = "md"
}) => {
  const isDark = variant === "dark";
  const textColor = isDark ? "#FFFFFF" : "#1D2F6F";
  const subtextColor = isDark ? "#A1A1AA" : "#71717A";

  const scale = size === "sm" ? 0.9 : size === "lg" ? 1.3 : 1;
  const logoDimensions = size === "sm" ? 44 : size === "lg" ? 60 : 50;

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 group transition-opacity hover:opacity-95 ${className}`}
      aria-label="Success Educational Consultancy - Home"
    >
      {/* Official SEC Crest Emblem (High-Resolution PNG) */}
      <div
        className="relative flex-shrink-0 flex items-center justify-center"
        style={{ width: `${logoDimensions}px`, height: `${logoDimensions}px` }}
      >
        <Image
          src="/images/sec-logo-transparent.png"
          alt="Success Educational Consultancy Official Crest"
          width={120}
          height={120}
          className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
          priority
        />
      </div>

      {/* Brand Typography Wordmark */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className="font-poppins font-bold tracking-tight"
            style={{
              color: textColor,
              fontSize: `${17 * scale}px`
            }}
          >
            SUCCESS
          </span>
          <span
            className="font-poppins font-semibold text-sec-red tracking-tight"
            style={{
              fontSize: `${17 * scale}px`
            }}
          >
            CONSULTANCY
          </span>
        </div>
        
        <span
          className="font-poppins text-[9.5px] uppercase font-medium tracking-[0.18em] mt-1"
          style={{ color: subtextColor }}
        >
          Educational Consultancy (P.) Ltd.
        </span>

        {showTagline && (
          <span
            className="font-inter text-[9px] italic hidden sm:block mt-0.5"
            style={{ color: isDark ? "#94A3B8" : "#71717A" }}
          >
            Educating The World For Success
          </span>
        )}
      </div>
    </Link>
  );
};
