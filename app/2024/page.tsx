import React from "react";

import { Header } from "@/components";
import { EventSection, HeroSection, LocationSection, ProgramSection } from "@/containers";

export default function CommunityDay2024() {
  return (
    <main className='w-screen min-h-screen relative flex flex-col items-center'>
      <Header />
      <div className='sticky top-0'>
        <HeroSection />
      </div>
      <div className='w-screen bg-white z-10 flex justify-center'>
        <div className='max-w-[1440px] flex flex-col w-full z-10'>
          <ProgramSection />
          <LocationSection />
          <EventSection />
        </div>
      </div>
    </main>
  );
}
