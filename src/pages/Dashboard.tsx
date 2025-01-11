import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Timeline } from "@/components/Timeline";
import { VisionBuilder } from "@/components/VisionBuilder";
import { InsightsPanel } from "@/components/dashboard/InsightsPanel";
import { InnovationShowcase } from "@/components/dashboard/InnovationShowcase";
import { DashboardWidgets } from "@/components/dashboard/DashboardWidgets";

type PanelType = "timeline" | "vision" | "insights" | "showcase" | "overview";

const Dashboard = () => {
  const [activePanel, setActivePanel] = useState<PanelType>("overview");

  const renderPanel = () => {
    switch (activePanel) {
      case "timeline":
        return <Timeline />;
      case "vision":
        return <VisionBuilder />;
      case "insights":
        return <InsightsPanel />;
      case "showcase":
        return <InnovationShowcase />;
      default:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-display font-bold mb-4">Overview</h2>
            <p className="text-gray-300">
              Welcome to Innovate BlackRock's dashboard. Explore historical innovations
              and contribute to the future of finance.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar activePanel={activePanel} setActivePanel={setActivePanel} />
        <main className="flex-1 p-6 mt-16">{renderPanel()}</main>
        <DashboardWidgets />
      </div>
    </div>
  );
};

export default Dashboard;