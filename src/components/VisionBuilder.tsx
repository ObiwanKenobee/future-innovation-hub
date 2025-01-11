import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

export const VisionBuilder = () => {
  const [vision, setVision] = useState("");
  const [theme, setTheme] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vision || !theme) {
      toast({
        title: "Please fill all fields",
        description: "Both vision and theme are required.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Thank you for your contribution!",
      description: "Your vision will help shape the future of finance.",
    });
    
    setVision("");
    setTheme("");
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
            Vision Builder
          </h2>
          <p className="text-center text-gray-300 mb-8">
            If you were BlackRock's innovation strategist, what would you create next?
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Select Theme
              </label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accent"
              >
                <option value="">Select a theme</option>
                <option value="ethical">Ethical Investing</option>
                <option value="ai">Artificial Intelligence</option>
                <option value="blockchain">Blockchain</option>
                <option value="sustainable">Sustainable Finance</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Vision
              </label>
              <textarea
                value={vision}
                onChange={(e) => setVision(e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg h-32 focus:ring-2 focus:ring-accent"
                placeholder="Share your innovative idea..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Submit Vision
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};