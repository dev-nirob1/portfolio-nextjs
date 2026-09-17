import About from "../components/section/About";
import FeaturedWork from "../components/section/FeaturedWork";
import Hero from "../components/section/Hero";
import StackPanel from "../components/section/StackPanel";
import AllWork from "../components/section/AllWork";
import Contact from "../components/section/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <StackPanel />
      <About />
      <AllWork />
      <Contact/>
    </>
  );
}
