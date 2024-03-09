"use client";

import React from "react";

import { Program } from "@/types";

const TOPIC = {
  Career: {
    backgroundColor: "bg-lime-300",
    label: "커리어",
  },
  Sponsor: {
    backgroundColor: "bg-violet-400",
    label: "스폰서",
  },
  Architecture: {
    backgroundColor: "bg-orange-300",
    label: "아키텍처",
  },
  Serverless: {
    backgroundColor: "bg-yellow-300",
    label: "서버리스",
  },
  DevOps: {
    backgroundColor: "bg-blue-300",
    label: "데브옵스",
  },
  IaC: {
    backgroundColor: "bg-purple-400",
    label: "IaC",
  },
};

export const ProgramListItem: React.FC<Program> = ({ startAt, endAt, title, topic, presenter }) => {
  const time = `${startAt || ""} - ${endAt}`;
  return (
    <div className='program-list-item w-full py-[60px] border-t border-t-black px-1.5 flex items-center max-md:flex-col max-md:items-start max-md:py-5'>
      <div className='w-1/6 max-md:w-full max-md:mb-2'>
        <span>{time.trim()}</span>
      </div>
      <div className='w-3/6 max-md:w-full max-md:mb-5 max-md:flex max-md:justify-between'>
        <span className='text-2xl font-medium whitespace-pre-wrap max-md:text-lg max-md:whitespace-normal max-md:w-3/4'>
          {title}
        </span>
        {topic && (
          <div
            className={`px-2.5 justify-center items-center rounded-2xl flex w-16 h-7 ${TOPIC[topic]?.backgroundColor} md:hidden`}
          >
            <span className='font-bold text-xs'>{TOPIC[topic]?.label}</span>
          </div>
        )}
      </div>
      <div className='flex flex-col w-2/6 max-md:w-full max-md:mb-2'>
        <p className='text-lg font-medium'>{presenter?.name}</p>
        <p className='text-lg font-bold'>{presenter?.affiliation}</p>
      </div>
      {topic && (
        <div className='flex w-1/6 max-md:w-full max-md:hidden'>
          <div
            className={`px-5 py-1.5 justify-center items-center rounded-2xl flex w-24 ${TOPIC[topic]?.backgroundColor}`}
          >
            <span className='font-bold text-base'>{TOPIC[topic]?.label}</span>
          </div>
        </div>
      )}
    </div>
  );
};
