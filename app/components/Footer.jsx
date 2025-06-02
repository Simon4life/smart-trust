import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import LocationMap from './LocationMap';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1A032B] text-white pt-16 pb-10 px-6 md:px-12">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-10"
        data-aos="fade-up"
      >
        {/* Company Info & About */}
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold mb-2">Smart Trust</h2>
          <p className="text-justify leading-relaxed mb-4">
            Smart Trust Limited is a trusted provider of enterprise IT, medical, and safety
            solutions in Nigeria. We specialize in the procurement, distribution, and support of
            high-quality products and services for government agencies, NGOs, and private
            organizations.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex-1 min-w-0 md:min-w-[400px]">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="flex items-center my-1">
            <strong className='mr-2 text-xl'><MdLocationPin /></strong> Suite 201, Kings Plaza, Plot 307, Ahmadu Bello Way, FCT-Abuja
          </p>
          <p className="flex items-center my-1"><strong className='mr-2 text-xl'><MdPhone /></strong> +234 706 315 9536</p>
          <p className="flex items-center my-1">
            <strong className='inline-block mr-2 text-xl'><MdEmail /></strong> smart-trustlimited@outlook.com | info@smarttrustlimited.com
          </p>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-xl hover:text-purple-400 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-xl hover:text-purple-400 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="text-xl hover:text-purple-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-xl hover:text-purple-400 transition" />
            </a>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="flex-1 min-w-0 w-full md:w-auto md:min-w-[250px] h-48 md:h-auto">
          <LocationMap />
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Smart Trust Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
