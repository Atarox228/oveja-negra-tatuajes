import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1761276297612-f1a149dbdc1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRhdHRvbyUyMGFydGlzdCUyMHdvcmt8ZW58MXx8fHwxNzcyMDY4NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl mb-4 tracking-wider uppercase">
          Ink & Soul
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Arte en tu piel, historias para toda la vida
        </p>
        <div className="w-24 h-1 bg-white mx-auto"></div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white hover:text-gray-300 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
