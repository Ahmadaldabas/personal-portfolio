import { cn } from "@/config/utils";

function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactElement;
}) {
  return (
    <div className={cn("max-w-main mx-auto", className)}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
