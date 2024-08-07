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
    <section className="pt-28 pb-28 bg-[#ecfcd5] curved relative">
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
        <div className="grid grid-cols-2">
          <div>
            <p className="mb-5">Hi, my name is Ahmad.</p>
            <div className={titleClass("max-w-[30rem] mb-8")}>
              <h1 className="text-6xl">
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
            <p className="max-w-128 mb-8">
              I&apos;m a software engineer with a strong background in
              developing innovative and efficient software solutions.
            </p>
          </div>
          <div className="relative flex justify-end">
            <RoundedShape className="absolute z-20 -top-28 -right-40">
              Ahmad
            </RoundedShape>
            <Image
              src={"/arrow.png"}
              alt="arrow"
              width={75}
              height={75}
              className="absolute z-20 -top-12 rotate-[128deg]"
            />
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
