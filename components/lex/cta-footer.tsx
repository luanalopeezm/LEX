import { ArrowRight, Mail, MapPin } from "lucide-react";

export function CtaFinal() {
  return (
    <section className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-5 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-indigo-600 px-8 py-16 text-center text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-indigo-500/40 blur-3xl" />
          <div className="absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-indigo-700/50 blur-3xl" />
        </div>
        <div className="relative">
          <h2 className="font-display text-pretty text-3xl font-bold sm:text-4xl xl:text-5xl">
            ¿Listo para ver a LEX funcionando?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm md:text-base text-indigo-100">
            Probá el flujo completo — registro, contratación, escrow y reseñas —
            con datos de demostración.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://app.somoslex.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm md:text-base font-semibold text-indigo-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-indigo-50"
            >
              Probar el prototipo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const PRODUCTO = [
  { href: "https://app.somoslex.com.ar", label: "Probar el prototipo", external: true },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#diferenciales", label: "Por qué LEX" },
];

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-slate-100 bg-slate-50/60">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px] px-5 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="font-display text-xl font-bold text-slate-900">
              LEX<span className="text-indigo-600">.</span>
            </span>
            <p className="mt-2 max-w-xs text-sm md:text-base text-slate-500">
              Plataforma que conecta estudiantes universitarios con clientes
              que necesitan su talento.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 text-sm md:text-base">
            <div>
              <p className="font-semibold text-slate-900">Producto</p>
              <ul className="mt-3 space-y-2 text-slate-500">
                {PRODUCTO.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="hover:text-indigo-700"
                      {...(l.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Contacto</p>
              <ul className="mt-3 space-y-2.5 text-slate-500">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-400" />
                  somoslex.nea@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  Corrientes, Argentina
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-xs md:text-sm text-slate-400">
          © {new Date().getFullYear()} LEX. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
