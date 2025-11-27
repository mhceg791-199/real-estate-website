import { motion } from "framer-motion";

export default function InvestmentApproach() {
  const items = [
    "Selective Acquisitions of high-value or strategic assets.",
    "Joint Developments with developers and investors aligned with our creative philosophy.",
    "Design Integration through MHC’s A&E ecosystem to optimize quality and cost.",
    "Adaptive Reuse to breathe new life into existing landmarks.",
    "Community Activation through cultural, artistic, and business programming.",
    "Sustainable Growth focused on appreciation, efficiency, and social value.",
  ];

  return (
    <section className="relative w-full py-14 text-white overflow-hidden">

      {/* خلفية فخمة */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#0f1b2d] via-black to-[#001a1a]" />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-mainColor blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-cyan-400/10 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* -------- Left Text Section -------- */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Investment & Development <span className="text-mainGold">Approach</span>
          </h2>

          <p className="text-lightColor paragraph leading-relaxed">
            At Mosaic Real Estate, investment is not a transaction — it’s a transformation.
            We pursue opportunities that combine financial resilience with cultural resonance,
            ensuring each asset strengthens both portfolio performance and brand identity.
          </p>
        </motion.div>

        {/* -------- Right Cards Section -------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {items.map((text, i) => (
            <motion.div
              key={i}
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 transition-all group cursor-default"
            >
              <div className="flex items-start gap-4">
                <span className="w-3 h-3 mt-1 bg-mainGold rounded-full shadow-[0_0_15px_#C5A363]"></span>
                <p className="text-lightColor text-base group-hover:text-white transition">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
