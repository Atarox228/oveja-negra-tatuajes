import { Palette, Pen, Target, type LucideIcon } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { artAndTattooContent } from "../../data/content";

const ICON_MAP: Record<string, LucideIcon> = {
  Palette,
  Pen,
  Target,
};

export function ArtAndTattoo() {
  const { cards, quote } = artAndTattooContent;

  return (
    <section className="py-20 px-4 md:px-8 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          heading={artAndTattooContent.heading}
          subheading={artAndTattooContent.subheading}
          theme="light"
        />

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {cards.map((card) => {
            const Icon = ICON_MAP[card.iconName];
            return (
              <div key={card.title} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border-2 border-black">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl mb-4 uppercase">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            );
          })}
        </div>

        <div className="relative">
          <img
            src={quote.image.src}
            alt={quote.image.alt}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-2xl italic">{quote.text}</p>
            <p className="text-right mt-2 text-gray-300">— {quote.author}</p>
          </div>
        </div>
      </div>
    </section>
  );
}