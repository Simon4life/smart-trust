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
import FAQ from "./components/Faq"

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <CompanyCarousel />
      <FeatureCards />
      <About />
      <FAQ />
      <Footer />
    </>

  );
}
