import { cn } from "@/lib/utils";

type SeparatorVariant = "cloud-separator-1" | "cloud-separator-2";
type SeparatorTone = "soft" | "bright" | "sky";

type SectionSeparatorProps = {
  variant?: SeparatorVariant;
  flip?: boolean;
  compact?: boolean;
  className?: string;
  tone?: SeparatorTone;
  showWaveFallback?: boolean;
};

const toneMap: Record<SeparatorTone, string> = {
  soft: "text-white/80",
  bright: "text-white/95",
  sky: "text-sky-pale/95",
};

const cloudPaths: Record<SeparatorVariant, string> = {
  "cloud-separator-1":
    "M0 88C40 84 58 48 92 48c19 0 37 10 48 24 8-6 18-9 29-9 24 0 44 17 48 39h10c18 0 33 14 33 32v26H0V88Zm280 16c14-2 25-14 25-29 0-17-14-31-31-31-8 0-16 3-21 8-8-11-20-17-34-17-24 0-43 18-46 41-13 2-23 14-23 28 0 17 13 30 30 30h100Zm138 0c14-2 25-14 25-29 0-17-14-31-31-31-8 0-16 3-21 8-8-11-20-17-34-17-24 0-43 18-46 41-13 2-23 14-23 28 0 17 13 30 30 30h100Zm138 0c14-2 25-14 25-29 0-17-14-31-31-31-8 0-16 3-21 8-8-11-20-17-34-17-24 0-43 18-46 41-13 2-23 14-23 28 0 17 13 30 30 30h100Zm138 0c14-2 25-14 25-29 0-17-14-31-31-31-8 0-16 3-21 8-8-11-20-17-34-17-24 0-43 18-46 41-13 2-23 14-23 28 0 17 13 30 30 30h100Zm138 0c14-2 25-14 25-29 0-17-14-31-31-31-8 0-16 3-21 8-8-11-20-17-34-17-24 0-43 18-46 41-13 2-23 14-23 28 0 17 13 30 30 30h100Zm138 0c14-2 25-14 25-29 0-17-14-31-31-31-8 0-16 3-21 8-8-11-20-17-34-17-24 0-43 18-46 41-13 2-23 14-23 28 0 17 13 30 30 30h100Z",
  "cloud-separator-2":
    "M0 97c28-2 45-28 71-28 13 0 25 6 33 16 9-13 24-21 40-21 24 0 44 18 46 42h8c16 0 29 12 29 28v26H0V97Zm230 9c10-2 18-10 18-22 0-13-11-24-24-24-7 0-13 3-17 7-6-9-16-14-27-14-19 0-34 14-36 32-10 2-18 10-18 22 0 13 11 24 24 24h80Zm110 0c10-2 18-10 18-22 0-13-11-24-24-24-7 0-13 3-17 7-6-9-16-14-27-14-19 0-34 14-36 32-10 2-18 10-18 22 0 13 11 24 24 24h80Zm110 0c10-2 18-10 18-22 0-13-11-24-24-24-7 0-13 3-17 7-6-9-16-14-27-14-19 0-34 14-36 32-10 2-18 10-18 22 0 13 11 24 24 24h80Zm110 0c10-2 18-10 18-22 0-13-11-24-24-24-7 0-13 3-17 7-6-9-16-14-27-14-19 0-34 14-36 32-10 2-18 10-18 22 0 13 11 24 24 24h80Zm110 0c10-2 18-10 18-22 0-13-11-24-24-24-7 0-13 3-17 7-6-9-16-14-27-14-19 0-34 14-36 32-10 2-18 10-18 22 0 13 11 24 24 24h80Zm110 0c10-2 18-10 18-22 0-13-11-24-24-24-7 0-13 3-17 7-6-9-16-14-27-14-19 0-34 14-36 32-10 2-18 10-18 22 0 13 11 24 24 24h80Z",
};

export default function SectionSeparator({
  variant = "cloud-separator-1",
  flip = false,
  compact = false,
  className,
  tone = "soft",
  showWaveFallback = true,
}: SectionSeparatorProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none relative z-[1] -my-px w-full overflow-hidden",
        compact ? "h-14 md:h-16" : "h-20 md:h-24",
        flip && "rotate-180",
        className,
      )}
    >
      {showWaveFallback && (
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className={cn("absolute inset-0 h-full w-full", toneMap[tone])}
        >
          <path
            fill="currentColor"
            d="M0,78 C120,126 240,14 360,62 C480,108 600,24 720,68 C840,112 960,22 1080,62 C1200,102 1320,36 1440,78 L1440,140 L0,140 Z"
          />
        </svg>
      )}

      <svg
        viewBox="0 0 1000 160"
        preserveAspectRatio="none"
        className={cn("absolute inset-0 h-full w-full", toneMap[tone])}
      >
        <path fill="currentColor" d={cloudPaths[variant]} />
      </svg>
    </div>
  );
}
