import React from "react";

import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Separator } from "@/components/ui/separator";

import { branches, gallery } from "../vlabs/data";

const Outreach = () => {
  return (
    <section className="min-h-screen py-32">
      <Tabs defaultValue="Gallery">
        <div className="flex flex-col lg:gap-6 gap-3 items-center justify-between py-4">
          <h1 className="text-3xl font-semibold md:text-5xl text-center">
            Outreach
          </h1>
          <TabsList className="flex flex-col lg:flex-row gap-2 lg:gap-0 lg:w-fit w-full flex-wrap">
            <TabsTrigger value="Gallery">Gallery</TabsTrigger>
            <TabsTrigger value="Workshops">Workshops</TabsTrigger>
            <TabsTrigger value="Nodal Centers">Nodal Centers</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="Gallery">
          <div>
            <div className="container">
              {/* Gallery section */}
              <div className="flex flex-wrap gap-2 justify-center items-center my-6">
                {gallery.map((item, index) => (
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
          </div>
        </TabsContent>
        <TabsContent value="Workshops">
          <div>
            <div className="container">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-start text-center">
                  Overview and Motivation
                </h2>
                <Separator />
              </div>
              <div className="space-y-4 text-muted-foreground py-6">
                <p>
                  Virtual Labs Team organizes workshops and hands-on practice
                  sessions on Virtual Labs for interested Science & Engineering
                  Institutions. Training sessions are conducted for faculty
                  members and students of interested institutes upon the
                  expression of their interest in Virtual Labs workshop.
                </p>
                <p>
                  Any of the 1500 odd experiments can be performed at all times
                  providing a good opportunity for continuous usage. On
                  completion of the demonstrations and hands-on sessions, the
                  faculty members and the students will need to submit the
                  feedback form to the Virtual Labs team. These forms will be
                  compiled and analyzed for further improvements in the Virtual 
                  Labs.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-start text-center">Audience</h2>
                <Separator />
              </div>
              <div className="py-6 text-muted-foreground">
                <p>
                Workshops can be requested by faculty members or college management of the interested Science & Engineering Institutions.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Nodal Centers">
          <div>
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-start text-center">
                Participating Institutes
              </h1>
              <Separator />
            </div>
            <div className="flex flex-wrap items-center justify-center p-4 gap-4">
              {branches.map((branch, index) => (
                <div
                  key={index}
                  className="rounded-xl w-full max-w-sm border p-2 shadow cursor-pointer transition-all duration-200 flex flex-col justify-between border-primary"
                >
                  <Image
                    width={400}
                    height={400}
                    src={branch.imgURL}
                    alt={branch.title}
                    className="aspect-video w-full rounded-md border border-dashed object-cover"
                  />
                  <div className="text-center py-4">{branch.title}</div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Outreach;
