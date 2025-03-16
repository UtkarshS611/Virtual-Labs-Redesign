import { Separator } from "@/components/ui/separator";
import React from "react";

const OptimizedSort = () => {
  return (
    <section>
      <div>
        <div className="text-primary text-4xl py-3 my-3">
          <h2 className="">Optimization Technique</h2>
          <Separator />
        </div>
        <div className="text-muted-foreground">
          <ul className="list-disc list-inside space-y-3">
            <li>
              As we pointed out before, after the Tth iteration, the Tth largest
              element is placed correctly (at the Tth index from the end).
            </li>
            <li>
              Given this fact, we can say that if we&lsquo;re on the Tth iteration,
              the greatest (T-1) elements already occupy their correct places
              among the last (T-1) indices of the array.
            </li>
            <li>
              Hence, we don&lsquo;t have to compare these elements again and again in
              subsequent iterations. Instead, in the Tth iteration, we can just
              compare the first (N-T+1) elements.
            </li>
            <li>
              Since we are reducing the number of redundant comparisons, the
              running time of the algorithm will be lesser.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-primary text-4xl py-3 my-3">
          <h2 className="">When can we Stop?</h2>
          <Separator />
        </div>
        <div className="text-muted-foreground">
          <ul className="list-disc list-inside space-y-3">
            <li>
              In many cases, we notice that the array gets sorted much before
              the N iterations are completed.
            </li>
            <li>
              To avoid redundant iterations, we can check whether or not our
              array is sorted after each iteration and terminate our algorithm
              if it is sorted.
            </li>
            <li>
              If an iteration completes without any swaps, it means all adjacent
              elements are correctly ordered, indicating that the array is
              sorted.
            </li>
            <li>
              For an already sorted array, the algorithm will terminate in just
              one iteration.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OptimizedSort;
