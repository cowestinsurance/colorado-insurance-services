"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SVGDrawProps {
  d: string;
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function SVGDraw({
  d,
  width = 200,
  height = 200,
  strokeColor = "#eb6424",
  strokeWidth = 2,
  duration = 2,
  delay = 0,
  className = "",
}: SVGDrawProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d={d}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration, delay, ease: "easeInOut" }}
      />
    </svg>
  );
}
