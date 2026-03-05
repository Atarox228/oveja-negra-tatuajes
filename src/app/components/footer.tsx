import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl mb-6 uppercase tracking-wide">Ink & Soul</h3>
            <p className="text-gray-300 mb-4">
              Estudio de tatuaje especializado en arte corporal en blanco y negro. 
              Creamos arte que cuenta historias.
            </p>
          </div>

          <div>
            <h4 className="text-xl mb-6 uppercase tracking-wide">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span className="text-gray-300">+34 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span className="text-gray-300">info@inkandsoul.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span className="text-gray-300">Calle del Arte, 123<br />28001 Madrid</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl mb-6 uppercase tracking-wide">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="mailto:info@inkandsoul.com"
                className="w-12 h-12 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-300 mt-6">
              Comparte tu tatuaje con nosotros usando
            </p>
            <p className="text-white mt-2 uppercase tracking-wide">
              #InkAndSoul
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-gray-400">
            © 2026 Ink & Soul. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
