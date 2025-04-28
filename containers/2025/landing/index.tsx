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
    <section className="relative w-screen h-[240vh] flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      
      {/* 배경 이미지 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={`${prefix}/assets/images/background-2025.png`}
          alt="background-2025"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* ACC 로고 */}
      <div className="mt-4 flex flex-col items-center">
        <Image
          src={`${prefix}/assets/logos/acc.png`}
          alt="Cloud Clubs Logo"
          width={75}
          height={0}
          className="h-auto"
        />
      </div>

      {/* 메인 로고, 타이틀 */}
      <div className="mt-1 flex flex-col items-center">
        <Image
          src={`${prefix}/assets/images/typo-logo-2025.png`}
          alt="Typo Logo 2025"
          width={896}
          height={0}
          className="h-auto object-contain"
        />
        <p className="text-5xl font-semibold text-black mt-2">: ACC와 함께하는 클라우드 여정의 첫 시작</p>
      </div>

      {/* 구름 캐릭터 */}
      <div className="mt-2 flex flex-col items-center">
        <Image
          src={`${prefix}/assets/characters/goorm-main.png`}
          alt="Cloud Character"
          width={623}
          height={542}
          className="top-0 left-0 animate-float object-contain"
        />
      </div>

      {/* 지도 안내 박스는 주석 처리 유지 */}
      <div className="mt-32 flex bg-[#eaf2fe] rounded-2xl shadow-xl p-8 gap-10 items-center min-w-[600px] max-w-5xl justify-center max-md:flex-col max-md:p-6">
        
        {/* 지도 */}
        <div className="rounded-xl overflow-hidden w-[350px] h-[230px] max-md:w-full max-md:h-[200px]">
          <div id="map" className="w-full h-full" />
        </div>

        {/* 텍스트 + 버튼 */}
        <div className="flex flex-col justify-center items-start gap-4 max-md:items-center text-center max-md:text-center">
          <h2 className="text-2xl font-bold text-gray-900">5월 24일, 이곳에서 만나요</h2>
          <p className="text-sm text-gray-400">* 대중교통 이용을 권장드려요</p>
          <a
            className="flex items-center justify-center gap-1 border border-gray-800 rounded-full px-4 py-2 text-sm font-semibold hover:bg-gray-100 transition"
            href="https://kko.to/DFNgReJc7O"
            target="_blank"
          >
            <Image
              src={`${prefix}/assets/icons/navigation-line.svg`}
              alt="navigation"
              width={16}
              height={16}
            />
            <span>길찾기</span>
          </a>
        </div>

      </div>
    </section>
  );
}