import SectionHeader from "../SectionHeaders/SectionHeader";
import CardsSlider from "./CardsSlider";

const OverviewSection = () => {
  return (
    <section
      className="relative w-full py-20 text-white bg-[#222323]"
      style={{
        backgroundImage: "url(/home/black.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "10%",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="heading font-bold mb-6">
          <SectionHeader firstWord="Overview" />
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Mosaic Real Estate is the real estate arm of Mosaic Holding
          Corporation (MHC). We acquire, develop, and reposition distinctive
          properties across North America, Europe, and the Middle East — from
          landmark towers to high-potential sites.
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Empowered by MHC’s integrated ecosystem of architecture, engineering,
          and investment subsidiaries, we turn strategic real estate
          opportunities into high-value, design-driven destinations.
        </p>
        <CardsSlider/>
      </div>
    </section>
  );
};

export default OverviewSection;
