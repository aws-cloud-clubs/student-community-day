"use client";

import Image from "next/image";
import React from "react";
import { prefix } from "@/constants";

declare global {
  interface Window {
    kakao: any;
  }
}

export function MainLandingSection() {
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
    <section className="relative w-screen h-[240vh] flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto
                        max-md:h-[170vh] max-md:min-h-[1400px] max-md:pt-[10vh]">
      
      {/* 배경 이미지 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={`${prefix}/assets/images/background-2025.png`}
          alt="background-2025"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ACC 로고 */}
      <div className="mt-6 flex flex-col items-center">
        <Image
          src={`${prefix}/assets/logos/acc.png`}
          alt="Cloud Clubs Logo"
          width={60}
          height={0}
          className="h-auto max-md:w-[50px]"
        />
      </div>

      {/* 메인 로고 및 타이틀 */}
      <div className="mt-2 flex flex-col items-center text-center px-4">
        <Image
          src={`${prefix}/assets/images/typo-logo-2025.png`}
          alt="Typo Logo 2025"
          width={800}
          height={0}
          className="h-auto object-contain max-md:w-[280px]"
        />
        <p className="text-4xl md:text-5xl font-semibold text-black mt-3 max-md:text-xl">
          : ACC와 함께하는 클라우드 여정의 첫 시작
        </p>
      </div>

      {/* 구름 캐릭터 */}
      <div className="mt-6 flex flex-col items-center">
        <Image
          src={`${prefix}/assets/characters/goorm-main.png`}
          alt="Cloud Character"
          width={500}
          height={500}
          className="animate-float object-contain ml-[40px] max-md:ml-[8vw] max-md:w-[100vw]"
        />
      </div>

      {/* 안내 박스 */}
      <div className="mt-[60vh] flex bg-[#eaf2fe] rounded-2xl shadow-xl p-8 gap-10 items-center min-w-[300px] max-w-5xl justify-center max-md:mt-[40vh] max-md:flex-col max-md:p-6">
        {/* 지도 */}
        <div className="rounded-xl overflow-hidden w-[350px] h-[230px] max-md:w-full max-md:h-[200px]">
          <div id="map" className="w-full h-full" />
        </div>

        {/* 텍스트 + 버튼 */}
        <div className="flex flex-col justify-center items-end gap-4 text-center max-md:text-center max-md:items-end max-md:w-[90%]">
          <h2 className="text-2xl font-bold text-gray-900 text-right max-md:text-xl">
            5월 24일,
            <br />
            이곳에서 만나요
          </h2>
          <p className="text-sm text-gray-400">* 대중교통 이용을 권장드려요</p>
          <a
            className="flex items-center justify-center gap-1 border bg-white border-gray-800 rounded-full px-4 py-2 text-sm font-normal hover:bg-gray-100 transition max-md:text-[11px]"
            href="https://kko.to/DFNgReJc7O"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={`${prefix}/assets/icons/navigation-line.svg`}
              alt="navigation"
              width={16}
              height={16}
            />
            <span className="text-[11px]">길찾기</span>
          </a>
        </div>
      </div>
    </section>
  );
}
