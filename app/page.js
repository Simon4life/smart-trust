import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import CompanyCarousel from "./components/CarouselServices";
import FeatureCards from "./components/Choose-us-section";
import About from "./components/About"
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <CompanyCarousel />
      <FeatureCards />
      <About />
      <Footer />
    </>

  );
}
