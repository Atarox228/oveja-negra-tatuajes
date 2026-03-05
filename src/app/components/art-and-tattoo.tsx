import { Palette, Pen, Target } from "lucide-react";

export function ArtAndTattoo() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 uppercase tracking-wide">
            El Arte y El Tatuaje
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Nuestra filosofía sobre el arte corporal y su significado profundo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border-2 border-black">
              <Palette className="w-10 h-10" />
            </div>
            <h3 className="text-2xl mb-4 uppercase">Nuestro Arte</h3>
            <p className="text-gray-700">
              Fusionamos técnicas tradicionales con estilos contemporáneos. Cada diseño es una 
              obra de arte meticulosamente elaborada, donde la precisión y la creatividad se 
              encuentran para crear piezas atemporales.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border-2 border-black">
              <Pen className="w-10 h-10" />
            </div>
            <h3 className="text-2xl mb-4 uppercase">Nuestro Formato</h3>
            <p className="text-gray-700">
              Trabajamos en blanco y negro, explorando la profundidad del contraste y las sombras. 
              Este estilo atemporal permite que cada línea y cada detalle destaquen con fuerza y elegancia, 
              creando piezas con un impacto visual duradero.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 border-2 border-black">
              <Target className="w-10 h-10" />
            </div>
            <h3 className="text-2xl mb-4 uppercase">Para Qué</h3>
            <p className="text-gray-700">
              Los tatuajes son más que decoración. Son memoria, identidad y expresión. Cada pieza 
              cuenta una historia, marca un momento importante o representa un valor personal. 
              Es arte que vive contigo y evoluciona en tu viaje.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1764640848891-9b23d3632ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXRhaWxlZCUyMGJsYWNrJTIwaW5rJTIwdGF0dG9vfGVufDF8fHx8MTc3MjA2ODQ3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Arte del tatuaje"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-2xl italic">
              "El arte es la forma más intensa de individualismo que el mundo ha conocido."
            </p>
            <p className="text-right mt-2 text-gray-300">— Oscar Wilde</p>
          </div>
        </div>
      </div>
    </section>
  );
}
