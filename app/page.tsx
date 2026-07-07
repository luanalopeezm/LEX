import { Nav } from "@/components/lex/nav";
import { Hero } from "@/components/lex/hero";
import {
  Problema,
  ComoFunciona,
  Diferenciales,
  Categorias,
  Audiencia,
  Equipo,
  MisionVision,
} from "@/components/lex/sections";
import { Faq } from "@/components/lex/faq";
import { CtaFinal, Footer } from "@/components/lex/cta-footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <main>
        <Hero />
        <Problema />
        <ComoFunciona />
        <Diferenciales />
        <Categorias />
        <Audiencia />
        <section id="nosotros">
          <Equipo />
          <MisionVision />
        </section>
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
