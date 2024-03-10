import Image from "next/image";
import React from "react";

import { prefix } from "@/constants";

export const EventSection: React.FC = () => {
  return (
    <div
      id='event'
      className='w-full h-full flex relative bg-white px-20 py-40 flex-col max-md:py-20 max-md:gap-y-5 items-center text-center max-md:px-10'
    >
      <div className='flex flex-col items-center mb-96 max-md:mb-20'>
        <p className='text-[#494EBF] text-xl max-md:text-md font-bold mb-16 max-md:mb-10'>현장 이벤트</p>
        <p className='font-bold text-3xl mb-6 max-md:text-xl'>폴라로이드로 추억을 남겨요</p>
        <p className='font-semibold text-xl max-md:text-sm whitespace-pre-wrap text-center text-[#5B5B5D]'>
          ACC 행사에 참여하며 폴라로이드를 통해 즐거운 모습을 기록해봐요.
        </p>
        <p className='font-semibold text-xl max-md:text-sm whitespace-pre-wrap text-center text-[#5B5B5D] mb-10'>
          현장에 비치된 폴라로이드로 사진을 찍을 수 있어요.
        </p>
        <Image
          src={`${prefix}/assets/images/pic-event.png`}
          alt={"pic-event"}
          width={820}
          height={367}
          className='scale-75 max-md:scale-100 max-md:mb-5 w-[500px] mb-32'
        />
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-[#494EBF] text-xl max-md:text-md font-bold mb-16 max-md:mb-10'>후기 이벤트</p>
        <p className='font-bold text-3xl mb-6 max-md:text-xl'>후기를 널리 공유해주세요</p>
        <p className='font-semibold text-xl max-md:text-sm whitespace-pre-wrap text-center text-[#5B5B5D]'>
          ACC SCD 2024에 참여하고, #ACCSCD2024 태그와 함께 행사를 공유해주세요.
        </p>
        <p className='font-semibold text-xl max-md:text-sm whitespace-pre-wrap text-center text-[#5B5B5D] mb-10'>
          추첨을 통해 n명에게 커피챗을 위한 커피를 드립니다.
        </p>
        <Image
          src={`${prefix}/assets/images/coffee-event.png`}
          alt={"coffee-event"}
          width={820}
          height={367}
          className='scale-75 max-md:scale-100 max-md:mb-5 w-[500px]'
        />
        <p className='font-semibold text-sm whitespace-pre-wrap text-center text-[#5B5B5D] max-md:text-xs mb-32'>
          * 0월 0일까지 후기를 업로드해주신 분들을 대상으로, 0월00일 당첨자분들께 전달드릴 예정입니다.
        </p>
      </div>
    </div>
  );
};
