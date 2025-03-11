import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

const Chemical = () => {
    const experiments = [
        {
          image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
          title: "Heat Exchanger Efficiency",
          description: "Analyzes the efficiency of heat exchangers by evaluating heat transfer rates.",
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
          title: "Batch Reactor Kinetics",
          description: "Studies reaction kinetics in a batch reactor to determine reaction rates and order.",
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
          title: "Distillation Column Experiment",
          description: "Examines the separation of liquid mixtures using fractional distillation techniques.",
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
          title: "Fluid Flow in Pipes",
          description: "Measures pressure drop and velocity profiles in different pipe configurations.",
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
          title: "Adsorption Isotherms",
          description: "Determines the adsorption capacity of solids by analyzing equilibrium isotherms.",
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
          title: "Liquid-Liquid Extraction",
          description: "Investigates the separation of solutes between two immiscible liquid phases.",
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
          title: "Catalyst Activity Test",
          description: "Evaluates the efficiency of catalysts in speeding up chemical reactions.",
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
          title: "Membrane Separation Process",
          description: "Explores the effectiveness of membranes in filtering different substances.",
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
          title: "Polymerization Reaction",
          description: "Studies the formation of polymers by observing different polymerization techniques.",
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
          title: "Crystallization Process",
          description: "Examines the formation of solid crystals from a liquid solution.",
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
        <h1 className="text-4xl font-semibold">Chemical Engineering</h1>
        <p className="text-muted-foreground">
          Focuses on chemical processes and industrial production.
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

export default Chemical;
