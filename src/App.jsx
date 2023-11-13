import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import GuidedLessons from "./Components/GuidedLessons";
import MeditationPlayer from "./Components/MusicSound";
import FAQ from "./Components/FAQ";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className=" text-center md:text-5xl md:my-16 text-2xl my-8 font-bold underline decoration-line">6 Reasons Why You should Meditate</div>
      <GuidedLessons/>
      <MeditationPlayer/>
      <FAQ/>
    </div>
  );
}
export default App;