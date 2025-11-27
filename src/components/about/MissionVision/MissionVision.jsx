import { motion } from "framer-motion";
import FallingStars from "../../shared/FallingStars/FallingStars";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

export default function MissionVisionSection() {
  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section
      className="w-full py-10 md:py-24 bg-mainColor text-white relative overflow-hidden"
      style={{
        backgroundImage: "url(/home/black.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "10%",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 space-y-24 relative z-20">
        <motion.div
          variants={card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-mainGold tracking-wide">
            <SectionHeader firstWord="MISSION" />
          </h2>

          <p className="text-gray-300 leading-relaxed max-w-[46rem]">
            To acquire, develop, and enhance properties that define modern
            living and working — uniting creativity, sustainability, and
            performance under one architectural vision.
          </p>
        </motion.div>

        <motion.div
          variants={card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-mainGold tracking-wide">
            <SectionHeader firstWord="VISION" />
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-[46rem]">
            To build a global portfolio of culturally significant, design-led,
            and high-performing properties that reflect Mosaic’s belief in
            architecture as a living investment.
          </p>
        </motion.div>
        <FallingStars />
      </div>
    </section>
  );
}
