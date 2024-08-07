"use client";
import { titleClass } from "@/config/utils";
import BlurBox from "./BlurBox";
import Circle from "./Circle";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useRef } from "react";
import { AnimatedBeam } from "./magicui/animated-beam";
function EducationCoursesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const educationSectionRef = useRef<HTMLDivElement>(null);
  const coursesSetcionRef = useRef<HTMLDivElement>(null);

  return (
    <section>
      <div ref={containerRef}>
        <MaxWidthWrapper>
          <div className="relative flex flex-col items-center justify-center gap-2">
            <BlurBox className="relative z-0 inline-flex flex-col items-center justify-center gap-8 bg-white/10 p-8">
              <p className="font-semibold text-[#5ebd2e]">Education & Skills</p>
            </BlurBox>
            <h2 ref={titleRef} className={titleClass("text-5xl")}>
              My educational background
            </h2>
            <div
              ref={midRef}
              className="mt-48 flex w-full max-w-full items-center justify-around"
            >
              <div ref={educationSectionRef} className="bg-green-500 p-4"></div>
              <div ref={coursesSetcionRef} className="bg-green-500 p-4"></div>
            </div>
            <Circle className="-top-8 right-[39%] -z-10" />
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}

export default EducationCoursesSection;
