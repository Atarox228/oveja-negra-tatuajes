import { MapPin, Clock, Phone } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { locationContent } from "../../data/content";

export function Location() {
  const { address, hours, phone, booking, mapEmbedUrl } = locationContent;

  return (
    <section className="py-20 px-4 md:px-8 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          heading={locationContent.heading}
          subheading={locationContent.subheading}
          theme="light"
        />

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
                    {address.street}
                    <br />
                    {address.city}
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
                    {hours.map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < hours.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-black flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 uppercase">Teléfono</h3>
                  <p className="text-gray-700">{phone}</p>
                </div>
              </div>
            </div>

            {/* <div className="p-6 border-2 border-black">
              <h3 className="text-xl mb-4 uppercase">{booking.title}</h3>
              <p className="text-gray-700 mb-4">{booking.description}</p>
              <button className="w-full py-3 bg-black text-white hover:bg-gray-800 transition-colors uppercase tracking-wide">
                {booking.buttonLabel}
              </button>
            </div> */}
          </div>

          <div className="relative h-[500px]">
            <div className="w-full h-full border-4 border-black">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del estudio"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}