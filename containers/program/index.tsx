import Image from "next/image";
import React from "react";

import { ProgramListItem } from "@/components";
import { prefix } from "@/constants";
import { COMMON, TRACK_1, TRACK_2, TRACK_3 } from "@/data";

export const ProgramSection: React.FC = () => {
  return (
    <div id='program' className='w-full h-full flex relative bg-white px-20 py-40 flex-col'>
      <div className='text-center flex justify-center items-center flex-col mb-20'>
        <p className='font-extrabold text-xl text-indigo-700 max-md:text-3xl mb-3'>프로그램</p>
        <p className='font-semibold text-3xl max-md:text-md'>세션 타임테이블</p>
        <p className='font-semibold text-lg text-neutral-400 max-md:text-md'>
          각 트랙만의 고유한 세션을 듣고, 함께 성장합니다.
        </p>
      </div>
      <div className='mb-20'>
        {COMMON.map((program, idx) => (
          <ProgramListItem {...program} key={idx} />
        ))}
      </div>
      <div className='mb-20 flex flex-col'>
        <p className='text-indigo-700 text-xl font-extrabold mb-3.5'>Track 1.</p>
        <p className='text-3xl font-semibold mb-1'>서원</p>
        <p className='text-neutral-400 font-semibold mb-8'>
          조선의 지혜가 담긴 교육의 장에서, 혁신적인 클라우드 솔루션 탐구와 함께 커리어 발전의 기회를 제공합니다.
        </p>
        {TRACK_1.map((program, idx) => (
          <ProgramListItem {...program} key={idx} />
        ))}
      </div>
      <div className='mb-20 flex flex-col'>
        <p className='text-indigo-700 text-xl font-extrabold mb-3.5'>Track 2.</p>
        <p className='text-3xl font-semibold mb-1'>집현전</p>
        <p className='text-neutral-400 font-semibold mb-8'>
          세종대왕의 집현전 정신을 담아, 서버리스와 아키텍처를 탐구합니다.
        </p>
        {TRACK_2.map((program, idx) => (
          <ProgramListItem {...program} key={idx} />
        ))}
      </div>
      <div className='mb-20 flex flex-col'>
        <p className='text-indigo-700 text-xl font-extrabold mb-3.5'>Track 3.</p>
        <p className='text-3xl font-semibold mb-1'>성균관</p>
        <p className='text-neutral-400 font-semibold mb-8'>
          조선시대 유학의 정신을 담아 클라우드 지식의 교류를 촉진합니다.
        </p>
        {TRACK_3.map((program, idx) => (
          <ProgramListItem {...program} key={idx} />
        ))}
      </div>
      <div className='flex justify-center items-center'>
        <Image
          src={`${prefix}/assets/images/time-table.png`}
          alt='time-table'
          width={600}
          height={930}
          className='w-1/2 max-md:w-full'
        />
      </div>
    </div>
  );
};
