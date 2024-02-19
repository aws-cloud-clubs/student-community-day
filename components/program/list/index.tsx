"use client";

import React from "react";

import { Program } from "@/types";

export const ProgramListItem: React.FC<Program> = ({ startAt, endAt, title, description, level, presenter }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof window === "undefined" || !itemRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideInFromLeft");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [itemRef]);
  return (
    <div
      className='w-full flex py-5 justify-between min-h-[150px] gap-x-20 max-md:flex-col max-md:gap-y-2'
      ref={itemRef}
    >
      <div className='flex flex-col border-b border-b-gray-900 flex-1'>
        <span className='text-xs font-medium'>{`${startAt} ~ ${endAt}`}</span>
        <span className='text-lg font-bold'>{title}</span>
      </div>
      <div className='flex flex-col text-sm w-[200px]'>
        <span className='font-bold'>{presenter.name}</span>
        <span className='font-medium'>{presenter.affiliation}</span>
      </div>
      <div className='flex flex-col text-sm max-w-[300px]'>
        <span className='capitalize font-bold'>{level.toLocaleLowerCase()}</span>
        <span className='whitespace-pre-wrap'>{description}</span>
      </div>
    </div>
  );
};
