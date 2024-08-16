import { cn, titleClass } from "@/config/utils";
import Image from "next/image";
import Tag from "./Tag";
function Box({ size }: { size: string }) {
  return (
    <div
      className={cn(
        `relative h-[calc(725px_/_1.6)] w-full cursor-pointer overflow-hidden rounded-4xl border-2 border-stone-900 p-11 text-lg shadow-button transition hover:-translate-x-1 hover:shadow-buttonHover md:h-[calc(580px/_1.8)] md:w-[calc(725px_/_1.8)] lg:h-[calc(580px/_1.3)] lg:w-[calc(725px_/_1.3)] xl:h-[calc(580px)] xl:max-h-[calc(580px)] xl:w-[calc(725px)] xl:max-w-[calc(725px)]`,
      )}
    >
      <div className="z-40 flex h-full flex-col items-start justify-between">
        <div></div>
        <div className="z-40 flex w-full flex-col gap-8 font-bold">
          <h3 className={titleClass("text-start text-4xl text-white")}>
            Qicky
          </h3>
          <div className="flex items-center gap-2 text-white">
            <Tag>UI/UX</Tag>
            <Tag>Backend</Tag>
          </div>
        </div>
      </div>
      <Image
        className="absolute right-0 top-0 h-full"
        width={3354}
        height={1722}
        src="/projects/project_1.png"
        alt="First project photo"
      />
      <div className="absolute bottom-0 right-0 z-10 h-[30%] w-full bg-gradient-to-t from-stone-900"></div>
    </div>
  );
}

export default Box;
