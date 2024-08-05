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
    <section className="pt-28 bg-[#ecfcd5]">
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
            <div className="flex gap-2 items-center ">
              <Button onClick={() => alert("Coming Soon")}>
                Contact Me
              </Button>
              <Button onClick={() => alert("Coming Soon")}>
                Download CV{" "}
              </Button>
            </div>
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
