"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

interface SignatureAirplaneProps {
  scrollProgress: number; // 0 to 1 as user scrolls through the hero
  className?: string;
}

export const SignatureAirplane: React.FC<SignatureAirplaneProps> = ({
  scrollProgress,
  className = "",
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState<number>(1400);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Position, tangent rotation, and takeoff scale
  const [aircraftState, setAircraftState] = useState<{
    x: number;
    y: number;
    angle: number;
    scale: number;
    opacity: number;
  }>({
    x: 120,
    y: 640,
    angle: 3.7,
    scale: 0.74,
    opacity: 1,
  });

  // Track prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Track mobile screen size for responsive sizing and safe clearance
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Measure path length on mount
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // INVISIBLE MATHEMATICAL TAKEOFF TRAJECTORY:
  // Begins low at departure roll (120, 640), accelerates smoothly forward,
  // naturally rotates upward, and soars into the upper sky at (1380, 110).
  // Strictly an animation guide; NOT rendered visually.
  const flightPath = useMemo(
    () => "M 120 640 C 460 630, 880 460, 1380 110",
    []
  );

  // Continuous tangent calculation and fast, responsive takeoff progression
  useEffect(() => {
    if (!pathRef.current || reducedMotion) return;

    const path = pathRef.current;
    const total = pathLength || path.getTotalLength();

    // Fast, responsive progress with slight power-curve acceleration
    const p = Math.max(0, Math.min(1, scrollProgress));
    // Accelerate smoothly through early scroll
    const acceleratedP = Math.pow(p, 1.15);
    const currentDist = acceleratedP * total;

    // Center point along the curve
    const point = path.getPointAtLength(currentDist);

    // Precise central difference for tangent direction
    const epsilon = 1.5;
    const s0 = Math.max(0, currentDist - epsilon);
    const s1 = Math.min(total, currentDist + epsilon);
    const p0 = path.getPointAtLength(s0);
    const p1 = path.getPointAtLength(s1);

    const dx = p1.x - p0.x;
    const dy = p1.y - p0.y;

    // Mathematical tangent angle in degrees (-180° to +180°)
    const pathAngleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;

    // Fuselage longitudinal alignment:
    // Natural cabin window line in cutout asset is at -5.43°,
    // so pathAngleDeg + 5.43° aligns the nose directly along the direction of flight.
    const angle = pathAngleDeg + 5.43;

    // Subtle scale progression: 0.74 at departure ground roll to 0.98 at cruise climb
    const scale = 0.74 + acceleratedP * 0.24;

    // Clean fade-out as the aircraft finishes climbing into the upper sky beyond hero
    const opacity = acceleratedP >= 0.94 ? Math.max(0, 1 - (acceleratedP - 0.94) / 0.06) : 1;

    setAircraftState({
      x: point.x,
      y: point.y,
      angle,
      scale,
      opacity,
    });
  }, [scrollProgress, pathLength, reducedMotion]);

  // Aircraft dimensions (Aspect ratio 997 x 356)
  const planeWidth = isMobile ? 130 : 200;
  const planeHeight = (planeWidth * 356) / 997;

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 760"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          {/* Elevation shadow for aircraft depth */}
          <filter id="aircraftTakeoffShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="10"
              floodColor="#1D2F6F"
              floodOpacity="0.22"
            />
          </filter>
        </defs>

        {/* 
          1. INVISIBLE MATHEMATICAL REFERENCE PATH
          Explicitly not rendered (fill: none, stroke: none).
          Used solely as animation trajectory for getPointAtLength.
        */}
        <path
          ref={pathRef}
          d={flightPath}
          fill="none"
          stroke="none"
        />

        {/* 
          2. THE AIRPLANE (ONE AIRPLANE ONLY — NO LINES, NO DOTS, NO MARKERS)
        */}
        {!reducedMotion ? (
          <g
            transform={`translate(${aircraftState.x}, ${aircraftState.y}) rotate(${aircraftState.angle}) scale(${aircraftState.scale})`}
            opacity={aircraftState.opacity}
            style={{
              transition: "transform 0.06s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease-out",
              willChange: "transform, opacity",
            }}
          >
            <image
              href="/images/sec-aircraft.png"
              x={-planeWidth * 0.55}
              y={-planeHeight * 0.53}
              width={planeWidth}
              height={planeHeight}
              filter="url(#aircraftTakeoffShadow)"
            />
          </g>
        ) : (
          /* Static graceful climbing position for users with prefers-reduced-motion */
          <g
            transform="translate(850, 420) rotate(-19) scale(0.88)"
            style={{ opacity: 1 }}
          >
            <image
              href="/images/sec-aircraft.png"
              x={-planeWidth * 0.55}
              y={-planeHeight * 0.53}
              width={planeWidth}
              height={planeHeight}
              filter="url(#aircraftTakeoffShadow)"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
