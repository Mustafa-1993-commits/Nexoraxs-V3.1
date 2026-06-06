import {
  NEXORAXS_BRAND_ASSETS,
  type NexoraLogoVariant,
} from "./brand-assets";

type NexoraLogoProps = {
  variant?: NexoraLogoVariant;
  alt?: string;
  className?: string;
};

export function NexoraLogo({
  variant = "top",
  alt = "NexoraXS",
  className = "h-8 w-auto",
}: NexoraLogoProps) {
  const src =
    variant === "bottom"
      ? NEXORAXS_BRAND_ASSETS.logoBottom
      : NEXORAXS_BRAND_ASSETS.logoTop;

  return <img src={src} alt={alt} className={className} />;
}
