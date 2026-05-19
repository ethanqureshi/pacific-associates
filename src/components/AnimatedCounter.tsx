"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export default function AnimatedCounter({ end, prefix = "", suffix = "", duration = 2, decimals = 0 }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const animated = useRef(false);

  useEffect(() => {
    if (!isInView || animated.current) return;
    animated.current = true;
    const steps = 60;
    const stepDuration = (duration * 1000) / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += end / steps;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}
