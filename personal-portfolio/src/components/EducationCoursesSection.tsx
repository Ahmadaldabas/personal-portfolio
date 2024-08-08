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
      <MaxWidthWrapper>
        <div
          ref={containerRef}
          className="relative flex flex-col items-center justify-center gap-2"
        >
          <BlurBox className="relative z-0 inline-flex flex-col items-center justify-center gap-8 bg-white/10 p-8">
            <p className="font-semibold text-[#5ebd2e]">Education & Skills</p>
          </BlurBox>
          <h2 className={titleClass("text-5xl")}>My educational background</h2>
          <Circle
            ref={titleRef}
            className="b shadow-circle z-10 border border-stone-900 p-4"
          />
          <div
            ref={midRef}
            className="mt-28 flex w-full max-w-full items-center justify-between"
          >
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center justify-center">
                <Circle
                  ref={educationSectionRef}
                  className="b shadow-circle z-10 border border-stone-900 p-4"
                />
              </div>
              <div className="mb-12 flex flex-col items-center justify-center">
                <h3 className="text-2xl">Education</h3>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-2xl">Courses</h3>
              <Circle
                ref={coursesSetcionRef}
                className="b shadow-circle z-10 border border-stone-900 p-4"
              />
            </div>
          </div>
          <Circle className="absolute -top-8 right-[39%] -z-10" />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={midRef}
            toRef={coursesSetcionRef}
            delay={3}
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={midRef}
            toRef={educationSectionRef}
            delay={3}
            pathOpacity={0.8}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={titleRef}
            toRef={midRef}
            delay={3}
            pathOpacity={0.8}
          />
        </div>
        {/* write code to make the animated beam make a light from education section to courses section */}
      </MaxWidthWrapper>
    </section>
  );
}

export default EducationCoursesSection;
