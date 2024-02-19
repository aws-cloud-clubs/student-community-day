import { Program } from "@/types";

export const TRACK_1: Program[] = [
  {
    startAt: "11:00",
    endAt: "11:40",
    title: "첫 배포한 실제 서비스의 아키텍쳐 설명과 개선점 도출",
    description:
      "아키텍처를 설계할 때 서비스 사용 이유와 발생한 문제점을 설명합니다. AWS의 어떤 서비스를 사용해야 문제점을 해결할 수 있을지 발표합니다.",
    level: "BASIC",
    presenter: {
      name: "임주원",
      affiliation: "가톨릭대학교(ACC_CUK)",
    },
  },
  {
    startAt: "12:00",
    endAt: "12:40",
    title: "아키텍처 찍먹해보기 및 현실세계의 아키텍처",
    description:
      "아키텍처에 대해서 실무에서는 어떻게 사용을 하고 있는지, 어떤 방식의 적절한 아키텍처를 고려해야하는지 공유합니다.",
    level: "BASIC",
    presenter: {
      name: "김민태",
      affiliation: "우아한형제들",
    },
  },
  {
    startAt: "13:00",
    endAt: "13:40",
    title: "생성형 AI 스타트업의 서비스가 Full Serverless로 동작하는 이유",
    description: "Serverless 아키텍처를 도입하게 된 배경, 장점, 가능성을 실제 동작하는 Demo와 함께 알아봅니다.",
    level: "BASIC",
    presenter: {
      name: "박상운",
      affiliation: "리콘랩스",
    },
  },
  {
    startAt: "14:00",
    endAt: "14:40",
    title: "인프라 모니터링 및 알람 설정",
    description: "현업에서도 많이 사용하는 데이터독을 통해 인프라 모니터링 및 알람을 설정하는 방법을 소개합니다.",
    level: "BASIC",
    presenter: {
      name: "윤창현",
      affiliation: "한양대학교",
    },
  },
];
