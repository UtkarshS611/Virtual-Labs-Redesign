import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

const Mechanical = () => {
  const experiments = [
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Heat Transfer in Fins",
      description: "Examines how heat dissipates through extended surfaces (fins) under various conditions.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.2",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Tensile Test of Materials",
      description: "Determines material strength by applying tensile force until failure occurs.",
      startButton: <Button className="w-full">Start</Button>,
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
      title: "Gear Train Efficiency",
      description: "Studies the efficiency and mechanical advantage of different gear train configurations.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.0",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Rotating Shaft Vibration Analysis",
      description: "Measures vibration levels in rotating shafts to detect misalignment or imbalance.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "3.8",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Four-Bar Linkage Mechanism",
      description: "Examines motion transfer in a four-bar linkage and its applications in machinery.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.1",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Reynolds Experiment",
      description: "Demonstrates the transition between laminar and turbulent fluid flow.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "3.9",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Brake Performance Testing",
      description: "Analyzes the efficiency of braking systems under different loads and speeds.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.3",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Wind Tunnel Aerodynamics",
      description: "Studies airflow around models to optimize aerodynamic designs.",
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
      title: "Impact Test on Materials",
      description: "Measures a material’s toughness by testing its ability to absorb impact energy.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.0",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Boiler Efficiency Experiment",
      description: "Evaluates thermal efficiency by analyzing heat losses in a boiler system.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.2",
    }
  ]
  

  return (
    <section className="min-h-screen py-16">
      <div className="sm:text-start text-center pb-8">
        <h1 className="text-4xl font-semibold">Mechanical Engineering</h1>
        <p className="text-muted-foreground">
          Study of machines, manufacturing, and mechanics.
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

export default Mechanical;
