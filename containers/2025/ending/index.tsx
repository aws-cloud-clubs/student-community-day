"use client";

import React from "react";
import Image from "next/image";
import { prefix } from "@/constants";

export function EndingSection() {
  return (
    <section className="relative w-screen min-h-[80vh] flex flex-col items-center justify-center overflow-x-hidden px-4 max-md:min-h-[100vh]">
      <div className="flex bg-[rgba(234,242,254,0.9)] backdrop-blur-3xl rounded-2xl shadow-xl p-8 gap-10 items-center w-[50vw] max-w-5xl justify-center max-md:flex-col max-md:p-6 max-md:gap-6 max-md:w-[80vw]">
        <div className="relative w-[60px] h-[60px] self-start max-md:absolute max-md:-top-5 max-md:-left-5">
          <Image
            src={`${prefix}/assets/images/sparkle-emerald.png`}
            alt="sparkle"
            fill
            className="object-contain"
          />
        </div>

        {/* 텍스트 + 버튼 */}
        <div className="flex flex-col justify-center items-center gap-4 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-black text-[#ffffff] stroke-black">
            #ACCSCD2025
          </h1>
          <p className="text-lg md:text-xl font-semibold text-gray-800 leading-snug">
            AWS Cloud Club<br />
            Student Community Day와 함께<br />
            클라우드 여정에 함께하세요!
          </p>
          <p className="text-sm text-gray-400">*참가시 SWAG와 간식이 제공됩니다</p>
          <a
            className="flex items-center justify-center gap-1 border border-gray-800 rounded-full px-4 py-2 text-sm font-semibold bg-white hover:bg-gray-100 transition"
            href="https://event-us.kr/awscloudclubs/event/103453"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={`${prefix}/assets/icons/navigation-line.svg`}
              alt="navigation"
              width={16}
              height={16}
            />
            <span>티켓 예매하기</span>
          </a>
        </div>

        <div className="relative w-[60px] h-[60px] self-end max-md:absolute max-md:-bottom-5 max-md:-right-5">
          <Image
            src={`${prefix}/assets/images/sparkle-pink.png`}
            alt="sparkle"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
