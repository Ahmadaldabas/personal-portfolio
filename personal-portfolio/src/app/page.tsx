import MainSection from "@/components/MainSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Nav from "@/components/Nav";
import SkillsSection from "@/components/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <MainSection />
      <SkillsSection />
    </>
  );
}
