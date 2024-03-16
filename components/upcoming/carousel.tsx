"use client";

import { useState, useEffect } from "react";

export const TextCarousel = ({ quotes, interval = 8000 }: {quotes: string[], interval: number}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % quotes.length);
    }, interval);

    return () => clearInterval(timer);
  }, [quotes.length, interval]);

  return (
    <div className="flex justify-center items-center w-full h-full bg-gray-200">
      <div className="w-4/5">
        <p className="text-xl font-semibold text-gray-800 text-center">
          {`" ${quotes[currentIndex]} "`}
        </p>
      </div>
    </div>
  );
};
