"use client"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import CompanyCarousel from "./components/CarouselServices";
import FeatureCards from "./components/Choose-us-section";
import About from "./components/About"
import Footer from "./components/Footer";
import MissionVission from "./components/Mission"
export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <MissionVission/>
      <CompanyCarousel />
      <FeatureCards />
      <Footer />
    </>

  );
}
