import { Separator } from "@radix-ui/react-dropdown-menu";
import React from "react";

const Analysis = () => {
  return (
    <section>
      <div>
        <div className="text-primary text-4xl py-3 my-3">
          <h2 className="">Running Time of Bubble Sort</h2>
          <Separator />
        </div>
        <div className="text-muted-foreground">
          <ul className="list-disc list-inside space-y-3">
            <li>
              To complete one iteration, we traverse the array exactly once.
            </li>
            <li>
              Since we perform N-1 comparisons in an iteration, the time
              complexity of completing one iteration is O(N).
            </li>
            <li>
              In regular Bubble Sort, we run N-1 iterations, making the overall
              time complexity O(N²).
            </li>
            <li>
              Even if the array is fully sorted initially, regular Bubble Sort
              will still take O(N²) time to complete.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-primary text-4xl py-3 my-3">
          <h2 className="">Best and Worst Cases for Optimized Bubble Sort</h2>
          <Separator />
        </div>
        <div className="text-muted-foreground">
          <ul className="list-disc list-inside space-y-3">
            <li>
              In the best-case scenario, the array is already sorted, requiring
              only one iteration (N-1 comparisons) to determine this.
            </li>
            <li>The time complexity in the best case is O(N).</li>
            <li>
              In the worst case (reverse sorted array), we need to run N
              iterations to sort the array.
            </li>
            <li>
              The total comparisons performed are (N-1) + (N-2) + ... + 2 + 1,
              making the overall time complexity O(N²).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
