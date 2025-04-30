import { SessionModule } from "@/components/2025";


export const KeynoteSection = () => {
  const keynotes = [
    {
      time: "13:00 - 13:20",
      title: "ACCSCD2025 Keynote",
      speaker: "배진수 / ACC in South Korea Regional Captain",
    },
    {
      time: "13:20 - 13:50",
      title: "개발자의 커리어\r\n: 백엔드 vs 프론트엔드를 넘어",
      speaker: "이상현 / Mirror",
    },
  ];

  return (
    <SessionModule
      title="Keynote"
      titleColor="#A0BDFF"
      sessions={keynotes}
    />
  );
};
