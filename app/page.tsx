import React from "react";
import Hero from "./components/Hero/Hero";
import Faq  from "./components/Faq/Faq";
import Fields from "./components/Fields/Fields";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Fields/>
      <Faq />
    </main>
  );
};

export default Home;
