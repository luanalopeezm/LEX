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
import { Numeros, Testimonios } from "@/components/lex/social-proof";
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
        <Equipo />
        <MisionVision />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
