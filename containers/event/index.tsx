import Image from "next/image";
import React from "react";

export const EventSection: React.FC = () => {
  return (
    <div
      id='event'
      className='w-full h-full min-h-screen flex relative bg-white px-10 py-40 flex-col max-md:py-10 max-md:gap-y-5 items-center'
    >
      <Image src={"/assets/images/event.png"} alt={"event"} width={264} height={94} className='mb-32 max-md:scale-75' />
      <p className='font-bold text-3xl mb-10'>후기를 널리 공유해주세요</p>
      <p className='font-semibold text-xl whitespace-pre-wrap text-center text-gray-500'>{`ACC SCD 2024에 참여하고, #SDC2024 태그와 함께 행사를 공유해주세요.`}</p>
      <p className='font-semibold text-xl whitespace-pre-wrap text-center text-gray-500 mb-32'>
        추첨을 통해 n명에게 000을 드립니다.
      </p>
      <p className='font-semibold text-xl whitespace-pre-wrap text-center text-gray-500'>0월 0일 까지</p>
    </div>
  );
};
