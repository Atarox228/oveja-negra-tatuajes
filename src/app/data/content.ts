import { images } from "./images";
// ─── Hero ────────────────────────────────────────────────────────────────────
export const heroContent = {
  title: "Oveja Negra Descarriada",
  subtitle: "Arte en tu piel, perforaciones en tu cuerpo, estiliza tu vida",
  backgroundImage: images.hero
    // "https://images.unsplash.com/photo-1761276297612-f1a149dbdc1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRhdHRvbyUyMGFydGlzdCUyMHdvcmt8ZW58MXx8fHwxNzcyMDY4NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
};

// ─── About ───────────────────────────────────────────────────────────────────
export const aboutContent = {
  heading: "¿Quiénes Somos?",
  paragraphs: [
    "Oveja Negra nace como un espacio donde el arte y la identidad se encuentran.",
    "Creemos que el tatuaje es mucho más que una imagen sobre la piel: es una forma de expresión, una marca personal que representa momentos, ideas y emociones que forman parte de quién sos.",
    "En un mundo que muchas veces empuja a vivir en automático, buscamos que cada tatuaje sea un recordatorio de lo que te hace único. Una pieza con significado, con intención, con historia.",
    "Nuestro trabajo consiste en transformar ideas en arte. Crear diseños que no solo se vean bien, sino que también tengan un propósito para quien los lleva.",
    "Cada tatuaje es un símbolo.",
    "Un momento.",
    "Una decisión.",
    "Porque dentro de cada persona existe un mundo propio, y el arte puede ser una forma de recordarlo todos los días.",
    "En Oveja Negra celebramos lo auténtico, lo genuino y lo diferente."
  ],
  image: {
    src: "https://images.unsplash.com/photo-1763888647744-c566e723c396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjBzdHVkaW8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIwNjg0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Nuestro estudio",
  },
};

// ─── Values ──────────────────────────────────────────────────────────────────
export const valuesContent = {
  heading: "Nuestros Valores",
  subheading: "Los principios que guían cada uno de nuestros trabajos",
  items: [
    {
      iconName: "Heart" as const,
      title: "Pasión",
      description:
        "Amamos lo que hacemos. Cada trazo lleva nuestra dedicación y compromiso con el arte del tatuaje.",
    },
    {
      iconName: "Shield" as const,
      title: "Seguridad",
      description:
        "Usamos equipos esterilizados y las mejores prácticas de higiene para garantizar tu bienestar.",
    },
    {
      iconName: "Sparkles" as const,
      title: "Originalidad",
      description:
        "Creamos diseños únicos y personalizados que reflejan tu personalidad e historia individual.",
    },
    {
      iconName: "Users" as const,
      title: "Confianza",
      description:
        "Construimos relaciones duraderas con nuestros clientes basadas en el respeto y la transparencia.",
    },
  ],
};

// ─── Art & Tattoo ─────────────────────────────────────────────────────────────
export const artAndTattooContent = {
  heading: "El Arte y El Tatuaje",
  subheading: "Nuestra filosofía sobre el arte corporal y su significado profundo",
  cards: [
    {
      iconName: "Palette" as const,
      title: "Nuestro Arte",
      description:
        "Fusionamos técnicas tradicionales con estilos contemporáneos. Cada diseño es una obra de arte meticulosamente elaborada, donde la precisión y la creatividad se encuentran para crear piezas atemporales.",
    },
    {
      iconName: "Pen" as const,
      title: "Nuestro Formato",
      description:
        "Trabajamos en blanco y negro, explorando la profundidad del contraste y las sombras. Este estilo atemporal permite que cada línea y cada detalle destaquen con fuerza y elegancia, creando piezas con un impacto visual duradero.",
    },
    {
      iconName: "Target" as const,
      title: "Para Qué",
      description:
        "Los tatuajes son más que decoración. Son memoria, identidad y expresión. Cada pieza cuenta una historia, marca un momento importante o representa un valor personal. Es arte que vive contigo y evoluciona en tu viaje.",
    },
  ],
  quote: {
    text: "\"El arte es la forma más intensa de individualismo que el mundo ha conocido.\"",
    author: "Oscar Wilde",
    image: {
      src: images.art,
      alt: "Arte del tatuaje",
    },
  },
};

// ─── Clients / Gallery ────────────────────────────────────────────────────────
export const clientsContent = {
  heading: "Nuestros Clientes",
  subheading: "Galería de trabajos realizados. Cada uno es una historia única",
  cta: {
    text: "¿Listo para tu próximo tatuaje?",
    buttonLabel: "Contáctanos",
  },
  tattoos: [
    {
      id: 1,
      url: images.gallery[0],
      alt: "Piercing Oreja",
    },
    {
      id: 2,
      url: images.gallery[1],
      alt: "Piercing Nariz",
    },
    {
      id: 3,
      url: images.gallery[2],
      alt: "Piercing Torso",
    },
    {
      id: 4,
      url: images.gallery[3],
      alt: "Tatuaje Brazo",
    },
    {
      id: 5,
      url: images.gallery[4],
      alt: "Tatuaje Pierna",
    },
    {
      id: 6,
      url: images.gallery[5],
      alt: "Tatuaje Muslo",
    },
  ],
};

// ─── Location ─────────────────────────────────────────────────────────────────
export const locationContent = {
  heading: "Ubicación",
  subheading: "Visítanos en nuestro estudio",
  address: {
    street: "Av. Ángel T. de Alvear 2980",
    city: "Don Torcuato, Provincia de Buenos Aires",
  },
  hours: [
    "Lunes - Domingos: 13:00 - 23:00",
    // "Sábados: 11:00 - 18:00",
    // "Domingos: Cerrado",
  ],
  phone: "+54 11 2678 0827",
  booking: {
    title: "Reserva Tu Cita",
    description:
      "Trabajamos con cita previa para garantizar la mejor atención personalizada. Contáctanos para agendar tu sesión.",
    buttonLabel: "Hacer una Reserva",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.0!2d-58.6189511!3d-34.4860496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbb33430b678d%3A0xa051c5a77d654bf8!2sAv.+%C3%81ngel+T.+de+Alvear+2980%2C+B1611ABO+Gran+Buenos+Aires!5e0!3m2!1ses!2sar!4v1",
};

// ─── Footer ───────────────────────────────────────────────────────────────────
export const footerContent = {
  brand: {
    name: "Oveja Negra",
    tagline: "Tatuajes | Piercings | Venta de piezas ",
  },
  contact: {
    phone: "+54 11 2678 0827",
    // email: "info@inkandsoul.com",
    address: "Av. Ángel T. de Alvear 2980\nDon Torcuato",
  },
  social: {
    hashtag: "#InkAndSoul",
    links: [
      { platform: "Instagram" as const, href: "https://www.instagram.com/ovejadescarriadatatto/" },
      // { platform: "Facebook" as const, href: "https://facebook.com" },
      // { platform: "Email" as const, href: "mailto:info@inkandsoul.com" },
    ],
  },
  copyright: "© 2026 Oveja Negra. Todos los derechos reservados.",
};