import HomeSection from "@/components/Home/HomeSection";
import SkillSection from "@/components/Skill/SkillSection";
import EducationSection from "@/components/Education/EducationSection";
import ProjectSection from "@/components/Project/ProjectSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import ContactSection from "@/components/Contact/ContactSection";

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
