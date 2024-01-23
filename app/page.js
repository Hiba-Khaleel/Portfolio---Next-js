import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AchievementsSection from "./Components/AchievmentsSections";
import AboutSection from "./Components/AboutSection";
import ProjectSection from "./Components/ProjectSection";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-20">
        <HeroSection />
        <h1>hej</h1>
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
