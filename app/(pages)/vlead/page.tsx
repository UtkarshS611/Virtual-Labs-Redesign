import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Vlead = () => {
  return (
    <section className="min-h-screen py-24">
      <Tabs defaultValue="Overview">
        <div className="flex flex-col lg:gap-6 gap-3 items-center justify-between py-4">
          <h1 className="text-2xl font-semibold md:text-5xl text-center">
          Virtual Labs Engineering Architecture and Design
          </h1>
          <TabsList className="flex flex-col lg:flex-row gap-2 lg:gap-0 lg:w-fit w-full flex-wrap">
          <TabsTrigger value="Overview">
                Motivation
            </TabsTrigger>
            <TabsTrigger value="Goals and Philosophy">
              Initiative
            </TabsTrigger>
            <TabsTrigger value="Participating Institutes">
                Timeline
            </TabsTrigger>
            <TabsTrigger value="Testimonials">Current Team</TabsTrigger>
            <TabsTrigger value="Testimonials">Past Team</TabsTrigger>
            <TabsTrigger value="Testimonials">Testimonials</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="Overview">
          <div>
            <div className="container">Overview</div>
          </div>
        </TabsContent>
        <TabsContent value="Goals and Philosophy">
          <div>
            <div className="container">Goals and Philosophy</div>
          </div>
        </TabsContent>
        <TabsContent value="Participating Institutes">
          <div>
            <div className="container">Participating Institutes</div>
          </div>
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
