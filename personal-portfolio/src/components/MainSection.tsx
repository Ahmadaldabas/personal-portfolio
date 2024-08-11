"use client";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TypewriterComponent from "typewriter-effect";
import Button from "./Button";
import Image from "next/image";
import RoundedShape from "./RoundedShape";
import { titleClass } from "@/config/utils";

function MainSection() {
  return (
    <section className="curved relative w-full max-w-full bg-[#ecfcd5] px-8 pb-20 pt-16 sm:pt-20 md:px-12 md:pb-28 md:pt-20 lg:pt-24 xl:p-0 xl:pb-28 xl:pt-28">
      <div className="custom-shape-divider-bottom-1722873353">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <MaxWidthWrapper>
        <div className="grid items-center justify-center text-center sm:content-center md:grid-cols-2 md:items-start md:justify-normal md:text-start">
          <div className="">
            <p className="mb-1 md:mb-5">Hi, my name is Ahmad.</p>
            <div className={titleClass("mb-8 max-w-[30rem]")}>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl">
                I&apos;ll build, design and deploy your{" "}
                <span className="inline-block">
                  <TypewriterComponent
                    options={{
                      strings: [
                        "website.",
                        "backend.",
                        "frontend.",
                        "pipeline.",
                        "database.",
                      ],
                      autoStart: true,
                      loop: true,
                      wrapperClassName: "",
                      cursorClassName: "text-teal",
                    }}
                  />
                </span>
              </h1>
            </div>
            <p className="mb-8 max-w-128">
              I&apos;m a software engineer with a strong background in
              developing innovative and efficient software solutions.
            </p>
          </div>
          <div className="relative flex justify-end">
            {/* <RoundedShape className="absolute z-20 xl:-right-32 xl:-top-20 xl:px-7 xl:py-3 2xl:-right-40 2xl:-top-28">
              Ahmad
            </RoundedShape> */}
            {/* <Image
              src={"/arrow.png"}
              alt="arrow"
              width={75}
              height={75}
              className="2x:z-20 absolute rotate-[128deg] xl:-top-6 2xl:-top-12"
            /> */}
            <div>
              <Image
                src={"/personal.png"}
                alt="personal photo"
                width={525}
                height={525}
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default MainSection;
