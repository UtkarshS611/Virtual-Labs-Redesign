import { Separator } from "@/components/ui/separator";
import React from "react";

const Problems = () => {
  return (
    <section>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl text-primary">
          Virtual Labs - Research Projects
        </h1>
      </div>
      <div className="my-5">
        <div className="space-y-2">
          <h1 className="text-2xl text-primary">Generative AI</h1>
          <Separator />
        </div>
        <div className="text-muted-foreground py-4">
          <p className="text-lg mb-4">
            Virtual Labs is seeking to integrate Generative AI into various
            aspects of content generation, such as summarizing content for users
            and generating questions based on content. The following series of
            projects will address different stages of this initiative:
          </p>
          <ol className="px-6 space-y-1">
            <li>
              1. Identify open-source Large Language Models (LLMs) suitable for
              fine-tuning for educational purposes.
            </li>
            <li>
              2. Identify LLMs pertinent to educational contexts through prompt
              engineering using zero-shot and few shot prompting.
            </li>
            <li>
              3. Identify and collect data necessary for fine-tuning and prompt
              engineering.
            </li>
            <li>
              4. Conduct cost and performance analysis of different types of LLM
              solutions, including the expenses associated with fine-tuning,
              deploying the fine-tuned model, and utilizing APIs in the case of
              closed-source API based solutions.
            </li>
            <li>
              5. Build a GenAI powered search bot on top of the Virtual Labs
              document vector store.
            </li>
            <li>
              6. Build an automated agent to create social media posts, which
              can be triggered by various activities of content addition,
              modification and deployment.
            </li>
            <li>
              6. Build a prompt repository containing standardized set of
              prompts for different GenAI models to facilitate tasks and
              activities like question generation, image generation, blog post
              generation, document formatting etc.
            </li>
          </ol>
        </div>
      </div>
      <div className="my-5">
        <div className="space-y-2">
          <h1 className="text-2xl text-primary">Content Structure</h1>
          <Separator />
        </div>
        <div className="text-muted-foreground py-4">
          <ol className="px-6 space-y-1">
            <li>1. Port the Verilog compiler to WebAssembly</li>
            <li>2. Port the Spice Code compiler to WebAssembly</li>
            <li>3. Port the SDCC Compiler Suite to WebAssembly</li>
            <li>4. Port a light-weight python interpreter to WebAssembly.</li>
          </ol>
        </div>
      </div>
      <div className="my-5">
        <div className="space-y-2">
          <h1 className="text-2xl text-primary">Software Engineering</h1>
          <Separator />
        </div>
        <div className="text-muted-foreground py-4">
          <ol className="px-6 space-y-1">
            <li>
              1. Build reusable components for all Virtual Labs data structure
              experiments
            </li>
            <li>2. Upgrade the Virtual Labs cloud infrastructure</li>
          </ol>
        </div>
      </div>
      <div className="my-5">
        <div className="space-y-2">
          <h1 className="text-2xl text-primary">Tools</h1>
          <Separator />
        </div>
        <div className="text-muted-foreground py-4">
          <ol className="px-6 space-y-1">
            <li>1. Build a plagiarism validator tool for Virtual Labs.</li>
            <li>
              2. Integrate a programming interface to Virtual Labs. The
              interface should be able to validate the correctness of the code.
            </li>
            <li>3. Build a progressive web app for Virtual Labs.</li>
            <li>
              4. Build a web based development environment for Virtual Labs.
            </li>
          </ol>
        </div>
      </div>
      <div className="my-5">
        <div className="space-y-2">
          <h1 className="text-2xl text-primary">Analytics</h1>
          <Separator />
        </div>
        <div className="text-muted-foreground py-4">
          <ol className="px-6 space-y-1">
            <li>
              1. Define and implement an analytics system for e-learning
              content. This project will first define a model of the metrics
              relevant for e-learning content. Afterwards the model will be
              implemented as a framework, which can be integrated with any
              e-learning project.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Problems;
