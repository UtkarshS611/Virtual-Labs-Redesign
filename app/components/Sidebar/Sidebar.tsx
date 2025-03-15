import React from "react";

import Link from "next/link";

import {
  Home,
  FileText,
  RefreshCcw,
  CheckCircle,
  Settings,
  ListOrdered,
  Code,
  BarChart,
  ClipboardCheck,
  Book,
  MessageSquare,
} from "lucide-react";
import clsx from "clsx";

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const links = [
    {
      title: "Aim",
      url: "/experiments/cse/bubbleSort/aim",
      icon: <Home size={20} />,
    },
    {
      title: "Overview",
      url: "/experiments/cse/bubbleSort/overview",
      icon: <FileText size={20} />,
    },
    {
      title: "Recap",
      url: "/experiments/cse/bubbleSort/recap",
      icon: <RefreshCcw size={20} />,
    },
    {
      title: "Pretest",
      url: "/experiments/cse/bubbleSort/pretest",
      icon: <CheckCircle size={20} />,
    },
    {
      title: "Bubble Sort",
      url: "/experiments/cse/bubbleSort/sort",
      icon: <ListOrdered size={20} />,
    },
    {
      title: "Optimized Bubble Sort",
      url: "/experiments/cse/bubbleSort/optimizedSort",
      icon: <Settings size={20} />,
    },
    {
      title: "Code Assessment",
      url: "/experiments/cse/bubbleSort/codeAssessment",
      icon: <Code size={20} />,
    },
    {
      title: "Analysis",
      url: "/experiments/cse/bubbleSort/analysis",
      icon: <BarChart size={20} />,
    },
    {
      title: "Posttest",
      url: "/experiments/cse/bubbleSort/posttest",
      icon: <ClipboardCheck size={20} />,
    },
    {
      title: "Further Readings/References",
      url: "/experiments/cse/bubbleSort/references",
      icon: <Book size={20} />,
    },
    {
      title: "Feedback",
      url: "/experiments/cse/bubbleSort/feedback",
      icon: <MessageSquare size={20} />,
    },
  ];

  return (
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
  );
};

export default Sidebar;
