"use client";

import React from "react";
import { GeographicWorldMap } from "./GeographicWorldMap";

/**
 * WorldFlightMap:
 * Global Aviation Study Corridors mapped over real-world vector cartography.
 * Origin point is strictly calculated from Kathmandu, Nepal (27.7172° N, 85.3240° E).
 * All 7 destinations and flight arcs are projected using the same Equirectangular projection engine.
 */
export const WorldFlightMap: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-full select-none bg-sec-navy-dark flex items-center justify-center overflow-hidden ${className}`}>
      {/* 1. Real Geographic World Vector Map with Projected Corridors & Airplanes */}
      <GeographicWorldMap
        theme="dark"
        interactive={true}
        preserveAspectRatio="xMidYMid meet"
        viewBox="-15 -25 1230 700"
        className="w-full h-full flex items-center justify-center"
      />
    </div>
  );
};
