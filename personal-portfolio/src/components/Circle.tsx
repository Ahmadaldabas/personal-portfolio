import { cn } from "@/config/utils";

function Circle({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-[#b2f781] p-8 rounded-full absolute",
        className
      )}
    ></div>
  );
}

export default Circle;
