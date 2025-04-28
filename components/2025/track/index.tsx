"use client";

import React from "react";

interface TrackCardProps {
  time: string;
  title: string;
  speaker: string;
  tags?: string[];
}

export const TrackCard: React.FC<TrackCardProps> = ({ time, title, speaker, tags }) => {
  return (
    <div className="flex flex-col justify-between bg-[rgba(255,255,255,0.49)] backdrop-blur-md border-[rgba(255,255,255,0.10)] rounded-xl p-6 gap-4 shadow-md hover:shadow-lg transition">
      {/* 세션 시간 */}
      <p className="text-sm text-gray-500">{time}</p>

      {/* 세션 제목 */}
      <h3 className="text-2xl mt-5 mb-5 font-bold text-gray-900">{title}</h3>

      {/* 발표자와 태그 묶음 */}
      <div className="flex gap-2 flex-col">
        {/* 태그가 있을 때만 표시 */}
        {tags && tags.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-xs bg-gray-200 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* 발표자 */}
        <p className="text-md text-[#727272]">{speaker}</p>
      </div>
    </div>
  );
};
