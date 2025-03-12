"use client";

import { AppSidebar } from "@/app/components/Sidebar/app-sidebar/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useRef, useState } from "react";

interface SidebarProps {
  BreadCrumbLink: string;
  BreadCrumbPage: string;
}

const SidebarMain: React.FC<SidebarProps> = ({
  BreadCrumbLink,
  BreadCrumbPage,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowControls(false); // Hide controls when paused
      } else {
        videoRef.current.play();
        setShowControls(true); // Show controls when playing
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">{BreadCrumbLink}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{BreadCrumbPage}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className="ml-4">
          <section className="space-y-10 h-[90vh] overflow-y-scroll">
            <div className="space-y-6">
              <div className="space-y2">
                <h1 className="text-3xl text-primary">Estimated Time</h1>
                <Separator />
              </div>
              <p>
                <span className="text-muted-foreground">30 minutes</span>
              </p>
            </div>
            <div>
              <div className="space-y-2">
                <h1 className="text-3xl text-primary">
                  Learning Objectives of the Experiment
                </h1>
                <Separator />
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <h2 className="text-xl m-4 text-black dark:text-white">
                  In this experiment, we will be able to do the following:
                </h2>
                <li>
                  Given an unsorted array of numbers, generate a sorted array of
                  numbers by applying Bubble Sort.
                </li>
                <li>
                  Optimise the Bubble Sort algorithm to achieve better
                  performance.
                </li>
                <li>
                  Demonstrate knowledge of time complexity of Bubble Sort by
                  counting the number of operations involved in each iteration.
                </li>
                <li>
                  Compare Bubble Sort with other sorting algorithms and realise
                  Bubble Sort as a stable comparison sorting algorithm.
                </li>
              </ul>
            </div>
            <section >
              <div className="bg-black/10 dark:bg-white/10 rounded-lg p-2 max-w-6xl mx-auto">
                <div className="relative dark:bg-black bg-gray-500 h-72 sm:h-[60vh] rounded-sm shadow-md text-center content-center group overflow-hidden">
                  <video
                    ref={videoRef}
                    src="/HeroVideo/HeroVideo.mp4"
                    muted
                    controls={showControls}
                    className="w-full h-full object-cover"
                  ></video>
                  <button
                    onClick={togglePlayPause}
                    className="absolute inset-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] items-center justify-center text-primary bg-black/40 w-16 h-16 rounded-full hidden group-hover:flex transition"
                  >
                    {isPlaying ? "⏸" : "▶"}
                  </button>
                </div>
              </div>
              <div className="space-y-6 mt-6">
                <div className="space-y2">
                  <h1 className="text-3xl text-primary">
                    Prerequisites of the experiment
                  </h1>
                  <Separator />
                </div>
                <p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <h2 className="text-xl m-4 text-black dark:text-white">
                      In this experiment, we will be able to do the following:
                    </h2>
                    <li>The Notion of sorting.</li>
                    <li>The Notion of space and time complexity.</li>
                  </ul>
                </p>
              </div>
              <div className="space-y-6 mt-6">
                <div className="space-y2">
                  <h1 className="text-3xl text-primary">
                    Overview of the experiment
                  </h1>
                  <Separator />
                </div>
                <p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      The aim of this experiment is to understand the Bubble
                      Sort algorithm, its time and space complexity, and how it
                      compares against other sorting algorithms.
                    </li>
                    <li>
                      The experiment features a series of modules with video
                      lectures, interactive demonstrations, simulations,
                      hands-on practice exercises and quizzes.
                    </li>
                  </ul>
                </p>
              </div>
            </section>
          </section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default SidebarMain;
