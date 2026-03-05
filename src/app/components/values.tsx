import { Heart, Shield, Sparkles, Users } from "lucide-react";

export function Values() {
  const values = [
    {
      icon: Heart,
      title: "Pasión",
      description: "Amamos lo que hacemos. Cada trazo lleva nuestra dedicación y compromiso con el arte del tatuaje."
    },
    {
      icon: Shield,
      title: "Seguridad",
      description: "Usamos equipos esterilizados y las mejores prácticas de higiene para garantizar tu bienestar."
    },
    {
      icon: Sparkles,
      title: "Originalidad",
      description: "Creamos diseños únicos y personalizados que reflejan tu personalidad e historia individual."
    },
    {
      icon: Users,
      title: "Confianza",
      description: "Construimos relaciones duraderas con nuestros clientes basadas en el respeto y la transparencia."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 uppercase tracking-wide">
            Nuestros Valores
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Los principios que guían cada uno de nuestros trabajos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center p-6 border border-white/20 hover:border-white transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 border-2 border-white group-hover:bg-white transition-all duration-300">
                  <Icon className="w-8 h-8 group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-xl mb-3 uppercase tracking-wide">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
