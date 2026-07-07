import Image from "next/image"
import { Boton } from "./ui"

const LINKS = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#diferenciales", label: "Por qué LEX" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logo - lex.png"
            alt="LEX"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg"
            priority
          />
          <span className="font-display text-xl font-semibold text-slate-900">
            LEX<span className="text-indigo-600">.</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative transition-colors hover:text-indigo-700 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>
        <Boton href="/" variante="primario" className="hidden sm:inline-flex">
          Probar el prototipo
        </Boton>
      </nav>
    </header>
  )
}