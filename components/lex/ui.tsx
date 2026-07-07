import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"

type BotonProps = ComponentProps<"a"> & {
  variante?: "primario" | "secundario" | "fantasma"
}

export function Boton({
  variante = "primario",
  className,
  children,
  ...props
}: BotonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
  const variantes = {
    primario:
      "bg-indigo-600 text-white shadow-sm shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-md hover:shadow-indigo-600/25 hover:-translate-y-0.5",
    secundario:
      "border border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:text-indigo-700 hover:bg-indigo-50/50",
    fantasma: "text-slate-600 hover:text-indigo-700",
  }
  return (
    <a className={cn(base, variantes[variante], className)} {...props}>
      {children}
    </a>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
      <span className="h-1 w-1 rounded-full bg-indigo-500" />
      {children}
    </span>
  )
}

export function AvatarIniciales({
  iniciales,
  className,
}: {
  iniciales: string
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 font-semibold text-white",
        className,
      )}
    >
      {iniciales}
    </span>
  )
}
