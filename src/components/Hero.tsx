import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-display font-bold mb-6"
      >
        From Ancient Innovations to Future Finance
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12"
      >
        Explore how BlackRock can harness historical and cultural insights to define the next era of wealth management.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors">
          Explore Timeline
        </button>
        <button className="px-8 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
          Share Vision
        </button>
      </motion.div>
    </section>
  );
};