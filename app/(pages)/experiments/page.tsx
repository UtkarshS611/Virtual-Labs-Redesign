import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const branchs = () => {
  const branches = [
    {
      image: "/Fields/Mechanical.avif",
      title: "Mechanical Engineering",
      description:
        "Covers the design, manufacturing, and maintenance of mechanical systems, including automobiles, robotics, and energy systems.",
      ExploreButton: (
        <Button className="w-full">
          <Link href={"/experiments/mechanical"} className="w-full h-full">Explore</Link>
        </Button>
      ),
    },
    {
      image: "/Fields/Electronics.avif",
      title: "Electronics and Communication Engineering",
      description:
        "Focuses on electronic devices, communication systems, signal processing, and embedded systems for modern technology applications.",
      ExploreButton: (
        <Button className="w-full">
          <Link href={"/experiments/electronics"} className="w-full h-full">Explore</Link>
        </Button>
      ),
    },
    {
      image: "/Fields/Biotech.avif",
      title: "Biotechnology",
      description:
        "Combines biology and technology to develop medical advancements, genetic engineering, pharmaceuticals, and agricultural innovations.",
      ExploreButton: (
        <Button className="w-full">
          <Link href={"/experiments/biotech"} className="w-full h-full">Explore</Link>
        </Button>
      ),
    },
    {
      image: "/Fields/Chemical.avif",
      title: "Chemical Engineering",
      description:
        "Involves designing and optimizing chemical processes for industries like pharmaceuticals, petrochemicals, food processing, and energy production.",
      ExploreButton: (
        <Button className="w-full">
          <Link href={"/experiments/chemical"} className="w-full h-full">Explore</Link>
        </Button>
      ),
    },
    {
      image: "/Fields/Electrical.avif",
      title: "Electrical Engineering",
      description:
        "Deals with power generation, electrical circuits, renewable energy, automation, and control systems in modern industries.",
      ExploreButton: (
        <Button className="w-full">
          <Link href={"/experiments/electrical"} className="w-full h-full">Explore</Link>
        </Button>
      ),
    },
    {
      image: "/Fields/CSE.avif",
      title: "Computer Science and Engineering",
      description:
        "Focuses on computer networks, digital systems, software development, and artificial intelligence for modern technology applications.",
      ExploreButton: (
        <Button className="w-full">
          <Link href={"/experiments/cse"} className="w-full h-full">Explore</Link>
        </Button>
      ),
    },
  ];

  return (
    <section className="min-h-screen py-16">
      <div className="text-center pb-8 ">
        <h1 className="text-5xl font-semibold">Branches</h1>
        <p className="text-muted-foreground">
          Explore the wide range of branchs and start learning.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center md:gap-10">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="rounded-xl w-full max-w-md border p-2 shadow cursor-pointer transition-all duration-200 flex flex-col justify-between"
          >
            <Image
              width={400}
              height={400}
              src={branch.image}
              alt={branch.title}
              className="aspect-video w-full rounded-md border border-dashed object-cover"
            />
            <div className="py-4 px-1 flex items-center justify-between">
              <h3 className="text-xl font-semibold">{branch.title}</h3>
            </div>
            <div className="px-1 pb-4 text-muted-foreground">
              {branch.description}
            </div>
            <div className="bg-blue-200">{branch.ExploreButton}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default branchs;
