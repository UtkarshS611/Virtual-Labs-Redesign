import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Vlabs = () => {
  return (
    <section className="min-h-screen py-24">
      <Tabs defaultValue="Overview">
        <div className="flex flex-col lg:gap-6 gap-3 items-center justify-between py-4">
          <h1 className="text-3xl font-semibold md:text-5xl text-center">
            Virtual Labs
          </h1>
          <TabsList className="flex flex-col lg:flex-row gap-2 lg:gap-0 lg:w-fit w-full flex-wrap">
            <TabsTrigger value="Overview">Overview</TabsTrigger>
            <TabsTrigger value="Goals and Philosophy">
              Goals and Philosophy
            </TabsTrigger>
            <TabsTrigger value="Participating Institutes">
              Participating Institutes
            </TabsTrigger>
            <TabsTrigger value="Testimonials">Testimonials</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="Overview">
          <div>
            <div className="container">
                <h1 className="text-2xl my-2 lg:text-start text-center">Overview</h1>
                <p className="text-muted-foreground lg:text-start text-center">
                Virtual Labs, an Ministry of Education project under NMEICT, offers free remote laboratory learning experiences. Workshops and nodal centers support institute partnerships within the Virtual Labs consortium. The project, led by IIT Delhi and involving eleven institutes, provides over 190 Virtual Labs and 1600+ web-enabled experiments across various domains using open-source technologies. These simulations are accessible online without any additional infrastructure or fees.
                </p>
                <h2 className="text-2xl my-2 lg:text-start text-center">Stakeholders</h2>
                {/* Gallery section */}
                <div className="flex flex-wrap gap-2 justify-center items-center">
                    <div className="overflow-hidden h-64 rounded-lg border-[2px] border-red-200 max-w-md w-full relative">
                        <div className="transition-all duration-200 overlay hover:top-[50%] absolute bg-white/50 h-full w-full top-[90%] left-0 text-black px-2">
                            WHAT BROOOOO?
                        </div>
                    </div>
                </div>
            </div>
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

export default Vlabs;
