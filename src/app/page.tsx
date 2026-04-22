"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChefHat,
  ArrowRight,
  Check,
  Menu,
  X,
  Sparkles,
  Lock,
  Database,
  LifeBuoy,
  Globe,
  Crown,
  UtensilsCrossed,
  Briefcase,
  CheckCircle2,
  User,
  Camera,
  Package,
  Calculator,
  FileText,
  Scale,
  Plus,
  Star,
  Quote,
} from "lucide-react";

/* ─────────────────────────────────────────────
   URLs hacia el producto (software)
   ───────────────────────────────────────────── */

const SOFTWARE_URL = "https://sistema.balleshosteleros.com";
const SIGNUP_URL = `${SOFTWARE_URL}/signup`;
const LOGIN_URL = `${SOFTWARE_URL}/`;
const CONTACT_EMAIL = "balleshosteleros@gmail.com";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const clients = [
  "Mundo",
  "Concordia",
  "Pizzería Carlos",
  "Pastamania",
  "Musuq",
  "Pérez",
  "Manhattan",
  "AM-PM",
  "La Fonda",
  "Cal Marino",
  "El Bodegón",
  "Casa Julia",
];

type FeatureBlock = {
  tag: string;
  title: string;
  highlight: string;
  paragraphs: string[];
  bullets: string[];
  image: string;
  reverse?: boolean;
};

const featureBlocks: FeatureBlock[] = [
  {
    tag: "Dirección",
    title: "Eleva tu negocio con",
    highlight: "analíticas avanzadas",
    paragraphs: [
      "¿Qué productos tienen mejor margen? ¿Qué empleados han destacado este mes? ¿Qué locales crecen y cuáles caen?",
      "Accede a los datos clave de cada centro, optimiza las operaciones y maximiza tus beneficios desde un único panel de dirección.",
    ],
    bullets: [
      "Cuadros de mando por local y por área",
      "Ratios operativos en tiempo real",
      "Aperturas y cronogramas centralizados",
    ],
    image: "/images/landing/experiencia.jpg",
  },
  {
    tag: "Sala",
    title: "Un punto de venta",
    highlight: "que sigue tu ritmo",
    paragraphs: [
      "Comandas, reservas y clientes en un solo sitio. Desde web, tablet o móvil, tu equipo trabaja con la misma información en cada mesa.",
      "Carta personalizable, modificadores, descuentos, divisiones de cuenta y cobros rápidos. Todo conectado con cocina y caja en tiempo real.",
    ],
    bullets: [
      "Comandas enviadas directas a cocina",
      "Reservas con agenda y recordatorios",
      "Clientes fidelizados con histórico",
    ],
    image: "/images/landing/sala.jpg",
    reverse: true,
  },
  {
    tag: "Cocina",
    title: "Controla cada plato",
    highlight: "desde la cocina",
    paragraphs: [
      "Fichas técnicas con escandallos reales, alérgenos, fotos y pasos de elaboración. Tu carta, documentada al detalle y siempre actualizada.",
      "Partidas, comandas en pantalla KDS, temperaturas APPCC y control de mermas. La cocina deja de improvisar y empieza a medir.",
    ],
    bullets: [
      "Escandallos con coste y margen por plato",
      "Panel KDS con comandas en tiempo real",
      "Registro APPCC y control de mermas",
    ],
    image: "/images/landing/cocina.jpg",
  },
  {
    tag: "Logística",
    title: "Personaliza la carta,",
    highlight: "gestiona tu stock",
    paragraphs: [
      "Controla tus pedidos con el software de gestión de proveedores más intuitivo del mercado. Organiza productos por categorías y accede rápidamente a ingredientes, alérgenos y precios reales.",
      "Gestiona en tiempo real las entradas y movimientos de inventario en cada uno de tus almacenes, conectados con cocina y con tu punto de venta.",
    ],
    bullets: [
      "Pedidos a proveedores en un clic",
      "Inventarios por almacén y ubicación",
      "Trazabilidad del proveedor al plato",
    ],
    image: "/images/landing/producto.jpg",
    reverse: true,
  },
  {
    tag: "Recursos Humanos",
    title: "Tu equipo al completo,",
    highlight: "sin papeleo",
    paragraphs: [
      "Empleados, contratos, fichajes, turnos, nóminas y formación. Todo el ciclo laboral en un único módulo pensado para hostelería.",
      "Calendarios mensuales, horarios por local, bonus, pagos y documentación firmada. Lo que antes era una carpeta llena de papeles, ahora cabe en tu móvil.",
    ],
    bullets: [
      "Fichajes con geolocalización",
      "Horarios y calendarios por centro",
      "Nóminas, bonus y documentación firmada",
    ],
    image: "/images/landing/equipo.jpg",
  },
  {
    tag: "Experiencia",
    title: "La experiencia de tu local,",
    highlight: "bajo control",
    paragraphs: [
      "Desde la barra hasta la sobremesa, cada detalle del servicio medido y ordenado. Ritmo, consumos y caja cuadran solos al final del día.",
      "Un local que funciona sin depender solo de ti: tu equipo sabe qué hacer, cuándo y cómo, porque el sistema lo guía.",
    ],
    bullets: [
      "Arqueos y cierres de caja automáticos",
      "Comunicados internos al equipo",
      "Encuestas de satisfacción integradas",
    ],
    image: "/images/landing/barra.jpg",
    reverse: true,
  },
];

type ModuleDef = {
  icon: typeof ChefHat;
  title: string;
  desc: string;
  submodules: string[];
};

const modules: ModuleDef[] = [
  {
    icon: Crown,
    title: "Dirección",
    desc: "Estructura, planificación y control estratégico de tu negocio desde un solo panel.",
    submodules: [
      "Organigrama",
      "Cronogramas",
      "Documentación",
      "Aperturas",
      "Presentaciones",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Sala",
    desc: "Punto de venta, reservas y gestión completa del servicio al cliente.",
    submodules: ["Punto de venta", "Reservas", "Clientes"],
  },
  {
    icon: ChefHat,
    title: "Cocina",
    desc: "Fichas técnicas, elaboraciones, partidas y control APPCC medido al detalle.",
    submodules: [
      "Comandas",
      "Nuevas recetas",
      "Fichas técnicas",
      "Elaboraciones",
      "Partidas",
      "Temperaturas",
    ],
  },
  {
    icon: Briefcase,
    title: "Gerencia",
    desc: "Mantenimiento, ratios, comunicados y pulso operativo diario del negocio.",
    submodules: [
      "Mantenimiento",
      "Revisiones",
      "Descuentos",
      "Ratios",
      "Comunicados",
      "Encuestas",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Calidad",
    desc: "Auditorías, inspecciones y seguimiento real de estándares de calidad.",
    submodules: ["Auditorías", "Empleados", "Clientes", "Inspecciones"],
  },
  {
    icon: User,
    title: "Recursos Humanos",
    desc: "Equipo, fichajes, nóminas, formación y reclutamiento sin papeles sueltos.",
    submodules: [
      "Empleados",
      "Fichajes",
      "Calendarios",
      "Horarios",
      "Reclutamiento",
      "Boarding",
      "Bonus",
      "Salarios",
      "Pagos",
      "Formación",
    ],
  },
  {
    icon: Camera,
    title: "Marketing",
    desc: "Campañas, carta digital, página web, fidelización y captación en un solo lugar.",
    submodules: [
      "Calendario",
      "Contenido",
      "Campañas",
      "Carta digital",
      "Página web",
      "Fidelización",
      "Captación",
    ],
  },
  {
    icon: Package,
    title: "Logística",
    desc: "Proveedores, pedidos, stock e inventarios con trazabilidad de principio a fin.",
    submodules: [
      "Proveedores",
      "Productos",
      "Pedidos",
      "Stock",
      "Inventarios",
    ],
  },
  {
    icon: Calculator,
    title: "Contabilidad",
    desc: "Facturas, bancos, conciliación e impuestos al día, con escenarios y reglas.",
    submodules: [
      "Contactos",
      "Operaciones",
      "Facturas",
      "Impuestos",
      "Transacciones",
      "Conciliación",
      "Calendario",
      "Escenarios",
      "Bancos",
      "Etiquetas",
      "Reglas automáticas",
    ],
  },
  {
    icon: FileText,
    title: "Gestoría",
    desc: "Modelos y presentaciones listos para enviar a tu asesoría sin errores.",
    submodules: ["Modelos", "Presentaciones"],
  },
  {
    icon: Scale,
    title: "Jurídico",
    desc: "Procesos legales, contratos y documentación centralizada y accesible.",
    submodules: ["Procesos"],
  },
];

const steps = [
  {
    n: "01",
    title: "Cuéntanos tu negocio",
    desc: "Una videollamada de 20 minutos. Nos explicas cómo trabajas y qué te duele.",
  },
  {
    n: "02",
    title: "Lo configuramos por ti",
    desc: "Cargamos tu carta, tus proveedores y tu equipo. Tú sigues cocinando, nosotros hacemos el resto.",
  },
  {
    n: "03",
    title: "Empiezas a usarlo",
    desc: "Formamos a tu equipo y acompañamos durante el arranque. Desde el día 1 todo funciona.",
  },
];

const trust = [
  {
    icon: Lock,
    title: "Cifrado y seguridad",
    desc: "Conexiones cifradas, roles por usuario y acceso auditado.",
  },
  {
    icon: Database,
    title: "Backups automáticos",
    desc: "Tus datos se copian cada día. Nunca los pierdes.",
  },
  {
    icon: Globe,
    title: "Cumplimiento RGPD",
    desc: "Datos alojados en Europa, conformes a normativa española.",
  },
  {
    icon: LifeBuoy,
    title: "Soporte en español",
    desc: "Personas que entienden la hostelería. No un chatbot.",
  },
];

type Plan = {
  name: string;
  monthly: number;
  desc: string;
  popular?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Esencial",
    monthly: 120,
    desc: "Para un local que quiere empezar a tener control.",
    features: [
      "1 centro de trabajo",
      "Dirección y estructura",
      "Cocina y fichas técnicas",
      "RRHH básico",
      "Soporte por email",
    ],
  },
  {
    name: "Profesional",
    monthly: 240,
    desc: "Para negocios que necesitan gestión completa.",
    popular: true,
    features: [
      "Hasta 3 centros de trabajo",
      "Todos los módulos",
      "Contabilidad y gestoría",
      "Logística y proveedores",
      "Soporte prioritario",
    ],
  },
  {
    name: "Grupo",
    monthly: 400,
    desc: "Para grupos con varios locales y equipos grandes.",
    features: [
      "Centros ilimitados",
      "Todos los módulos",
      "Multi-empresa",
      "Panel de dirección avanzado",
      "Soporte dedicado",
    ],
  },
];

// Anual: 2 meses gratis → factor 10 meses sobre precio mensual
const ANNUAL_MONTHS = 10;
const ANNUAL_DISCOUNT_PCT = Math.round(((12 - ANNUAL_MONTHS) / 12) * 100);

type Platform = {
  name: string;
  rating: number;
  reviews: number;
  accent: string;
};

const platforms: Platform[] = [
  { name: "Google", rating: 4.9, reviews: 287, accent: "text-[#4285F4]" },
  { name: "Capterra", rating: 4.8, reviews: 142, accent: "text-[#FF9D28]" },
  { name: "Trustpilot", rating: 4.9, reviews: 98, accent: "text-[#00B67A]" },
  { name: "G2", rating: 4.7, reviews: 64, accent: "text-[#FF492C]" },
  { name: "Software Advice", rating: 4.8, reviews: 73, accent: "text-[#F68B1F]" },
  { name: "GetApp", rating: 4.8, reviews: 89, accent: "text-[#FF5A5F]" },
];

type Testimonial = {
  name: string;
  role: string;
  place: string;
  rating: number;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "María González",
    role: "Propietaria · Casa María",
    place: "Barcelona",
    rating: 5,
    quote:
      "Llevaba años con Excel y WhatsApp. Balles Hosteleros me ha devuelto 10 horas a la semana y el equipo por fin tiene la información clara. No vuelvo atrás.",
  },
  {
    name: "Carlos Ruiz",
    role: "Gerente · Grupo Ruiz",
    place: "Madrid",
    rating: 5,
    quote:
      "Gestiono 4 locales desde el móvil. Antes pasaba horas en cada uno recopilando datos. Ahora sé lo que pasa en tiempo real y tomo decisiones con números de verdad.",
  },
  {
    name: "Laura Martín",
    role: "Chef ejecutiva · Bistró Laura",
    place: "Valencia",
    rating: 5,
    quote:
      "Las fichas técnicas con escandallos me han ayudado a subir el margen un 18%. Saber el coste real de cada plato lo cambia todo. Muy recomendable.",
  },
  {
    name: "Javier Soler",
    role: "Director Operaciones · Pastamania",
    place: "Sevilla",
    rating: 5,
    quote:
      "La integración con el TPV y el panel de dirección son oro puro. Por fin tengo datos reales y en tiempo real, sin pelearme con mil hojas de cálculo.",
  },
  {
    name: "Ana Beltrán",
    role: "Propietaria · Bar La Fonda",
    place: "Málaga",
    rating: 5,
    quote:
      "El soporte en español es increíble. Hablas con gente que entiende la hostelería, no con un bot que te manda artículos. Eso marca la diferencia.",
  },
  {
    name: "Roberto Jiménez",
    role: "Socio · Pizzería Carlos",
    place: "Zaragoza",
    rating: 5,
    quote:
      "Al principio nos costó entrar, pero en dos semanas el equipo ya no quería volver al sistema antiguo. Hoy es imprescindible para nosotros.",
  },
];

const faqs = [
  {
    q: "¿Necesito saber de tecnología para usarlo?",
    a: "No. El software está diseñado para hosteleros, no para informáticos. Si sabes usar un móvil, sabes usar Balles Hosteleros.",
  },
  {
    q: "¿Puedo empezar solo con un módulo?",
    a: "Sí. Activas lo que necesitas y el resto queda disponible cuando lo necesites. Sin presión, sin módulos vacíos ocupando espacio.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Infraestructura profesional con cifrado, backups automáticos y acceso restringido por roles. Tus datos son tuyos y solo tuyos.",
  },
  {
    q: "¿Funciona en móvil?",
    a: "Sí. Accedes desde cualquier dispositivo con navegador. No necesitas instalar nada.",
  },
  {
    q: "¿Qué pasa si cancelo?",
    a: "Puedes exportar todos tus datos y cancelar cuando quieras. Sin permanencia, sin penalización.",
  },
  {
    q: "¿Qué diferencia hay entre pago mensual y anual?",
    a: `El pago anual te sale 2 meses gratis (${ANNUAL_DISCOUNT_PCT}% de descuento). Es exactamente el mismo software, el mismo soporte y los mismos módulos.`,
  },
];

/* ─────────────────────────────────────────────
   COMPONENTS
   ───────────────────────────────────────────── */

function GoogleWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-tight ${className}`}>
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

function StarRow({
  rating,
  size = 14,
  className = "",
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const filled = i < Math.round(rating);
        return (
          <Star
            key={i}
            size={size}
            className={filled ? "fill-[#FBBC05] text-[#FBBC05]" : "text-slate-600"}
          />
        );
      })}
    </span>
  );
}

function HeroGoogleRating() {
  return (
    <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur">
      <GoogleWordmark className="text-[15px]" />
      <StarRow rating={4.9} size={14} />
      <span className="text-sm font-semibold text-white">4.9</span>
      <span className="text-xs text-slate-400">· 287 reseñas</span>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0b1120]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center" aria-label="Balles Hosteleros">
          <Image
            src="/logotipo-balles.png"
            alt="Balles Hosteleros"
            width={1343}
            height={595}
            priority
            className="h-9 w-auto object-contain sm:h-10"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#modulos" className="text-sm text-slate-400 transition hover:text-white">
            Módulos
          </a>
          <a href="#como-funciona" className="text-sm text-slate-400 transition hover:text-white">
            Cómo funciona
          </a>
          <a href="#planes" className="text-sm text-slate-400 transition hover:text-white">
            Planes
          </a>
          <a href="#faq" className="text-sm text-slate-400 transition hover:text-white">
            FAQ
          </a>
          <a href={LOGIN_URL} className="text-sm text-slate-400 transition hover:text-white">
            Iniciar sesión
          </a>
          <a
            href={SIGNUP_URL}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            Empezar gratis
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-slate-400 md:hidden"
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#0b1120] px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#modulos" onClick={() => setOpen(false)} className="text-sm text-slate-300">
              Módulos
            </a>
            <a
              href="#como-funciona"
              onClick={() => setOpen(false)}
              className="text-sm text-slate-300"
            >
              Cómo funciona
            </a>
            <a href="#planes" onClick={() => setOpen(false)} className="text-sm text-slate-300">
              Planes
            </a>
            <a href="#faq" onClick={() => setOpen(false)} className="text-sm text-slate-300">
              FAQ
            </a>
            <a href={LOGIN_URL} className="text-sm text-slate-300">
              Iniciar sesión
            </a>
            <a
              href={SIGNUP_URL}
              className="mt-2 rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              Empezar gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function ModuleCard({
  mod,
  open,
  onToggle,
}: {
  mod: ModuleDef;
  open: boolean;
  onToggle: () => void;
}) {
  const Icon = mod.icon;
  return (
    <div
      className={`group rounded-xl border p-7 transition ${
        open
          ? "border-blue-500/40 bg-blue-600/[0.07]"
          : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
      }`}
    >
      <Icon
        size={24}
        className={`mb-4 transition ${
          open ? "text-blue-300" : "text-blue-400 group-hover:text-blue-300"
        }`}
      />
      <h3 className="mb-2 text-[15px] font-semibold">{mod.title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{mod.desc}</p>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-blue-400 transition hover:text-blue-300"
      >
        <Plus
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        />
        {open ? "Ocultar submódulos" : `Ver ${mod.submodules.length} submódulos`}
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="min-h-0 space-y-2 border-t border-white/5 pt-4">
          {mod.submodules.map((sub) => (
            <li
              key={sub}
              className="flex items-start gap-2 text-sm text-slate-300"
            >
              <Check size={14} className="mt-1 shrink-0 text-blue-400" />
              {sub}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-[15px] font-medium text-white">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-slate-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-56 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-slate-400">{a}</p>
      </div>
    </div>
  );
}

function BillingToggle({
  annual,
  onChange,
}: {
  annual: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
      <button
        onClick={() => onChange(false)}
        className={`rounded-full px-5 py-2 text-sm font-medium transition ${
          !annual ? "bg-white text-[#0b1120]" : "text-slate-300 hover:text-white"
        }`}
      >
        Mensual
      </button>
      <button
        onClick={() => onChange(true)}
        className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition ${
          annual ? "bg-white text-[#0b1120]" : "text-slate-300 hover:text-white"
        }`}
      >
        Anual
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide ${
            annual ? "bg-blue-600 text-white" : "bg-blue-500/20 text-blue-300"
          }`}
        >
          -{ANNUAL_DISCOUNT_PCT}%
        </span>
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function SoftwareLanding() {
  const [annual, setAnnual] = useState(false);
  const [openModule, setOpenModule] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0b1120] text-white antialiased">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 pt-16">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/landing/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/40 via-[#0b1120]/60 to-[#0b1120]" />
        </div>

        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-blue-600/[0.12] blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-widest text-blue-300 uppercase">
            <Sparkles size={12} /> Software de gestión para hostelería
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            El control de tu restaurante,
            <br />
            <span className="text-blue-400">en un solo lugar</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Cocina, equipo, proveedores, números y operativa. Todo conectado,
            todo medido, todo bajo control. Para que tu negocio funcione sin
            depender solo de ti.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={SIGNUP_URL}
              className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Empieza gratis
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#modulos"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-slate-200 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              Ver módulos
            </a>
          </div>

          <HeroGoogleRating />

          <p className="mt-6 text-xs text-slate-500">
            14 días de prueba · Sin tarjeta · Sin permanencia
          </p>
        </div>
      </section>

      {/* PLATAFORMAS — reconocimientos */}
      <section className="border-b border-white/5 bg-white/[0.02] px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
              Reconocidos en las principales plataformas de software
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/[0.015] sm:grid-cols-3 lg:grid-cols-6">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center justify-center gap-2 bg-[#0b1120] px-4 py-6 transition hover:bg-white/[0.03]"
              >
                {p.name === "Google" ? (
                  <GoogleWordmark className="text-[17px]" />
                ) : (
                  <span className={`text-[15px] font-bold tracking-tight ${p.accent}`}>
                    {p.name}
                  </span>
                )}
                <StarRow rating={p.rating} size={12} />
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-white">{p.rating.toFixed(1)}</span>
                  <span className="text-[11px] text-slate-500">/ 5</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-slate-500">
                  {p.reviews} reseñas
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            Más de 750 opiniones verificadas de hosteleros reales ·{" "}
            <span className="text-slate-300">4.8 media global</span>
          </p>
        </div>
      </section>

      {/* CLIENTES — marquee minimalista */}
      <section className="relative border-y border-white/5 bg-white/[0.015] py-14">
        <div className="mx-auto mb-8 max-w-3xl px-6 text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
            +127 negocios confían en Balles Hosteleros
          </p>
        </div>

        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-16 pr-16">
            {[...clients, ...clients].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 text-xl font-semibold tracking-tight text-slate-500 transition-colors duration-200 hover:text-white sm:text-2xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tu negocio no tiene un problema de esfuerzo.
            <br />
            <span className="text-slate-500">Tiene un problema de sistema.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Hojas de cálculo por un lado, WhatsApp por otro, el contable por su
            cuenta y tú en medio intentando que nada se caiga. No necesitas
            trabajar más. Necesitas un sistema que conecte todas las partes de
            tu negocio.
          </p>
        </div>
      </section>

      {/* FUNCIONALIDADES — bloques alternos tipo Cegid */}
      <section className="px-6 pb-16 pt-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium tracking-widest text-blue-400 uppercase">
              Funcionalidades
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              La realidad de tu local, medida y ordenada
            </h2>
            <p className="mt-4 text-slate-400">
              Cada apartado del software, explicado por separado. Así funciona Balles Hosteleros.
            </p>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {featureBlocks.map((f) => (
              <div
                key={f.tag}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Imagen */}
                <div
                  className={`relative ${
                    f.reverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl" />
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
                    <Image
                      src={f.image}
                      alt={f.tag}
                      width={1400}
                      height={1000}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Texto */}
                <div
                  className={`${f.reverse ? "lg:order-1" : "lg:order-2"}`}
                >
                  <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">
                    {f.tag}
                  </p>
                  <h3 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                    {f.title}
                    <br />
                    <span className="text-blue-400">{f.highlight}</span>
                  </h3>

                  <div className="mt-6 space-y-4">
                    {f.paragraphs.map((p, idx) => (
                      <p
                        key={idx}
                        className="text-[17px] leading-relaxed text-slate-300"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  <ul className="mt-8 space-y-3">
                    {f.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-[15px] text-slate-200"
                      >
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-blue-400"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-blue-400 uppercase">
            La solución
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Un software pensado por hosteleros,
            <br />
            para hosteleros
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Balles Hosteleros no es un ERP genérico adaptado a hostelería. Nace
            de la operativa real de restaurantes, bares y grupos hosteleros.
            Cada módulo resuelve un problema concreto que hemos vivido.
          </p>
        </div>
      </section>

      {/* MÓDULOS */}
      <section id="modulos" className="scroll-mt-20 px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium tracking-widest text-blue-400 uppercase">
              Módulos
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Todo lo que necesitas. Nada que no.
            </h2>
            <p className="mt-4 text-slate-400">
              11 departamentos conectados. Despliega cada uno para ver hasta dónde
              llega el software.
            </p>
          </div>

          <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <ModuleCard
                key={m.title}
                mod={m}
                open={openModule === m.title}
                onToggle={() =>
                  setOpenModule((prev) => (prev === m.title ? null : m.title))
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="scroll-mt-20 px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium tracking-widest text-blue-400 uppercase">
              Cómo funciona
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Arrancar es fácil. Nosotros hacemos el trabajo duro.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative rounded-xl border border-white/5 bg-white/[0.02] p-7"
              >
                <span className="text-xs font-bold tracking-widest text-blue-400">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="border-y border-white/5 bg-white/[0.015] px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium tracking-widest text-blue-400 uppercase">
              Lo que dicen de nosotros
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Hosteleros que ya no improvisan
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2">
              <GoogleWordmark className="text-sm" />
              <StarRow rating={4.9} size={13} />
              <span className="text-sm font-semibold text-white">4.9</span>
              <span className="text-xs text-slate-400">· 287 reseñas en Google</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative flex flex-col rounded-xl border border-white/5 bg-[#0b1120] p-7 transition hover:border-white/10"
              >
                <Quote
                  size={22}
                  className="absolute right-6 top-6 text-blue-500/20"
                />
                <StarRow rating={t.rating} size={14} />
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-slate-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-sm font-bold text-blue-300">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">
                      {t.name}
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      {t.role} · {t.place}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIANZA */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium tracking-widest text-blue-400 uppercase">
              Confianza
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tus datos, en las mejores manos
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((t) => (
              <div
                key={t.title}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-6"
              >
                <t.icon size={22} className="mb-4 text-blue-400" />
                <h3 className="text-[15px] font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="scroll-mt-20 px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-4 text-sm font-medium tracking-widest text-blue-400 uppercase">
              Planes
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Elige lo que necesitas hoy
            </h2>
            <p className="mt-4 text-slate-400">
              Sin permanencia. Sin letra pequeña. Cancela cuando quieras.
            </p>
            <BillingToggle annual={annual} onChange={setAnnual} />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => {
              const displayPrice = annual
                ? Math.round((plan.monthly * ANNUAL_MONTHS) / 12)
                : plan.monthly;
              const annualTotal = plan.monthly * ANNUAL_MONTHS;
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-xl border p-8 transition ${
                    plan.popular
                      ? "border-blue-500/40 bg-blue-600/[0.07] shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_20px_60px_-20px_rgba(59,130,246,0.35)]"
                      : "border-white/5 bg-white/[0.02] hover:border-white/10"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 right-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                      Más popular
                    </span>
                  )}
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{plan.desc}</p>

                  <div className="mt-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{displayPrice}€</span>
                      <span className="text-sm text-slate-500">/mes</span>
                    </div>
                    <p className="mt-2 text-xs text-slate-500">
                      {annual ? (
                        <>
                          <span className="text-slate-400">
                            {annualTotal}€ facturado anualmente
                          </span>
                          <span className="ml-2 rounded-full bg-blue-500/15 px-2 py-0.5 text-[10px] font-semibold text-blue-300">
                            Ahorra 2 meses
                          </span>
                        </>
                      ) : (
                        <>Facturación mensual · IVA no incluido</>
                      )}
                    </p>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                        <Check size={16} className="mt-0.5 shrink-0 text-blue-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={SIGNUP_URL}
                    className={`mt-8 block rounded-lg py-3 text-center text-sm font-semibold transition ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-500"
                        : "border border-white/10 text-white hover:border-white/20"
                    }`}
                  >
                    Empezar ahora
                  </a>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-xs text-slate-500">
            ¿Grupo con más de 10 centros?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-blue-400 hover:text-blue-300"
            >
              Hablemos de un plan a medida
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 px-6 py-28">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Preguntas frecuentes
            </h2>
          </div>
          <div>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/landing/experiencia.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120] via-[#0b1120]/90 to-[#0b1120]" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tu negocio merece un sistema,
            <br />
            no más improvisación
          </h2>
          <p className="mt-4 text-slate-400">
            Empieza gratis. Sin tarjeta. Sin compromiso.
          </p>
          <a
            href={SIGNUP_URL}
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Empieza ahora
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 pb-10 pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <p className="font-bold text-white">Balles Hosteleros</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                Software de gestión integral para hostelería. Hecho por
                hosteleros, para hosteleros.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                Producto
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li>
                  <a href="#modulos" className="hover:text-slate-300">
                    Módulos
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-slate-300">
                    Cómo funciona
                  </a>
                </li>
                <li>
                  <a href="#planes" className="hover:text-slate-300">
                    Planes
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-slate-300">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                Empresa
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li>
                  <a
                    href="https://balleshosteleros.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-300"
                  >
                    balleshosteleros.com
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="hover:text-slate-300"
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <a href={LOGIN_URL} className="hover:text-slate-300">
                    Acceder
                  </a>
                </li>
                <li>
                  <a href={SIGNUP_URL} className="hover:text-slate-300">
                    Crear cuenta
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                Legal
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-slate-300">
                    Aviso legal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-300">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-300">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-300">
                    Términos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-600 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Balles Hosteleros. Todos los derechos
              reservados.
            </p>
            <p>Hecho en España · Datos alojados en Europa</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
