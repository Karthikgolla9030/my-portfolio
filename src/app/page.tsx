import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { AboutPreview } from "@/components/sections/about-preview";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { CertificationsPreview } from "@/components/sections/certifications-preview";
import { LearningJourney } from "@/components/sections/learning-journey";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero id="hero" />
      <AboutPreview id="about" />
      <FeaturedProjects id="projects" />
      <SkillsPreview id="skills" />
      <ExperiencePreview id="experience" />
      <CertificationsPreview id="certifications" />
      <LearningJourney id="learning" />
      <Contact id="contact" />
    </div>
  );
}
