import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import useSound from "use-sound";
import GuidedLessons from "./Components/GuidedLessons";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className=" text-center text-5xl my-16 underline decoration-line">6 Reasons Why You should Meditate</div>
      <GuidedLessons/>
    </div>
  );
}
export default App;