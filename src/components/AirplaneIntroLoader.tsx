"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import Image from "next/image";

interface AirplaneIntroLoaderProps {
  onComplete?: () => void;
}

export const AirplaneIntroLoader: React.FC<AirplaneIntroLoaderProps> = ({ onComplete }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  
  // Animation lifecycle stages:
  // 1. "flying": Airplane flies along invisible takeoff arc (slowed to ~2.2s for prestige)
  // 2. "connecting": Logo pulse, accent line reveal, seamless thematic bridge to page (~600ms)
  // 3. "revealing": Elegant curtain lift (translateY -100%) seamlessly uncovering the hero banner (~750ms)
  // 4. "done": Unmounted
  const [loaderStage, setLoaderStage] = useState<"flying" | "connecting" | "revealing" | "done">("flying");
  
  const pathRef = useRef<SVGPathElement>(null);
  const reqRef = useRef<number | null>(null);

  // Position, rotation, scale, and opacity of aircraft during takeoff
  const [planeState, setPlaneState] = useState<{
    x: number;
    y: number;
    angle: number;
    scale: number;
    opacity: number;
  }>({
    x: 140,
    y: 720,
    angle: 3.6,
    scale: 0.74,
    opacity: 0,
  });

  // Invisible Takeoff Trajectory (Mathematical Guide Only - ZERO VISIBLE LINES)
  // Low ground start -> Acceleration roll -> Smooth rotation -> Upward climb exit
  const takeoffPathD = useMemo(
    () => "M 140 720 C 440 710, 860 480, 1420 120",
    []
  );

  useEffect(() => {
    // 1. Check if user already saw the intro animation in this session or locally
    try {
      if (
        typeof window !== "undefined" &&
        (sessionStorage.getItem("sec_intro_shown") === "true" ||
          localStorage.getItem("sec_intro_shown") === "true" ||
          window.location.search.includes("skipIntro"))
      ) {
        setIsVisible(false);
        if (onComplete) onComplete();
        return;
      }
    } catch (e) {
      // Storage access safety fallback
    }

    setMounted(true);

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      try {
        sessionStorage.setItem("sec_intro_shown", "true");
        localStorage.setItem("sec_intro_shown", "true");
      } catch (e) {}
      const timer = setTimeout(() => {
        setLoaderStage("revealing");
        setTimeout(() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }, 300);
      }, 300);
      return () => clearTimeout(timer);
    }

    // Flight takeoff animation: slowed down to 2200ms (2.2s) for a calm, luxurious takeoff
    const flightDuration = 2200;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawProgress = Math.min(1, elapsed / flightDuration);

      // Physics-inspired airliner acceleration curve:
      // Smooth initial ground roll, steady acceleration, graceful aerodynamic pitch and climb
      const p =
        rawProgress < 0.35
          ? Math.pow(rawProgress / 0.35, 1.7) * 0.22
          : 0.22 + Math.pow((rawProgress - 0.35) / 0.65, 1.2) * 0.78;

      if (pathRef.current) {
        const path = pathRef.current;
        const total = path.getTotalLength();
        const currentDist = p * total;
        const point = path.getPointAtLength(currentDist);

        // Precise central difference for instant velocity tangent
        const eps = 2.0;
        const s0 = Math.max(0, currentDist - eps);
        const s1 = Math.min(total, currentDist + eps);
        const p0 = path.getPointAtLength(s0);
        const p1 = path.getPointAtLength(s1);

        const dx = p1.x - p0.x;
        const dy = p1.y - p0.y;
        const tangentDeg = (Math.atan2(dy, dx) * 180) / Math.PI;

        // +5.43° aligns asset longitudinal fuselage perfectly with flight tangent
        const angle = tangentDeg + 5.43;

        // Scale from 0.74 at ground roll to 0.98 at climb
        const scale = 0.74 + p * 0.24;

        // Fade in quickly at start, fade out seamlessly at exit (> 0.94)
        let opacity = 1;
        if (rawProgress < 0.08) {
          opacity = rawProgress / 0.08;
        } else if (rawProgress > 0.93) {
          opacity = Math.max(0, 1 - (rawProgress - 0.93) / 0.07);
        }

        setPlaneState({
          x: point.x,
          y: point.y,
          angle,
          scale,
          opacity,
        });
      }

      if (rawProgress < 1) {
        reqRef.current = requestAnimationFrame(animate);
      } else {
        // Store session flag that intro animation has finished
        try {
          sessionStorage.setItem("sec_intro_shown", "true");
          localStorage.setItem("sec_intro_shown", "true");
        } catch (e) {}

        // Airplane completed takeoff: Transition to the connecting animation stage
        setLoaderStage("connecting");

        // Connecting stage lasts 550ms: logo pulse + accent line expand
        setTimeout(() => {
          // Reveal stage: Curtain slide up smoothly over 750ms
          setLoaderStage("revealing");

          setTimeout(() => {
            setLoaderStage("done");
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 780);
        }, 550);
      }
    };

    reqRef.current = requestAnimationFrame(animate);

    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, [onComplete]);

  if (!mounted || !isVisible) return null;

  const planeWidth = 210;
  const planeHeight = (planeWidth * 356) / 997;

  return (
    <aside
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#071326] select-none pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        loaderStage === "revealing" || loaderStage === "done"
          ? "-translate-y-full opacity-90 shadow-2xl"
          : "translate-y-0 opacity-100"
      }`}
      style={{ willChange: "transform, opacity" }}
      aria-label="Website loading screen"
    >
      {/* Subtle Atmospheric Luminosity in SEC Deep Navy (Matches Hero Banner Palette) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(29, 47, 111, 0.45) 0%, rgba(7, 19, 38, 0.98) 75%)",
        }}
      />

      {/* Central SEC Brand Mark with Connecting Animation */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* SEC Crest with connecting pulse & ambient glow */}
        <div className="relative flex items-center justify-center">
          {/* Connecting Halo Ring (Expands smoothly during connecting stage) */}
          <div
            className={`absolute -inset-4 rounded-full border border-sec-red/40 transition-all duration-700 pointer-events-none ${
              loaderStage === "connecting"
                ? "scale-150 opacity-0"
                : "scale-90 opacity-20"
            }`}
          />

          <div
            className={`relative w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md transition-transform duration-500 ease-out ${
              loaderStage === "connecting" ? "scale-105" : "scale-100"
            }`}
          >
            <Image
              src="/images/sec-logo-transparent.png"
              alt="Success Educational Consultancy Logo"
              width={80}
              height={80}
              priority
              className="w-full h-full object-contain filter brightness-110"
            />
          </div>
        </div>

        {/* Minimal Typography Wordmark: SUCCESS EDUCATIONAL CONSULTANCY */}
        <div className="flex items-center gap-1 sm:gap-2 mt-4 text-[11px] sm:text-xs md:text-sm font-satoshi font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] flex-wrap justify-center text-center px-2 max-w-[92vw]">
          <span className="text-white">SUCCESS</span>
          <span className="text-sec-red">EDUCATIONAL CONSULTANCY</span>
        </div>

        {/* Connecting Accent Line: Animates outward smoothly right before reveal */}
        <div
          className={`h-0.5 bg-sec-red/80 mt-2.5 transition-all duration-500 ease-out ${
            loaderStage === "connecting" ? "w-24 sm:w-32 opacity-100" : "w-0 opacity-0"
          }`}
        />

        {/* Dynamic Connecting Status / Legacy Subtitle */}
        <div className="mt-2 h-5 flex items-center justify-center">
          <span
            className={`text-[10px] sm:text-[11px] font-satoshi uppercase tracking-[0.22em] transition-all duration-500 ${
              loaderStage === "connecting"
                ? "text-sec-gold font-medium scale-105"
                : "text-white/50"
            }`}
          >
            {loaderStage === "connecting"
              ? "Empowering Education • Global Future"
              : "Kathmandu • Estd. 2007"}
          </span>
        </div>
      </div>

      {/* 
        AIRPLANE TAKEOFF CANVAS:
        Strictly the aircraft moving along an invisible trajectory.
        NO VISIBLE LINES, NO DOTS, NO TRAILS, NO ROUTE MAP.
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            {/* Subtle atmospheric aircraft drop shadow */}
            <filter id="introPlaneShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="12"
                stdDeviation="12"
                floodColor="#000000"
                floodOpacity="0.5"
              />
            </filter>
          </defs>

          {/* 
            INVISIBLE BÉZIER TAKEOFF PATH (Mathematical Guide Only - Stroke and fill are NONE)
          */}
          <path
            ref={pathRef}
            d={takeoffPathD}
            fill="none"
            stroke="none"
          />

          {/* 
            THE AIRCRAFT:
            Single realistic commercial aircraft executing tangent-oriented climb.
          */}
          <g
            transform={`translate(${planeState.x}, ${planeState.y}) rotate(${planeState.angle}) scale(${planeState.scale})`}
            opacity={planeState.opacity}
            style={{
              willChange: "transform, opacity",
            }}
          >
            <image
              href="/images/sec-aircraft.png"
              x={-planeWidth * 0.55}
              y={-planeHeight * 0.53}
              width={planeWidth}
              height={planeHeight}
              filter="url(#introPlaneShadow)"
            />
          </g>
        </svg>
      </div>
    </aside>
  );
};
