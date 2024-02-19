import React from "react";

import { Header } from "@/components";
import { HeroSection, ProgramSection } from "@/containers";

export default function CommunityDay2024() {
  return (
    <main className='w-screen min-h-screen relative flex flex-col items-center'>
      <Header />
      <HeroSection />
      <div className='max-w-[1440px] flex flex-col w-full'>
        <ProgramSection />
      </div>
    </main>
  );
}
