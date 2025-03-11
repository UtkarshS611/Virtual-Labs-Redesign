import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Heart, Star } from "lucide-react";
import Link from "next/link";

const CSE = () => {
  const experiments = [
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Bubble Sort Algorithm",
      description:
        "Demonstrates the working of the Bubble Sort algorithm by repeatedly swapping adjacent elements until sorted.",
      startButton: <Button className="w-full">
        <Link href={"/experiments/cse/bubbleSort"} className="w-full h-full">Start</Link>
      </Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.5",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Dijkstra’s Shortest Path Algorithm",
      description:
        "Explores how Dijkstra's algorithm finds the shortest path between nodes in a graph.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.7",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Memory Management in OS",
      description:
        "Analyzes memory allocation techniques like paging and segmentation in operating systems.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.6",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Database Normalization",
      description:
        "Explains how normalization reduces data redundancy and improves database efficiency.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.8",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "TCP/IP Network Communication",
      description:
        "Simulates data transmission over the TCP/IP model and packet routing in networks.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.9",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Compiler Design - Lexical Analysis",
      description:
        "Explains the role of lexical analysis in converting high-level language into tokens.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.7",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Artificial Intelligence - A* Algorithm",
      description:
        "Simulates the A* algorithm, a powerful pathfinding technique in AI applications.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.9",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Cybersecurity - RSA Encryption",
      description:
        "Demonstrates how RSA encryption secures data using public and private keys.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.8",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Machine Learning - Linear Regression",
      description:
        "Explores how linear regression predicts continuous values based on input features.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.9",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Operating Systems - Process Scheduling",
      description:
        "Explores scheduling algorithms like FCFS, SJF, and Round Robin in process management.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.6",
    },
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="sm:text-start text-center pb-8">
        <h1 className="text-4xl font-semibold">
          Computer Science and Engineering
        </h1>
        <p className="text-muted-foreground">
          Explore experiments in computer networks, digital systems, and more.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center md:gap-10">
        {experiments.map((experiment, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-xl w-full max-w-xs border p-2 shadow cursor-pointer transition-all duration-200"
          >
            <Image
              width={400}
              height={400}
              src={experiment.image}
              alt={experiment.title}
              className="aspect-video w-full rounded-md border border-dashed object-cover"
            />
            <div className="py-4 px-1 flex items-center justify-between">
              <h3 className="text-xl font-semibold">{experiment.title}</h3>
              <span className="text-muted-foreground flex items-center gap-1 bg-primary/10 p-1 rounded-sm">
                <Star className="size-5 fill-primary text-primary" />
                <p>{experiment.rating}</p>
              </span>
            </div>
            <div className="px-1 pb-4 text-muted-foreground">
              {experiment.description}
            </div>
            <div className="flex gap-2 flex-col">
              {experiment.startButton}
              {experiment.addToFavouritesButton}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CSE;
