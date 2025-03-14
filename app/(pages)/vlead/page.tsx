import React from "react";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motivation, initiatives, members, timeline } from "./data";

const Vlead = () => {
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
                engineering, and development coordination. The team&apos;s key
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
                <h3 className="mb-6 text-lg font-medium text-primary">
                  Leadership
                </h3>
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
                <h3 className="mb-6 text-lg font-medium text-primary">
                  Engineering
                </h3>
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
                <h3 className="mb-6 text-lg font-medium text-primary">
                  Marketing
                </h3>
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
                <h3 className="mb-6 text-lg font-medium text-primary">
                  Leadership
                </h3>
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
                <h3 className="mb-6 text-lg font-medium text-primary">
                  Engineering
                </h3>
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
                <h3 className="mb-6 text-lg font-medium text-primary">
                  Marketing
                </h3>
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
