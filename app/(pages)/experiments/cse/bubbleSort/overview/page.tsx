"use client";

import { Separator } from "@radix-ui/react-dropdown-menu";
import React, { useRef, useState } from "react";

const Overview = () => {
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
    <section className="py-16">
      <div className="bg-black/10 dark:bg-white/10 rounded-lg p-2 max-w-6xl mx-auto">
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
      <div>
        <div className="text-primary text-4xl py-3 my-3">
          <h2 className="">Prerequisites of the Experiment</h2>
          <Separator />
        </div>
        <div className="text-muted-foreground">
          <h3 className="text-lg my-3">
            This experiment requires you to have basic knowledge about :
          </h3>
          <ul className="list-disc list-inside space-y-3">
            <li>The Notion of Sorting.</li>
            <li>Notion of Time and Space complexity</li>
            <li>And above all, a curiosity to learn and explore!</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-primary text-4xl py-3 my-3">
          <h2 className="">Overview of the Experiment</h2>
          <Separator />
        </div>
        <div className="text-muted-foreground">
          <ul className="list-disc list-inside space-y-3">
            <li>
              The aim of this experiment is to understand the Bubble Sort
              algorithm, its time and space complexity, and how it compares
              against other sorting algorithms.
            </li>
            <li>
              The experiment features a series of modules with video lectures,
              interactive demonstrations, simulations, hands-on practice
              exercises and quizzes for self analysis.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Overview;
