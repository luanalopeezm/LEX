import { Check, GraduationCap, Sparkles, Target, Eye } from "lucide-react";
import { CATEGORIAS, DIFERENCIALES, PASOS } from "./data";
import { Eyebrow, AvatarIniciales } from "./ui";

export function Problema() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/60">
      <div className="mx-auto grid max-w-7xl 2xl:max-w-[1440px] grid-cols-1 gap-10 px-5 py-16 sm:grid-cols-2">
        <div>
          <Eyebrow>El problema</Eyebrow>
          <p className="font-display mt-4 text-pretty text-2xl font-semibold leading-snug text-slate-900">
            Miles de estudiantes universitarios tienen conocimientos valiosos y
            ningún canal serio para ofrecerlos.
          </p>
          <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600">
            Del otro lado, hay clientes que necesitan trabajos puntuales y buena
            relación precio-calidad, pero no saben a quién confiarle el trabajo.
          </p>
        </div>
        <div className="sm:border-l sm:border-slate-200 sm:pl-10">
          <Eyebrow>Nuestra respuesta</Eyebrow>
          <p className="font-display mt-4 text-pretty text-2xl font-semibold leading-snug text-slate-900">
            Un punto de encuentro donde la identidad y el dinero están
            protegidos.
          </p>
          <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600">
            Creamos una plataforma única que reúne el desarrollo de proyectos,
            clases particulares y turnos clínicos en un solo lugar. Conectamos
            tu necesidad exacta con estudiantes de perfiles académicos
            verificados, garantizando que el pago quede resguardado de forma
            segura hasta que el trabajo se entregue con éxito.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-5 py-20 lg:py-24"
    >
      <div className="max-w-xl">
        <Eyebrow>Cómo funciona</Eyebrow>
        <h2 className="font-display mt-4 text-pretty text-3xl font-bold text-slate-900 sm:text-4xl xl:text-5xl">
          Cuatro pasos, del primer clic al pago liberado
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PASOS.map((p) => (
          <div
            key={p.n}
            className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-indigo-200 hover:shadow-md hover:shadow-slate-900/5"
          >
            <span className="font-display text-4xl font-bold text-indigo-200 transition-colors group-hover:text-indigo-400">
              {p.n}
            </span>
            <h3 className="mt-3 text-base md:text-lg font-semibold text-slate-900">
              {p.titulo}
            </h3>
            <p className="mt-2 text-sm md:text-base leading-relaxed text-slate-600">
              {p.texto}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Diferenciales() {
  return (
    <section
      id="diferenciales"
      className="border-y border-slate-100 bg-slate-50/60"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-5 py-20 lg:py-24">
        <div className="max-w-xl">
          <Eyebrow>En que nos diferenciamos</Eyebrow>
          <h2 className="font-display mt-4 text-pretty text-3xl font-bold text-slate-900 sm:text-4xl xl:text-5xl">
            Una plataforma estructurada para la contratación segura de talento
            regional
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {DIFERENCIALES.map((d) => (
            <div
              key={d.titulo}
              className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-indigo-200 hover:shadow-md hover:shadow-slate-900/5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <d.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-slate-900">
                  {d.titulo}
                </h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed text-slate-600">
                  {d.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Categorias() {
  return (
    <section className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-5 py-20 lg:py-24">
      <div className="max-w-xl">
        <Eyebrow>Nuestros servicios</Eyebrow>
        <h2 className="font-display mt-4 text-pretty text-3xl font-bold text-slate-900 sm:text-4xl xl:text-5xl">
          Tres categorías de servicios unificadas en una sola plataforma
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIAS.map((c) => (
          <div
            key={c.nombre}
            className="group rounded-2xl border border-slate-200 p-6 transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-slate-900/5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base md:text-lg font-semibold text-slate-900">
              {c.nombre}
            </h3>
            <p className="mt-1.5 text-sm md:text-base leading-relaxed text-slate-600">
              {c.detalle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const LADO_ESTUDIANTE = [
  "Accedé a tu primera experiencia laboral real y certificada en tu área de formación",
  "Construí automáticamente un portfolio profesional con calificaciones reales, exportable a LinkedIn.",
  "Generá ingresos genuinos mientras estudiás",
];

const LADO_CLIENTE = [
  "Resolvé necesidades concretas contratando servicios a precios inferiores al mercado tradicional",
  "Reclutá talento validado auditando directamente sus portfolios y evaluaciones de desempeño.",
  "Pagá seguro: el escrow libera el dinero solo al completar",
];

export function Audiencia() {
  return (
    <section
      id="estudiantes"
      className="border-y border-slate-100 bg-slate-50/60"
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-5 py-20 lg:py-24">
        <div className="max-w-xl">
          <Eyebrow>Para quién es LEX</Eyebrow>
          <h2 className="font-display mt-4 text-pretty text-3xl font-bold text-slate-900 sm:text-4xl xl:text-5xl">
            Dos perfiles, un mismo punto de encuentro
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <LadoCard
            icon={GraduationCap}
            titulo="Sos estudiante"
            items={LADO_ESTUDIANTE}
          />
          <LadoCard
            icon={Sparkles}
            titulo="Sos cliente — particular, empresa o agencia"
            items={LADO_CLIENTE}
          />
        </div>
      </div>
    </section>
  );
}

function LadoCard({
  icon: Icon,
  titulo,
  items,
}: {
  icon: typeof GraduationCap;
  titulo: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-lg md:text-xl font-semibold text-slate-900">
        {titulo}
      </h3>
      <ul className="mt-5 space-y-3.5 text-sm md:text-base text-slate-600">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50">
              <Check className="h-3 w-3 text-indigo-600" />
            </span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MisionVision() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/60">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-5 py-20 lg:py-24">
        <div className="max-w-xl">
          <Eyebrow>Misión y visión</Eyebrow>
          <h2 className="font-display mt-4 text-pretty text-3xl font-bold text-slate-900 sm:text-4xl xl:text-5xl">
            Hacia dónde vamos y por qué
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg md:text-xl font-semibold text-slate-900">
              Misión
            </h3>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600">
              Conectar al talento universitario del NEA con empresas, comercios
              y particulares que necesitan resolver problemas concretos, dándole
              a cada estudiante su primera experiencia laboral real y
              certificada, y a cada cliente acceso a talento verificado,
              confiable y accesible.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg md:text-xl font-semibold text-slate-900">
              Visión
            </h3>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600">
              Consolidarnos como la plataforma regional de referencia que
              unifique proyectos, clases y prácticas supervisadas bajo un mismo
              entorno seguro y con respaldo institucional, reteniendo el talento
              joven en el NEA y frenando su migración hacia otras ciudades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const EQUIPO = [
  {
    nombre: "Ruth Ayelen Aquino",
    iniciales: "RA",
    rol: "Cofundadora",
  },
  {
    nombre: "Luana Belén Morales López",
    iniciales: "LM",
    rol: "Cofundadora",
  },
  {
    nombre: "Sergio Ignacio Navarro Acevedo",
    iniciales: "SN",
    rol: "Cofundador",
  },
  {
    nombre: "María Victoria Sandoval",
    iniciales: "MV",
    rol: "Cofundadora",
  },
];

export function Equipo() {
  return (
    <section
      id="equipo"
      className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-5 py-20 lg:py-24"
    >
      <div className="max-w-xl">
        <Eyebrow>Nuestro equipo</Eyebrow>
        <h2 className="font-display mt-4 text-pretty text-3xl font-bold text-slate-900 sm:text-4xl xl:text-5xl">
          Las personas detrás de LEX
        </h2>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600 text-justify">
          Somos un equipo de estudiantes de la Licenciatura en Sistemas en la
          UNNE. Creamos LEX porque vivimos de cerca la necesidad de conectar
          nuestra formación académica con el mundo real.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {EQUIPO.map((persona) => (
          <div
            key={persona.nombre}
            className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-slate-900/5"
          >
            <AvatarIniciales
              iniciales={persona.iniciales}
              className="h-16 w-16 text-lg ring-4 ring-indigo-50"
            />
            <h3 className="mt-4 text-base md:text-lg font-semibold text-slate-900">
              {persona.nombre}
            </h3>
            <p className="mt-1 text-sm md:text-base text-slate-500">
              {persona.rol}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
