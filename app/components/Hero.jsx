'use client'
import Link from 'next/link'
import React from 'react';
import Button from "./Button"
import Image from 'next/image';

// components/HeroCarousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroCarousel() {
  const slides = [
    {
      title: "Empowering Enterprises with Smart Solutions",
      text: "From IT infrastructure to medical equipment, we deliver precision and value.",
      image: "/work4.jpg",
    },
    {
      title: "Your Trusted Procurement Partner",
      text: "Serving government agencies, NGOs, and private firms across Nigeria.",
      image: "/hero-img.jpg",
    },
    {
      title: "Safety. Support. Excellence.",
      text: "We provide certified equipment and 24/7 technical support.",
      image: "/hero-img2.jpg",
    },
  ];

  return (
    <div className="w-full h-[85vh] relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/60 absolute flex flex-col justify-items-center items-center bg-opacity-50 text-white p-8 w-full h-full text-center">
              <h1 className="text-3xl text-center mt-36 md:text-5xl font-bold mb-4" data-aos="fade-up">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6" data-aos="fade-up">{slide.text}</p>
                <a
                  href="#contact"
                  className="bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded text-white transition" data-aos="fade-up"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


// export default Hero