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
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0.5, 1], ["1%", "-5%"]);
  const y = useTransform(scrollYProgress, [0.5, 1], ["1%", "-100%"]);

  const inView = useInView(viewRef, { amount: "all" });

  return (
    <section className="relative">
      <MaxWidthWrapper>
        <motion.div
          style={{ x: y }}
          className="relative  h-[300vh]  z-50 "
        >
          <div
            ref={viewRef}
            className="flex gap-24   py-28 top-0  sticky h-[100vh]"
          >
            <div className="flex flex-col gap-8 self-start  ">
              <h2 className={titleClass("text-6xl z")}>Projects</h2>
              <p className="max-w-52 text-2xl">
                A selection of my crafted work, built from scratch by
                me.
              </p>
            </div>
            <div className="">
              <motion.div
                style={{ x }}
                className="flex gap-4  items-start justify-center "
              >
                <Box />
                <Box />
                <Box />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}

export default ProjectsSection;
