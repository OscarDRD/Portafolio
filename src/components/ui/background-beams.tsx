"use client";
import React from "react";
import { cn } from "../../lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 bg-neutral-950 overflow-hidden",
        className
      )}
    >
      <div className="absolute h-full w-full inset-0 bg-neutral-950 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Beams />
    </div>
  );
};

const Beams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute left-0 top-0 h-full w-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          fill="url(#grad1)"
          d="M0 0 L50 100 L100 0 Z"
          className="animate-beam"
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      {/* Add more paths or complex SVG animations here for the full effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-blue-500/20 blur-[100px] rounded-full mix-blend-screen animate-pulse" />
    </div>
  );
};
