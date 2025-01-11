import { motion } from "framer-motion";
import { Calendar, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardWidgets = () => {
  return (
    <aside className="hidden lg:block w-64 min-h-[calc(100vh-4rem)] mt-16 border-l border-white/10 p-4">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <div className="glass-card p-4">
          <h3 className="text-sm font-semibold mb-2">Your Activity</h3>
          <p className="text-sm text-gray-300">
            You've explored 3 innovations today!
          </p>
        </div>

        <div className="glass-card p-4">
          <h3 className="text-sm font-semibold mb-2">Trending Insights</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-accent" />
              The Jubilee Principle
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Lightbulb className="w-4 h-4 text-accent" />
              Digital Asset Integration
            </li>
          </ul>
        </div>

        <div className="glass-card p-4">
          <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Explore Timeline
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Lightbulb className="mr-2 h-4 w-4" />
              Submit Vision
            </Button>
          </div>
        </div>
      </motion.div>
    </aside>
  );
};