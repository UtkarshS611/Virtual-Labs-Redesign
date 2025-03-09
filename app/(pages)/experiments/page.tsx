import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Heart, Star } from "lucide-react";

const Experiments = () => {
  const experiments = [
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Bubble Sort",
      description:
        "Bubble Sort repeatedly swaps adjacent elements until the list is sorted.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
    },
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="sm:text-start text-center pb-8">
        <h1 className="text-4xl font-semibold">Experiments</h1>
        <p className="text-muted-foreground">
          Explore the wide range of experiments and start learning.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center md:gap-10">
        {experiments.map((experiment, index) => (
          <div
            key={index}
            className="rounded-xl w-full max-w-xs border p-2 shadow cursor-pointer transition-all duration-200"
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
                <p>3.0</p>
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

export default Experiments;
