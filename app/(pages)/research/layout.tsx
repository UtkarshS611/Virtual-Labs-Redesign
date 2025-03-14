"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import {
  BookCheck,
  ChevronRight,
  Columns2,
  LayoutList,
  ServerCrash,
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
      title: "Open Problems",
      url: "/research/problems",
      icon: <ServerCrash size={20} />,
    },
    {
      title: "Publications",
      url: "/research/publications",
      icon: <BookCheck size={20} />,
    },
    {
      title: "Talks",
      url: "/research/talks",
      icon: <LayoutList size={20} />,
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
