import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Data for the main stats
const displayData = [
  { value: "11 floors / 101,393 sq ft" },
  { value: "Premier administrative tower" },
  { value: "Centrally located in Calgary’s urban core" },
  { value: "Repositioned as a cultural and commercial hub" },
];

export default function DataCardsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % displayData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const item = displayData[index];

  return (
    <div className="relative h-[120px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }} // يدخل من تحت
          animate={{ y: 0, opacity: 1 }} // في النص
          exit={{ y: -50, opacity: 0 }} // يطلع فوق
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute w-full"
        >
          <div className=" p-4 bg-gray-800/50 border-l-4 border-mainGold/80 rounded-lg">
            {/* <div className="text-xl md:text-2xl font-semibold uppercase tracking-wider text-gray-400">
              {item.label}
            </div> */}
            <div className={`text-base text-lightColor animate-digital-glitch`}>
              {item.value}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
