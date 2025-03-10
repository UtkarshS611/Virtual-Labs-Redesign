import CustomBox from "@/components/ui/CustomBox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Activities: React.FC = () => {
  const experiments = [
    {
      image: "/Activities/Development.avif",
      title: "Development & Hosting",
      description:
        "Providing reliable hosting, seamless development, and scalable solutions for a robust online presence.",
      Button: (
        <Button className="w-full">
          <Link href={"/development"}>Learn More</Link>
        </Button>
      ),
      rating: "3.0",
    },
    {
      image: "/Activities/Outreach.avif",
      title: "Outreach",
      description:
        "Expanding access to Virtual Labs through awareness, training, and collaboration for enhanced learning.",
      Button: (
        <Button className="w-full">
          <Link href={"/outreach"}>Learn More</Link>
        </Button>
      ),
      rating: "3.0",
    },
    {
      image: "/Activities/Research.avif",
      title: "Research",
      description:
        "Advancing innovation through research, exploring new technologies, and enhancing virtual lab experiences.",
      Button: (
        <Button className="w-full">
          <Link href={"/research"}>Learn More</Link>
        </Button>
      ),
      rating: "3.0",
    },
  ];
  return (
    <section>
      <div className="container flex flex-col items-center gap-16">
        <div className="text-center">
          <h2 className="mx-auto mb-6 text-pretty text-3xl font-semibold md:text-4xl lg:max-w-3xl flex justify-center">
            <CustomBox content={"Our Activities"} />
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            Explore our activities: Development & Hosting, Outreach, and
            Research—driving innovation and impact.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center md:gap-10">
          {experiments.map((experiment, index) => (
            <div
              key={index}
              className="rounded-xl w-full max-w-md border p-2 shadow cursor-pointer transition-all duration-200"
            >
              <Image
                width={400}
                height={400}
                src={experiment.image}
                alt={experiment.title}
                className="aspect-video w-full rounded-md border border-dashed object-cover"
              />
              <div className="py-3 px-1">
                <h3 className="text-2xl font-semibold">{experiment.title}</h3>
              </div>
              <div className="px-1 pb-4 text-muted-foreground">
                {experiment.description}
              </div>
              <div className="flex gap-2 flex-col">{experiment.Button}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
