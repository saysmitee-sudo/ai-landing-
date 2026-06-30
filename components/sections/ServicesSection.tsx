import { CharacterCarousel } from "@/components/sections/CharacterCarousel";
import { CollectionCarousel } from "@/components/sections/CollectionCarousel";
import { SocialContentCarousel } from "@/components/sections/SocialContentCarousel";

export function ServicesSection() {
  return (
    <div id="services" className="relative overflow-hidden">
      <CharacterCarousel />
      <CollectionCarousel />
      <SocialContentCarousel />
    </div>
  );
}
