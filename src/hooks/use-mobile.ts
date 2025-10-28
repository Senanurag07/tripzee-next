"use client";

import { useEffect, useState } from "react";

/**
 * A hook to detect if the current viewport is mobile-sized
 * @param breakpoint The width threshold in pixels to consider as mobile (default: 768px)
 * @returns boolean indicating if the viewport is mobile-sized
 */
export function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initial check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Run initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}
