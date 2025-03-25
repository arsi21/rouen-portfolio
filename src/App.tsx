import { Navbar } from "./components/navbar";
import { Separator } from "@/components/ui/separator";

import { ThemeProvider } from "@/components/theme-provider";
import HeroSection from "./components/hero-section";
import TechstackSection from "./components/techstack-section";
import ExperienceSection from "./components/experience-section";
import ProjectSection from "./components/project-section";
import FooterSection from "./components/footer-section";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="mx-auto px-5 max-w-screen-xl">
          <Navbar />
          <Separator />

          <div id="home-section">
            <HeroSection />
          </div>

          <div id="techstack-section">
            <TechstackSection />
          </div>

          <div id="experience-section">
            <ExperienceSection />
          </div>

          <div id="project-section">
            <ProjectSection />
          </div>

          <FooterSection />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
