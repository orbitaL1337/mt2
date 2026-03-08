import Image from "next/image";

type PosterCardVariant = "hero" | "gallery";
type PosterCardSize = "sm" | "md" | "lg" | "full";

type PosterCardProps = {
  image: string;
  alt: string;
  variant?: PosterCardVariant;
  rotation?: string;
  size?: PosterCardSize;
  className?: string;
  priority?: boolean;
};

const sizeClasses: Record<PosterCardSize, string> = {
  sm: "w-[220px]",
  md: "w-[250px]",
  lg: "w-[280px]",
  full: "w-full",
};

const variantClasses: Record<PosterCardVariant, string> = {
  hero: "rounded-2xl border-8 border-white bg-white shadow-soft-lg",
  gallery: "rounded-2xl border-8 border-white bg-white p-2 shadow-soft-lg",
};

const imageClasses: Record<PosterCardVariant, string> = {
  hero: "h-auto w-full rounded-xl",
  gallery: "h-auto w-full rounded-xl",
};

export default function PosterCard({
  image,
  alt,
  variant = "gallery",
  rotation = "",
  size = "full",
  className = "",
  priority = false,
}: PosterCardProps) {
  const wrapperClassName = [variantClasses[variant], sizeClasses[size], rotation, className].filter(Boolean).join(" ");

  return (
    <article className={wrapperClassName}>
      <Image src={image} alt={alt} width={420} height={560} className={imageClasses[variant]} priority={priority} />
    </article>
  );
}
