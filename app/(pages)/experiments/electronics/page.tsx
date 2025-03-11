import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Heart, Star } from "lucide-react";

const Electronics = () => {
  const experiments = [
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Amplitude Modulation and Demodulation",
      description:
        "Demonstrates the process of amplitude modulation and demodulation used in communication systems.",
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
      title: "Frequency Modulation and Demodulation",
      description:
        "Explores frequency modulation and demodulation techniques used in radio transmissions.",
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
      title: "Microprocessor and Microcontroller Programming",
      description:
        "Hands-on experience with microprocessors and microcontrollers to perform logic operations.",
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
      title: "Antenna Radiation Pattern Measurement",
      description:
        "Analyzes the radiation pattern of different types of antennas used in wireless communication.",
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
      title: "Digital Logic Design",
      description:
        "Implements combinational and sequential circuits using logic gates and flip-flops.",
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
      title: "Signal Sampling and Reconstruction",
      description:
        "Demonstrates the principles of signal sampling, aliasing, and reconstruction in digital systems.",
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
      title: "Optical Fiber Communication",
      description:
        "Examines light transmission through optical fibers and measures attenuation and dispersion.",
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
      title: "Phase-Locked Loop (PLL) Applications",
      description:
        "Explores the working and applications of Phase-Locked Loops in frequency synthesis and control.",
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
      title: "Wireless Sensor Networks",
      description:
        "Studies the working of wireless sensor nodes and their communication in IoT applications.",
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
      title: "Embedded Systems and IoT",
      description:
        "Develops an IoT-based embedded system using sensors and microcontrollers for automation.",
      startButton: <Button className="w-full">Start</Button>,
      addToFavouritesButton: (
        <Button className="w-full" variant={"outline"}>
          <Heart className="fill-primary text-primary size-5" />
          Add to favourites
        </Button>
      ),
      rating: "4.9",
    },
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="sm:text-start text-center pb-8">
        <h1 className="text-4xl font-semibold">
          Electronics and Communication Engineering
        </h1>
        <p className="text-muted-foreground">
          Deals with electronic circuits, communication, and signals.
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

export default Electronics;
