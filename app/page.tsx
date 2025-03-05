import React from "react";
import Hero from "./components/Hero/Hero";
import Faq  from "./components/Faq/Faq";
import Fields from "./components/Fields/Fields";
import Activities from "./components/Activities/Activities";
import Stats from "./components/Stats/Stats";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Fields/>
      <Activities/>
      <Faq />
      <Stats/>
    </main>
  );
};

export default Home;
