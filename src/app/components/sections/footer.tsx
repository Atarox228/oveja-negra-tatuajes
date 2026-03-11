import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { footerContent } from "../../data/content";

const SOCIAL_ICON_MAP: Record<string, LucideIcon> = {
  Instagram,
  Facebook,
  Email: Mail,
};

export function Footer() {
  const { brand, contact, social, copyright } = footerContent;

  return (
    <footer className="bg-black text-white border-t border-white/20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          <div>
            <h3 className="text-2xl mb-6 uppercase tracking-wide">{brand.name}</h3>
            <p className="text-gray-300 mb-4">{brand.tagline}</p>
          </div>

          <div>
            <h4 className="text-xl mb-6 uppercase tracking-wide">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span className="text-gray-300">{contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span className="text-gray-300">{contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span className="text-gray-300 whitespace-pre-line">{contact.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl mb-6 uppercase tracking-wide">Síguenos</h4>
            <div className="flex gap-4">
              {social.links.map(({ platform, href }) => {
                const Icon = SOCIAL_ICON_MAP[platform];
                return (
                  <a
                    key={platform}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="w-12 h-12 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
                    aria-label={platform}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-300 mt-6">Comparte tu tatuaje con nosotros usando</p>
            <p className="text-white mt-2 uppercase tracking-wide">{social.hashtag}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-gray-400">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}