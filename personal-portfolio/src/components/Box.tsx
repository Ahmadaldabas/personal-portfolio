import { titleClass } from "@/config/utils";
import Image from "next/image";
import Tag from "./Tag";
function Box() {
  return (
    <div
      className={`max-w-[725px] w-[725px] cursor-pointer relative border-2 
      overflow-hidden border-stone-900 h-[580px] max-h-[580px] text-lg shadow-button hover:shadow-buttonHover hover:-translate-x-1 transition rounded-4xl p-11`}
    >
      <div className="flex justify-between items-start flex-col h-full z-40 ">
        <div></div>
        <div className="z-40 flex w-full flex-col gap-8 font-bold ">
          <h3 className={titleClass("text-4xl text-white")}>Qicky</h3>
          <div className="flex items-center  gap-2 text-white">
            <Tag>UI/UX</Tag>
            <Tag>Backend</Tag>
          </div>
        </div>
      </div>
      <Image
        className="absolute h-full  top-0 right-0"
        width={3354}
        height={1722}
        src="/projects/project_1.png"
        alt="First project photo"
      />
      <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t h-[30%] from-stone-900 z-10"></div>
    </div>
  );
}

export default Box;
