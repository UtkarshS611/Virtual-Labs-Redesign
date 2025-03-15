"use client";

import Sidebar from "@/app/components/Sidebar/Sidebar";
import { Columns2, Home } from "lucide-react";
import React, { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {

  const [isCollapsed, setIsCollapsed] = useState(false);

  const sidebarCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section className="relative min-h-screen transition-all duration-300">
      <Sidebar isCollapsed={isCollapsed} />
      <section
        className={`p-2 ${
          isCollapsed ? "ml-16" : "ml-60"
        } rounded-lg h-screen overflow-y-scroll`}
      >
        <Columns2
          size={20}
          onClick={sidebarCollapse}
          className="cursor-pointer"
        />
        {children}
      </section>
    </section>
  );
};

export default Layout;
