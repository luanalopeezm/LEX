"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQS } from "./data"
import { Eyebrow } from "./ui"

export function Faq() {
  const [abierta, setAbierta] = useState(0)

  return (
    <section className="mx-auto max-w-3xl px-5 py-20 lg:py-24">
      <div className="text-center">
        <div className="flex justify-center">
          <Eyebrow>Preguntas frecuentes</Eyebrow>
        </div>
        <h2 className="font-display mt-4 text-pretty text-3xl font-bold text-slate-900 sm:text-4xl xl:text-5xl">
          Todo lo que necesitás saber sobre LEX
        </h2>
      </div>
      <div className="mt-10 space-y-3">
        {FAQS.map((f, i) => {
          const activa = abierta === i
          return (
            <div
              key={f.q}
              className={`rounded-2xl border transition-colors ${
                activa
                  ? "border-indigo-200 bg-indigo-50/40"
                  : "border-slate-200 bg-white"
              }`}
            >
              <button
                type="button"
                onClick={() => setAbierta(activa ? -1 : i)}
                aria-expanded={activa}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-slate-900 sm:text-base">
                  {f.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${
                    activa ? "rotate-180 text-indigo-600" : ""
                  }`}
                />
              </button>
              {activa && (
                <p className="px-5 pb-5 text-sm md:text-base leading-relaxed text-slate-600">
                  {f.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
