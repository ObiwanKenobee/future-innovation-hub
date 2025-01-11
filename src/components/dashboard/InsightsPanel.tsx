import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const insights = [
  {
    title: "The Jubilee Principle",
    source: "Religious Texts",
    era: "Ancient",
    focusArea: "Ethics",
    description: "Application in modern debt forgiveness frameworks",
  },
  {
    title: "Islamic Banking",
    source: "Religious Texts",
    era: "Medieval",
    focusArea: "Ethics",
    description: "Ethical lending and investment practices",
  },
  {
    title: "Renaissance Trading",
    source: "History",
    era: "Renaissance",
    focusArea: "Risk Management",
    description: "Early forms of portfolio diversification",
  },
];

export const InsightsPanel = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-display font-bold">Historical Insights</h2>
        <div className="flex gap-2">
          <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-sm">
            <option>All Sources</option>
            <option>History</option>
            <option>Religion</option>
            <option>Philosophy</option>
          </select>
          <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-sm">
            <option>All Eras</option>
            <option>Ancient</option>
            <option>Medieval</option>
            <option>Modern</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-lg">{insight.title}</CardTitle>
                <div className="flex gap-2 text-xs">
                  <span className="bg-accent/20 text-accent px-2 py-1 rounded">
                    {insight.source}
                  </span>
                  <span className="bg-white/10 px-2 py-1 rounded">
                    {insight.era}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">{insight.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};