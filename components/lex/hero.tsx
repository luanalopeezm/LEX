import {
  ArrowRight,
  Check,
  ShieldCheck,
  Star,
  Wallet,
  BadgeCheck,
} from "lucide-react"
import { Boton, Eyebrow, AvatarIniciales } from "./ui"

const GARANTIAS = [
  "Verificación institucional",
  "Pagos en escrow",
  "Reseñas bidireccionales",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-indigo-50 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <Eyebrow>LEX · Marketplace universitario</Eyebrow>
          <h1 className="font-display mt-5 text-pretty text-4xl font-semibold leading-[1.06] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Conectá con estudiantes universitarios para tus proyectos, clases y
            más
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
            Talento joven, calificado y verificado por su institución. Contratá
            servicios digitales, clases particulares o asistencia supervisada —
            con pagos protegidos hasta que el trabajo esté hecho.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Boton href="/" variante="primario">
              Probar el prototipo
              <ArrowRight className="h-4 w-4" />
            </Boton>
            <Boton href="#estudiantes" variante="secundario">
              ¿Sos estudiante? Ofrecé tus servicios
            </Boton>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
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
    <div className="relative mx-auto w-full max-w-sm">
      {/* Tarjeta principal: perfil de estudiante verificado */}
      <div className="relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/[0.02]">
        <div className="flex items-start gap-4">
          <div className="relative shrink-0">
            <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 opacity-20 blur-sm" />
            <AvatarIniciales
              iniciales="CR"
              className="relative h-14 w-14 text-base ring-4 ring-white"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="truncate text-base font-semibold text-slate-900">
                Camila Ríos
              </p>
              <BadgeCheck className="h-4 w-4 shrink-0 text-indigo-600" />
            </div>
            <p className="text-sm text-slate-500">Diseño Gráfico</p>
            <p className="text-xs text-slate-400">UNNE — Corrientes</p>
          </div>
        </div>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="text-sm font-semibold text-slate-900">5.0</span>
          <span className="text-xs text-slate-400">· 12 reseñas</span>
        </div>

        {/* Chips de servicios */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["Logotipos", "Branding", "Redes"].map((s) => (
            <span
              key={s}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Servicio destacado */}
        <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-700">
              Identidad de marca completa
            </p>
            <p className="text-sm font-semibold text-slate-900">$45.000</p>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700">
            <Wallet className="h-4 w-4" />
            Pago retenido en escrow hasta la entrega
          </div>
        </div>
      </div>

      {/* Chip flotante: verificado */}
      <div className="absolute -right-3 -top-4 flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-lg shadow-slate-900/5">
        <ShieldCheck className="h-3.5 w-3.5" />
        Verificado
      </div>

      {/* Chip flotante: institución */}
      <div className="absolute -bottom-5 -left-4 flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-900/5">
        <AvatarIniciales iniciales="MG" className="h-9 w-9 text-xs" />
        <div className="leading-tight">
          <p className="text-xs font-semibold text-slate-900">Mateo Gómez</p>
          <p className="text-[11px] text-slate-400">UTN — Sistemas</p>
        </div>
        <span className="ml-1 flex items-center gap-0.5 text-amber-400">
          <Star className="h-3 w-3 fill-current" />
          <span className="text-[11px] font-semibold text-slate-700">4.9</span>
        </span>
      </div>
    </div>
  )
}
