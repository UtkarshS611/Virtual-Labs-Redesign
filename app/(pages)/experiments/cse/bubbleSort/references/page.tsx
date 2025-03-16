import { Separator } from "@/components/ui/separator";
import React from "react";

const References = () => {
  return (
    <section>
      <div>
        <div className="text-primary text-4xl py-3 my-3">
          <h2 className="">Explore More About Bubble Sort</h2>
          <Separator />
        </div>
        <div className="text-muted-foreground">
          <ul className="list-disc list-inside space-y-3">
            <li>
              <a
                href="https://www.geeksforgeeks.org/bubble-sort-algorithm/"
                className="text-blue-500"
              >
                Coding implementation of Bubble Sort
              </a>
            </li>
            <li>
              <a
                href="https://visualgo.net/en/sorting?slide=1-1"
                className="text-blue-500"
              >
                Bubble Sort Visualization
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-primary text-4xl py-3 my-3">
          <h2 className="">Quizzes</h2>
          <Separator />
        </div>
        <div className="text-muted-foreground">
          <ul className="list-disc list-inside space-y-3">
            <li>
              <a
                href="https://www.geeksforgeeks.org/quizzes/top-mcqs-on-bubblesort-algorithm-with-answers/"
                className="text-blue-500"
              >
                MCQ Quiz for Bubble Sort
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/quizzes/top-mcqs-on-searching-algorithm-with-answers/"
                className="text-blue-500"
              >
                Combined Quiz for Sorting Algorithms
              </a>
            </li>
            <li>
              <a
                href="https://www.sparknotes.com/cs/sorting/bubble/problems/"
                className="text-blue-500"
              >
                Online Quiz
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default References;
