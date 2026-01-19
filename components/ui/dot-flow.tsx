"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { DotLoader } from "@/components/ui/dot-loader";
import { cn } from "@/lib/utils";

export type DotFlowProps = {
  items: {
    title: string;
    frames: number[][];
    duration?: number;
    repeatCount?: number;
  }[];
  onDone?: () => void;
  className?: string;
};

export const DotFlow = ({ items, onDone, className }: DotFlowProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const { contextSafe } = useGSAP();

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const newWidth = textRef.current.offsetWidth + 1;

    gsap.to(containerRef.current, {
      width: newWidth,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [textIndex]);

  const next = contextSafe(() => {
    if (finished) return;
    const el = containerRef.current;
    if (!el) return;

    const nextTextIndex = textIndex + 1;

    gsap.to(el, {
      y: 20,
      opacity: 0,
      filter: "blur(8px)",
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        if (nextTextIndex >= items.length) {
          setFinished(true);
          onDone?.();
          return;
        }
        setTextIndex(nextTextIndex);
        gsap.fromTo(
          el,
          { y: -20, opacity: 0, filter: "blur(4px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power2.out",
          },
        );
      },
    });

    setIndex((prev) => (prev + 1) % items.length);
  });

  const current = items[index];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-4 rounded-full bg-black px-4 py-3 text-white shadow-lg",
        className,
      )}
    >
      {!finished && current && (
        <DotLoader
          frames={current.frames}
          onComplete={next}
          className="gap-px"
          repeatCount={current.repeatCount ?? 1}
          duration={current.duration ?? 150}
          dotClassName="bg-white/15 [&.active]:bg-white size-1"
        />
      )}
      <div ref={containerRef} className="relative">
        <div ref={textRef} className="inline-block text-lg font-medium whitespace-nowrap text-white">
          {items[textIndex]?.title}
        </div>
      </div>
    </div>
  );
};



