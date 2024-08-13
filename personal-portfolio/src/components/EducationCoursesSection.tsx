"use client";
import { cn, titleClass } from "@/config/utils";
import BlurBox from "./BlurBox";
import Circle from "./Circle";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Fragment, useRef, useState } from "react";
import { AnimatedBeam } from "./magicui/animated-beam";
import EducationCard from "./EducationCard";
import { delay, motion } from "framer-motion";
import { link } from "fs";
import Button from "./Button";
function EducationCoursesSection() {
  const [isNext, setIsNext] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const educationSectionRef = useRef<HTMLDivElement>(null);
  const coursesSetcionRef = useRef<HTMLDivElement>(null);
  const schoolRef = useRef<HTMLDivElement>(null);
  const uniRef = useRef<HTMLDivElement>(null);
  const cs50Ref = useRef<HTMLDivElement>(null);
  const jsCourseRef = useRef<HTMLDivElement>(null);
  const htmlCssRef = useRef<HTMLDivElement>(null);
  const nodejsRef = useRef<HTMLDivElement>(null);
  const reactCourseRef = useRef<HTMLDivElement>(null);
  const devopsRef = useRef<HTMLDivElement>(null);
  const showMoreRef = useRef<HTMLDivElement>(null);

  // {"Second refs"}
  const educationSectionRef2 = useRef<HTMLDivElement>(null);
  const midRef2 = useRef<HTMLDivElement>(null);
  const coursesSetcionRef2 = useRef<HTMLDivElement>(null);
  const schoolRef2 = useRef<HTMLDivElement>(null);
  const uniRef2 = useRef<HTMLDivElement>(null);
  const cs50Ref2 = useRef<HTMLDivElement>(null);
  const jsCourseRef2 = useRef<HTMLDivElement>(null);
  const htmlCssRef2 = useRef<HTMLDivElement>(null);
  const nodejsRef2 = useRef<HTMLDivElement>(null);
  const reactCourseRef2 = useRef<HTMLDivElement>(null);
  const devopsRef2 = useRef<HTMLDivElement>(null);
  const networksRef = useRef<HTMLDivElement>(null);
  const rightRef2 = useRef<HTMLDivElement>(null);
  const leftRef2 = useRef<HTMLDivElement>(null);
  const rightRef3 = useRef<HTMLDivElement>(null);
  const leftRef3 = useRef<HTMLDivElement>(null);
  const titleRef3 = useRef<HTMLHeadingElement>(null);
  const midRef3 = useRef<HTMLHeadingElement>(null);

  // {"Third refs"}

  const selfEducationData = [
    {
      title: "The Ultimate React Course: React, Next.js, Redux & More",
      duration: "2022 - 2023",
      description:
        "Advanced in React and Next.js, mastering state management with Redux, server-side rendering, and building full-stack applications.",
      link: "https://www.udemy.com/course/the-ultimate-react-course/",
      ref: reactCourseRef,
      secRef: reactCourseRef2,
    },
    {
      title: "The Complete JavaScript Course",
      duration: "2022 - 2022",
      description:
        "Mastered JavaScript by building real-world projects, gaining expertise in ES6+ features, asynchronous programming, and more.",
      link: "https://www.udemy.com/course/the-complete-javascript-course/",
      ref: jsCourseRef,
      secRef: jsCourseRef2,
    },
    {
      title: "DevOps Beginners to Advanced with Projects",
      duration: "2024 - 2024",
      description:
        "Explored DevOps practices and tools, including CI/CD pipelines, containerization, and orchestration, applied in real-world projects.",
      link: "https://www.udemy.com/course/decodingdevops/?couponCode=ST10MT8624",
      ref: devopsRef,
      secRef: devopsRef2,
    },
    {
      title: "Build Responsive Real-World Websites",
      duration: "2022 - 2022",
      description:
        "Developed skills in modern web design, creating responsive websites using HTML5, CSS3, and flexbox/grid.",
      link: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
      ref: htmlCssRef,
      secRef: htmlCssRef2,
    },
    {
      title: "Node.js, Express, MongoDB Bootcamp",
      duration: "2023 - 2023",
      description:
        "Learned to build scalable backend applications using Node.js, Express, and MongoDB, covering RESTful APIs, authentication, and deployment.",
      link: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/",
      ref: nodejsRef,
      secRef: nodejsRef2,
    },
    {
      title: "The Complete Networking Fundamentals Course. Your CCNA start",

      duration: "2024 - 2024",
      description:
        "A thorough introduction to networking concepts, including practical knowledge for CCNA certification.",
      link: "https://www.udemy.com/course/complete-networking-fundamentals-course-ccna-start/?couponCode=LETSLEARNNOWPP",
      secRef: networksRef,
    },
  ];

  const educationData = [
    {
      title: "University of Wollongong",
      duration: "2023 - 2025",
      description:
        "Pursuing a major in Computer Science, with a focus on software development, algorithms, and data structures. Expected to graduate in 2025.",
      link: "https://www.uowdubai.ac.ae/",
      ref: uniRef,
      secRef: uniRef2,
    },
    {
      title: "CS50x by Harvard",
      duration: "2022 - 2023",
      description:
        "A comprehensive and rigorous introduction to the fundamental concepts of computer science and programming. Covered topics include algorithms, data structures.",
      link: "https://cs50.harvard.edu/certificates/71d91f5d-401e-469b-9903-703e2eb55ca0",
      ref: cs50Ref,
      secRef: cs50Ref2,
    },
    {
      title: "Al Shorouq Private School",
      duration: "2017 - 2022",
      description:
        "Completed high school with a strong foundation in mathematics and science, fostering an early interest in technology and programming.",
      link: "https://shoruq.sch.ae/",
      ref: schoolRef,
      secRef: schoolRef2,
    },
  ];
  const cardVariants = {
    opened: {
      opacity: 1,
      y: "0",
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2,
      },
    },
    closed: {
      opacity: 0,
      y: "-121%",
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const underCardsVariants = {
    opened: {
      opacity: 1,
      y: "0",
      transition: {
        delay: 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "121%",
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    mount: {
      opacity: 1,
      y: "0",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    initial: {
      opacity: 0,
      y: "50%",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  const cardsAnimateVariants = {
    mount: {
      opacity: 1,
      y: "0",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    initial: {
      opacity: 0,
      y: "50%",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const selfItems = (() => {
    let items = [];
    for (let i = 0; i < selfEducationData.length; i = i + 2)
      items.push(
        <Fragment key={i}>
          <div className="overflow-hidden p-6">
            <div className="relative">
              {/* First motion.div */}
              <motion.div
                variants={cardsAnimateVariants}
                initial="initial"
                whileInView={"mount"}
                viewport={{ once: true }}
              >
                <motion.div
                  variants={underCardsVariants}
                  initial="closed"
                  animate={isNext ? "closed" : "opened"}
                  className="ml-28"
                >
                  <EducationCard
                    title={selfEducationData[i]!.title}
                    duration={selfEducationData[i]!.duration}
                    description={selfEducationData[i]!.description}
                    link={selfEducationData[i]!.link}
                    className=""
                  />
                </motion.div>
              </motion.div>

              {/* Second motion.div */}
              <motion.div
                className="absolute inset-0 ml-28 flex items-center justify-between"
                initial="initial"
                animate={isNext ? "opened" : "closed"}
                variants={cardVariants}
                whileInView="mount"
                viewport={{ once: true }}
              >
                <EducationCard
                  title={selfEducationData[i + 1]!?.title}
                  duration={selfEducationData[i + 1]!?.duration}
                  description={selfEducationData[i + 1]!?.description}
                  link={selfEducationData[i + 1]!?.link}
                />
              </motion.div>
            </div>
          </div>

          {/* Show more/less button with third motion.div */}
          {i === 4 ? (
            <>
              <Circle
                ref={selfEducationData[i]!?.ref}
                className="relative z-10 border border-stone-900 p-4 shadow-circle"
              />
              <div></div>
              <div ref={showMoreRef}>
                <Button
                  className="relative z-10 px-4 hover:translate-x-0 hover:translate-y-0"
                  onClick={() => setIsNext((el) => !el)}
                >
                  <span className="flex items-center justify-between gap-1">
                    <span>{isNext ? "Show less" : "Show more"}</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="bg h-4 w-4 -rotate-[40deg] transition-all group-hover:fill-white"
                    >
                      <path d="M10 0L8.59 1.41 16.17 9H0v2h16.17l-7.58 7.59L10 20l10-10z" />
                    </svg>
                  </span>
                </Button>
              </div>
            </>
          ) : (
            <Circle
              ref={selfEducationData[i]!?.ref}
              className="relative z-10 border border-stone-900 p-4 shadow-circle"
            />
          )}
        </Fragment>,
      );
    return items;
  })();

  return (
    <section className="text-center sm:px-8 md:px-20 md:text-start">
      <MaxWidthWrapper>
        <div
          ref={containerRef}
          className="relative flex flex-col items-center justify-center gap-2"
        >
          <BlurBox className="relative z-0 inline-flex flex-col items-center justify-center gap-8 bg-white/10 p-8">
            <p className="font-semibold text-[#5ebd2e]">Education & Skills</p>
          </BlurBox>
          <h2
            className={titleClass(
              "mb-8 text-3xl md:text-4xl lg:mb-0 xl:text-5xl",
            )}
          >
            My educational background
          </h2>
          <div className="flex flex-col items-center justify-center">
            <h3 className="mb-3 text-2xl lg:hidden">Self-Education</h3>

            <Circle
              ref={titleRef}
              className="b z-10 border border-stone-900 p-4 shadow-circle"
            />
          </div>
          {/* Desktop */}
          <div className="mt-28 hidden w-full max-w-full items-start justify-between lg:flex">
            <div className="grid grid-cols-[auto_,_minmax(0,_1fr)] items-center justify-items-center gap-y-12">
              <div className="mb-24 flex w-40 max-w-40 flex-col items-center justify-center justify-self-start">
                <h3 className="text-2xl">Education</h3>
                <Circle
                  ref={educationSectionRef}
                  className="b z-10 border border-stone-900 p-4 shadow-circle"
                />
              </div>
              <div></div>
              {educationData.map((edu, index) => (
                <Fragment key={index}>
                  <div key={index}>
                    <Circle
                      ref={edu.ref}
                      className="relative z-10 border border-stone-900 p-4 shadow-circle"
                    />
                  </div>
                  <motion.div
                    initial="initial"
                    variants={cardsAnimateVariants}
                    viewport={{ once: true }}
                    className="mr-28 p-6"
                    whileInView={"mount"}
                  >
                    <EducationCard
                      key={index + 1}
                      title={edu!.title}
                      duration={edu!.duration}
                      description={edu!.description}
                      link={edu!.link}
                    />
                  </motion.div>
                </Fragment>
              ))}
            </div>
            <div ref={midRef}></div>
            <div className="grid grid-cols-[minmax(0,_1fr)_,_auto] items-center justify-items-center gap-y-12">
              <div></div>
              <div className="flex w-40 max-w-40 flex-col items-center justify-center justify-self-start">
                <h3 className="text-2xl">Self-Education</h3>
                <Circle
                  ref={coursesSetcionRef}
                  className="b z-10 border border-stone-900 p-4 shadow-circle"
                />
              </div>

              {selfItems}
            </div>
          </div>
          {/* {"mobile courses sec"} */}
          <div className="mt-28 flex w-full max-w-full items-start justify-between text-start lg:hidden">
            <div className="grid grid-cols-[auto_,_minmax(0,_1fr)] items-center justify-items-center gap-x-48 gap-y-36">
              <div className="flex w-10 max-w-10 flex-col items-start justify-between justify-self-start">
                <Circle
                  ref={leftRef2}
                  className="b z-10 border border-stone-900 p-4 shadow-circle"
                />
              </div>
              <div></div>
              {educationData
                .slice(educationData.length - 1, educationData.length + 1)

                .map((edu, index) => (
                  <Fragment key={index}>
                    <div key={index}>
                      <Circle
                        ref={edu.secRef}
                        className={cn(
                          "relative z-10 border border-stone-900 p-4 shadow-circle",
                          { "mt-80": index % 2 === 0 },
                        )}
                      />
                    </div>
                    <motion.div
                      initial="initial"
                      variants={cardsAnimateVariants}
                      viewport={{ once: true }}
                      className=""
                      whileInView={"mount"}
                    >
                      <EducationCard
                        key={index + 1}
                        title={edu!.title}
                        duration={edu!.duration}
                        description={edu!.description}
                        link={edu!.link}
                        className={cn({ "mt-80": index % 2 === 0 })}
                        mobile
                      />
                    </motion.div>
                  </Fragment>
                ))}
            </div>
            <div ref={midRef2}></div>

            <div className="grid grid-cols-[minmax(0,_1fr)_,_auto] items-center justify-items-center gap-x-48 gap-y-36">
              <div></div>
              <div className="flex w-10 max-w-10 flex-col items-center justify-center justify-self-start">
                <Circle
                  ref={rightRef2}
                  className="b z-10 border border-stone-900 p-4 shadow-circle"
                />
              </div>
              {educationData
                .slice(0, educationData.length / 2 + 1)
                .map((edu, index) => (
                  <Fragment key={index}>
                    <motion.div
                      initial="initial"
                      variants={cardsAnimateVariants}
                      viewport={{ once: true }}
                      className=""
                      whileInView={"mount"}
                    >
                      <EducationCard
                        key={index + 1}
                        title={edu!.title}
                        duration={edu!.duration}
                        description={edu!.description}
                        link={edu!.link}
                        className={cn({ "mt-80": index % 2 !== 0 })}
                        mobile
                      />
                    </motion.div>
                    <div key={index}>
                      <Circle
                        ref={edu.secRef}
                        className={cn(
                          "relative z-10 border border-stone-900 p-4 shadow-circle",
                          { "mt-80": index % 2 !== 0 },
                        )}
                      />
                    </div>
                  </Fragment>
                ))}
            </div>
          </div>
          {/* {"mobile courses third"} */}
          <div className="mt-16 flex flex-col items-center justify-center lg:hidden">
            <h3 className="mb-3 text-2xl">Education</h3>

            <Circle
              ref={titleRef3}
              className="b z-10 border border-stone-900 p-4 shadow-circle"
            />
          </div>
          <div className="mt-28 flex w-full max-w-full items-start justify-between text-start lg:hidden">
            <div className="grid grid-cols-[auto_,_minmax(0,_1fr)] items-center justify-items-center gap-x-48 gap-y-36">
              <div className="flex w-10 max-w-10 flex-col items-start justify-between justify-self-start">
                <Circle
                  ref={leftRef3}
                  className="b z-10 border border-stone-900 p-4 shadow-circle"
                />
              </div>
              <div></div>
              {selfEducationData
                .slice(
                  selfEducationData.length / 2,
                  selfEducationData.length + 1,
                )

                .map((edu, index) => (
                  <Fragment key={index}>
                    <div key={index}>
                      <Circle
                        ref={edu.secRef}
                        className={cn(
                          "relative z-10 mt-80 border border-stone-900 p-4 shadow-circle",
                          { "mt-80": index % 2 === 0 },
                        )}
                      />
                    </div>
                    <motion.div
                      initial="initial"
                      variants={cardsAnimateVariants}
                      viewport={{ once: true }}
                      className=""
                      whileInView={"mount"}
                    >
                      <EducationCard
                        key={index + 1}
                        title={edu!.title}
                        duration={edu!.duration}
                        description={edu!.description}
                        link={edu!.link}
                        className={cn("mt-80")}
                        mobile
                      />
                    </motion.div>
                  </Fragment>
                ))}
            </div>
            <div ref={midRef3}></div>

            <div className="grid grid-cols-[minmax(0,_1fr)_,_auto] items-center justify-items-center gap-x-48 gap-y-36">
              <div></div>
              <div className="flex w-10 max-w-10 flex-col items-center justify-center justify-self-start">
                <Circle
                  ref={rightRef3}
                  className="b z-10 border border-stone-900 p-4 shadow-circle"
                />
              </div>
              {selfEducationData
                .slice(0, selfEducationData.length / 2)
                .map((edu, index) => (
                  <Fragment key={index}>
                    <motion.div
                      initial="initial"
                      variants={cardsAnimateVariants}
                      viewport={{ once: true }}
                      className=""
                      whileInView={"mount"}
                    >
                      <EducationCard
                        key={index + 1}
                        title={edu!.title}
                        duration={edu!.duration}
                        description={edu!.description}
                        link={edu!.link}
                        className={cn({ "mt-80": index !== 0 })}
                        mobile
                      />
                    </motion.div>
                    <div key={index}>
                      <Circle
                        ref={edu.secRef}
                        className={cn(
                          "relative z-10 border border-stone-900 p-4 shadow-circle",
                          { "mt-80": index !== 0 },
                        )}
                      />
                    </div>
                  </Fragment>
                ))}
            </div>
          </div>
          <Circle className="absolute -top-8 right-[39%] -z-10" />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={jsCourseRef2}
            toRef={devopsRef2}
            className="block lg:hidden"
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={reactCourseRef2}
            toRef={jsCourseRef2}
            className="block lg:hidden"
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={rightRef3}
            toRef={reactCourseRef2}
            className="block lg:hidden"
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={htmlCssRef2}
            toRef={nodejsRef2}
            className="block lg:hidden"
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftRef3}
            toRef={htmlCssRef2}
            className="block lg:hidden"
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={midRef3}
            toRef={leftRef3}
            className="block lg:hidden"
            pathOpacity={0.8}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={midRef3}
            toRef={rightRef3}
            className="block lg:hidden"
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={titleRef3}
            toRef={midRef3}
            className="block lg:hidden"
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={nodejsRef2}
            toRef={networksRef}
            className="block lg:hidden"
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={leftRef2}
            toRef={schoolRef2}
            className="block lg:hidden"
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={uniRef2}
            toRef={cs50Ref2}
            className="block lg:hidden"
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={rightRef2}
            toRef={uniRef2}
            className="block lg:hidden"
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={midRef2}
            toRef={leftRef2}
            reverse
            className="block lg:hidden"
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={midRef2}
            toRef={rightRef2}
            className="block lg:hidden"
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={titleRef}
            toRef={midRef2}
            className="block lg:hidden"
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={midRef}
            toRef={coursesSetcionRef}
            pathOpacity={0.8}
            className="hidden lg:block"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={midRef}
            toRef={educationSectionRef}
            pathOpacity={0.8}
            className="hidden lg:block"
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={titleRef}
            toRef={midRef}
            pathOpacity={0.8}
            className="hidden lg:block"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={educationSectionRef}
            toRef={uniRef}
            className="hidden lg:block"
            pathOpacity={0.8}
            reverse
          />{" "}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={uniRef}
            toRef={cs50Ref}
            className="hidden lg:block"
            pathOpacity={0.8}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={cs50Ref}
            toRef={schoolRef}
            className="hidden lg:block"
            pathOpacity={0.8}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={coursesSetcionRef}
            toRef={reactCourseRef}
            className="hidden lg:block"
            pathOpacity={0.8}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={reactCourseRef}
            toRef={devopsRef}
            pathOpacity={0.8}
            className="hidden lg:block"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={devopsRef}
            toRef={nodejsRef}
            pathOpacity={0.8}
            className="hidden lg:block"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={nodejsRef}
            toRef={showMoreRef}
            pathOpacity={0.8}
            className="hidden lg:block"
          />
        </div>
        {/* write code to make the animated beam make a light from education section to courses section */}
      </MaxWidthWrapper>
    </section>
  );
}

export default EducationCoursesSection;
