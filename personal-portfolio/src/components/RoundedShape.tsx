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
        `px-8 py-3 border-stone-900 border-[3px] transition-all
         hover:text-stone-700 hover:shadow-roundedShapeHover hover:bg-sky-blue
          text-stone-800 text-3xl  font-bold bg-sky-blue shadow-roundedShape rounded-full`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default RoundedShape;
