type DecorativeBackgroundProps = {
  className?: string;
};

export default function DecorativeBackground({ className = "" }: DecorativeBackgroundProps) {
  return (
    <div aria-hidden className={["pointer-events-none absolute inset-0 -z-10 overflow-hidden", className].join(" ")}>
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-white/35 blur-2xl" />
      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-pale/40 blur-3xl" />
    </div>
  );
}
