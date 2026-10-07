"use client";

import React from "react";
import { GeographicWorldMap } from "./GeographicWorldMap";

/**
 * WorldFlightMap:
 * Global Aviation Study Corridors mapped over real-world vector cartography.
 * Origin point is strictly calculated from Kathmandu, Nepal (27.7172° N, 85.3240° E).
 * All 7 destinations and flight arcs are projected using the same Equirectangular projection engine.
 */
export const WorldFlightMap: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[540px] lg:min-h-[660px] overflow-hidden select-none bg-sec-navy-dark">
      {/* 1. Real Geographic World Vector Map with Projected Corridors & Airplanes */}
      <GeographicWorldMap theme="dark" interactive={true} />
    </div>
  );
};
