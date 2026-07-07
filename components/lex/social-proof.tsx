import { Quote, Star } from "lucide-react"
import { NUMEROS, TESTIMONIOS } from "./data"
import { Eyebrow } from "./ui"

export function Numeros() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl"
        />
        <div className="relative">
          <Eyebrow>LEX en números</Eyebrow>
          <p className="mt-3 max-w-md text-sm text-slate-300">
            Corresponden al entorno de demostración de LEX — así se ve la
            plataforma en uso, hoy.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {NUMEROS.map((n) => (
              <div key={n.label}>
                <p className="font-display text-4xl font-semibold text-white sm:text-5xl">
                  {n.valor}
                </p>
                <p className="mt-1.5 text-xs text-slate-400">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Testimonios() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/60">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="max-w-xl">
          <Eyebrow>Lo que dicen</Eyebrow>
          <h2 className="font-display mt-4 text-pretty text-3xl font-semibold text-slate-900 sm:text-4xl">
            Reseñas reales del entorno de demostración
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TESTIMONIOS.map((t) => (
            <figure
              key={t.nombre}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:shadow-md hover:shadow-slate-900/5"
            >
              <Quote className="h-6 w-6 text-indigo-200" />
              <div className="mt-3 flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                {`“${t.texto}”`}
              </blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-900">
                  {t.nombre}
                </p>
                <p className="text-xs text-slate-400">{t.rol}</p>
                <p className="mt-1 text-xs text-slate-400">{t.sobre}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
