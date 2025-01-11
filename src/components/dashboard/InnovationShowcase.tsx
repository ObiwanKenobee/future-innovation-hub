import { motion } from "framer-motion";
import { Eye, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const innovations = [
  {
    name: "Digital Asset Integration",
    inspiration: "Silk Road Trade Networks",
    application: "Global Asset Tokenization",
  },
  {
    name: "Cultural AI",
    inspiration: "Ancient Philosophy",
    application: "Cross-Cultural Investment Strategies",
  },
  {
    name: "Universal Basic Asset",
    inspiration: "Commons System",
    application: "Fractional Ownership Platform",
  },
];

export const InnovationShowcase = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-display font-bold">Innovation Showcase</h2>
      
      <div className="glass-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4">Innovation Name</th>
              <th className="text-left p-4 hidden md:table-cell">Inspiration</th>
              <th className="text-left p-4 hidden lg:table-cell">Application</th>
              <th className="text-right p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {innovations.map((innovation, index) => (
              <motion.tr
                key={innovation.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-white/10 last:border-0"
              >
                <td className="p-4">{innovation.name}</td>
                <td className="p-4 hidden md:table-cell">{innovation.inspiration}</td>
                <td className="p-4 hidden lg:table-cell">{innovation.application}</td>
                <td className="p-4">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};