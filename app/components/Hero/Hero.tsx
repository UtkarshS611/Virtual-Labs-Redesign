import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-32">
      <div>
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center">
              <h1 className="mb-8 text-4xl font-semibold text-pretty lg:text-7xl">
                Explore, Experiment and Discover
              </h1>
              <p className="mx-auto text-muted-foreground lg:text-xl">
                The VLEAD Team at IIIT Hyderabad optimizes Virtual Labs by
                managing infrastructure, UI design, automation, security,
                analytics, content tools, and technology research, ensuring
                efficiency and a seamless learning experience.
              </p>
              <div className="mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row">
                <Button>
                  Start Experimenting
                  <ChevronRight className="ml-2 h-4" />
                </Button>
                <Button variant="ghost">
                  Watch Demo
                  <ChevronRight className="ml-2 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-black/10 dark:bg-white/10 rounded-lg p-2 mt-24 max-w-6xl mx-auto">
            <div className="bg-black h-72 sm:h-[60vh] rounded-sm shadow-md text-center content-center">hey</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
