// Datos reales confirmados en el mockup de Claude Design.
// Lo marcado [pendiente] se reemplaza cuando TriAlliance confirme el dato.
export const SITE = {
  name: "TriAlliance Auditores S.A.S.",
  shortName: "TriAlliance",
  tagline: "Su confianza, nuestro mayor compromiso.",
  phoneDisplay: "300 992 9223", // espacios no separables: no debe partirse a mitad de número
  phoneIntl: "573009929223", // para enlaces wa.me (57 = Colombia)
  email: "info@trialliance.co",
  nit: "[000.000.000-0]", // pendiente
  address: "[Dirección, ciudad]", // pendiente
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export function mailLink(subject: string) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
}

// "Solicitar asesoría" siempre lleva al formulario; el servicio (si se conoce)
// viaja por query param para que la página de contacto lo preseleccione.
export function contactLink(service?: string) {
  return service ? `/contacto?servicio=${encodeURIComponent(service)}` : "/contacto";
}

export const ORIGENES = ["Google u otro buscador", "Recomendación", "LinkedIn u otra red social", "Otro"];

export const NAV_ITEMS = [
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Cómo trabajamos", href: "/como-trabajamos" },
  { label: "Casos", href: "/casos" },
  { label: "Recursos", href: "/recursos" },
  { label: "Contacto", href: "/contacto" },
];

export const TRUST_BAR = [
  { icon: "shield", k: "Inscrita ante la JCC", v: "Junta Central de Contadores" },
  { icon: "badge", k: "T.P. vigente", v: "Contadores públicos que firman cada informe" },
  { icon: "book", k: "NIA y NIIF", v: "Marco técnico del Decreto 2420 de 2015" },
  { icon: "building", k: "[00] empresas", v: "atendidas desde [año]" }, // pendiente
  { icon: "clock", k: "[00] años", v: "de trayectoria del equipo" }, // pendiente
];

export const NEEDS = [
  { icon: "shield", q: "Mi empresa superó los topes y ahora debe tener revisor fiscal", svc: "Revisoría Fiscal", slug: "revisoria-fiscal" },
  { icon: "docCheck", q: "Un banco o un socio me pide estados financieros auditados", svc: "Auditoría Externa", slug: "auditoria-externa" },
  { icon: "helmet", q: "Debo cumplir el SG-SST antes de una visita del Ministerio", svc: "SG-SST", slug: "sg-sst" },
  { icon: "brief", q: "Quiero dejar la contabilidad en manos de expertos", svc: "Outsourcing Contable", slug: "outsourcing-contable" },
];

export const WHY = [
  { icon: "eye", t: "Independencia", d: "Sin vínculos con su administración: nuestra opinión no depende de quién paga la contabilidad." },
  { icon: "layers", t: "Visión integral", d: "Financiero, tributario, legal, nómina y TI revisados por un mismo equipo." },
  { icon: "msg", t: "Informes que se entienden", d: "Hallazgos priorizados por riesgo, con recomendaciones concretas." },
  { icon: "clock", t: "Tiempos acordados por escrito", d: "Calendario de visitas y entregas definido desde la propuesta." },
];

export const PROCESS_STEPS = [
  { n: "1", t: "Diagnóstico", d: "Reunión para entender su empresa y sus obligaciones." },
  { n: "2", t: "Propuesta", d: "Alcance, cronograma y honorarios por escrito." },
  { n: "3", t: "Planeación", d: "Identificamos riesgos y definimos las pruebas." },
  { n: "4", t: "Ejecución", d: "Visitas, pruebas y revisión de soportes." },
  { n: "5", t: "Informe y seguimiento", d: "Resultados, recomendaciones y verificación de mejoras." },
];

export const FAQ_GENERAL = [
  { q: "¿Mi empresa está obligada a tener revisor fiscal?", a: "Sí, si es sociedad por acciones, sucursal de sociedad extranjera, o si al 31 de diciembre del año anterior tuvo activos brutos de 5.000 SMMLV o más, o ingresos brutos de 3.000 SMMLV o más (Ley 43 de 1990)." },
  { q: "¿En qué se diferencia la revisoría fiscal de la auditoría externa?", a: "La revisoría fiscal es permanente y, en muchos casos, obligatoria por ley. La auditoría externa es un encargo puntual con el alcance que usted defina." },
  { q: "¿Cuánto cuesta el servicio?", a: "Depende del tamaño, el sector y el volumen de operaciones. Tras una primera reunión le enviamos una propuesta escrita con alcance, tiempos y honorarios." },
  { q: "¿Atienden empresas fuera de su ciudad?", a: "[Confirmar cobertura: ciudades con visita presencial y modalidad remota.]" },
  { q: "¿Qué documentos necesitan para empezar?", a: "Estados financieros del último cierre, certificado de existencia y representación legal y las declaraciones tributarias recientes." },
];

export const CASES = [
  { tag: "[Sector manufactura]", t: "[Título del caso: reto concreto]", d: "[Situación inicial y qué hizo TriAlliance, en dos líneas.]", r: "[Resultado medible]" },
  { tag: "[Sector servicios]", t: "[Título del caso: reto concreto]", d: "[Situación inicial y qué hizo TriAlliance, en dos líneas.]", r: "[Resultado medible]" },
];

export const TEAM = [
  { n: "[Nombre Apellido]", r: "Revisoría fiscal", tp: "T.P. [00000]-T" },
  { n: "[Nombre Apellido]", r: "Auditoría tributaria", tp: "T.P. [00000]-T" },
  { n: "[Nombre Apellido]", r: "Control interno y TI", tp: "T.P. [00000]-T" },
  { n: "[Nombre Apellido]", r: "SG-SST", tp: "Licencia SST [000]" },
];

export const FOOTER_COLUMNS = [
  { title: "Empresa", links: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Cómo trabajamos", href: "/como-trabajamos" },
    { label: "Casos", href: "/casos" },
    { label: "Recursos", href: "/recursos" },
  ]},
];
