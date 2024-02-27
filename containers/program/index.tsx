import Image from "next/image";
import React from "react";

import { ProgramListItem } from "@/components";
import { prefix } from "@/constants";
import { TRACK_1, TRACK_2 } from "@/data";

export const ProgramSection: React.FC = () => {
  return (
    <div
      id='program'
      className='w-full h-full flex relative bg-white px-10 py-40 flex-col gap-y-10 max-md:py-10 max-md:gap-y-5'
    >
      <div className='text-center flex justify-center items-center flex-col gap-y-2.5'>
        <p className='font-bold text-5xl max-md:text-3xl'>프로그램</p>
        <p className='font-semibold text-lg max-md:text-md'>클클이와 함께 프로그램을 알아보아요</p>
        <Image src={`${prefix}/assets/icons/goorm1.svg`} alt='goorm1' width={155} height={146} className='mt-5 my-20' />
      </div>
      <b className='text-4xl max-md:text-2xl'>Track 1 : 아키텍처</b>
      <div className='flex flex-col gap-y-5 mb-20'>
        {TRACK_1.map((program, idx) => (
          <ProgramListItem {...program} key={program.title} />
        ))}
      </div>
      <b className='text-4xl max-md max-md:text-2xl'>Track 2 : 데브옵스</b>
      <div className='flex flex-col gap-y-5'>
        {TRACK_2.map((program, idx) => (
          <ProgramListItem {...program} key={program.title} />
        ))}
      </div>
    </div>
  );
};
