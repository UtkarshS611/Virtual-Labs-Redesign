import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Heart, Star } from "lucide-react";

const Electrical = () => {
  const experiments = [
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Ohm's Law Experiment",
      description: "Verifies Ohm's Law by analyzing the relationship between voltage, current, and resistance.",
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
      title: "RLC Circuit Analysis",
      description: "Examines the behavior of resistors, inductors, and capacitors in AC circuits.",
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
      title: "Transformer Efficiency Test",
      description: "Evaluates transformer efficiency by measuring input and output power under different loads.",
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
      title: "Diode Characteristics",
      description: "Studies the voltage-current characteristics of PN junction diodes under different conditions.",
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
      title: "Three-Phase Power Measurement",
      description: "Analyzes power distribution in a three-phase system using wattmeter readings.",
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
      title: "Operational Amplifier Applications",
      description: "Explores op-amp configurations like inverting, non-inverting, and differential amplifiers.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.4",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Speed Control of DC Motor",
      description: "Investigates methods for controlling the speed of a DC motor using voltage variation.",
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
      title: "Power Factor Improvement",
      description: "Demonstrates techniques to improve power factor and enhance electrical system efficiency.",
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
      title: "Microcontroller-Based LED Control",
      description: "Uses a microcontroller to control LED blinking sequences and implement logic functions.",
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
      title: "Wireless Power Transmission",
      description: "Demonstrates the principles of wireless power transfer using inductive coupling.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.6",
    }
  ]
  

  return (
    <section className="min-h-screen py-16">
      <div className="sm:text-start text-center pb-8">
        <h1 className="text-4xl font-semibold">Electrical Engineering</h1>
        <p className="text-muted-foreground">
          Studies electrical systems and power distribution.
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

export default Electrical;
