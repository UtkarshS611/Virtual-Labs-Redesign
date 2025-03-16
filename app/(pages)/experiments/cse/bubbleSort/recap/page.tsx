import { Separator } from "@/components/ui/separator";
import React from "react";

const Recap = () => {
  return (
    <section>
      <div>
        <div className="text-primary text-4xl py-3 my-3">
          <h2 className="">What is Sorting?</h2>
          <Separator />
        </div>
        <div className="text-muted-foreground py-3 my-3">
          Given a list of random numbers, sorting means ordering the numbers in
          either ascending or descending order. By default, we sort numbers in
          an ascending order.
        </div>
        <div className="text-primary text-4xl py-3 my-3">
          <h2 className="">Time and Space Complexity</h2>
          <Separator />
        </div>
        <div className="text-muted-foreground py-3 my-3">
          Time complexity of an algorithm gives the measure of time taken by it
          to run as a function of the length of the input. Similarly, Space
          complexity of an algorithm quantifies the amount of space or memory
          taken by an algorithm to run as a function of the length of the input.
          Recall that suppose our input is an array of N elements, and our
          algorithm iterates through the array once, time complexity will be
          ON. If I run two embedded loops to traverse the array N times, time
          complexity will be ON2.
        </div>
      </div>
    </section>
  );
};

export default Recap;
