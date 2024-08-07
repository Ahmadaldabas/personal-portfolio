import { cn } from "@/config/utils";
import React from "react";

function Tag({
  color,
  children,
}: {
  color?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "backdrop-blur-sm px-12 py-1 z-40 border-2 rounded-full border-stone-900",
        {
          [color + " self-end"]: color,
        }
      )}
    >
      {children}
    </div>
  );
}

export default Tag;
