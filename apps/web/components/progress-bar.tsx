"use client";

import { cn } from "@workspace/ui/lib/utils";

interface ProgressBarProps {
  minValue?: number;
  maxValue?: number;
  rounded?: "none" | "md" | "full";
  color?: "violet" | "pink" | "red" | "orange" | "yellow" | "lime" | "cyan";
  currentValue?: number;
  showPercentage?: boolean;
  disabled?: boolean;
  className?: string;
}

export function ProgressBar({
  minValue = 0,
  maxValue = 100,
  rounded = "none",
  color = "cyan",
  currentValue = 0,
  showPercentage = true,
  disabled = false,
  className,
}: ProgressBarProps) {
  const clampedValue = Math.min(maxValue, Math.max(currentValue, minValue));
  const widthPercentage = ((clampedValue - minValue) / (maxValue - minValue)) * 100;

  return (
    <div
      className={cn(
        "w-full border-brutal-black border-4 focus:outline-none h-10 overflow-hidden bg-white",
        rounded === "none" && "rounded-none",
        rounded === "md" && "rounded-md",
        rounded === "full" && "rounded-full",
        !disabled && "shadow-brutal-sm",
        disabled && "border-[#727272] bg-[#D4D4D4] text-[#676767] hover:bg-[#D4D4D4] hover:shadow-none active:bg-[#D4D4D4]",
        className
      )}
    >
      <div
        style={{ width: `${widthPercentage}%` }}
        className={cn(
          "h-full flex flex-row items-center justify-end overflow-hidden transition-all duration-150 ease-out",
          color === "violet" && !disabled && "bg-brutal-purple text-white",
          color === "pink" && !disabled && "bg-brutal-pink text-white",
          color === "red" && !disabled && "bg-red-500 text-white",
          color === "orange" && !disabled && "bg-orange-500 text-white",
          color === "yellow" && !disabled && "bg-brutal-yellow text-brutal-black",
          color === "lime" && !disabled && "bg-brutal-lime text-brutal-black",
          color === "cyan" && !disabled && "bg-brutal-blue text-white",
          rounded === "none" && "rounded-none",
          rounded === "md" && "rounded-md",
          rounded === "full" && "rounded-full"
        )}
      >
        {showPercentage && !disabled && (
          <h1
            className={cn(
              "mr-3 text-xs font-black",
              widthPercentage !== 100 ? "opacity-75" : "opacity-100"
            )}
          >
            {Math.round(widthPercentage)}%
          </h1>
        )}
      </div>
    </div>
  );
}
