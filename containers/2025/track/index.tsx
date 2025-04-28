"use client";

import Image from "next/image";
import React from "react";
import { prefix } from "@/constants";
import { TrackCard } from "@/components/2025/track";

const trackData = [
  {
    trackNumber: 1,
    trackTitle: "Cloud Walk",
    trackHeaderColor: "#F8FBE6",
    trackTitleColor: "#747860",
    trackDescription: "클라우드의 다양한 이야기를\r\n함께 탐험해요",
    characterImage: "goorm-type-2.png",
    sessions: [
      {
        time: "15:00 - 15:20",
        title: "학사 학위도 도전할 수 있는 ML 엔지니어링 세계",
        speaker: "이상윤 / 중앙대학교",
        tags: ["클라우드", "MLOps"],
      },
      {
        time: "15:30 - 15:50",
        title: "7번의 시행착오 끝에 발견한 나만의 성장 방정식",
        speaker: "허은지 / 서울대학교",
        tags: ["커리어"],
      },
      {
        time: "16:00 - 16:40",
        title: "이직의 산을 넘어 AWS까지",
        speaker: "김세용 / AWS",
        tags: ["커리어"],
      },
      {
        time: "17:00 - 17:40",
        title: "Dynamic GraphRAG w/ Amazon Neptune & Bedrock",
        speaker: "김민조 / 전북대학교",
        tags: ["클라우드", "AI"],
      },
      {
        time: "17:50 - 18:10",
        title: "AI, Vibe Coding, 그리고 Serverless",
        speaker: "박상운 / RECON Labs",
        tags: ["서버리스"],
      },
      {
        time: "18:20 - 18:40",
        title: "300달러에서 2달러로, 로그 적재 비용 개선기",
        speaker: "박상수 / 다이노즈",
        tags: ["인프라"],
      },
    ],
  },
  {
    trackNumber: 2,
    trackTitle: "Cloud Bridge",
    trackHeaderColor: "#D0FFF2",
    trackTitleColor: "#698E84",
    trackDescription: "서비스들의 연결 속에서\r\n아키텍처 설계와 우리의 성장으로 연결",
    characterImage: "goorm-type-3.png",
    sessions: [
      {
        time: "15:00 - 15:20",
        title: "그 구조, 우리 서비스엔 너무 크지 않나요?",
        speaker: "최은소 / ACC Captain",
        tags: ["클라우드"],
      },
      {
        time: "15:30 - 15:50",
        title: "클라우드에 저장된 내 삶.zip",
        speaker: "김동현 / KT DS",
        tags: ["커리어", "인프라"],
      },
      {
        time: "16:00 - 16:40",
        title: "Not Like Bedrock ft. PartyRock",
        speaker: "최보현 / NAEIL",
        tags: ["AI"],
      },
      {
        time: "17:00 - 17:40",
        title: "소셜네트워크 데이터를 분석하기 위해 S3와 그래프 DB 애플리케이션이 만난다면?",
        speaker: "정이태 / GraphUserGroup",
        tags: ["인프라", "DB"],
      },
      {
        time: "17:50 - 18:10",
        title: "API 외식은 그만, 집에서 만들어 먹는 LLM : AWS Fargate로 만드는 AI 자급자족",
        speaker: "이동현 / 나우클라우드",
        tags: ["AI"],
      },
      {
        time: "18:20 - 18:40",
        title: "나는 그 로켓을 타봤어요",
        speaker: "김대현 / 크레프톤",
        tags: ["커리어", "클라우드"],
      },
    ],
  },
  {
    trackNumber: 3,
    trackTitle: "Cloud Bloom",
    trackHeaderColor: "#F4E5FF",
    trackTitleColor: "#746181",
    trackDescription: "클라우드의 가치를 꽃 피우고\r\n조화로운 솔루션의 탐구",
    characterImage: "goorm-type-4.png",  // (추가된 캐릭터 이름, 만약 다른 이름이면 수정해줘!)
    sessions: [
      {
        time: "15:00 - 15:20",
        title: "AI가 대체하는 개발자 시장, 나는 과연 취업할 수 있을까?",
        speaker: "김선우 / AWSKRUG",
        tags: ["인프라"],
      },
      {
        time: "15:30 - 15:50",
        title: "알람은 울렸는데 원인은 몰라요 : Observability",
        speaker: "손수민 / ACC Captain",
        tags: ["모니터링", "인프라"],
      },
      {
        time: "16:00 - 16:40",
        title: "1억 트래픽을 견디는 서버 만들기",
        speaker: "장영환 / ABLY",
        tags: ["인프라"],
      },
      {
        time: "17:00 - 17:40",
        title: "Terraform으로 맛보는 CDC Pipeline",
        speaker: "장민호 / Cloud Club",
        tags: ["클라우드", "IaC"],
      },
      {
        time: "17:50 - 18:10",
        title: "일단 시작해봐요, 서버리스",
        speaker: "이헌제 / AUSG",
        tags: ["클라우드", "서버리스"],
      },
      {
        time: "18:20 - 18:40",
        title: "Argo와 함께하는 도구 선정 이야기",
        speaker: "한윤호 / 중앙대학교",
        tags: ["DevOps"],
      },
    ],
  }
];

export const TrackSection: React.FC = () => {
  return (
    <>
      {trackData.map((track, index) => (
        <section
          key={index}
          className="w-full flex flex-col items-center px-6 py-20 relative overflow-hidden"
        >
          {/* 구름 캐릭터 */}
          <div className="absolute top-0 right-20 max-w-[40vw] z-0">
            <Image
              src={`${prefix}/assets/characters/${track.characterImage}`}
              alt={`Track ${track.trackNumber} Character`}
              width={800}
              height={0}
              className="h-auto object-contain w-full"
            />
          </div>

          {/* 트랙 타이틀 */}
          <div className="w-full max-w-6xl mb-12 z-10">
            <p
              className={`text-2xl text-center py-[5px] px-[25px] w-fit rounded-full font-bold mb-4`}
              style={{
                backgroundColor: track.trackHeaderColor,
                color: track.trackTitleColor,
              }}
            >{`Track ${track.trackNumber}`}</p>
            <h2
              className="text-6xl font-semibold text-gray-900 mb-2"
              style={{ color: track.trackTitleColor }}
            >{track.trackTitle}</h2>
            <p
              className={`text-2xl whitespace-break-spaces`}
              style={{ color: track.trackTitleColor }}
            >{track.trackDescription}</p>
          </div>

          {/* 세션 카드 리스트 */}
          <div className="grid grid-cols-3 gap-6 w-full max-w-6xl max-md:grid-cols-2 z-10">
            {track.sessions.map((session, idx) => (
              <TrackCard
                key={idx}
                time={session.time}
                title={session.title}
                speaker={session.speaker}
                tags={session.tags}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};
