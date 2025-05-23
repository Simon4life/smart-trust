'use client'
import Link from 'next/link'
import React from 'react';
import Button from "./Button"
import Image from 'next/image';


const Hero = () => {
    return (
        <div className="relative flex flex-col md:flex-row justify-center items-center h-100vh bg-[#1b0827] text-white px-8 md:px-12 py-12 space-y-8 md:space-y-0">
            <div className="flex flex-col mb-0 items-start  space-y-6" data-aos="fade-up">
                <h1 className="text-4xl mb-2 sm:text-4xl md:text-5xl font-bold leading-tight">
                    Shaping the Future one Byte at a Time
                </h1>
                <p className=" md:text-lg text-gray-300">
                    Smart Trust Limited delivers cutting-edge IT, mdeical and office solutions tailored for enterprises, NGOs and government agencies-empowering business through innovation, procurement, and expert support.
                </p>
                <div className=" mb-0">
                    <Button className="bg-purple-600 px-6 py-2 text-white rounded-full hover:bg-purple-700">
                        Get Started
                    </Button>
                </div>
            </div>
            <div className="relative items-center md:block mt-8 md:mt-0 md:ml-12 w-full h-96" data-aos="fade-up">

                <Image src="/hero-img2.jpg" fill className='object-cover rounded-lg' alt='hero-image' />
            </div>
        </div>

    )
}

export default Hero