import type { IconName } from "./icons";

export interface Service {
  slug: string;
  icon: IconName;
  title: string;
  desc: string;
  bullets: string[]; // "qué incluye", resumen de 3 puntos
  // Contenido ampliado, solo disponible hoy para Revisoría Fiscal (ver nota abajo).
  detail?: {
    legalBadge?: string;
    legalNote?: string;
    checklist: string[]; // "¿Es para su empresa?"
    includes: { icon: IconName; t: string; d: string }[]; // "Qué incluye"
    deliverables: { t: string; f: string }[]; // "Entregables"
    steps: { n: string; w: string; t: string; d: string }[]; // "Proceso"
  };
}

// Los 9 servicios y sus bullets salen del mockup de Claude Design (SVC).
// Solo Revisoría Fiscal tiene contenido profundo ya diseñado (plantilla 1c);
// los demás usan la plantilla corta hasta que TriAlliance confirme el detalle
// de cada uno (checklist, entregables, proceso propio).
export const SERVICES: Service[] = [
  {
    slug: "revisoria-fiscal",
    icon: "shield",
    title: "Revisoría Fiscal",
    desc: "Vigilancia permanente y dictamen independiente, como exige la ley.",
    bullets: ["Dictamen sobre estados financieros", "Informes a la asamblea y la junta", "Evaluación continua del control interno"],
    detail: {
      legalBadge: "Obligatoria por ley",
      legalNote: "Para sociedades con activos brutos ≥ 5.000 SMMLV o ingresos brutos ≥ 3.000 SMMLV al 31 de diciembre del año anterior. Ley 43 de 1990, art. 13, parágrafo 2.",
      checklist: [
        "Sus activos brutos superan 5.000 SMMLV",
        "Sus ingresos brutos superan 3.000 SMMLV",
        "Es una sociedad por acciones (S.A.)",
        "Es sucursal de una sociedad extranjera",
        "Sus socios o la junta quieren un control independiente",
      ],
      includes: [
        { icon: "calc", t: "Financiera y contable", d: "Razonabilidad de las cifras bajo NIIF." },
        { icon: "doc", t: "Tributaria", d: "Declaraciones y riesgos frente a la DIAN." },
        { icon: "users", t: "Control interno y nómina", d: "Procesos, controles y seguridad social." },
        { icon: "monitor", t: "Tecnologías de la información", d: "Accesos, respaldos y continuidad." },
        { icon: "scale", t: "Legal", d: "Libros, actas y cumplimiento regulatorio." },
      ],
      deliverables: [
        { t: "Dictamen sobre los estados financieros", f: "Anual" },
        { t: "Informe a la asamblea de accionistas", f: "Anual" },
        { t: "Cartas de recomendaciones de control interno", f: "Trimestral" },
        { t: "Certificaciones que la empresa requiera", f: "A solicitud" },
      ],
      steps: [
        { n: "1", w: "Mes 1", t: "Conocimiento", d: "Entendemos el negocio, sus riesgos y obligaciones." },
        { n: "2", w: "Mes 1", t: "Plan anual", d: "Calendario de visitas y áreas a revisar." },
        { n: "3", w: "Durante el año", t: "Visitas y pruebas", d: "Revisión periódica de soportes y controles." },
        { n: "4", w: "Trimestral", t: "Recomendaciones", d: "Hallazgos priorizados a la administración." },
        { n: "5", w: "Cierre", t: "Dictamen", d: "Opinión firmada y presentación a la asamblea." },
      ],
    },
  },
  {
    slug: "auditoria-externa",
    icon: "docCheck",
    title: "Auditoría Externa",
    desc: "Opinión independiente sobre sus estados financieros, según el alcance que requiera.",
    bullets: ["Alcance definido con usted", "Útil ante bancos, socios o inversionistas", "Informe bajo NIA"],
  },
  {
    slug: "auditoria-financiera-contable",
    icon: "calc",
    title: "Auditoría Financiera y Contable",
    desc: "Verificamos que sus cifras reflejen la realidad de la empresa.",
    bullets: ["Revisión de saldos y conciliaciones", "Aplicación de NIIF", "Ajustes recomendados"],
  },
  {
    slug: "auditoria-tributaria",
    icon: "doc",
    title: "Auditoría Tributaria",
    desc: "Revisamos declaraciones y riesgos fiscales antes que la DIAN.",
    bullets: ["Renta, IVA, retención e ICA", "Mapa de riesgos tributarios", "Soporte ante requerimientos"],
  },
  {
    slug: "control-interno-nomina",
    icon: "users",
    title: "Control Interno y Nómina",
    desc: "Procesos, controles y nómina revisados para reducir errores y fraude.",
    bullets: ["Pruebas a procesos clave", "Liquidación y seguridad social", "Plan de mejora priorizado"],
  },
  {
    slug: "auditoria-ti",
    icon: "monitor",
    title: "Auditoría de TI",
    desc: "Seguridad, accesos y continuidad de sus sistemas de información.",
    bullets: ["Gestión de accesos y perfiles", "Respaldos y continuidad", "Controles del software contable"],
  },
  {
    slug: "auditoria-legal",
    icon: "scale",
    title: "Auditoría Legal",
    desc: "Cumplimiento societario, contractual y regulatorio.",
    bullets: ["Libros y actas societarias", "Contratos y obligaciones", "Reportes a entes de control"],
  },
  {
    slug: "sg-sst",
    icon: "helmet",
    title: "SG-SST",
    desc: "Auditoría e implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo.",
    bullets: ["Diagnóstico frente a estándares mínimos", "Implementación y documentación", "Auditoría anual"],
  },
  {
    slug: "outsourcing-contable",
    icon: "brief",
    title: "Outsourcing Contable",
    desc: "Delegue su contabilidad y enfoque su tiempo en el crecimiento del negocio.",
    bullets: ["Contabilidad mensual bajo NIIF", "Declaraciones tributarias", "Estados financieros para decidir"],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function relatedServices(slug: string, count = 3) {
  return SERVICES.filter((s) => s.slug !== slug).slice(0, count);
}
