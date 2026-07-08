"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Boton } from "./ui"

const LINKS = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#diferenciales", label: "Por qué LEX" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
]

export function Nav() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (menuAbierto) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    return () => document.body.classList.remove("overflow-hidden")
  }, [menuAbierto])

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-slate-100 bg-white/80 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white"
      }`}
    >
      <nav className="mx-auto flex h-16 md:h-20 max-w-7xl 2xl:max-w-[1440px] items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logo - lex.png"
            alt="LEX"
            width={36}
            height={36}
            className="h-14 w-14 rounded-lg"
            priority
          />
        </a>

        {/* Links desktop */}
        <div className="hidden items-center gap-8 text-sm md:text-base font-medium text-slate-600 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative transition-colors hover:text-indigo-700 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <Boton
          href="https://lex-proto.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          variante="primario"
          className="hidden md:inline-flex"
        >
          Probar el prototipo
        </Boton>
        </div>

        {/* CTA desktop */}
        

        {/* Botón hamburguesa mobile */}
        <button
          type="button"
          onClick={() => setMenuAbierto((v) => !v)}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
        >
          {menuAbierto ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Menú mobile */}
      <div
        className={`absolute left-0 right-0 top-full overflow-hidden border-b border-slate-100 bg-white/95 backdrop-blur-md transition-all duration-200 md:hidden ${
          menuAbierto
            ? "max-h-[26rem] opacity-100 shadow-lg"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuAbierto(false)}
              className="border-b border-slate-100 py-4 text-lg font-medium text-slate-700 transition-colors hover:text-indigo-700"
            >
              {l.label}
            </a>
          ))}
          <Boton
            href="https://lex-proto.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            variante="primario"
            onClick={() => setMenuAbierto(false)}
            className="my-4 w-full"
          >
            Probar el prototipo
          </Boton>
        </div>
      </div>
    </header>
  )
}
