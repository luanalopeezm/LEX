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
} from "lucide-react";

export type Categoria = {
  icon: LucideIcon;
  nombre: string;
  detalle: string;
};

export const CATEGORIAS: Categoria[] = [
  {
    icon: Code2,
    nombre: "Proyectos cerrados",
    detalle: "Diseño, desarrollo web, edición de video, redes sociales, entre otros.",
  },
  {
    icon: BookOpen,
    nombre: "Clases",
    detalle:
      "Clases particulares y tutorías académicas especializadas, dictadas por estudiantes avanzados con metodologías validadas.",
  },
  {
    icon: Stethoscope,
    nombre: "Salud",
    detalle:
      "Gestión de turnos sobre controles y cuidados supervisados por un profesional matriculado.",
  },
];

export type Paso = {
  n: string;
  titulo: string;
  texto: string;
};

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
];

export type Diferencial = {
  icon: LucideIcon;
  titulo: string;
  texto: string;
};

export const DIFERENCIALES: Diferencial[] = [
  {
    icon: Landmark,
    titulo: "Perfiles Verificados",
    texto:
      "A diferencia de las redes sociales o bolsas de trabajo informales, validamos las historias académicas de cada estudiante para garantizar que contrates talento genuino.",
  },
  {
    icon: Wallet,
    titulo: "Pagos protegidos",
    texto:
      "El pago del cliente queda retenido por LEX desde la contratación hasta que el trabajo se completa.",
  },
  {
    icon: Star,
    titulo: "Reseñas bidireccionales",
    texto:
      "Estudiantes y clientes se califican mutuamente al cerrar cada trabajo. La reputación se construye de los dos lados.",
  },
  {
    icon: ShieldCheck,
    titulo: "Portfolio Premium",
    texto:
      "Cada trabajo exitoso genera automáticamente un portfolio profesional con calificaciones reales, listo para exportarse a LinkedIn.",
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const FAQS: Faq[] = [
  {
    q: "¿Cómo se valida que alguien sea estudiante de verdad?",
    a: "Validamos la identidad y el estado académico de cada estudiante mediante sus certificados oficiales e historias académicas antes de que puedan publicar cualquier servicio. Además, el sistema de calificaciones basadas en proyectos reales asegura que el historial del estudiante esté respaldado por clientes previos.",
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
    a: "Un porcentaje configurable sobre cada trabajo (hoy, 10%), que se descuenta únicamente del monto que se libera al estudiante. El cliente paga el precio publicado, sin recargos.",
  },
  {
    q: "¿Esto es un producto en producción o un prototipo?",
    a: "Hoy LEX es un prototipo funcional: podés probar el flujo completo — registro, activación de perfil de estudiante, contratación, escrow y reseñas — con datos de demostración.",
  },
];
