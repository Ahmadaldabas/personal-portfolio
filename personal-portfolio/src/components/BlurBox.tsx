"use client";
import { cn } from "@/config/utils";
import React from "react";

function BlurBox({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("-z-10 p-11 backdrop-blur-xl", className)}>
      {children}
    </div>
  );
}

export default BlurBox;
