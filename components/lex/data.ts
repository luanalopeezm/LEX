import {
  ShieldCheck,
  Landmark,
  Star,
  Wallet,
  Stethoscope,
  GraduationCap,
  Code2,
  BookOpen,
  MoreHorizontal,
  type LucideIcon,
} from "lucide-react"

export type Categoria = {
  icon: LucideIcon
  nombre: string
  detalle: string
}

export const CATEGORIAS: Categoria[] = [
  {
    icon: Code2,
    nombre: "Digital",
    detalle: "Diseño, desarrollo web, edición de video, redes sociales.",
  },
  {
    icon: BookOpen,
    nombre: "Clases",
    detalle: "Apoyo escolar y universitario, idiomas, preparación de finales.",
  },
  {
    icon: Stethoscope,
    nombre: "Salud",
    detalle: "Controles y cuidados supervisados por un profesional matriculado.",
  },
  {
    icon: MoreHorizontal,
    nombre: "Otro",
    detalle: "Fotografía, asesoría de imagen y todo lo que no entra en una casilla.",
  },
]

export type Paso = {
  n: string
  titulo: string
  texto: string
}

export const PASOS: Paso[] = [
  {
    n: "01",
    titulo: "Explorá",
    texto:
      "Buscá entre servicios digitales, clases, salud y más — filtrados por tipo, precio o estudiante.",
  },
  {
    n: "02",
    titulo: "Contratá",
    texto:
      "Confirmás el servicio y el pago queda retenido por LEX. Todavía no llega a nadie: está en escrow.",
  },
  {
    n: "03",
    titulo: "Se hace el trabajo",
    texto:
      "El estudiante acepta, inicia y entrega. Vos seguís cada cambio de estado en tiempo real.",
  },
  {
    n: "04",
    titulo: "Se libera el pago",
    texto:
      "Al dar el trabajo por completado, LEX libera el pago al estudiante (menos su comisión) y ambas partes se califican.",
  },
]

export type Diferencial = {
  icon: LucideIcon
  titulo: string
  texto: string
}

export const DIFERENCIALES: Diferencial[] = [
  {
    icon: Landmark,
    titulo: "Verificación institucional",
    texto:
      "Cada estudiante está vinculado a una carrera real, en una institución real. Nada de perfiles anónimos prometiendo lo que no pueden cumplir.",
  },
  {
    icon: Wallet,
    titulo: "Escrow real",
    texto:
      "El pago del cliente queda retenido por LEX desde la contratación hasta que el trabajo se completa. Nadie cobra antes de entregar.",
  },
  {
    icon: Star,
    titulo: "Reseñas bidireccionales",
    texto:
      "Estudiantes y clientes se califican mutuamente al cerrar cada trabajo. La reputación se construye de los dos lados de la mesa.",
  },
  {
    icon: ShieldCheck,
    titulo: "Salud con supervisión",
    texto:
      "Los servicios de salud requieren consentimiento informado y un profesional matriculado responsable. No es un marketplace genérico aplicado a la salud.",
  },
]

export type Testimonio = {
  nombre: string
  rol: string
  texto: string
  sobre: string
}

export const TESTIMONIOS: Testimonio[] = [
  {
    nombre: "Diego Fernández",
    rol: "Cliente particular",
    texto: "Quedó espectacular el logo, súper profesional y atento a los cambios.",
    sobre: "sobre el servicio de Camila Ríos, Diseño Gráfico",
  },
  {
    nombre: "Cafetería La Esquina",
    rol: "Cliente empresa",
    texto: "La web quedó impecable y entregó antes de lo pactado.",
    sobre: "sobre el servicio de Mateo Gómez, Sistemas de Información",
  },
  {
    nombre: "Verónica Paz",
    rol: "Cliente particular",
    texto:
      "Muy profesional y cuidadosa, todo realizado bajo supervisión. Confiable.",
    sobre: "sobre el servicio de Sofía Martínez, Odontología",
  },
]

export type Faq = {
  q: string
  a: string
}

export const FAQS: Faq[] = [
  {
    q: "¿Cómo se valida que alguien sea estudiante de verdad?",
    a: "Cada estudiante vincula su perfil a una carrera concreta de una institución del catálogo de LEX. Ese vínculo tiene un estado de verificación propio — no alcanza con decir 'soy estudiante' para empezar a publicar servicios con esa etiqueta.",
  },
  {
    q: "¿Qué pasa con mi dinero hasta que el trabajo esté listo?",
    a: "Queda retenido en escrow dentro de LEX desde el momento en que contratás. Recién se libera al estudiante cuando vos, como cliente, marcás el trabajo como completado.",
  },
  {
    q: "¿Puedo pedir servicios de salud por LEX?",
    a: "Sí, con reglas propias: elegís un paciente, aceptás un consentimiento informado, y el estudiante que acepta el trabajo debe indicar el profesional matriculado que lo supervisa.",
  },
  {
    q: "¿Cuánto cobra LEX de comisión?",
    a: "Un porcentaje configurable sobre cada trabajo (hoy, 10%), que se descuenta únicamente del monto que se libera al estudiante. El cliente paga el precio publicado, sin recargos ocultos.",
  },
  {
    q: "¿Esto es un producto en producción o un prototipo?",
    a: "Hoy LEX es un prototipo funcional: podés probar el flujo completo — registro, activación de perfil de estudiante, contratación, escrow y reseñas — con datos de demostración.",
  },
]

export type Numero = {
  valor: string
  label: string
}

export const NUMEROS: Numero[] = [
  { valor: "10", label: "estudiantes activos" },
  { valor: "18", label: "servicios publicados" },
  { valor: "4", label: "áreas de servicio" },
  { valor: "7", label: "trabajos completados con reseña" },
]
