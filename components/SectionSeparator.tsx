type SectionSeparatorProps = {
  className?: string;
};

export default function SectionSeparator({ className = "" }: SectionSeparatorProps) {
  return <div aria-hidden className={["border-t-2 border-dashed border-sky/30", className].join(" ")} />;
}
