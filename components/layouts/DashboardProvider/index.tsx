import React from "react";
import Headerdashboard from "../Dashboard-Header";
import SidebarDashboard from "../Dashboard-Sidebar";

export default function DashboardProvider({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="h-screen overflow-hidden">
      <Headerdashboard />
      <div className="flex">
        <SidebarDashboard />
        <div className="px-10 py-5 overflow-x-auto bg-slate-50">{children}</div>
      </div>
    </div>
  );
}
