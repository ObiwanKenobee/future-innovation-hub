import { Calendar, Home, Lightbulb, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  activePanel: string;
  setActivePanel: (panel: "timeline" | "vision" | "insights" | "showcase") => void;
}

export const DashboardSidebar = ({
  activePanel,
  setActivePanel,
}: DashboardSidebarProps) => {
  const menuItems = [
    {
      icon: Calendar,
      label: "Timeline",
      value: "timeline",
    },
    {
      icon: Lightbulb,
      label: "Vision Builder",
      value: "vision",
    },
    {
      icon: BookOpen,
      label: "Insights",
      value: "insights",
    },
  ];

  return (
    <aside className="w-64 min-h-[calc(100vh-4rem)] mt-16 border-r border-white/10 bg-primary">
      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setActivePanel(item.value as any)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors",
                activePanel === item.value
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-white/10"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};