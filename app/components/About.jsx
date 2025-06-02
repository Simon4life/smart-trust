import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const achievements = [
    "Successfully delivered over 100 enterprise projects across Nigeria.",
    "Trusted by 20+ NGOs and government agencies like ABT Associates and REDAID.",
    "Official distributor of 50+ global tech and medical brands like HP, Cisco",
    "Maintained a zero-accident safety record across all engineering and facility.",
  ];

const About = () => {
    return (
        <section id='about' className='py-16 max-w-7xl mx-auto px-6'>
            <h1 className='text-center mb-10 font-bold text-4xl'>ABOUT US</h1>
            <div className="flex flex-col md:flex-row gap-8 items-center md:justify-between" data-aos="fade-up">
                <div className="relative mt-8 md:mt-0 ">
                    <img
                        src="/work1.jpeg"
                        alt="Business Team"
                        className="shadow-lg"
                    />
                </div>

                <div className="max-w-xl space-y-6">
                    <h1 className="text-3xl mb-0 md:text-4xl font-bold leading-tight">
                        Smart trust Limited
                    </h1>
                    <p className='text-gray-600 mb-0 text-base'>
                        Smart Trust Limited is a multi-dimensional company incorporated in 2023 (RC: 71240449), delivering enterprise-grade solutions and procurement services accross Nigeria. we serve enterprises, government agencies, NGOs and private organizations with a commitment to excellence, integrity and innovation.
                    </p>
                    <div className="mt-8">
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {
                                achievements.map((item, index) => {
                                    return (
                                        <p key={index} className='flex  items-center  text-gray-700'>
                                            <FaCheckCircle className='text-purple-700 mt-1 mr-3'/>
                                            <span className=''>{item}</span>
                                        </p>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default About