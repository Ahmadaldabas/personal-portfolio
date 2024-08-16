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
              <div className="grid grid-cols-1 items-center justify-items-center gap-x-12 gap-y-6 text-center md:grid-cols-2 md:items-start md:justify-around md:justify-items-start md:text-start">
                <div className="flex flex-col gap-8 self-start">
                  <h2
                    className={titleClass(
                      "relative text-4xl sm:text-5xl xl:text-6xl",
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="50"
                      viewBox="0 0 200 100"
                      className="absolute inset-0 -z-10"
                    >
                      <path
                        d="m189.705,93.949c-3.99,1.078-7.968,2.183-11.958,3.22-1.415.373-2.926,1.092-4.278.788-6.305-1.437-12.568-3.289-18.874-4.74-1.995-.456-4.246-.76-6.133-.041-5.867,2.239-11.54,2.584-17.374-.263-1.491-.732-3.56-.456-5.125.235-5.523,2.404-10.789,3.897-16.494.138-1.64-1.078-4.675-.041-6.584,1.244-6.102,4.104-12.011,4.781-18.198.47-.997-.691-2.681-.691-3.753-.124-6.852,3.634-13.405,3.096-20.043-1.092-1.501-.94-4.021-.65-5.609.332-7.528,4.712-14.842,6.177-22.07-.691-2.145-2.032-3.71-.401-5.394,1.133-4.622,4.215-9.566,6.854-15.367,4.643C6.338,96.878.505,88.297.022,80.585c-.107-1.7.172-4.547.933-5.003,1.298-.774,3.582-.843,4.633.193,1.962,1.907,3.592,4.616,4.933,7.352,2.82,5.707,4.15,6.246,8.504,2.336,1.555-1.396,2.992-2.999,4.397-4.643,4.021-4.671,7.142-4.837,11.26-.511,7.067,7.407,8.225,7.656,15.979,1.423,3.721-2.985,7.206-2.874,10.627.138,4.987,4.395,9.791,4.864,14.852.207,2.702-2.487,5.78-2.487,8.45.124,4.289,4.215,8.45,3.607,12.718.18.847-.691,1.705-1.368,2.552-2.073,3.035-2.501,6.048-2.709,9.019.18,3.453,3.344,7.12,3.413,10.616.511,4.107-3.4,7.85-3.621,12.16-.332,3.668,2.805,7.83,2.128,11.594-.276,3.935-2.515,7.667-2.695,11.409.442.365.304.794.663,1.213.705,6.799.594,13.522,3.676,20.428.843,1.887-.774,3.914-1.119,5.899-1.244,3.313-.207,6.659-.387,9.941,0,1.993.249,4.354.981,5.737,2.639,1.308,1.548,2.113,4.588,2.123,6.979.022,3.275-2.424,3.717-4.472,3.897-1.887.166-3.796.041-5.695.041-.053-.235-.106-.484-.16-.719l.032-.028Z"
                        fill="#FBB130"
                      />{" "}
                    </svg>
                    Projects
                  </h2>
                  <p className="max-w-80 text-xl md:max-w-52 md:text-2xl">
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
                  <h2 className={titleClass("relative text-6xl")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="150"
                      height="75"
                      viewBox="0 0 200 100"
                      className="absolute -bottom-4 left-2 -z-10"
                    >
                      <path
                        d="m189.705,93.949c-3.99,1.078-7.968,2.183-11.958,3.22-1.415.373-2.926,1.092-4.278.788-6.305-1.437-12.568-3.289-18.874-4.74-1.995-.456-4.246-.76-6.133-.041-5.867,2.239-11.54,2.584-17.374-.263-1.491-.732-3.56-.456-5.125.235-5.523,2.404-10.789,3.897-16.494.138-1.64-1.078-4.675-.041-6.584,1.244-6.102,4.104-12.011,4.781-18.198.47-.997-.691-2.681-.691-3.753-.124-6.852,3.634-13.405,3.096-20.043-1.092-1.501-.94-4.021-.65-5.609.332-7.528,4.712-14.842,6.177-22.07-.691-2.145-2.032-3.71-.401-5.394,1.133-4.622,4.215-9.566,6.854-15.367,4.643C6.338,96.878.505,88.297.022,80.585c-.107-1.7.172-4.547.933-5.003,1.298-.774,3.582-.843,4.633.193,1.962,1.907,3.592,4.616,4.933,7.352,2.82,5.707,4.15,6.246,8.504,2.336,1.555-1.396,2.992-2.999,4.397-4.643,4.021-4.671,7.142-4.837,11.26-.511,7.067,7.407,8.225,7.656,15.979,1.423,3.721-2.985,7.206-2.874,10.627.138,4.987,4.395,9.791,4.864,14.852.207,2.702-2.487,5.78-2.487,8.45.124,4.289,4.215,8.45,3.607,12.718.18.847-.691,1.705-1.368,2.552-2.073,3.035-2.501,6.048-2.709,9.019.18,3.453,3.344,7.12,3.413,10.616.511,4.107-3.4,7.85-3.621,12.16-.332,3.668,2.805,7.83,2.128,11.594-.276,3.935-2.515,7.667-2.695,11.409.442.365.304.794.663,1.213.705,6.799.594,13.522,3.676,20.428.843,1.887-.774,3.914-1.119,5.899-1.244,3.313-.207,6.659-.387,9.941,0,1.993.249,4.354.981,5.737,2.639,1.308,1.548,2.113,4.588,2.123,6.979.022,3.275-2.424,3.717-4.472,3.897-1.887.166-3.796.041-5.695.041-.053-.235-.106-.484-.16-.719l.032-.028Z"
                        fill="#FBB130"
                      />{" "}
                    </svg>
                    Projects
                  </h2>
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
