import dynamic from "next/dynamic";

import ContactMeSection from "@/components/ContactMeSection";
import MainSection from "@/components/MainSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Nav from "@/components/Nav";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
const EducationCoursesSection = dynamic(
  () => import("@/components/EducationCoursesSection"),
  { ssr: false },
);
export default function Home() {
  return (
    <>
      <Nav />
      <MainSection />
      <SkillsSection />
      <EducationCoursesSection />
      {/* <ProjectsSection />{" "} */}
      {/* 
      {/* <ContactMeSection /> */}
    </>
  );
}
