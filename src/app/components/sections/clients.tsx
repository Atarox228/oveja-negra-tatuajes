import { SectionHeader } from "../common/SectionHeader";
import { clientsContent } from "../../data/content";

export function Clients() {
  const { tattoos, videos } = clientsContent;

  return (
    <section className="py-20 px-4 md:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          heading={clientsContent.heading}
          subheading={clientsContent.subheading}
          theme="dark"
        />

        {/* Fotos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tattoos.map((tattoo) => (
            <div
              key={tattoo.id}
              className="relative group overflow-hidden aspect-square"
            >
              <img
                src={tattoo.url}
                alt={tattoo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Videos */}
        {videos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {videos.map((video) => (
              <div key={video.id} className="relative overflow-hidden">
                <video
                  src={video.src}
                  poster={video.poster || undefined}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}