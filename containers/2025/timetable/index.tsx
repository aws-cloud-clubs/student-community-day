import { prefix } from "@/constants";
import Image from "next/image";
import React from "react";

export default function TimetableSection() {
  return (
    <section className="relative w-screen flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto mt-[10vh]">
      <div className="relative w-[80vw] max-w-[1000px] aspect-[744/930] max-md:w-[95vw]">
        <Image
          src={`${prefix}/images/timetable-2025.png`}
          alt="timetable"
          fill
          className="object-contain rounded-xl"
          priority
        />
      </div>
    </section>
  );
}

// 차후 변경
//   <table className="w-[75vw] table-fixed border-collapse border border-[#1D1D1F] bg-[#FFFFFF]">
//     {/* 헤더 */}
//     <thead className="bg-[#1D1D1F] text-white">
//       <tr>
//         <th className="w-[80px] font-medium">시간</th>
//         {tracks.map((label, idx) => (
//           <th
//             key={idx}
//             className="border-[#1D1D1F] whitespace-pre-line text-center py-4 font-semibold text-xs"
//           >
//             {label}
//           </th>
//         ))}
//       </tr>
//     </thead>

//     <tbody>
//       {/* Keynote */}
//       <tr>
//         <td className="border border-[#1D1D1F] text-center align-middle min-h-[227px]" rowSpan={1}>
          
//         </td>
        
//         <td
//           className="border border-[#1D1D1F] text-center font-semibold"
//           colSpan={3}
//         >
//           13:00-13:50 Keynote
//         </td>
//         <td className="border border-[#1D1D1F]" rowSpan={2}></td>
//       </tr>
//       <tr />

//       {/* 14:00-14:20 */}
//       <tr>
//         <td className="border border-[#1D1D1F] text-center align-top">14:00 - 14:20</td>
//         <td className="border border-[#1D1D1F] bg-[#fef9c3] p-2">
//           <p className="text-xs text-gray-600">14:00 - 14:20</p>
//           <p className="text-sm font-semibold leading-snug">
//             학사 학위도 도전할 수 있는 ML 엔지니어링 세계
//           </p>
//           <p className="text-xs mt-1">이상윤</p>
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#fafafa] p-2">
//           <p className="text-xs text-gray-600">14:00 - 14:20</p>
//           <p className="text-sm font-semibold leading-snug">
//             그 구조, 우리 서비스엔 너무 크지 않나요?
//           </p>
//           <p className="text-xs mt-1">최은소</p>
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#fff7ec] p-2">
//           <p className="text-xs text-gray-600">14:00 - 14:20</p>
//           <p className="text-sm font-semibold leading-snug">
//             AI가 대체하는 개발자 시장, 나는 과연 취업할 수 있을까?
//           </p>
//           <p className="text-xs mt-1">김선우</p>
//         </td>
//         <td className="border border-[#1D1D1F]"></td>
//       </tr>

//       {/* 14:30-15:00 */}
//       <tr>
//         <td className="border border-[#1D1D1F] text-center align-top">14:30 - 15:00</td>
//         <td className="border border-[#1D1D1F] bg-[#e5fcd7] p-2">
//           <p className="text-xs text-gray-600">14:30 - 14:50</p>
//           <p className="text-sm font-semibold">7번의 시행착오 끝에 발견한 나만의 성장 방정식</p>
//           <p className="text-xs mt-1">허은지</p>
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#ecffeb] p-2">
//           <p className="text-xs text-gray-600">14:30 - 14:50</p>
//           <p className="text-sm font-semibold">클라우드에 저장된 내 삶.zip</p>
//           <p className="text-xs mt-1">김동현</p>
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#fff7ec] p-2">
//           <p className="text-xs text-gray-600">14:30 - 14:50</p>
//           <p className="text-sm font-semibold">
//             알람은 울렸는데 원인은 몰라요 : Observability
//           </p>
//           <p className="text-xs mt-1">손수민</p>
//         </td>
//         <td className="border border-[#1D1D1F]"></td>
//       </tr>

//       {/* 15:00-15:40 */}
//       <tr>
//         <td className="border border-[#1D1D1F] text-center align-top" rowSpan={2}>
//           15:00 - 16:00
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#e5fcd7] p-2">
//           <p className="text-xs text-gray-600">15:00 - 15:40</p>
//           <p className="text-sm font-semibold">이직의 산을 넘어 AWS까지</p>
//           <p className="text-xs mt-1">김세용</p>
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#e5edff] p-2">
//           <p className="text-xs text-gray-600">15:00 - 15:40</p>
//           <p className="text-sm font-semibold">Not Like Bedrock ft. PartyRock</p>
//           <p className="text-xs mt-1">최보현</p>
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#fff7ec] p-2">
//           <p className="text-xs text-gray-600">15:00 - 15:40</p>
//           <p className="text-sm font-semibold">1억 트래픽을 견디는 서버 만들기</p>
//           <p className="text-xs mt-1">장영환</p>
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#e5edff] p-2" rowSpan={2}>
//           <p className="text-xs text-gray-600">15:00 - 16:00</p>
//           <p className="text-sm font-semibold">
//             GenAI Workshop: Amazon Bedrock을 활용한 LLM WebApp 구축하기
//           </p>
//           <p className="text-xs mt-1">ACC Korea</p>
//         </td>
//       </tr>
//       <tr />

//       {/* 15:40-16:00 Break */}
//       <tr>
//         <td className="border border-[#1D1D1F] text-center" colSpan={5}>
//           <span className="font-semibold">15:40-16:00 Break</span>
//         </td>
//       </tr>

//       {/* 16:00-17:00 세션들 */}
//       <tr>
//         <td className="border border-[#1D1D1F] text-center align-top" rowSpan={2}>
//           16:00 - 17:00
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#e5edff] p-2">
//           <p className="text-xs text-gray-600">16:00 - 16:40</p>
//           <p className="text-sm font-semibold">Dynamic GraphRAG w/ Amazon Neptune & Bedrock</p>
//           <p className="text-xs mt-1">김민준</p>
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#ffece5] p-2">
//           <p className="text-xs text-gray-600">16:00 - 16:40</p>
//           <p className="text-sm font-semibold">
//             소셜네트워크 데이터를 분석하기 위해 S3와 그래프 DB 애플리케이션이 만난다면?
//           </p>
//           <p className="text-xs mt-1">정이태</p>
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#f4e5ff] p-2">
//           <p className="text-xs text-gray-600">16:00 - 16:40</p>
//           <p className="text-sm font-semibold">Terraform으로 맛보는 CDC Pipeline</p>
//           <p className="text-xs mt-1">장민호</p>
//         </td>
//         <td className="border border-[#1D1D1F]" rowSpan={2}></td>
//       </tr>
//       <tr />

//       {/* 16:50-17:10 */}
//       <tr>
//         <td className="border border-[#1D1D1F] text-center align-top" rowSpan={1}>
//           16:50-17:10
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#fef9c3] p-2">
//           <p className="text-xs text-gray-600">16:50-17:10</p>
//           <p className="text-sm font-semibold">AI, Vibe Coding, 그리고 Serverless</p>
//           <p className="text-xs mt-1">박상운</p>
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#e5edff] p-2">
//           <p className="text-xs text-gray-600">16:50-17:10</p>
//           <p className="text-sm font-semibold">
//             API 외식은 그만, 집에서 만들어 먹는 LLM: AWS Fargate로 만드는 AI 자급자족
//           </p>
//           <p className="text-xs mt-1">이동현</p>
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#f4e5ff] p-2">
//           <p className="text-xs text-gray-600">16:50-17:10</p>
//           <p className="text-sm font-semibold">Argo와 함께하는 도구 선정 이야기</p>
//           <p className="text-xs mt-1">한윤호</p>
//         </td>
//         <td className="border border-[#1D1D1F]"></td>
//       </tr>

//       {/* 17:20-17:40 */}
//       <tr>
//         <td className="border border-[#1D1D1F] text-center align-top" rowSpan={1}>
//           17:20-17:40
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#fff7ec] p-2">
//           <p className="text-xs text-gray-600">17:20-17:40</p>
//           <p className="text-sm font-semibold">300달러에서 2달러로, 로그 적재 비용 개선기</p>
//           <p className="text-xs mt-1">박상수</p>
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#e5fcd7] p-2">
//           <p className="text-xs text-gray-600">17:20-17:40</p>
//           <p className="text-sm font-semibold">나는 그 로켓을 타봤어요</p>
//           <p className="text-xs mt-1">김대현</p>
//         </td>
//         <td className="border border-[#1D1D1F] bg-[#fef9c3] p-2">
//           <p className="text-xs text-gray-600">17:20-17:40</p>
//           <p className="text-sm font-semibold">일단 시작해봐요, 서버리스</p>
//           <p className="text-xs mt-1">이헌제</p>
//         </td>
//         <td className="border border-[#1D1D1F]"></td>
//       </tr>

//       {/* Closing */}
//       <tr>
//         <td className="border border-[#1D1D1F] text-center" colSpan={1}></td>
//         <td className="border border-[#1D1D1F] text-center col-span-4 bg-white font-bold" colSpan={4}>
//           17:40 - 18:00 Closing
//         </td>
//       </tr>
//     </tbody>
//   </table>