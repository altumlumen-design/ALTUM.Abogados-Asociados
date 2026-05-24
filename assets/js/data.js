/* =========================================================
   CONFIGURACIÓN GENERAL DEL SITIO
   Edita este archivo para cambiar datos, áreas, abogados,
   publicaciones, noticias y eventos sin tocar el HTML.
   ========================================================= */


window.SITE_CONFIG = {
  firmName: "Estudio Jurídico ALTUM Abogados & Asociados",
  shortName: "ALTUM",
  tagline: "Comprometidos con tu defensa, elevando la excelencia en cada caso",
  whatsapp: "51989245203",
  phone: "+51 989 245 203",
  email: "servicioslegales.altumlumen@gmail.com",
  address: "Lima, Perú",
  mapUrl: "https://maps.google.com/",
  social: {
    linkedin: "#",
    twitter: "#",
    youtube: "#",
    facebook: "#",
    instagram: "#"
  }
};

window.AREAS = [
  {
    id: "derecho-penal",
    title: "Derecho Penal",
    kicker: "Área penal",
    icon: "penal",
    excerpt: "Defensa técnica en investigaciones, denuncias, diligencias preliminares, procesos penales y estrategias probatorias.",
    image: "penal",
    details: [
      { title: "Defensa penal integral", text: "Patrocinio desde la etapa preliminar hasta juicio, con ordenamiento documental, teoría del caso y estrategia de defensa." },
      { title: "Asesoría preventiva", text: "Evaluación de riesgos penales, revisión de antecedentes del caso y preparación para citaciones, declaraciones y diligencias." },
      { title: "Acompañamiento estratégico", text: "Elaboración de escritos, recursos, solicitudes, defensa en audiencias y coordinación permanente con el cliente." }
    ]
  },
  {
    id: "derecho-civil",
    title: "Derecho Civil",
    kicker: "Contratos y obligaciones",
    icon: "civil",
    excerpt: "Asesoría y patrocinio en obligaciones, contratos, indemnizaciones, responsabilidad civil y controversias patrimoniales.",
    image: "civil",
    details: [
      { title: "Contratos y obligaciones", text: "Revisión, elaboración y negociación de contratos, acuerdos, cartas notariales y documentos vinculados a relaciones civiles." },
      { title: "Responsabilidad civil", text: "Evaluación de daños, incumplimientos, controversias patrimoniales e indemnizaciones." },
      { title: "Solución de controversias", text: "Estrategia para conciliaciones, procesos judiciales y mecanismos de solución directa." }
    ]
  },
  {
    id: "derecho-inmobiliario-registral",
    title: "Derecho Inmobiliario y Registral",
    kicker: "Propiedad y registro",
    icon: "inmobiliario",
    excerpt: "Saneamiento, transferencias, posesión, propiedad, inscripción registral y asesoría en operaciones inmobiliarias.",
    image: "inmobiliario",
    details: [
      { title: "Saneamiento de propiedad", text: "Revisión de antecedentes, partidas registrales, títulos, cargas, gravámenes y situación legal del inmueble." },
      { title: "Operaciones inmobiliarias", text: "Acompañamiento en compraventas, arrendamientos, cesiones, transferencias y contratos vinculados a inmuebles." },
      { title: "Gestión registral", text: "Preparación de documentación y seguimiento de trámites ante registros públicos y entidades competentes." }
    ]
  },
  {
    id: "derecho-constitucional",
    title: "Derecho Constitucional",
    kicker: "Garantías y derechos",
    icon: "constitucional",
    excerpt: "Defensa de derechos fundamentales, procesos constitucionales, garantías y controversias de relevancia pública.",
    image: "constitucional",
    details: [
      { title: "Procesos constitucionales", text: "Patrocinio en acciones orientadas a la tutela de derechos fundamentales y garantías constitucionales." },
      { title: "Análisis de afectación de derechos", text: "Evaluación técnica de actos, omisiones o decisiones que pudieran vulnerar derechos constitucionales." },
      { title: "Estrategia legal", text: "Diseño de argumentos, medios probatorios y escritos con enfoque constitucional." }
    ]
  },
  {
    id: "derecho-administrativo",
    title: "Derecho Administrativo",
    kicker: "Procedimientos y sanciones",
    icon: "administrativo",
    excerpt: "Asesoría en procedimientos administrativos, recursos, fiscalizaciones, sanciones y actuaciones ante entidades públicas.",
    image: "administrativo",
    details: [
      { title: "Procedimiento administrativo", text: "Atención de solicitudes, descargos, recursos administrativos, expedientes y actuaciones ante entidades públicas." },
      { title: "Fiscalización y sanciones", text: "Defensa frente a procedimientos sancionadores, medidas administrativas, multas y observaciones." },
      { title: "Estrategia documental", text: "Ordenamiento de antecedentes, medios probatorios y argumentos de defensa administrativa." }
    ]
  },
  {
    id: "derecho-laboral",
    title: "Derecho Laboral",
    kicker: "Relaciones laborales",
    icon: "laboral",
    excerpt: "Asesoría en relaciones laborales, contratación, desvinculación, reclamos, sanciones, conciliaciones y defensa laboral.",
    image: "laboral",
    details: [
      { title: "Asesoría laboral preventiva", text: "Revisión de contratos, obligaciones laborales, reglamentos, políticas internas y contingencias." },
      { title: "Conflictos laborales", text: "Atención de reclamos, conciliaciones, cartas, despidos, sanciones y controversias individuales o colectivas." },
      { title: "Defensa legal", text: "Patrocinio en procedimientos administrativos y judiciales vinculados a materia laboral." }
    ]
  },
  {
    id: "administracion-publica",
    title: "Administración Pública",
    kicker: "Gestión pública",
    icon: "publica",
    excerpt: "Asesoría legal y técnica para entidades, funcionarios y servidores en gestión pública, control y responsabilidad funcional.",
    image: "publica",
    details: [
      { title: "Gestión pública y legalidad", text: "Asesoría en competencias, funciones, actos administrativos, informes, responsabilidades y toma de decisiones públicas." },
      { title: "Control y responsabilidad", text: "Evaluación de riesgos administrativos, funcionales y documentales frente a órganos de control o fiscalización." },
      { title: "Soporte técnico institucional", text: "Elaboración de informes, opiniones, descargos y documentos de gestión con enfoque legal y administrativo." }
    ]
  },
  {
    id: "contrataciones-estado",
    title: "Contrataciones del Estado",
    kicker: "Compras públicas",
    icon: "contrataciones",
    excerpt: "Asesoría en requerimientos, expedientes de contratación, ejecución contractual, controversias y gestión de riesgos.",
    image: "contrataciones",
    details: [
      { title: "Fase preparatoria", text: "Revisión de requerimientos, términos de referencia, especificaciones técnicas, indagación de mercado y documentación del expediente." },
      { title: "Ejecución contractual", text: "Acompañamiento en conformidades, penalidades, ampliaciones, adicionales, controversias y obligaciones contractuales." },
      { title: "Prevención de contingencias", text: "Identificación de riesgos legales, administrativos y presupuestales en procesos de contratación pública." }
    ]
  },
  {
    id: "derecho-electoral",
    title: "Derecho Electoral",
    kicker: "Procesos electorales",
    icon: "electoral",
    excerpt: "Asesoría en procedimientos electorales, organizaciones políticas, candidaturas, tachas, exclusiones y defensa electoral.",
    image: "electoral",
    details: [
      { title: "Asesoría electoral", text: "Revisión de requisitos, documentación, candidaturas, inscripción y cumplimiento de reglas electorales." },
      { title: "Defensa en controversias", text: "Atención de tachas, exclusiones, observaciones, apelaciones y procedimientos ante órganos electorales." },
      { title: "Estrategia preventiva", text: "Ordenamiento documental y prevención de riesgos legales durante procesos electorales." }
    ]
  }
];

window.STAFF = [
  {
    id: "jean-vargas",
    name: "Jeanfranco M. Vargas Luque",
    role: "Consultor Legal y de Gestión Pública",
    area: "Derecho Administrativo, Gestión Pública y Contrataciones",
    languages: ["Español"],
    bio: "Abogado, contador y consultor en gestión pública, con experiencia en gobiernos locales, procedimientos administrativos, planeamiento, presupuesto, contrataciones y defensa técnica institucional.",
    education: ["Derecho", "Contabilidad", "Gestión Pública", "Proyectos de Inversión"],
    image: "JV",
    photo: "assets/img/team-jeanfranco.webp"
  },
  {
    id: "asociado-corporativo",
    name: "Asociado Corporativo",
    role: "Especialista en Derecho Empresarial",
    area: "Corporativo y Compliance",
    languages: ["Español"],
    bio: "Perfil editable para abogado corporativo encargado de contratos, cumplimiento, formalización empresarial y soporte preventivo.",
    education: ["Derecho Corporativo", "Compliance"],
    image: "AC",
    photo: ""
  },
  {
    id: "asociado-penal",
    name: "Asociado Senior Penal",
    role: "Especialista en Litigación Penal",
    area: "Defensa Penal Estratégica",
    languages: ["Español", "Inglés"],
    bio: "Perfil editable para incorporar a un abogado del equipo. Se recomienda añadir experiencia, estudios, membresías y casos representativos no confidenciales.",
    education: ["Derecho Penal", "Litigación Oral"],
    image: "AP",
    photo: "assets/img/team-asociado-senior.webp"
  },
  {
    id: "oscar-moreno",
    name: "Oscar Felipe Moreno Tupia",
    role: "Responsable del Estudio Jurídico",
    area: "Abogado Colegiado · CAL 74763",
    languages: ["Español"],
    bio: "Responsable del Estudio Jurídico ALTUM Abogados & Asociados. Abogado colegiado con enfoque en defensa técnica, asesoría estratégica y acompañamiento jurídico integral.",
    education: ["Abogado Colegiado", "CAL 74763", "Dirección jurídica", "Estrategia legal"],
    image: "OM",
    photo: "assets/img/team-oscar.webp"
  }
];

window.POSTS = [
  { id: "reforma-administrativa", type: "Artículos", date: "21 de Mayo", title: "Nuevos retos del procedimiento administrativo y la defensa del administrado", excerpt: "Comentario sobre garantías, plazos, debida motivación y estrategia legal en procedimientos administrativos.", body: "Este texto es editable. Puede desarrollar aquí un análisis jurídico completo con antecedentes, base normativa, comentarios técnicos y conclusiones.", author: "Equipo Legal" },
  { id: "compliance-municipal", type: "Blog Legal", date: "18 de Mayo", title: "Compliance público: prevención de riesgos en gobiernos locales", excerpt: "Lineamientos para ordenar funciones, responsabilidades, riesgos y evidencias documentales dentro de entidades públicas.", body: "Contenido editable para el blog legal del estudio. Se recomienda incorporar referencias normativas actualizadas antes de publicar.", author: "Área de Gestión Pública" },
  { id: "contrataciones-publicas", type: "Artículos", date: "15 de Mayo", title: "Contrataciones públicas: rol del área usuaria y gestión de conformidades", excerpt: "Una mirada práctica a la necesidad, requerimiento, certificación, orden, ejecución y conformidad del servicio.", body: "Contenido base para explicar el ciclo de contratación pública, evitando tecnicismos excesivos y usando ejemplos operativos.", author: "Equipo Legal" },
  { id: "prueba-digital", type: "Pastilla Informativa", date: "08 de Mayo", title: "Prueba digital: criterios básicos para preservar evidencia", excerpt: "Recomendaciones iniciales sobre respaldo, trazabilidad y ordenamiento documental de evidencia digital.", body: "Texto editable para una pastilla informativa sobre evidencia digital, sin sustituir asesoría especializada.", author: "Área Digital" }
];

window.NEWS = [
  { id: "casacion-modelo", type: "Jurisprudencia", date: "13 de Febrero", title: "Casación relevante sobre motivación de resoluciones y debido proceso", excerpt: "Ficha editable para cargar jurisprudencia, resumen, enlace de descarga y comentario breve.", download: "#" },
  { id: "norma-legal", type: "Normas Legales", date: "11 de Febrero", title: "Norma legal de interés para entidades públicas y administrados", excerpt: "Registro de norma legal con sumilla, fecha, fuente y archivo de respaldo.", download: "#" },
  { id: "informativo", type: "Informativos", date: "07 de Febrero", title: "Informativo legal: obligaciones documentales en procedimientos administrativos", excerpt: "Boletín breve para clientes sobre cuidados documentales y organización de expedientes.", download: "#" },
  { id: "proyecto-ley", type: "Proyecto de Ley", date: "07 de Febrero", title: "Proyecto de ley con incidencia en gestión pública y responsabilidad administrativa", excerpt: "Ficha editable para seguimiento normativo y análisis de impacto.", download: "#" }
];

window.EVENTS = [
  {
    id: "ia-derecho-compliance",
    date: "26 de marzo de 2026",
    title: "IA, Derecho y Compliance Corporativo",
    excerpt: "Seminario especializado sobre riesgos, regulación y oportunidades de la inteligencia artificial aplicada al derecho y a la empresa.",
    status: "Próximo evento",
    hours: "24 horas académicas",
    whatsappText: "Hola, solicito información del evento IA, Derecho y Compliance Corporativo.",
    benefits: ["Ponentes especialistas", "Sesiones grabadas", "Material académico incluido", "Certificación digital"],
    certification: "Los participantes recibirán constancia digital emitida por la dirección académica del estudio y/o aliados institucionales, previa validación de asistencia.",
    schedule: ["Jueves: marco regulatorio y riesgos", "Viernes: empresa, ciberseguridad y cumplimiento", "Sábado: talleres prácticos y casos aplicados"],
    topics: ["Regulación de IA", "Compliance corporativo", "Protección de datos", "Evidencia digital", "Responsabilidad empresarial"],
    speakers: ["Especialista en IA y Derecho", "Especialista en Compliance", "Especialista en Gestión Pública", "Especialista en Ciberseguridad"],
    price: "Preventa S/ 55 | Regular S/ 99"
  },
  {
    id: "contrataciones-estado",
    date: "10 de julio de 2026",
    title: "Contrataciones públicas y responsabilidad del área usuaria",
    excerpt: "Capacitación práctica sobre requerimientos, ejecución contractual, conformidades y control documental.",
    status: "Programado",
    hours: "16 horas académicas",
    whatsappText: "Hola, solicito información del evento de contrataciones públicas.",
    benefits: ["Casos prácticos", "Material editable", "Certificación", "Acceso a grabación"],
    certification: "Certificación digital conforme a participación y evaluación básica.",
    schedule: ["Sesión 1: actos preparatorios", "Sesión 2: ejecución contractual", "Sesión 3: conformidades y responsabilidades"],
    topics: ["Área usuaria", "TDR/EETT", "Órdenes", "Conformidades", "Penalidades"],
    speakers: ["Especialista en contrataciones", "Especialista en presupuesto público"],
    price: "Consultar"
  }
];
