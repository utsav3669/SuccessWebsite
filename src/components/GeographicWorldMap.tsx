"use client";

import React, { useState } from "react";
import {
  MAP_CONFIG,
  KATHMANDU_ORIGIN,
  KATHMANDU_PROJECTED,
  DESTINATIONS_DATA,
  WORLD_COUNTRY_PATHS,
  getFlightArc,
  projectGeo,
  DestinationRoute,
} from "@/data/worldMapData";

interface GeographicWorldMapProps {
  theme?: "dark" | "light" | "hero";
  showDestinations?: boolean;
  showFlightArcs?: boolean;
  showAirplanes?: boolean;
  interactive?: boolean;
  activeDestinationId?: string | null;
  onHoverDestination?: (dest: DestinationRoute | null) => void;
  className?: string;
  airplaneScrollProgress?: number; // for hero scroll-linked airplane
  preserveAspectRatio?: string;
  viewBox?: string;
}

export const GeographicWorldMap: React.FC<GeographicWorldMapProps> = ({
  theme = "dark",
  showDestinations = true,
  showFlightArcs = true,
  showAirplanes = true,
  interactive = true,
  activeDestinationId = null,
  onHoverDestination,
  className = "",
  preserveAspectRatio = "xMidYMid meet",
  viewBox = "-15 -25 1230 700",
}) => {
  const [internalActiveRoute, setInternalActiveRoute] = useState<string | null>(null);

  const activeRoute = activeDestinationId ?? internalActiveRoute;

  const handleMouseEnter = (dest: DestinationRoute) => {
    if (!interactive) return;
    setInternalActiveRoute(dest.id);
    onHoverDestination?.(dest);
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    setInternalActiveRoute(null);
    onHoverDestination?.(null);
  };

  // Theme-based palette
  const isDark = theme === "dark";
  const isHero = theme === "hero";

  const landFill = isDark
    ? "#132347"
    : isHero
    ? "rgba(29, 47, 111, 0.05)"
    : "rgba(29, 47, 111, 0.08)";

  const landStroke = isDark
    ? "rgba(59, 130, 246, 0.28)"
    : isHero
    ? "rgba(29, 47, 111, 0.15)"
    : "rgba(29, 47, 111, 0.2)";

  const graticuleStroke = isDark
    ? "rgba(255, 255, 255, 0.05)"
    : "rgba(29, 47, 111, 0.04)";

  return (
    <div
      className={`relative w-full h-full select-none overflow-hidden flex items-center justify-center ${
        isDark ? "bg-[#071326]" : "bg-transparent"
      } ${className}`}
    >
      <svg
        viewBox={viewBox}
        className="w-full h-full max-h-full"
        preserveAspectRatio={preserveAspectRatio}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Airplane Silhouette for Animated Corridors */}
          <g id="sec-geo-airplane">
            <path
              d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
              fill={isDark ? "#FFFFFF" : "#1D2F6F"}
              stroke={isDark ? "#0B192C" : "#FFFFFF"}
              strokeWidth="0.6"
              transform="rotate(90) translate(-12, -12)"
            />
          </g>

          {/* Elevation shadow for markers */}
          <filter id="geoMarkerShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* 1. MATHEMATICAL GRATICULES (Real geographic lat/long grid extending across viewBox) */}
        <g stroke={graticuleStroke} strokeWidth="0.75" strokeDasharray="3 6">
          {/* Equator (lat = 0) */}
          <line
            x1="-50"
            y1={projectGeo(0, 0).y}
            x2="1250"
            y2={projectGeo(0, 0).y}
            strokeWidth="1"
          />
          {/* Tropic of Cancer (lat = 23.4368° N, near Kathmandu at 27.7°) */}
          <line
            x1="-50"
            y1={projectGeo(0, 23.4368).y}
            x2="1250"
            y2={projectGeo(0, 23.4368).y}
          />
          {/* Tropic of Capricorn (lat = -23.4368° S) */}
          <line
            x1="-50"
            y1={projectGeo(0, -23.4368).y}
            x2="1250"
            y2={projectGeo(0, -23.4368).y}
          />
          {/* Arctic Circle (lat = 66.56° N) */}
          <line
            x1="-50"
            y1={projectGeo(0, 66.56).y}
            x2="1250"
            y2={projectGeo(0, 66.56).y}
          />
          {/* Prime Meridian (lon = 0) */}
          <line
            x1={projectGeo(0, 0).x}
            y1="-50"
            x2={projectGeo(0, 0).x}
            y2="750"
          />
          {/* Greenwich to Kathmandu meridian (lon = 85.324° E) */}
          <line
            x1={KATHMANDU_PROJECTED.x}
            y1="-50"
            x2={KATHMANDU_PROJECTED.x}
            y2="750"
          />
          {/* 60°E Meridian */}
          <line
            x1={projectGeo(60, 0).x}
            y1="-50"
            x2={projectGeo(60, 0).x}
            y2="750"
          />
          {/* 120°E Meridian */}
          <line
            x1={projectGeo(120, 0).x}
            y1="-50"
            x2={projectGeo(120, 0).x}
            y2="750"
          />
          {/* -60°W Meridian */}
          <line
            x1={projectGeo(-60, 0).x}
            y1="-50"
            x2={projectGeo(-60, 0).x}
            y2="750"
          />
          {/* -120°W Meridian */}
          <line
            x1={projectGeo(-120, 0).x}
            y1="-50"
            x2={projectGeo(-120, 0).x}
            y2="750"
          />
        </g>

        {/* 2. REAL GEOGRAPHIC COUNTRY BOUNDARIES */}
        <g>
          {WORLD_COUNTRY_PATHS.map((country) => {
            const isNepal = country.name === "Nepal";
            return (
              <path
                key={country.name}
                d={country.d}
                fill={
                  isNepal
                    ? isDark
                      ? "#243B7A"
                      : "rgba(224, 32, 48, 0.18)"
                    : landFill
                }
                stroke={
                  isNepal
                    ? isDark
                      ? "#E02030"
                      : "#E02030"
                    : landStroke
                }
                strokeWidth={isNepal ? "1.4" : "0.55"}
                className="transition-colors duration-200"
              />
            );
          })}
        </g>

        {/* 3. FLIGHT CORRIDORS & ANIMATED AIRPLANES FROM KATHMANDU */}
        {showFlightArcs &&
          DESTINATIONS_DATA.map((dest) => {
            const destPt = projectGeo(dest.lon, dest.lat);
            const isAustralia = dest.id === "australia";
            const { pathD } = getFlightArc(KATHMANDU_PROJECTED, destPt, isAustralia);
            const isHovered = activeRoute === dest.id;

            return (
              <g
                key={dest.id}
                className={interactive ? "cursor-pointer" : "pointer-events-none"}
                onMouseEnter={() => handleMouseEnter(dest)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Wide invisible hit area */}
                {interactive && (
                  <path d={pathD} fill="none" stroke="transparent" strokeWidth="20" />
                )}

                {/* Subtle base flight arc */}
                <path
                  id={`geo-corridor-${dest.id}`}
                  d={pathD}
                  fill="none"
                  stroke={
                    isHovered
                      ? "#E02030"
                      : isDark
                      ? "rgba(255, 255, 255, 0.28)"
                      : "rgba(29, 47, 111, 0.22)"
                  }
                  strokeWidth={isHovered ? "2.2" : "1.2"}
                  strokeDasharray={isHovered ? "none" : "3 5"}
                  className="transition-all duration-300"
                />

                {/* Animated traveling airplane originating strictly from Kathmandu */}
                {showAirplanes && (
                  <use href="#sec-geo-airplane" transform="scale(0.85)">
                    <animateMotion
                      dur={`${dest.duration}s`}
                      repeatCount="indefinite"
                      rotate="auto"
                      begin={`${dest.delay}s`}
                    >
                      <mpath href={`#geo-corridor-${dest.id}`} />
                    </animateMotion>
                  </use>
                )}
              </g>
            );
          })}

        {/* 4. DESTINATION MARKERS (Projected with identical formula) */}
        {showDestinations &&
          DESTINATIONS_DATA.map((dest) => {
            const destPt = projectGeo(dest.lon, dest.lat);
            const isHovered = activeRoute === dest.id;

            return (
              <g
                key={`marker-${dest.id}`}
                transform={`translate(${destPt.x}, ${destPt.y})`}
                className={interactive ? "cursor-pointer" : "pointer-events-none"}
                onMouseEnter={() => handleMouseEnter(dest)}
                onMouseLeave={handleMouseLeave}
                filter="url(#geoMarkerShadow)"
              >
                {/* Subtle ping ring */}
                <circle
                  r={isHovered ? "11" : "6"}
                  fill="none"
                  stroke={isHovered ? "#E02030" : isDark ? "rgba(214, 166, 46, 0.6)" : "rgba(29, 47, 111, 0.4)"}
                  strokeWidth="1"
                  className="animate-ping"
                  style={{ animationDuration: "3.5s" }}
                />

                {/* Solid pin marker */}
                <g transform="translate(-4, -13)">
                  <path
                    d="M 4 0 C 1.79 0 0 1.79 0 4 C 0 7 4 11 4 11 C 4 11 8 7 8 4 C 8 1.79 6.21 0 4 0 Z"
                    fill={isHovered ? "#E02030" : isDark ? "#2B4292" : "#1D2F6F"}
                    stroke="#FFFFFF"
                    strokeWidth="0.6"
                  />
                  <circle cx="4" cy="4" r="1.5" fill="#FFFFFF" />
                </g>
              </g>
            );
          })}

        {/* 5. KATHMANDU ORIGIN MARKER (Strictly located at 27.7172° N, 85.3240° E inside Nepal) */}
        <g
          transform={`translate(${KATHMANDU_PROJECTED.x}, ${KATHMANDU_PROJECTED.y})`}
          filter="url(#geoMarkerShadow)"
        >
          {/* Radar beacon wave */}
          <circle
            r="14"
            fill="none"
            stroke="#E02030"
            strokeWidth="1.2"
            className="animate-ping"
            style={{ animationDuration: "2.8s" }}
          />
          {/* Subtle glow aura */}
          <circle r="7" fill="#E02030" fillOpacity="0.25" />
          {/* High-visibility origin dot */}
          <circle
            r="4.5"
            fill="#E02030"
            stroke="#FFFFFF"
            strokeWidth="1.6"
          />
        </g>
      </svg>

      {/* 6. DESTINATION DETAIL OVERLAY (Interactive Hover) */}
      {interactive && activeRoute && (
        <div className="absolute top-6 right-6 z-20 bg-sec-navy/95 border border-white/20 p-4 text-left shadow-2xl backdrop-blur-md max-w-xs animate-fadeIn">
          {(() => {
            const r = DESTINATIONS_DATA.find((item) => item.id === activeRoute);
            if (!r) return null;
            return (
              <>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xl">{r.flag}</span>
                  <div>
                    <h5 className="font-satoshi text-xs font-bold uppercase tracking-wider text-white">
                      {r.country}
                    </h5>
                    <span className="text-[10px] text-sec-gold font-satoshi block">
                      {r.city} • {r.lat > 0 ? `${r.lat.toFixed(2)}°N` : `${Math.abs(r.lat).toFixed(2)}°S`},{" "}
                      {r.lon > 0 ? `${r.lon.toFixed(2)}°E` : `${Math.abs(r.lon).toFixed(2)}°W`}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-300 font-satoshi leading-relaxed">
                  {r.universities}
                </p>
                <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-satoshi">
                  <span>KATHMANDU ({KATHMANDU_ORIGIN.lat}°N, {KATHMANDU_ORIGIN.lon}°E) → {r.city.toUpperCase()}</span>
                  <span className="text-sec-red font-semibold">DIRECT CORRIDOR</span>
                </div>
              </>
            );
          })()}
        </div>
      )}

      {/* 7. RESTRAINED EDITORIAL GEOGRAPHIC LEGEND STRIP */}
      {interactive && (
        <div className="absolute bottom-2 left-4 right-4 z-10 hidden sm:flex items-center justify-between text-[10px] font-satoshi tracking-wider text-slate-300 bg-[#071326]/85 backdrop-blur-sm border border-white/10 px-4 py-1.5 shadow-md">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white">
              <span className="w-2 h-2 bg-sec-red rounded-full inline-block animate-pulse" />
              <span>
                ORIGIN: KATHMANDU, NEPAL ({KATHMANDU_ORIGIN.lat.toFixed(4)}° N, {KATHMANDU_ORIGIN.lon.toFixed(4)}° E)
              </span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 bg-sec-navy-light border border-white inline-block" />
              <span>7 GEOGRAPHICALLY PROJECTED DESTINATIONS</span>
            </span>
          </div>
          <div className="text-slate-400">
            <span>SEC INTERNATIONAL STUDY CORRIDORS</span>
          </div>
        </div>
      )}
    </div>
  );
};
