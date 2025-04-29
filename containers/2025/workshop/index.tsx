import { SessionModule } from "@/components/2025";


export const HandsOnWorkshopSection = () => {
  const keynotes = [
    {
      time: "15:00 - 16:00",
      title: "GenAI Workshop\r\nAmazon Bedrock을 활용한 LLM WebApp 구축하기",
      speaker: "ACC Korea / 100, 101호",
    },
  ];

  return (
    <SessionModule
      title="Hands-On Workshop"
      titleColor="#FFAFA3"
      sessions={keynotes}
    />
  );
};
