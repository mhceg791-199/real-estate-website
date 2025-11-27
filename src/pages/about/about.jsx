import MissionVisionSection from "../../components/about/MissionVision/MissionVision";
import OurValues from "../../components/about/OurValues/OurValues";
import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";
import InvestmentApproach from "../../components/about/InvestmentApproach/InvestmentApproach";

function About() {
  const paragraphs = [
    "Mosaic Real Estate was established in 2025 as the real estate arm of Mosaic Holding Corporation (MHC). The name “Mosaic” reflects our philosophy: distinct pieces — architecture, engineering, capital, community, and culture — coming together to create something stronger, richer, and more meaningful. These pieces are represented through MHC’s integrated subsidiaries, each one contributing its expertise to amplify value.",
    "Operating across North America, Europe, and the Middle East, we specialize in acquiring and developing properties that combine financial strength with artistic and architectural ambition.",
    "Our first acquisition — the Dorchester Administrative Tower in Calgary — set the tone for our approach: take a building with history and potential, then elevate it through design, sustainability, and experience.",
  ];

  return (
    <>
      <FirstSectionByVideo title="About US" />
      <DescriptionAbout
        id="about-real-state"
        firstWord="Our "
        secondWord="Story"
        paragraphs={paragraphs}
        particleColors={["#e0d8c2", "#e0d8c2"]}
        height="h-[85vh] md:h-[65vh]"
      />
      <MissionVisionSection />
      <OurValues />
      <InvestmentApproach/>
    </>
  );
}

export default About;
