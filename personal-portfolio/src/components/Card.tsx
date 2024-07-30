import { titleClass } from "@/config/utils";

function Card({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-2 card bg-main border-stone-900 flex flex-col gap-6 text-lg rounded-xl px-6 py-8 shadow-button hover:shadow-buttonHover hover:-translate-x-1 transition">
      <h1 className={titleClass("text-2xl")}>{title}</h1>
      <p>{text}</p>
      <div className="flex icons-wrapper gap-2 justify-center flex-wrap">
        {children}
      </div>
    </div>
  );
}

export default Card;
