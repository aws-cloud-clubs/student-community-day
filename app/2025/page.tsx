import { MainLandingSection } from "@/containers/2025";
import { EndingSection } from "@/containers/2025/\bending";
import { KeynoteSection } from "@/containers/2025/session";
import TimetableSection from "@/containers/2025/timetable";
import { TrackSection } from "@/containers/2025/track";
import { HandsOnWorkshopSection } from "@/containers/2025/workshop";
import React from "react";

export default function CommunityDay2025() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden items-center">
      <MainLandingSection />
      <div className="w-screen bg-[#C6DAFF] flex flex-col justify-center">
        <KeynoteSection />
        <TrackSection />
        <HandsOnWorkshopSection />
        <TimetableSection />
        <EndingSection />
      </div>
    </main>
  );
}
