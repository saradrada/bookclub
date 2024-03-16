"use client";

import { useState, useEffect } from "react";
import { pt_serif_italic } from "./fonts";

export const TextCarousel = ({ quotes, interval = 8000 }: {quotes: string[], interval: number}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % quotes.length);
    }, interval);

    return () => clearInterval(timer);
  }, [quotes.length, interval]);

  return (
    <div className="flex justify-center items-center w-full h-full bg-slate-800">
      <div className="w-4/5">
        <p className={`text-xl font-semibold text-white text-center ${pt_serif_italic.className}`}>
          {`" ${quotes[currentIndex]} "`}
        </p>
      </div>
    </div>
  );
};
