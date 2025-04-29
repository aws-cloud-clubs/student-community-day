"use client";

import React from "react";

export const KeynoteSection: React.FC = () => {
  const keynotes = [
    {
      time: "14:00 - 14:20",
      title: "ACCSCD2025 Keynote",
      speaker: "배진수 / ACC in South Korea Regional Captain",
    },
    {
      time: "14:20 - 14:50",
      title: "개발자의 커리어\r\n: 백엔드 vs 프론트엔드를 넘어",
      speaker: "이상현 / Mirror",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center px-6 py-20">
      
      {/* 타이틀 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Walk, Bridge, Bloom</h1>
        <p className="text-lg text-gray-600">클라우드 여정의 첫 걸음, 연결을 통해 성장을 꽃 피워요</p>
      </div>

      {/* Keynote 라벨 */}
      <div className="mb-10 w-full max-w-2xl">
        <div className="bg-[#A0BDFF] text-white font-bold px-8 py-3 w-full rounded-full text-2xl text-center">
          Keynote
        </div>
      </div>

      {/* Keynote 리스트 */}
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {keynotes.map((session, idx) => (
          <div key={idx} className="flex flex-col gap-2 p-6 border-b border-white">
            <p className="text-sm text-gray-500">{session.time}</p>
            <h2 className="text-xl font-bold text-gray-900 whitespace-pre-line">{session.title}</h2>
            <p className="text-sm text-gray-700">{session.speaker}</p>
          </div>
        ))}
      </div>

    </section>
  );
};
