import React from "react";

import { Home } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const links = [
    {
      title: "Aim",
      icon: <Home size={20}/>,
    },
  ];

  return (
    <aside
      className={clsx(
        "h-screen transition-all duration-300 p-2 absolute left-0 rounded-lg border bg-sidebar text-sidebar-foreground",
        isCollapsed ? "w-12" : "w-60"
      )}
    >
      {links.map((link, index) => (
        <Link href={"/experiments/cse/bubbleSort/aim"} key={index} className="flex rounded-sm py-1 px-2 items-center space-x-3">
          {link.icon}
          {!isCollapsed && (
            <span>{link.title}</span>
          )}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
