"use client";

import React from "react";

import { ArrowTopRightOnSquareIcon, Bars3Icon } from "@heroicons/react/24/solid";

const Header: React.FC = () => {
  const scrollObserver = new IntersectionObserver(
    (entries) => {
      // if hero section is displayed, change the header text color to white
      // if program section is top, change the header text color to black
      if (entries[0].isIntersecting) {
        document.querySelector("header")?.classList.add("text-black");
        document.querySelector("header")?.classList.remove("text-white");
      } else {
        document.querySelector("header")?.classList.add("text-white");
        document.querySelector("header")?.classList.remove("text-black");
      }
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    },
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const programSection = document.getElementById("program");
    if (programSection) {
      scrollObserver.observe(programSection);
    }
    return () => {
      scrollObserver.disconnect();
    };
  }, []);

  const scrollToSection = (section: string) => () => {
    if (section === "top") return window.scrollTo(0, 0);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className='w-full flex justify-center fixed top-px shadow-md z-10 bg-white bg-opacity-30 backdrop-blur-sm text-white'>
      <div className='max-w-[1440px] w-full h-14 flex justify-between items-center px-5'>
        <b className='cursor-pointer' onClick={scrollToSection("top")}>
          ACC SCD 2024
        </b>
        <nav className='max-md:hidden'>
          <ul className='flex space-x-10 text-md font-medium'>
            <li>
              <a href='#program' onClick={scrollToSection("program")}>
                발표/프로그램
              </a>
            </li>
            <li>
              <a href='#location' onClick={scrollToSection("location")}>
                위치
              </a>
            </li>
            <li>
              <a href='#event' onClick={scrollToSection("event")}>
                이벤트
              </a>
            </li>
          </ul>
        </nav>
        <button className='md:hidden w-5 h-5'>
          <Bars3Icon />
        </button>
        <button className='flex items-center gap-x-0.5 border border-gray-300 rounded-full py-1.5 px-3 max-md:hidden'>
          <ArrowTopRightOnSquareIcon className='w-3.5 h-3.5' />
          <span className='text-xs'>발표 지원하기</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
