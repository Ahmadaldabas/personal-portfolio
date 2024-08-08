import { cn } from "@/config/utils";
import { forwardRef } from "react";

const Circle = forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("rounded-full bg-[#b2f781] p-8", className)}
      ></div>
    );
  },
);

export default Circle;
