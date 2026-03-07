import { ChevronDown } from "lucide-react";
import { heroContent } from "../../data/content";
import { useScrollTo } from "../../hooks/useScrollTo";

export function Hero() {
  const { scrollTo } = useScrollTo();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl mb-4 tracking-wider uppercase">
          {heroContent.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          {heroContent.subtitle}
        </p>
        <div className="w-24 h-1 bg-white mx-auto" />
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white hover:text-gray-300 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}