import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { Boton } from "./ui"

const GARANTIAS = [
  "Verificación institucional",
  "Pagos en escrow",
  "Reseñas bidireccionales",
]

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)] flex-col overflow-hidden pt-12 md:pt-20 lg:pt-28 pb-16 md:pb-24">
      {/* Fondo decorativo sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-indigo-50 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl 2xl:max-w-[1440px] grid-cols-1 items-start gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="font-display mt-5 text-pretty text-4xl font-bold leading-[1.06] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Conectá con estudiantes universitarios para tus proyectos, clases y
            más
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-600 lg:text-xl">
            Talento joven, calificado y verificado por su institución. Contratá
            servicios digitales, clases particulares o asistencia supervisada —
            con pagos protegidos hasta que el trabajo esté hecho.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Boton
              href="https://lex-proto.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              variante="primario"
            >
              Probar el prototipo
              <ArrowRight className="h-4 w-4" />
            </Boton>
            <Boton href="#estudiantes" variante="secundario">
              ¿Sos estudiante? Ofrecé tus servicios
            </Boton>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm font-medium text-slate-500">
            {GARANTIAS.map((g) => (
              <span key={g} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-indigo-600" />
                {g}
              </span>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow índigo detrás de Alex */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="h-[70%] w-[70%] rounded-full bg-indigo-300/40 blur-3xl" />
      </div>

      {/* Alex */}
      <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg group">
        <div className="md:group-hover:animate-float transition-transform">
          <Image
            src="/alex-hero.png"
            alt="Alex, la mascota de LEX"
            width={1198}
            height={1313}
            priority
            className="h-auto w-full object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}
