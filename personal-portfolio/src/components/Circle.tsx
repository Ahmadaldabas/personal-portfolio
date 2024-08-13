"use client";
import { cn } from "@/config/utils";
import React, { forwardRef } from "react";
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div ref={ref} className={cn("rounded-full bg-[#b2f781] p-8", className)}>
      {children}
    </div>
  );
});

export default Circle;
