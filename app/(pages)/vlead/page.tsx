import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Vlead = () => {
  const motivation = [
    {
      imgURL: "/Vlabs/Overview/Students.avif",
      title: "Students",
      description:
        "Gain hands-on practical experience and enhance their learning experience through interactive and remote experiments.",
    },
    {
      imgURL: "/Vlabs/Overview/Faculty.avif",
      title: "Faculty",
      description:
        "Support teaching methodologies with virtual experiments, enabling better understanding and practical demonstrations.",
    },
    {
      imgURL: "/Vlabs/Overview/SME.avif",
      title: "Subject Matter Experts",
      description:
        "Contribute expertise to develop high-quality virtual experiments and enhance digital learning resources.",
    },
    {
      imgURL: "/Vlabs/Overview/Developers.avif",
      title: "Developers",
      description:
        "Create, maintain, and enhance virtual lab platforms, ensuring seamless integration and an interactive user experience.",
    },
    {
      imgURL: "/Vlabs/Overview/NodalCentre.avif",
      title: "Nodal Centre",
      description:
        "Act as a hub for collaboration, training, and dissemination of Virtual Labs in various institutions.",
    },
    {
      imgURL: "/Vlabs/Overview/Community.avif",
      title: "Community",
      description:
        "Engage with a network of educators, students, and developers to drive innovation in virtual learning.",
    },
    {
      imgURL: "/Vlabs/Overview/ParticipatingInstitutes.avif",
      title: "Participating Institutes",
      description:
        "Integrate Virtual Labs into their curriculum to provide students with hands-on digital experimentation opportunities.",
    },
    {
      imgURL: "/Vlabs/Overview/Interns.avif",
      title: "Interns",
      description:
        "Gain valuable experience by contributing to the development and expansion of Virtual Labs.",
    },
    {
      imgURL: "/Vlabs/Overview/MinistryOfEducation.avif",
      title: "Ministry of Education",
      description:
        "Promote the adoption of Virtual Labs as a part of digital learning initiatives for nationwide impact.",
    },
    {
      imgURL: "/Vlabs/Overview/AccreditationBodies.avif",
      title: "Accreditation Bodies",
      description:
        "Evaluate and endorse Virtual Labs to ensure quality and compliance with educational standards.",
    },
    {
      imgURL: "/Vlabs/Overview/ServiceProviders.avif",
      title: "Service Providers",
      description:
        "Support infrastructure, hosting, and technical assistance for seamless Virtual Labs operations.",
    },
    {
      imgURL: "/Vlabs/Overview/UniversitiesAndResearchers.avif",
      title: "Universities and Researchers",
      description:
        "Utilize Virtual Labs for advanced research and experimentation, fostering innovation in scientific and technical fields.",
    },
  ];

  const initiatives = [
    {
      image: "/Fields/CSE.avif",
      title: "Computer Science and Engineering",
      description:
        "Focuses on computer networks, digital systems, software development, and artificial intelligence for modern technology applications.",
      ExploreButton: <Button className="w-full">Read More</Button>,
    },
    {
      image: "/Fields/Mechanical.avif",
      title: "Mechanical Engineering",
      description:
        "Covers the design, manufacturing, and maintenance of mechanical systems, including automobiles, robotics, and energy systems.",
      ExploreButton: <Button className="w-full">Read More</Button>,
    },
    {
      image: "/Fields/Electronics.avif",
      title: "Electronics and Communication Engineering",
      description:
        "Focuses on electronic devices, communication systems, signal processing, and embedded systems for modern technology applications.",
      ExploreButton: <Button className="w-full">Read More</Button>,
    },
    {
      image: "/Fields/Biotech.avif",
      title: "Biotechnology",
      description:
        "Combines biology and technology to develop medical advancements, genetic engineering, pharmaceuticals, and agricultural innovations.",
      ExploreButton: <Button className="w-full">Read More</Button>,
    },
  ];

  const timeline = [
    {
      image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
      title: "Dedicated Support",
      description:
        "Expanded operations to 5 new countries, reaching millions of new users.",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-5.svg",
      title: "Series B Funding",
      description:
        "Secured $50M in Series B funding to accelerate product development.",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-5.svg",
      title: "Product Launch",
      description: "Successfully launched our flagship product to market.",
    },
    {
      image: "https://shadcnblocks.com/images/block/placeholder-5.svg",
      title: "Company Founded",
      description: "Started with a vision to revolutionize the industry.",
    },
  ];

  const members = [
    {
      name: "Méschac Irung",
      role: "Creator",
      avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
    },
    {
      name: "Théo Balick",
      role: "Frontend Dev",
      avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
    },
    {
      name: "Glodie Lukose",
      role: "Frontend Dev",
      avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
    },
    {
      name: "Bernard Ngandu",
      role: "Backend Dev",
      avatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
    },
  ];

  return (
    <section className="min-h-screen py-24">
      <Tabs defaultValue="Motivation">
        <div className="flex flex-col lg:gap-6 gap-3 items-center justify-between py-4">
          <h1 className="text-2xl font-semibold md:text-5xl text-center">
            Virtual Labs Engineering Architecture and Design
          </h1>
          <TabsList className="flex flex-col lg:flex-row gap-2 lg:gap-0 lg:w-fit w-full flex-wrap">
            <TabsTrigger value="Motivation">Motivation</TabsTrigger>
            <TabsTrigger value="Goals and Philosophy">Initiative</TabsTrigger>
            <TabsTrigger value="Timeline">Timeline</TabsTrigger>
            <TabsTrigger value="Current Team">Current Team</TabsTrigger>
            <TabsTrigger value="Past Team">Past Team</TabsTrigger>
            <TabsTrigger value="Testimonials">Testimonials</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="Motivation">
          <section>
            <div className="container">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-start text-center">
                  Our Purpose
                </h1>
                <Separator />
              </div>
              <p className="text-muted-foreground lg:text-start text-center my-6">
                The Virtual Labs Engineering, Architecture, and Design (VLEAD)
                Team at IIIT Hyderabad is a dedicated team responsible for
                overseeing the central platform engineering operations,
                engineering, and development coordination. The team's key
                responsibilities include:
              </p>
              {/* Gallery section */}
              <div className="flex flex-wrap gap-2 justify-center items-center my-6">
                {motivation.map((item, index) => (
                  <div
                    key={index}
                    className="overflow-hidden group h-64 rounded-lg border-[2px] border-primary max-w-md w-full relative"
                  >
                    <Image
                      src={item.imgURL}
                      height={500}
                      width={600}
                      alt="Student"
                    />
                    <div className="transition-all duration-200 overlay group-hover:top-[50%] absolute bg-gray-200 dark:bg-white/50 h-full w-full top-[90%] left-0 text-black px-2">
                      <span className="font-medium text-lg">{item.title}</span>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="Goals and Philosophy">
          <section className="min-h-screen py-16">
            <div className="text-center pb-8 ">
              <h1 className="text-5xl font-semibold">Our Initiatives</h1>
            </div>
            <div className="flex flex-wrap gap-6 justify-center md:gap-10">
              {initiatives.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl w-full max-w-lg border p-2 shadow cursor-pointer transition-all duration-200 flex flex-col justify-between"
                >
                  <Image
                    width={400}
                    height={400}
                    src={item.image}
                    alt={item.title}
                    className="aspect-video w-full rounded-md border border-dashed object-cover"
                  />
                  <div className="py-4 px-1 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <div className="px-1 pb-4 text-muted-foreground">
                    {item.description}
                  </div>
                  <div className="bg-blue-200">{item.ExploreButton}</div>
                </div>
              ))}
            </div>
          </section>
        </TabsContent>
        <TabsContent value="Timeline">
          <section className="py-32 flex justify-center">
            <div className="container max-w-6xl">
              <div className="relative grid gap-16 md:grid-cols-2">
                <div className="top-40 h-fit md:sticky">
                  <h2 className="mb-6 mt-4 text-4xl font-semibold md:text-5xl">
                    Timeline
                  </h2>
                  <p className="font-medium text-muted-foreground md:text-xl">
                    The journey of Virtual Labs from inception to where we are
                    now.
                  </p>
                </div>
                <div className="flex flex-col gap-12 md:gap-20">
                  {timeline.map((item, index) => (
                    <div key={index} className="rounded-xl border p-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="aspect-video w-full rounded-xl border border-dashed object-cover"
                      />
                      <div className="p-6">
                        <h3 className="mb-1 text-2xl font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="Current Team">
          <section className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
              <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl text-center">
                Past team
              </h2>

              <div>
                <h3 className="mb-6 text-lg font-medium text-primary">Leadership</h3>
                <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                  {members.map((member, index) => (
                    <div key={index}>
                      <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                        <img
                          className="aspect-square rounded-full object-cover"
                          src={member.avatar}
                          alt={member.name}
                          height="460"
                          width="460"
                          loading="lazy"
                        />
                      </div>
                      <span className="mt-2 block text-sm">{member.name}</span>
                      <span className="text-muted-foreground block text-xs">
                        {member.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-6 text-lg font-medium text-primary">Engineering</h3>
                <div
                  data-rounded="full"
                  className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4"
                >
                  {members.map((member, index) => (
                    <div key={index}>
                      <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                        <img
                          className="aspect-square rounded-full object-cover"
                          src={member.avatar}
                          alt={member.name}
                          height="460"
                          width="460"
                          loading="lazy"
                        />
                      </div>
                      <span className="mt-2 block text-sm">{member.name}</span>
                      <span className="text-muted-foreground block text-xs">
                        {member.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-6 text-lg font-medium text-primary">Marketing</h3>
                <div
                  data-rounded="full"
                  className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4"
                >
                  {members.map((member, index) => (
                    <div key={index}>
                      <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                        <img
                          className="aspect-square rounded-full object-cover"
                          src={member.avatar}
                          alt={member.name}
                          height="460"
                          width="460"
                          loading="lazy"
                        />
                      </div>
                      <span className="mt-2 block text-sm">{member.name}</span>
                      <span className="text-muted-foreground block text-xs">
                        {member.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="Past Team">
        <section className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
              <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl text-center">
                Past team
              </h2>

              <div>
                <h3 className="mb-6 text-lg font-medium text-primary">Leadership</h3>
                <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                  {members.map((member, index) => (
                    <div key={index}>
                      <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                        <img
                          className="aspect-square rounded-full object-cover"
                          src={member.avatar}
                          alt={member.name}
                          height="460"
                          width="460"
                          loading="lazy"
                        />
                      </div>
                      <span className="mt-2 block text-sm">{member.name}</span>
                      <span className="text-muted-foreground block text-xs">
                        {member.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-6 text-lg font-medium text-primary">Engineering</h3>
                <div
                  data-rounded="full"
                  className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4"
                >
                  {members.map((member, index) => (
                    <div key={index}>
                      <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                        <img
                          className="aspect-square rounded-full object-cover"
                          src={member.avatar}
                          alt={member.name}
                          height="460"
                          width="460"
                          loading="lazy"
                        />
                      </div>
                      <span className="mt-2 block text-sm">{member.name}</span>
                      <span className="text-muted-foreground block text-xs">
                        {member.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-6 text-lg font-medium text-primary">Marketing</h3>
                <div
                  data-rounded="full"
                  className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4"
                >
                  {members.map((member, index) => (
                    <div key={index}>
                      <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                        <img
                          className="aspect-square rounded-full object-cover"
                          src={member.avatar}
                          alt={member.name}
                          height="460"
                          width="460"
                          loading="lazy"
                        />
                      </div>
                      <span className="mt-2 block text-sm">{member.name}</span>
                      <span className="text-muted-foreground block text-xs">
                        {member.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="Testimonials">
          <div>
            <div className="container">Testimonials</div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Vlead;
