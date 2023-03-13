import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black font-nova sticky top-0 z-50 text-white">
      <div className="flex items-center justify-between py-5 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto">
        {/* left side */}
        <div>
          {/* logo */}
          
          <Link href="/" className="flex items-center space-x-2">
            <Image src={Logo} width={50} height={50} alt="one number logo" />
            <h1 className="font-bold text-2xl">One Number</h1>
          </Link>

        </div>
        {/* middle nav */}
        <nav className="hidden md:flex items-center space-x-5">
          <a
            href="#why"
            className="border-b-2 border-transparent hover:border-orange-400"
          >
            Why One Number ?
          </a>
          <a
            href="#numbersType"
            className="border-b-2 border-transparent hover:border-orange-400"
          >
            Types of Numbers
          </a>
          <a
            href='#'
            className="border-b-2 border-transparent hover:border-orange-400"
          >
            Pricing
          </a>
        </nav>
        {/* Right nav */}
        <div className="hidden md:flex text-center">
          {/* <na#v class="flex space-x-3 text-xs">
        <a href="">RESOURCES</a>
        <a href="#">CONTACT US</a>
        <a href="#">LOG IN</a>
      </na#v> */}
          <a
            href='#'
            className="bg-orange-600 hover:bg-opacity-90 px-3 py-1 font-bold"
          >
            TRY FREE
          </a>
        </div>
        <div className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
