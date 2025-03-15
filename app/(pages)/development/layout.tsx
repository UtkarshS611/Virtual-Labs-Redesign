"use client";

import clsx from "clsx";
import {
  Workflow,
  Code,
  Server,
  FlaskConical,
  Bug,
  Wrench,
  Lightbulb,
  Columns2,
} from "lucide-react";

import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const sidebarCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const links = [
    {
      title: "Onboarding Process",
      url: "/development/onboarding",
      icon: <Workflow size={20} />,
    },
    {
      title: "Development Process",
      url: "/development/development",
      icon: <Code size={20} />,
    },
    {
      title: "Hosting Process",
      url: "/development/hosting",
      icon: <Server size={20} />,
    },
    {
      title: "Lab & Experiment Lifecycle",
      url: "/development/lifecycle",
      icon: <FlaskConical size={20} />,
    },
    {
      title: "Bug Management Process",
      url: "/development/bug-management",
      icon: <Bug size={20} />,
    },
    {
      title: "Troubleshooting Guide",
      url: "/development/troubleshooting",
      icon: <Wrench size={20} />,
    },
    {
      title: "Best Practices",
      url: "/development/best-practices",
      icon: <Lightbulb size={20} />,
    },
  ];

  return (
    <section className="min-h-screen relative">
      <aside
        className={clsx(
          "h-screen transition-all duration-300 p-2 absolute left-0 rounded-lg border bg-sidebar text-sidebar-foreground",
          isCollapsed ? "w-12" : "w-60"
        )}
      >
        <div className="space-y-2">
          {links.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              className="flex rounded-sm py-1 px-2 items-center space-x-3 "
            >
              {link.icon}
              {!isCollapsed && <span>{link.title}</span>}
            </Link>
          ))}
        </div>
      </aside>
      <div className={`${isCollapsed ? "ml-12" : "ml-60"}`}>
        <div className="h-screen overflow-y-scroll p-2">
          <Columns2
            size={20}
            onClick={sidebarCollapse}
            className="cursor-pointer"
          />
          {children}
        </div>
      </div>
    </section>
  );
};

export default Layout;
