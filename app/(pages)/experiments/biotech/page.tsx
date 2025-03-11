import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Heart, Star } from "lucide-react";

const Biotech = () => {
  const experiments = [
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "DNA Extraction from Plant Cells",
      description:
        "Demonstrates how to extract DNA from plant cells using simple biochemical techniques.",
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
      title: "Bacterial Culture and Staining",
      description:
        "Explores the process of bacterial culture, Gram staining, and identifying microbial colonies.",
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
      title: "Polymerase Chain Reaction (PCR)",
      description:
        "Amplifies DNA sequences using PCR technology for genetic analysis and disease detection.",
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
      title: "Enzyme Kinetics",
      description:
        "Studies the effect of substrate concentration on enzyme activity and reaction rates.",
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
      title: "Fermentation Process",
      description:
        "Examines the microbial fermentation process used in food, biofuels, and pharmaceutical industries.",
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
      title: "Gel Electrophoresis",
      description:
        "Separates DNA, RNA, or proteins based on molecular weight using an electric field.",
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
      title: "Protein Purification Techniques",
      description:
        "Explores chromatography and other techniques to isolate and purify proteins from mixtures.",
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
      title: "Genetic Transformation",
      description:
        "Introduces foreign DNA into bacterial or plant cells using genetic engineering techniques.",
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
      title: "ELISA Test for Disease Detection",
      description:
        "Uses enzyme-linked immunosorbent assay (ELISA) to detect antigens or antibodies in samples.",
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
      title: "Tissue Culture Techniques",
      description:
        "Demonstrates plant tissue culture methods for growing cells under sterile conditions.",
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
        <h1 className="text-4xl font-semibold">Biotechnology</h1>
        <p className="text-muted-foreground">
          Applies biology to technology and medicine.
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

export default Biotech;
