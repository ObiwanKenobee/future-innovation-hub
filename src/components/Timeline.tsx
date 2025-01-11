import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const timelineData = [
  {
    era: "Ancient Era",
    title: "Mesopotamian Accounting",
    description: "The birth of systematic financial record-keeping.",
  },
  {
    era: "Middle Ages",
    title: "Islamic Finance",
    description: "Ethical lending and early banking systems.",
  },
  {
    era: "Renaissance",
    title: "Double-Entry Bookkeeping",
    description: "Revolutionary accounting method still used today.",
  },
  {
    era: "Industrial Era",
    title: "Public Companies",
    description: "Birth of modern shareholding structures.",
  },
  {
    era: "Future",
    title: "AI & Blockchain",
    description: "Next generation of financial innovation.",
  },
];

export const Timeline = () => {
  const scrollTimeline = (direction: "left" | "right") => {
    const container = document.querySelector(".timeline-container");
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
          Innovation Timeline
        </h2>
        <div className="relative">
          <button
            onClick={() => scrollTimeline("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scrollTimeline("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="timeline-container">
            <div className="flex gap-6 px-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.era}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card min-w-[300px] p-6 cursor-pointer hover:bg-white/20 transition-colors"
                >
                  <span className="text-accent font-semibold">{item.era}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};