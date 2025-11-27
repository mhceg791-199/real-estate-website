import FallingStars from "../../shared/FallingStars/FallingStars";
import DataCardsSlider from "./DataCardsSlider";
import ImageSlider from "./ImageSlider";

function GlobalDataDisplay() {
  return (
    <section
      className="text-white py-8 relative overflow-hidden font-mono bg-[#222323]"
      style={{
        backgroundImage: "url(/home/black.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "10%",
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className="space-y-10 lg:pr-12">
            <div className="space-y-4">
              <h2 className="heading font-bold mb-6 leading-tight">
                <span className="text-mainGold">Dorchester</span> Administrative Tower.
              </h2>

              <p className="text-gray-300 mb-8 md:max-w-[450px] paragraph leading-relaxed">
               Our debut acquisition — the 11-storey Dorchester Administrative Tower in downtown Calgary — reflects our commitment to transforming distinctive buildings into modern, sustainable landmarks.
              </p>
            </div>
            <FallingStars />
            <FallingStars />
            {/* Slider instead of static cards */}
            <div>
              <h4 className="heading font-bold text-gray-200 mb-6">
                Quick Facts:
              </h4>

              <DataCardsSlider />
            </div>
          </div>

          {/* Right Side Visual */}
          <ImageSlider />
        </div>
      </div>
    </section>
  );
}

export default GlobalDataDisplay;
