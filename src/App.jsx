import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import GuidedLessons from "./Components/GuidedLessons";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className=" text-center md:text-5xl md:my-16 text-2xl my-8 font-bold underline decoration-line">6 Reasons Why You should Meditate</div>
      <GuidedLessons/>
    </div>
  );
}
export default App;