"use client";
import { cn } from "@/config/utils";
// make the children ts defnintion in max width to have children as one element of ReactElement or an array of them

function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactElement | React.ReactElement[];
}) {
  return <div className={cn("mx-auto max-w-main", className)}>{children}</div>;
}

export default MaxWidthWrapper;
