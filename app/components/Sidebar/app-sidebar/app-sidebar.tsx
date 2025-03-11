"use client"

import * as React from "react"

import {
  BookOpen,
  Bot,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "../nav-main"
import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Aim",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Overview",
      url: "#",
      icon: Bot,
    },
    {
      title: "Recap",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Pretest",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Bubble Sort",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Optimized bubble sort",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Code Assessment",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Analysis",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Post Test",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Further References",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  )
}
