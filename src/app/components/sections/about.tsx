import { aboutContent } from "../../data/content";

export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 uppercase tracking-wide">
              {aboutContent.heading}
            </h2>
            <div className="w-20 h-1 bg-black mb-8" />
            {aboutContent.paragraphs.map((text, index) => (
              <p key={index} className="text-lg text-gray-700 mb-4">
                {text}
              </p>
            ))}
          </div>

          <div className="relative">
            <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[500px] object-cover shadow-2xl"
            >
              <source src={`${import.meta.env.BASE_URL}videos/local.webm`} type="video/webm" />
              <source src={`${import.meta.env.BASE_URL}videos/local.mp4`} type="video/mp4" />
            </video>
            <div className="absolute inset-0 border-4 border-black -translate-x-4 -translate-y-4 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}