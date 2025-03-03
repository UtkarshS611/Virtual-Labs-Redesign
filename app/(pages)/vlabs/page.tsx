import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
              <div>
                <h1 className="text-3xl lg:text-start text-center">Overview</h1>
                <Separator />
              </div>
              <p className="text-muted-foreground lg:text-start text-center my-6">
                Virtual Labs, an Ministry of Education project under NMEICT,
                offers free remote laboratory learning experiences. Workshops
                and nodal centers support institute partnerships within the
                Virtual Labs consortium. The project, led by IIT Delhi and
                involving eleven institutes, provides over 190 Virtual Labs and
                1600+ web-enabled experiments across various domains using
                open-source technologies. These simulations are accessible
                online without any additional infrastructure or fees.
              </p>
              <div>
                <h2 className="text-3xl lg:text-start text-center">
                  Stakeholders
                </h2>
                <Separator />
              </div>
              {/* Gallery section */}
              <div className="flex flex-wrap gap-2 justify-center items-center my-6">
                <div className="overflow-hidden group h-64 rounded-lg border-[2px] border-red-200 max-w-md w-full relative">
                  <div className="transition-all duration-200 overlay group-hover:top-[50%] absolute bg-gray-200 dark:bg-white/50 h-full w-full top-[90%] left-0 text-black px-2">
                    WHAT BROOOOO?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Goals and Philosophy">
          <div>
            <div className="container">
              <h1 className="text-2xl my-2 lg:text-start text-center">
                Goals and Philosophy
              </h1>
              <ul className="space-y-2 ml-4 lg:text-start text-center">
                <li>
                  To offer a remote learning experience with simulated
                  experiments in diverse areas of Science and Engineering.
                </li>
                <li>
                  To engage students by sparking their curiosity, allowing them
                  to learn fundamental and complex concepts through remote
                  experimentation.
                </li>
                <li>
                  To present a complete Learning Management System around the
                  Virtual Labs, where students and teachers can utilize various
                  tools for learning, including supplemental web-resources,
                  video-lectures, animated demonstrations, and self-evaluation.
                </li>
              </ul>
              <h2 className="text-2xl my-2 lg:text-start text-center">
                Goals and Philosophy
              </h2>
              <ul className="space-y-2 ml-4 lg:text-start text-center">
                <li>
                  Bridging the gap for colleges that lack lab facilities:
                  Provide online labs as a substitute for hands-on lab work in
                  engineering colleges that do not have the necessary equipment.
                </li>
                <li>
                  Enhancing existing labs with online resources: Expand the
                  capabilities of existing labs with online labs to complement
                  and augment the learning experience of engineering students.
                </li>
                <li>
                  Empowering educators through specialized workshops: Offer
                  workshops on-site or online to enhance the skill set and
                  proficiency of educators in the effective use of online labs
                  in engineering education.
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Participating Institutes">
          <div>
            <div className="container">Participating Institutes</div>
          </div>
        </TabsContent>
        <TabsContent value="Testimonials">
          <div>
            <div className="container">
              <div className="space-y-8 px-6 md:space-y-16 py-16">
                <div className="relative z-10 mx-auto max-w-xl text-center space-y-6 md:space-y-12">
                  <h2 className="text-4xl font-medium lg:text-5xl">
                    Testimonials
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2 mx-auto max-w-6xl ">
                  <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 border-primary">
                    <CardContent>
                      <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                        <p className="text-xl font-medium">
                          One of the primary advantages associated with the
                          utilization of Virtual Laboratory is the ability for
                          students to engage in self-paced learning. This
                          technology facilitates students in engaging in
                          studying, preparing for, and doing laboratory
                          experiments at their own convenience, regardless of
                          time and location.
                        </p>

                        <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                          <Avatar className="size-12">
                            <AvatarFallback className="bg-primary/10 text-primary">
                              MA
                            </AvatarFallback>
                          </Avatar>

                          <div>
                            <cite className="text-sm font-medium">
                              Dr Mohd Zubair Ansari
                            </cite>
                            <span className="text-muted-foreground block text-sm">
                              National Institute of Technology Srinagar
                            </span>
                          </div>
                        </div>
                      </blockquote>
                    </CardContent>
                  </Card>
                  <Card className="md:col-span-2 border-primary">
                    <CardContent className="h-full pt-6">
                      <blockquote className="grid h-full grid-rows-[1fr_auto]">
                        <p className="text-xl font-medium">
                          Virtual Labs at USAR, GGSIPU enhance learning by
                          bridging theoretical concepts with practical
                          experiments beyond textbooks. They complement real
                          labs, improving understanding and performance,
                          especially when used before paper-based experiments.
                        </p>

                        <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                          <Avatar className="size-12">
                            <AvatarImage
                              src="https://tailus.io/images/reviews/jonathan.webp"
                              alt="Jonathan Yombo"
                              height="400"
                              width="400"
                              loading="lazy"
                            />
                            <AvatarFallback className="bg-primary/10 text-primary">
                              KS
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <cite className="text-sm font-medium">
                              Dr. Khyati Chopra
                            </cite>
                            <span className="text-muted-foreground block text-sm">
                              USAR GGSIPU
                            </span>
                          </div>
                        </div>
                      </blockquote>
                    </CardContent>
                  </Card>
                  <Card className="border-primary">
                    <CardContent className="h-full pt-6 ">
                      <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                        <p>
                          Virtual Labs serve as a knowledge seed for science and
                          technology students, preparing them for real
                          experiments. This platform enhances learning,
                          optimizes resources, and offers the convenience of
                          self-paced exploration.
                        </p>

                        <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                          <Avatar className="size-12">
                            <AvatarImage
                              src="https://tailus.io/images/reviews/yucel.webp"
                              alt="Yucel Faruksahan"
                              height="400"
                              width="400"
                              loading="lazy"
                            />
                            <AvatarFallback className="bg-primary/10 text-primary">
                              PG
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <cite className="text-sm font-medium">
                              Dr. Pankaj K. Goswami
                            </cite>
                            <span className="text-muted-foreground block text-sm">
                              Amity University Uttar Pradesh, Lucknow
                            </span>
                          </div>
                        </div>
                      </blockquote>
                    </CardContent>
                  </Card>
                  <Card className="card variant-mixed border-primary">
                    <CardContent className="h-full pt-6">
                      <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                        <p>
                          Virtual Lab makes learning easier through simulations
                          and self-assessment tools like pretests and
                          post-tests. With a vast range of experiments across
                          domains, it enhances student engagement and
                          self-learning. As the Nodal Coordinator for Chameli
                          Devi Group of Institutions, I highly appreciate its
                          role in enriching education.
                        </p>

                        <div className="grid grid-cols-[auto_1fr] gap-3">
                          <Avatar className="size-12">
                            <AvatarImage
                              src="https://tailus.io/images/reviews/rodrigo.webp"
                              alt="Rodrigo Aguilar"
                              height="400"
                              width="400"
                              loading="lazy"
                            />
                            <AvatarFallback className="bg-primary/10 text-primary">
                              RA
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">
                              Radheshyam Acholia
                            </p>
                            <span className="text-muted-foreground block text-sm">
                              Chameli Devi Group of Institution, Indore
                            </span>
                          </div>
                        </div>
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Vlabs;
