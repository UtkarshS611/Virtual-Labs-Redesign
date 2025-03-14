"use client";

import Sidebar from "@/app/components/Sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <section className="relative min-h-screen bg-blue-400 transition-all duration-300">
      <Sidebar isCollapsed={isCollapsed} />
      <section className={`p-2 ${isCollapsed? "ml-16" : "ml-60"}`}>
        {children}
        <Button onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? "Expand" : "Collapse"}
        </Button>
      </section>
    </section>
  );
};

export default layout;
