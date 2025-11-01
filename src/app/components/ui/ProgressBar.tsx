"use client";

import React from "react";

interface ProgressBarProps {
  progress: number;
  activeIndex: number;
  total: number;
}

export default function ProgressBar({
  progress,
  activeIndex,
  total,
}: ProgressBarProps) {
  // Normalize to a 0..1 value.
  let normalized = 0;

  if (typeof progress === "number") {
    normalized = Number.isFinite(progress) ? progress : 0;
  } else if (
    typeof activeIndex === "number" &&
    typeof total === "number" &&
    total > 0
  ) {
    // convert 0..(total-1) -> 0..1 (position along the track)
    if (total === 1) normalized = 1;
    else normalized = activeIndex / (total - 1);
  } else {
    normalized = 0;
  }

  // Clamp between 0 and 1
  normalized = Math.max(0, Math.min(1, normalized));

  // Make sure a tiny sliver is always visible.
  const minVisible = 0.09; // 4% minimum visible sliver
  const visible = Math.max(minVisible, normalized);

  // convert to percentage for inline width
  const widthPercent = `${visible * 100}%`;

  return (
    <div className="mt-6 px-4 max-w-[300px] w-[200px] md:w-[300px] mx-auto">
      <div className="h-0.5 bg-gray-200 rounded-full relative overflow-hidden">
        {/* Progress indicator */}
        <div
          className="h-full bg-black rounded-full transition-transform duration-200 ease-out origin-left"
          style={{
            width: widthPercent,
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
