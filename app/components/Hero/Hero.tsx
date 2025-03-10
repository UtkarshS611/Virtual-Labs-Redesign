"use client";
import React, { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import HeroFloat from "./HeroFloat/HeroFloat";
import { ChevronRight } from "lucide-react";
import CustomBox from "@/components/ui/CustomBox";

const Hero: React.FC = () => {
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
    <section>
      <HeroFloat />
      <div className="py-32">
        <div className="container">
          <div className="mx-auto flex max-w-full flex-col items-center relative">
            <div className="items-center text-center content-center relative max-w-5xl">
              <h1 className="mb-8 text-4xl font-semibold text-pretty lg:text-7xl flex flex-col items-center gap-2">
                Explore, Experiment and 
                <CustomBox content={"Discover"}/>
              </h1>
              <p className="mx-auto text-muted-foreground lg:text-xl">
                The VLEAD Team at IIIT Hyderabad optimizes Virtual Labs by
                managing infrastructure, UI design, automation, security,
                analytics, content tools, and technology research, ensuring
                efficiency and a seamless learning experience.
              </p>
              <div className="mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row">
                <Button>
                  Start Experimenting
                  <ChevronRight className="ml-2 h-4" />
                </Button>
                <Button variant="ghost">
                  Watch Demo
                  <ChevronRight className="ml-2 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-black/10 dark:bg-white/10 rounded-lg p-2 mt-24 max-w-6xl mx-auto">
            <div className="relative dark:bg-black bg-gray-500 h-72 sm:h-[60vh] rounded-sm shadow-md text-center content-center group overflow-hidden">
              <video
                ref={videoRef}
                src="/HeroVideo/HeroVideo.mp4"
                muted
                controls={showControls}
                className="w-full h-full object-cover"
              ></video>
              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="absolute inset-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] items-center justify-center text-primary bg-black/40 w-16 h-16 rounded-full hidden group-hover:flex transition"
              >
                {isPlaying ? "⏸" : "▶"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
