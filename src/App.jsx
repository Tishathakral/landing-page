import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import GuidedLessons from "./Components/GuidedLessons";
import MeditationPlayer from "./Components/MusicSound";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/Scrolltotop";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div id="why" className=" text-center md:text-5xl md:my-16 text-2xl my-8 font-bold underline decoration-line">6 Reasons Why You should Meditate</div>
      <GuidedLessons/>
      <MeditationPlayer/>
      <FAQ/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
}
export default App;