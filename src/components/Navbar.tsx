"use client";

import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="bg-theme bg-opacity-100 flex px-2">
      <div className="flex mx-auto w-full max-w-7xl items-center justify-between gap-5 my-4">
        <h1 className="text-white text-3xl leading-[100%] tracking-[2px] uppercase my-auto">
          Arsha
        </h1>
        <div className="hidden lg:flex items-center justify-between gap-5 my-auto">
          <Link
            to="/"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-white text-base leading-[150%] cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-white text-sm leading-[160.714%] cursor-pointer"
          >
            About
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-white text-base leading-[150%] cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-white text-sm leading-[160.714%] cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            to="team"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-white text-base leading-[150%] cursor-pointer"
          >
            Team
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-white text-sm leading-[160.714%] cursor-pointer"
          >
            Contact
          </Link>
          <button className="button">Get Started</button>
        </div>
        <button
          className="lg:hidden"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div
        className={`lg:hidden flex flex-col text-black fixed top-0 mt-4 ${
          navOpen ? "left-0 shadow-black shadow-2xl" : "-left-full"
        } text-center gap-10 pt-4 w-[calc(100%-16px)] ml-2 bg-gray-200 h-[calc(100vh-16px)] transition-all ease-in-out duration-300 rounded-lg z-30`}
      >
        <button
          className="ml-auto "
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <a href="#" className=" text-base leading-[150%]">
          Home
        </a>
        <a href="#" className="text-sm leading-[160.714%]">
          About
        </a>
        <a href="#" className="text-base leading-[150%]">
          Services
        </a>
        <a href="#" className="text-sm leading-[160.714%]">
          Portfolio
        </a>
        <a href="#" className="text-base leading-[150%]">
          Team
        </a>
        <a href="#" className="text-sm leading-[160.714%]">
          Drop Down
        </a>
        <a href="#" className="text-sm leading-[160.714%]">
          Contact
        </a>
        <button className="text-sm leading-[150%] px-5 py-2 rounded-[50px] border-2 border-solid border-sky-400">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
