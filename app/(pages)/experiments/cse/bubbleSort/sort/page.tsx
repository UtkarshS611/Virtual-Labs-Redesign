import { Separator } from "@/components/ui/separator";
import React from "react";

const Sort = () => {
  return (
    <section>
      <div>
        <div className="text-primary text-4xl py-3 my-3">
          <h2 className="">Algorithm of Bubble Sort</h2>
          <Separator />
        </div>
        <div className="text-muted-foreground">
          <ul className="list-disc list-inside space-y-3">
            <li>
              Compare the ith and (i+1)th element, where i=first index to
              i=second last index.
            </li>
            <li>
              Compare the pair of adjacent elements. If ith element is greater
              than the (i+1)th element, swap them.
            </li>
            <li>
              Run steps 1 and 2 a total of N-1 times to attain the final sorted
              array.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-primary text-4xl py-3 my-3">
          <h2 className="">Observations</h2>
          <Separator />
        </div>
        <div className="text-muted-foreground">
          <ul className="list-disc list-inside space-y-3">
            <li>
              From the above observations, we can conclude that after the Tth
              iteration, we will have the Tth largest element placed at its
              correct position. If we have N elements in a given array, we would
              therefore have to run N-1 iterations to place all the elements in
              their correct place and completely sort the array.
            </li>
            <li>
              Notice that after N-1 iterations, N-1 elements will be in their
              correct positions, so the one element left will automatically have
              no choice but to already be in its correct position as well!
            </li>
            <li>
              Look at the picture below and work out the result of each
              iteration. See if it matches the picture, and notice which
              elements keep getting placed correctly after each iteration!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sort;
