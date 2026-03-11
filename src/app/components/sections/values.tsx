import { Heart, Shield, Sparkles, Users, type LucideIcon } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { valuesContent } from "../../data/content";

const ICON_MAP: Record<string, LucideIcon> = {
  Heart,
  Shield,
  Sparkles,
  Users,
};

export function Values() {
  return (
    <section className="py-20 px-4 md:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          heading={valuesContent.heading}
          subheading={valuesContent.subheading}
          theme="dark"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuesContent.items.map((value) => {
            const Icon = ICON_MAP[value.iconName];
            return (
              <div
                key={value.title}
                className="text-center p-6 border border-white/20 hover:border-white transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 border-2 border-white group-hover:bg-white transition-all duration-300">
                  <Icon className="w-8 h-8 group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-xl mb-3 uppercase tracking-wide">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}