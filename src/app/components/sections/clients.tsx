import { SectionHeader } from "../common/SectionHeader";
import { clientsContent } from "../../data/content";

export function Clients() {
  const { tattoos } = clientsContent;

  return (
    <section className="py-20 px-4 md:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          heading={clientsContent.heading}
          subheading={clientsContent.subheading}
          theme="dark"
        />

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
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center ">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  {/* <div className="w-12 h-12 border-2 border-white" /> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-4">{cta.text}</p>
          <button className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wide">
            {cta.buttonLabel}
          </button>
        </div> */}
      </div>
    </section>
  );
}