export function Clients() {
  const tattoos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1653845508077-3a15db13f807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjB0YXR0b28lMjBkZXNpZ258ZW58MXx8fHwxNzcxOTc3MTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Tatuaje geométrico"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1759806919529-7db386dd4741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHRhdHRvbyUyMGFydHdvcmt8ZW58MXx8fHwxNzcyMDY4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Tatuaje tradicional"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1759346771288-ac905d1b1abf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGF0dG9vJTIwZGVzaWdufGVufDF8fHx8MTc3MjA2NzM5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Tatuaje minimalista"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1764640848891-9b23d3632ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXRhaWxlZCUyMGJsYWNrJTIwaW5rJTIwdGF0dG9vfGVufDF8fHx8MTc3MjA2ODQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Tatuaje detallado"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1761276297612-f1a149dbdc1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRhdHRvbyUyMGFydGlzdCUyMHdvcmt8ZW58MXx8fHwxNzcyMDY4NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Trabajo de tatuaje"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1653845508077-3a15db13f807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjB0YXR0b28lMjBkZXNpZ258ZW58MXx8fHwxNzcxOTc3MTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Diseño geométrico"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 uppercase tracking-wide">
            Nuestros Clientes
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Galería de trabajos realizados. Cada tatuaje es una historia única
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tattoos.map((tattoo) => (
            <div
              key={tattoo.id}
              className="relative group overflow-hidden aspect-square cursor-pointer"
            >
              <img
                src={tattoo.url}
                alt={tattoo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 border-2 border-white"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-4">
            ¿Listo para tu próximo tatuaje?
          </p>
          <button className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wide">
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
}
