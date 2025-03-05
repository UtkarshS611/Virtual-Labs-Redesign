import React from "react";

const Stats: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-2xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Virtual Labs Usage Statistics
          </h2>
        </div>

        <div className="grid gap-0.5 *:text-center md:grid-cols-2">
          <div className="rounded-lg space-y-4 border py-12">
            <div className="text-5xl font-bold text-primary">17M +</div>
            <p>Users</p>
          </div>
          <div className="rounded-lg space-y-4 border py-12">
            <div className="text-5xl font-bold text-primary">120M +</div>
            <p>Views</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
