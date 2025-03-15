import { Separator } from "@/components/ui/separator";
import React from "react";

const Aim = () => {
  return (
    <section>
      <div>
        <div className="text-primary text-4xl py-3 my-3">
          <h2 className="">Estimated Time</h2>
          <Separator />
        </div>
        <p className="text-muted-foreground">1 hour</p>
      </div>
      <div>
        <div className="text-primary text-4xl py-3 my-3">
          <h2 className="">Learning Objectives of the Experiment</h2>
          <Separator />
        </div>
        <div className="text-muted-foreground">
          <h3 className="text-lg my-3">In this experiment, we will be able to do the following:</h3>
          <ul className="list-disc list-inside space-y-3">
            <li>Given an unsorted array of numbers, generate a sorted array of numbers by applying Bubble Sort.</li>
            <li>Optimise the Bubble Sort algorithm to achieve better performance.</li>
            <li>Demonstrate knowledge of time complexity of Bubble Sort by counting the number of operations involved in each iteration.</li>
            <li>Compare Bubble Sort with other sorting algorithms and realise Bubble Sort as a stable comparison sorting algorithm.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Aim;
