"use client";
// File: src/components/EducationCard.tsx
import React from "react";
import { cn } from "@/config/utils";
import Circle from "./Circle";
import BlurBox from "./BlurBox";

interface EducationCardProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  title: string;
  duration: string;
  description: string;
  link: string;
  mobile?: boolean;
  children?: React.ReactNode;
}

const EducationCard: React.FC<EducationCardProps> = ({
  className,
  title,
  duration,
  description,
  link,
  mobile,
  children,
  ...props
}) => {
  return (
    <a
      target="_blank"
      href={link}
      className={cn(
        "group relative flex h-56 max-h-56 max-w-full gap-10 rounded-lg border bg-white-card px-3 py-6 transition-all hover:border-stone-800 sm:w-96 sm:max-w-96 sm:p-6",
        className,
        { ...props },
      )}
    >
      <div className="flex flex-col items-start gap-1">
        <span className="item-center relative flex w-full justify-between">
          <span className="w-full font-bold text-[#5ebd2e]">{duration}</span>
          <Circle className="absolute -right-1 -top-3 rounded-full border border-stone-900 bg-yellow-cta p-3 transition-all group-hover:bg-black sm:-right-4 sm:-top-3 md:-right-6 md:-top-2">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="bg h-4 w-4 -rotate-[40deg] transition-all group-hover:fill-white"
            >
              <path d="M10 0L8.59 1.41 16.17 9H0v2h16.17l-7.58 7.59L10 20l10-10z" />
            </svg>
          </Circle>
        </span>
        <h3 className="mb-1 max-w-72 text-xl font-bold text-stone-800 sm:max-w-80 sm:text-2xl">
          {title}
        </h3>
        <p className="w-96 max-w-72 text-sm sm:max-w-80">{description}</p>
      </div>

      <BlurBox className="absolute -left-6 -top-6 -z-50 bg-[#b2f781]/50 transition-all group-hover:-left-4 group-hover:-top-4 group-hover:bg-[#b2f781]/90" />
      <BlurBox className="absolute -bottom-6 -right-6 -z-50 bg-[#b2f781]/50 transition-all group-hover:-bottom-4 group-hover:-right-4 group-hover:bg-[#b2f781]/90" />
      {children}
    </a>
  );
};

export default EducationCard;
