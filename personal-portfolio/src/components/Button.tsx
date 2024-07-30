import { cn } from "@/config/utils";

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
        "px-10 py-2 border-stone-900 hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-all hover:text-stone-700 hover:shadow-buttonHover hover:bg-yellow-cta-hover text-stone-800 border font-bold bg-yellow-cta  shadow-button rounded-full",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
