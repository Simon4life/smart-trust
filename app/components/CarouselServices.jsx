"use client"
import { useState } from "react";

export default function CompanyCarousel() {
    const slides = [
        {
            id: 1,
            image: "/work4.jpg",
            title: "ICT & Enterprise Solutions",
            description:
                "We provide desktops, laptops, servers, software and enterprise IT tools-engineered for productivity and performance.",
        },
        {
            id: 2,
            image: "/work2.jpg",
            title: "Medical & Research Equipment",
            description:
                "Supplying cutting-edge diagnostic, surgical and laboratory tools to support healthcare and scientific advancement.",
        },
        {
            id: 3,
            image: "/work1.jpeg",
            title: "Personal and Protective Equipment (PPE)",
            description:
                "From masks and gloves to full protective gears-ensuring workplace safety in all environments",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div id="services" className="relative w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-12">
            <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Our Services
            </h1>
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="min-w-full flex flex-col items-center justify-center p-6 space-y-4"
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
                            />
                            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 text-center">
                                {slide.title}
                            </h2>
                            <p className="text-sm md:text-base text-gray-600 text-center">
                                {slide.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Navigation */}
            <button
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none"
                onClick={prevSlide}
            >
                &#8592;
            </button>
            <button
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none"
                onClick={nextSlide}
            >
                &#8594;
            </button>
            {/* Dots */}
            <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-purple-600" : "bg-gray-300"
                            }`}
                    ></button>
                ))}
            </div>
        </div>

    );
}
