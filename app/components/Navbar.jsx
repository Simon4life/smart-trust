'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white text-[##1b0827]">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
          <img src="/logo.png" alt="Bedrock Assets Logo" className="h-10" />
          </Link>
          
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="font-bold hover:text-[#1b0827]">Home</a></li>
          <li><a href="#services" className="font-bold hover:text-[#1b0827]">Services</a></li>
          <li><a href="#about" className="font-bold hover:text-[#1b0827]">About</a></li>
          <li><a href="#contact" className="font-bold hover:text-[#1b0827]">Contact</a></li>
        </ul>

        {/* Get Started Button (Visible on all screens) */}
        <div className="hidden md:block">
          <Link href="#services" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-800">
            Get Started
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="font-bold cursor-pointer focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#1b0827] text-white w-64 transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center px-4 py-5 border-b border-purple-500">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="text-white cursor-pointer focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="mt-6 space-y-4 px-4">
          <li><Link onClick={toggleSidebar} href="/" className="block hover:text-gray-200">Home</Link></li>
          <li><Link onClick={toggleSidebar} href="#contact" className="block hover:text-gray-200">Contact</Link></li>
          <li><Link onClick={toggleSidebar} href="#about" className="block hover:text-gray-200">About</Link></li>
          <li><Link onClick={toggleSidebar} href="#services" className="block hover:text-gray-200">Services</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-opacity-50 z-40"
        />
      )}
    </div>
  )
}

export default Navbar