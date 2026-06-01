import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import SkillsPreview from "@/components/home/SkillPreview";
import ProjectPreview from "@/components/home/ProjectPreview";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <AboutPreview />

      <SkillsPreview />

      <ProjectPreview />

      <Footer />
    </>
  );
}