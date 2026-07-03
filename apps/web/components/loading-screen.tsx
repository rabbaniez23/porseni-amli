"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [textIdx, setTextIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isBlinking, setIsBlinking] = useState(true);

  const loadingTexts = [
    "BOOTING SYSTEM MIPA...",
    "LOADING GRAPHICS MODULES...",
    "LOADING 4 COMP. BRANCHES...",
    "CONNECTING TO AMLI SERVERS...",
    "SYSTEM READY! START GAME..."
  ];

  // Blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((b) => !b);
    }, 400);
    return () => clearInterval(blinkInterval);
  }, []);

  // Loading progress simulation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Increment by a random value
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(progressInterval);
  }, []);

  // Text indexing based on progress
  useEffect(() => {
    if (progress < 25) {
      setTextIdx(0);
    } else if (progress < 50) {
      setTextIdx(1);
    } else if (progress < 75) {
      setTextIdx(2);
    } else if (progress < 95) {
      setTextIdx(3);
    } else {
      setTextIdx(4);
    }

    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsVisible(false); // Fade out
        const completeTimeout = setTimeout(() => {
          onComplete();
        }, 300); // Wait for transition
        return () => clearTimeout(completeTimeout);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-brutal-black text-white font-heading uppercase flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
        progress === 100 && !isVisible ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.02] pointer-events-none" />

      {/* Arcade cabinet shape wrapper */}
      <div className="max-w-md w-full border-4 sm:border-8 border-white p-6 sm:p-10 bg-[#111111] shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center space-y-8 relative">
        {/* Neon scanline overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none" />

        {/* Blinking game logo */}
        <div className="space-y-2">
          <div className="text-xl sm:text-2xl font-black text-brutal-yellow tracking-widest animate-pulse">
            AMLI Arcade System
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tighter text-white drop-shadow-[0_4px_0_#2563EB]">
            PORSENI 2026
          </h1>
        </div>

        {/* Outer progress bar */}
        <div className="space-y-4">
          <div className="w-full h-8 border-4 border-white bg-neutral-900 p-1 flex items-center">
            <div
              className="h-full bg-brutal-lime transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex justify-between items-center text-[10px] sm:text-xs font-bold text-neutral-400">
            <span>STATUS: LOADING</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Loading text feedback */}
        <div className="h-6 flex items-center justify-center">
          <span className="text-[10px] sm:text-xs font-bold tracking-wider text-brutal-pink">
            {loadingTexts[textIdx]}
          </span>
        </div>

        {/* Flashing Start / insert coin hint */}
        <div className="pt-4 border-t-2 border-dashed border-neutral-800">
          <span
            className={`text-xs text-brutal-blue font-bold tracking-widest transition-opacity duration-200 ${
              isBlinking ? "opacity-100" : "opacity-0"
            }`}
          >
            INSERT COIN TO START
          </span>
        </div>
      </div>
    </div>
  );
}
