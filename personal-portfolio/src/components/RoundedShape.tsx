import { cn } from "@/config/utils";
import { PropsWithoutRef } from "react";

function RoundedShape({
  className,
  props,
  children,
}: {
  className?: string;
  props?: React.ComponentPropsWithoutRef<"div">;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        `rounded-full border-[3px] border-stone-900 bg-sky-blue text-3xl font-bold text-stone-800 shadow-roundedShape transition-all hover:bg-sky-blue hover:text-stone-700 hover:shadow-roundedShapeHover 2xl:px-8 2xl:py-3`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default RoundedShape;
