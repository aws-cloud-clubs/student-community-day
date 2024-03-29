"use client";

import Image from "next/image";
import React from "react";

import { prefix } from "@/constants";

declare global {
  interface Window {
    kakao: any;
  }
}

export const LocationSection: React.FC = () => {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.503, 127.0416),
          level: 4,
        };

        const map = new window.kakao.maps.Map(container, options);
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);
  return (
    <div
      id='location'
      className='w-full h-full min-h-screen flex items-center bg-white px-20 py-40 gap-y-10 max-md:py-10 max-md:gap-y-5 justify-center gap-x-20 max-md:flex-col max-md:px-10'
    >
      <div className='flex flex-col max-md:items-center max-md:gap-x-2.5'>
        <div className='flex flex-col max-md:mb-5'>
          <p className='text-5xl font-bold whitespace-pre-wrap leading-snug max-md:text-3xl max-md:text-center'>{`4월 6일,\n우리 함께 만나요`}</p>
          <p className='text-gray-400 mt-1 max-md:text-md max-md:text-center'>* 대중교통 이용을 권장드려요</p>
        </div>
        <a
          className='py-2 w-28 border border-gray-900 rounded-full font-semibold mt-5 text-center flex justify-center items-center gap-x-1 max-md:mt-0'
          target='_blank'
          href='https://kko.to/DFNgReJc7O'
        >
          <Image src={`${prefix}/assets/icons/navigation-line.svg`} alt={"navigation"} width={16} height={16} />
          <span>길찾기</span>
        </a>
      </div>
      <div id='map' className='rounded-xl w-96 h-52 max-md:w-[310px]' />
    </div>
  );
};
