"use client";

import { SessionModuleProps } from "@/types/session";
import React from "react";

export const SessionModule: React.FC<SessionModuleProps> = ({
  title,
  titleColor = "#A0BDFF",
  sessions,
}) => {
  return (
    <section className="w-full flex flex-col items-center px-6 py-20">
      
      {/* 타이틀 */}
      <div className="mb-10 w-full max-w-2xl max-md:mb-2">
        <div
          className="text-white font-bold px-8 py-3 w-full rounded-full text-2xl text-center"
          style={{ backgroundColor: titleColor }}
        >
          {title}
        </div>
      </div>

      {/* 세션 리스트 */}
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        {sessions.map((session, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 p-6 border-b border-white"
          >
            <p className="text-sm text-gray-500">{session.time}</p>
            <h2 className="text-xl font-bold text-gray-900 whitespace-pre-line">
              {session.title}
            </h2>
            <p className="text-sm text-gray-700">{session.speaker}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
