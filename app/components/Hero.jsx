'use client'
import Link from 'next/link'
import React from 'react';
import Button from "./Button"
import Card from "./Card"
import CardContent from "./CardContent"
import Image from 'next/image';


const Hero = () => {
    return (
        <div className="relative flex flex-col md:flex-row justify-center items-center h-[calc(100vh-4rem)] bg-[#1b0827] text-white px-6 md:px-12 py-12 space-y-8 md:space-y-0">
            <div className="flex flex-col  items-center md:items-start  space-y-6 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    Shaping the Future one Byte at a Time
                </h1>
                <p className="sm:text-base md:text-lg text-gray-300">
                    Smart Trust Limited delivers cutting-edge IT, mdeical and office solutions tailored for enterprises, NGOs and government agencies-empowering business through innovation, procurement, and expert support.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button className="bg-purple-600 px-6 py-2 text-white rounded-full hover:bg-purple-700">
                        Get Started
                    </Button>
                </div>
            </div>
            <div className="relative max-w-64 hidden items-center md:block mt-8 md:mt-0 md:ml-12">

                <Image src="/hero-img.jpg" width={1000} height={1000} />
            </div>
        </div>

    )
}

export default Hero