"use client";

import { useEffect, useState } from "react";
import { ProgressBar } from "./progress-bar";
import { Cpu, Terminal, Shield, HelpCircle } from "lucide-react";

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
        const next = prev + Math.floor(Math.random() * 12) + 4;
        return next > 100 ? 100 : next;
      });
    }, 100);

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
        setIsVisible(false); // Trigger fade-out
        const completeTimeout = setTimeout(() => {
          onComplete();
        }, 300);
        return () => clearTimeout(completeTimeout);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#111111] text-white font-heading uppercase flex flex-col items-center justify-between p-6 sm:p-12 transition-opacity duration-300 ${
        progress === 100 && !isVisible ? "opacity-0" : "opacity-100"
      } border-[12px] sm:border-[24px] border-brutal-yellow`}
    >
      {/* Scanline overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] pointer-events-none" />

      {/* Top Header: System Spec / Terminal Log */}
      <div className="w-full flex flex-col md:flex-row justify-between gap-6 z-10 select-none">
        {/* System parameters */}
        <div className="text-left space-y-1 font-mono text-[10px] sm:text-xs text-neutral-400">
          <div className="flex items-center gap-2 text-white font-bold mb-2">
            <Terminal className="w-4 h-4 text-brutal-yellow" />
            <span>MIPA CORE BOOT DIAGNOSTIC (V2.0.26)</span>
          </div>
          <div>CPU: INTEL MIPA-XEON 16-CORE @ 4.20GHZ</div>
          <div>RAM: 64GB DDR5 MIPA-DUAL CHANNEL</div>
          <div>GPU: NVIDIA RTX MIPA-BRUTAL EDITION</div>
          <div>DISPLAY: 1920x1080 CRT MON. (SCANLINES ACTIVE)</div>
        </div>

        {/* Status flags */}
        <div className="text-left md:text-right space-y-1 font-mono text-[10px] sm:text-xs text-neutral-400">
          <div className="flex items-center md:justify-end gap-2 text-white font-bold mb-2">
            <Cpu className="w-4 h-4 text-brutal-pink" />
            <span>STATUS FLAGS</span>
          </div>
          <div>SECURITY SHIELD: <span className="text-brutal-lime">ACTIVE</span></div>
          <div>DARING MODE: <span className="text-brutal-blue">STABLE</span></div>
          <div>NEO-BRUTALISM: <span className="text-brutal-yellow">COMPILING</span></div>
          <div>VERSION ROUTER: <span className="text-brutal-pink">NEXT.JS 16</span></div>
        </div>
      </div>

      {/* Center Logo Area */}
      <div className="text-center space-y-6 z-10 max-w-lg w-full px-4 select-none">
        <div className="inline-flex p-3 bg-brutal-pink border-3 border-white shadow-brutal-sm rotate-3 animate-bounce duration-[3000ms]">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <div className="space-y-3">
          <div className="text-xl sm:text-2xl font-black text-brutal-yellow tracking-widest animate-pulse">
            AMLI ARCADE SYSTEM
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-[4px_4px_0_#2563EB] uppercase">
            PORSENI 2026
          </h1>
        </div>
      </div>

      {/* Bottom Progress Bar & Coin hint */}
      <div className="max-w-xl w-full space-y-6 z-10 select-none">
        {/* Loading Progress Info */}
        <div className="flex justify-between items-center text-[10px] sm:text-xs font-bold text-neutral-300">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-brutal-lime inline-block animate-ping rounded-full" />
            {loadingTexts[textIdx]}
          </span>
          <span>LOAD: {progress}%</span>
        </div>

        {/* Custom neobrutalism.dev ProgressBar */}
        <ProgressBar
          currentValue={progress}
          color="lime"
          rounded="none"
          showPercentage={false}
          className="h-9 border-white shadow-[4px_4px_0px_#FF4D6D]"
        />

        {/* Flashing hint */}
        <div className="text-center pt-2">
          <span
            className={`text-xs sm:text-sm text-brutal-blue font-black tracking-widest transition-opacity duration-200 ${
              isBlinking ? "opacity-100" : "opacity-0"
            }`}
          >
            ★ INSERT COIN TO PLAY ★
          </span>
        </div>
      </div>
    </div>
  );
}
