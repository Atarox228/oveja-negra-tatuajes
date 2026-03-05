export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 uppercase tracking-wide">
              ¿Quiénes Somos?
            </h2>
            <div className="w-20 h-1 bg-black mb-8"></div>
            <p className="text-lg text-gray-700 mb-4">
              Somos un estudio de tatuaje especializado en arte corporal con más de 10 años de experiencia. 
              Nuestro enfoque está en crear piezas únicas que cuenten tu historia personal.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Cada tatuaje es una colaboración entre el artista y el cliente, donde transformamos ideas 
              y emociones en arte permanente. Trabajamos con dedicación y pasión para asegurar que cada 
              diseño sea una obra maestra.
            </p>
            <p className="text-lg text-gray-700">
              En nuestro estudio, no solo hacemos tatuajes, creamos legados que permanecerán contigo 
              para siempre. Tu piel es nuestro lienzo, y tu historia es nuestra inspiración.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1763888647744-c566e723c396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjBzdHVkaW8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIwNjg0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Nuestro estudio"
              className="w-full h-[500px] object-cover shadow-2xl"
            />
            <div className="absolute inset-0 border-4 border-black -translate-x-4 -translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
