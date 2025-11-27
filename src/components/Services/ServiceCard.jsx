import { motion } from "framer-motion";
import { services } from "../../data/services";



export default function ServiceCard() {
  return (
    <section className="relative py-14 text-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="relative ml-6">
          {/* Animated pulse on the line */}
          <div className="absolute left-[-9px] top-0 h-full w-[3px] overflow-hidden">
            <div className="h-full w-full animate-pulse bg-mainGold blur-sm"></div>
          </div>

          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative mb-20 pl-10"
            >
              {/* Dot */}
              <div className="absolute left-[-15px] top-0 w-4 h-4 bg-mainGold rounded-full shadow-[0_0_20px_#C5A363]"></div>

              {/* Card */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:bg-white/10 transition">
                <div className="text-[#C5A363]/20 text-6xl font-extrabold absolute -top-6 right-4 select-none">
                  {index + 1}
                </div>

                <h3 className="heading font-semibold text-lightColor mb-2 z-10 relative">
                  {item.title}
                </h3>
                <p className="text-gray-300 paragraph z-10 relative">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
