import { MapPin, Clock, Phone } from "lucide-react";

export function Location() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 uppercase tracking-wide">
            Ubicación
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Visítanos en nuestro estudio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 uppercase">Dirección</h3>
                  <p className="text-gray-700">
                    Calle del Arte, 123<br />
                    28001 Madrid, España
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 uppercase">Horario</h3>
                  <p className="text-gray-700">
                    Lunes - Viernes: 10:00 - 20:00<br />
                    Sábados: 11:00 - 18:00<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 uppercase">Teléfono</h3>
                  <p className="text-gray-700">
                    +34 123 456 789
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border-2 border-black">
              <h3 className="text-xl mb-4 uppercase">Reserva Tu Cita</h3>
              <p className="text-gray-700 mb-4">
                Trabajamos con cita previa para garantizar la mejor atención personalizada. 
                Contáctanos para agendar tu sesión.
              </p>
              <button className="w-full py-3 bg-black text-white hover:bg-gray-800 transition-colors uppercase tracking-wide">
                Hacer una Reserva
              </button>
            </div>
          </div>

          <div className="relative h-[500px]">
            <div className="w-full h-full border-4 border-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.396988967183!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288a6bfedd93%3A0xa97fc5e55d1e7a9e!2sPuerta%20del%20Sol!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del estudio"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
