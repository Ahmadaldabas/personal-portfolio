import MainSection from "@/components/MainSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Nav from "@/components/Nav";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <Nav />
      <MainSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}
