
import React from 'react'

const Footer = () => {
    return (
        <footer id='contact' className="bg-[#1A032B] text-white py-10 px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
                {/* Left Section */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="text-2xl font-bold">Smart Trust</div>
                        <span className="text-sm uppercase tracking-wide">Assets</span>
                    </div>
                    <p className="text-sm mb-6">
                        Suite 201, Kings Plaza, Plot 307, Ahmadu Bello Way, FCT-Abuja.
                    </p>
                    <p className="text-sm mb-2">
                        <strong>P:</strong> +234 706 315 9536,
                    </p>
                    <p className="text-sm">
                        <strong>E:</strong> smart-trustlimited@outlook.com | info@smartturstlimited.com
                    </p>
                </div>

                {/* Right Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quicklinks</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-sm hover:text-purple-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:text-purple-400">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:text-purple-400">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:text-purple-400">
                                Resources
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:text-purple-400">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer