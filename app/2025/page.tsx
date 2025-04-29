import { MainLandingSection } from "@/containers/2025";
import { KeynoteSection } from "@/containers/2025/session";
import { TrackSection } from "@/containers/2025/track";
import React from "react";

export default function CommunityDay2025() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden items-center">
      <MainLandingSection />
      <div className="w-screen bg-[#C6DAFF] flex flex-col justify-center">
        <KeynoteSection />
        <TrackSection />
      </div>
    </main>
  );
}
