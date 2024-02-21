"use client";

import React from "react";

import { ArrowTopRightOnSquareIcon, Bars3Icon } from "@heroicons/react/24/solid";

export const Header: React.FC = () => {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const programSection = document.getElementById("program");
    if (!programSection) return;
    // MEMO 스크롤에 따라 헤더 텍스트 색상 변경
    const scrollListener = () => {
      const scrollY = window.scrollY;
      if (scrollY >= programSection.offsetTop) {
        document.querySelector("header")?.classList.add("text-black");
        document.querySelector("header")?.classList.add("border-b");
        document.querySelector("header")?.classList.remove("text-white");
      } else {
        document.querySelector("header")?.classList.add("text-white");
        document.querySelector("header")?.classList.remove("text-black");
        document.querySelector("header")?.classList.remove("border-b");
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  const scrollToSection = (section: string) => () => {
    if (section === "top") {
      window.scrollTo(0, 0);
      window.history.pushState({}, "", "/2024");
      return;
    }
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className='w-full flex justify-center fixed top-0 z-50 bg-white bg-opacity-30 backdrop-blur-sm transition-colors duration-500 border-b-gray-200'>
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
          <a href='https://forms.gle/pxZ4nnxcbmoDbPsv9' target={"_blank"} className='text-xs'>
            발표 지원하기
          </a>
        </button>
      </div>
    </header>
  );
};
