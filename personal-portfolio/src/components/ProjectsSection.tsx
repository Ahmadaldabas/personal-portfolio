"use client";
import { titleClass } from "@/config/utils";
import Box from "./Box";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  useScroll,
  motion,
  useTransform,
  useInView,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
function ProjectsSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const viewRef = useRef<HTMLDivElement | null>(null);
  const [screenSize, setScreenSize] = useState<string>("");
  const xValue =
    screenSize === "xl"
      ? 0.5
      : screenSize === "lg"
        ? 0.7
        : screenSize === "md"
          ? 1
          : 1;
  const yValue =
    screenSize === "xl"
      ? 0.5
      : screenSize === "lg"
        ? 0.7
        : screenSize === "md"
          ? 1
          : 1;
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setScreenSize("xl");
      } else if (width >= 1240) {
        setScreenSize("lg");
      } else if (width >= 825) {
        setScreenSize("md");
      } else if (width >= 640) {
        setScreenSize("sm");
      } else {
        setScreenSize("xs");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Now you can use the `screenSize` state variable to conditionally render different content based on the screen size.
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [xValue, 1], ["1%", "-5%"]);
  const y = useTransform(scrollYProgress, [yValue, 1], ["1%", "-100%"]);

  return (
    <section className="relative mt-12 px-4 pb-28 pt-36 sm:px-12 sm:pt-52">
      <MaxWidthWrapper>
        <>
          <>
            {" "}
            {screenSize !== "lg" && screenSize !== "xl" && (
              <div className="grid grid-cols-1 items-center justify-items-center gap-x-12 gap-y-6 text-center md:grid-cols-2 md:justify-around md:text-start">
                <div className="flex flex-col gap-8 self-start">
                  <h2
                    className={titleClass("z text-4xl sm:text-5xl xl:text-6xl")}
                  >
                    Projects
                  </h2>
                  <p className="max-w-80 text-xl sm:max-w-52 sm:text-2xl">
                    A selection of my crafted work, built from scratch by me.
                  </p>
                </div>
                <Box size={screenSize} />
                <Box size={screenSize} />
                <Box size={screenSize} />
              </div>
            )}
          </>
          {(screenSize === "lg" || screenSize === "xl") && (
            <motion.div style={{ x: y }} className="relative z-50 h-[300vh]">
              <div
                ref={viewRef}
                className="sticky top-0 flex h-[100vh] gap-24 py-28"
              >
                <div className="flex flex-col gap-8 self-start">
                  <h2 className={titleClass("z text-6xl")}>Projects</h2>
                  <p className="max-w-52 text-2xl">
                    A selection of my crafted work, built from scratch by me.
                  </p>
                </div>
                <div className="">
                  <motion.div
                    style={{ x }}
                    className="md:flex md:items-start md:justify-center md:gap-4"
                  >
                    <Box size={screenSize} />
                    <Box size={screenSize} />
                    <Box size={screenSize} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </>
      </MaxWidthWrapper>
    </section>
  );
}

export default ProjectsSection;
