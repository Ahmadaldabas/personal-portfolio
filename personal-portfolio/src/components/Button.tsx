import { cn } from "@/config/utils";
import { forwardRef } from "react";
function Button({
  className,
  onClick,
  props,
  children,
}: {
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-full border border-stone-900 bg-yellow-cta px-2 py-2 font-bold text-stone-800 shadow-button transition-all hover:-translate-x-1 hover:-translate-y-1 hover:transform hover:bg-yellow-cta-hover hover:text-stone-700 hover:shadow-buttonHover md:px-4 md:py-1",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
