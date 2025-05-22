import React from 'react'
import Button from './Button';

const About = () => {
    return (
        <section className='p-8 '>
            <h1 className='text-center m-12 font-bold text-2xl'>ABOUT US</h1>
            <div className="flex flex-col md:flex-row gap-8 items-center md:justify-between">
                <div className="relative mt-8 md:mt-0 md:ml-12">
                    <img
                        src="/work1.jpeg"
                        alt="Business Team"
                        className="rounded-xl shadow-lg"
                    />
                </div>

                <div className="max-w-xl space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Smart trust Limited
                    </h1>
                    <p>
                        Smart Trust Limited is a multi-dimensional company incorporated in 2023 (RC: 71240449), delivering enterprise-grade solutions and procurement services accross Nigeria. we serve enterprises, government agencies, NGOs and private organizations with a commitment to excellence, integrity and innovation.
                    </p>
                </div>

            </div>
        </section>

    )
}

export default About