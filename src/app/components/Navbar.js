"use client";

import Logo from "../../../public/images/abstractly.svg";
import CloseBtn from "../../../public/images/close-line.svg";
import Hamburger from "../../../public/images/menu-line.svg";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [slide, setSlide] = useState(true);

  return (
    <nav className="py-8 mx-5 flex justify-between overflow-hidden">
      <div className="flex items-center gap-16">
        <Image src={Logo} alt="alt" width={110} height={0} />
        <div className="lg:flex gap-12 text-neutral-500 hidden">
          <a href="" className="">
            Home
          </a>
          <a href="" className="">
            Features
          </a>
          <a href="" className="">
            Pricing
          </a>
          <a href="" className="">
            About us
          </a>
          <a href="" className="">
            Contact
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="lg:flex gap-5 hidden">
          <button className="bg-white px-5 border border-neutral-400 border-opacity-30 py-2 rounded shadow-md hover:opacity-75">
            Learn more
          </button>
          <button className="text-white bg-indigo-700 px-5 rounded shadow-md hover:opacity-85">
            See pricing
          </button>
        </div>
        <button
          className=""
          onClick={() => {
            setSlide(false);
          }}
        >
          <Image
            src={Hamburger}
            alt="alt"
            width={25}
            height={0}
            className="lg:hidden"
          />
        </button>
      </div>
      <div
        className={`lg:hidden transition ease-in-out duration-300 absolute top-0 left-0 bg-white h-full w-full ${
          slide ? "-translate-x-full " : "translate-x-0"
        }`}
      >
        <div className="mx-5 py-8 flex items-start justify-between">
          <div className="flex flex-col gap-12">
            <Image src={Logo} alt="alt" width={110} height={0} />
            <div className="flex flex-col gap-5 text-neutral-500">
              <a href="" className="">
                Home
              </a>
              <a href="" className="">
                Features
              </a>
              <a href="" className="">
                Pricing
              </a>
              <a href="" className="">
                About us
              </a>
              <a href="" className="">
                Contact
              </a>
            </div>
            <div className="w-full flex justify-center absolute bottom-5 left-0">
              <div className="flex flex-col md:flex-row w-full gap-5 px-5 md:justify-center">
                <button className="bg-white border border-neutral-400 border-opacity-30 py-2 rounded shadow-md hover:opacity-75 md:w-[335px]">
                  Learn more
                </button>
                <button className="text-white bg-indigo-700 py-2 rounded shadow-md hover:opacity-85 md:w-[335px]">
                  Try it out
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setSlide(true);
            }}
          >
            <Image src={CloseBtn} alt="alt" width={25} height={0} />
          </button>
        </div>
      </div>
    </nav>
  );
}
