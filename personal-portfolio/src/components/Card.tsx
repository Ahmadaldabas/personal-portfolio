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
    <div className="card flex flex-col justify-between gap-6 rounded-xl border-2 border-stone-900 bg-white px-4 py-8 text-lg shadow-button transition hover:-translate-x-1 hover:bg-yellow-cta hover:shadow-buttonHover sm:px-6">
      <h1 className={titleClass("text-2xl")}>{title}</h1>
      <p>{text}</p>
      <div className="icons-wrapper mt-6 flex gap-2 md:mt-0 md:justify-center">
        {children}
      </div>
    </div>
  );
}

export default Card;
