
import Section from "@/components/Section";
import HomeSection from "@/components/HomeSection";
import SkillSection from "@/components/SkillSection";
import EducationSection from "@/components/EducationSection";
import ProjectSection from "@/components/ProjectSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
      <main className="pt-20 xl:pt-24">
          <HomeSection/>
          <SkillSection/>
          <ProjectSection/>
          <ExperienceSection/>
          <EducationSection/>
          <ContactSection/>
      </main>
  );
}
