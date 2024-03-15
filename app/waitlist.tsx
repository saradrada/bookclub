"use client";
import React from "react";
import { BackgroundBeams } from "@/components/background-beams";

export function WaitingList() {
  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="pt-10 max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Coming Soon!
          </h1>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}
