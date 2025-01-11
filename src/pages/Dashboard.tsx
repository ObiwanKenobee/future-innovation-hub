import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Timeline } from "@/components/Timeline";
import { VisionBuilder } from "@/components/VisionBuilder";

const Dashboard = () => {
  const [activePanel, setActivePanel] = useState<"timeline" | "vision" | "insights" | "showcase">("timeline");

  const renderPanel = () => {
    switch (activePanel) {
      case "timeline":
        return <Timeline />;
      case "vision":
        return <VisionBuilder />;
      case "insights":
        return <div className="p-6">Insights Panel (Coming Soon)</div>;
      case "showcase":
        return <div className="p-6">Innovation Showcase (Coming Soon)</div>;
      default:
        return <Timeline />;
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar activePanel={activePanel} setActivePanel={setActivePanel} />
        <main className="flex-1 p-6">{renderPanel()}</main>
      </div>
    </div>
  );
};

export default Dashboard;