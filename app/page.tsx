import React from "react";
import Hero from "./components/Hero/Hero";
import Faq  from "./components/Faq/Faq";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Faq />
    </main>
  );
};

export default Home;
