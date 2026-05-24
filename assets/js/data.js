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
    id: "defensa-penal-estrategica",
    title: "Defensa Penal Estratégica",
    kicker: "Área penal",
    excerpt: "Representamos a personas, funcionarios y empresas en investigaciones y procesos penales complejos, con enfoque técnico, preventivo y probatorio.",
    image: "penal",
    details: [
      { title: "Litigación penal compleja", text: "Diseño de teoría del caso, estrategia probatoria, audiencias, recursos y defensa integral desde la investigación preliminar hasta juicio." },
      { title: "Delitos económicos y patrimoniales", text: "Asesoría y patrocinio en controversias penales vinculadas a fraude, administración, patrimonio y responsabilidad empresarial." },
      { title: "Defensa de funcionarios", text: "Atención especializada en casos vinculados a función pública, procedimientos de control y contingencias administrativas con incidencia penal." }
    ]
  },
  {
    id: "administracion-publica",
    title: "Delitos contra la Administración Pública",
    kicker: "Función pública",
    excerpt: "Asesoramos en casos de corrupción, colusión, peculado, negociación incompatible y otros delitos vinculados a la actividad estatal.",
    image: "publica",
    details: [
      { title: "Defensa de autoridades y servidores", text: "Estrategias para investigaciones vinculadas a decisiones públicas, contrataciones, presupuesto, control gubernamental y gestión municipal." },
      { title: "Informes legales y periciales", text: "Elaboración de informes técnicos, matrices de hechos, cronologías documentales y soporte para teoría defensiva." },
      { title: "Enfoque preventivo", text: "Identificación de riesgos penales en procedimientos administrativos, contrataciones públicas y gestión institucional." }
    ]
  },
  {
    id: "penal-tributario-financiero",
    title: "Penal Tributario y Financiero",
    kicker: "Empresa y finanzas",
    excerpt: "Acompañamos a empresas, directivos y profesionales frente a riesgos tributarios, financieros y patrimoniales con incidencia penal.",
    image: "tributario",
    details: [
      { title: "Defensa tributaria penal", text: "Análisis de contingencias, documentación contable y coordinación de estrategia ante fiscalizaciones o investigaciones." },
      { title: "Lavado de activos", text: "Revisión documental, trazabilidad económica, matrices de riesgo y defensa técnica frente a imputaciones patrimoniales." },
      { title: "Prevención corporativa", text: "Protocolos internos para reducir riesgos penales vinculados a operaciones empresariales y financieras." }
    ]
  },
  {
    id: "compliance",
    title: "Criminal Compliance y Preventivo Penal",
    kicker: "Prevención",
    excerpt: "Implementamos modelos de prevención, mapas de riesgo y programas de cumplimiento penal adecuados a cada organización.",
    image: "compliance",
    details: [
      { title: "Modelos de prevención", text: "Diseño, actualización y auditoría de programas de cumplimiento penal y anticorrupción." },
      { title: "Capacitación corporativa", text: "Talleres para directivos, colaboradores y áreas sensibles de la organización." },
      { title: "Investigaciones internas", text: "Protocolos de investigación, entrevistas, preservación documental y recomendaciones correctivas." }
    ]
  },
  {
    id: "derecho-informatico",
    title: "Derecho Informático y Ciberdelito",
    kicker: "Tecnología",
    excerpt: "Brindamos asesoría legal en delitos informáticos, evidencia digital, protección de datos, ciberseguridad y transformación digital.",
    image: "digital",
    details: [
      { title: "Evidencia digital", text: "Revisión de soportes, trazabilidad, cadena de custodia y soporte técnico-jurídico para controversias digitales." },
      { title: "Ciberdelito", text: "Defensa y asesoría ante fraudes, accesos indebidos, suplantación, afectaciones informáticas y riesgos tecnológicos." },
      { title: "Protección de datos", text: "Políticas, documentos internos y asesoría para tratamiento responsable de información personal." }
    ]
  },
  {
    id: "administrativo-contrataciones",
    title: "Administrativo y Contrataciones con el Estado",
    kicker: "Sector público",
    excerpt: "Acompañamos procedimientos administrativos, contrataciones públicas, descargos, recursos, sancionadores y gestión regulatoria.",
    image: "estado",
    details: [
      { title: "Procedimientos administrativos", text: "Elaboración de escritos, recursos, informes y defensa ante procedimientos sancionadores." },
      { title: "Contrataciones públicas", text: "Asesoría a entidades, proveedores y áreas usuarias en actos preparatorios, ejecución contractual y controversias." },
      { title: "Gestión pública", text: "Soporte técnico-legal para municipalidades, programas, convenios y actos de administración interna." }
    ]
  },
  {
    id: "litigios-empresariales",
    title: "Litigios Empresariales y de las Personas",
    kicker: "Solución de conflictos",
    excerpt: "Diseñamos estrategias para controversias civiles, comerciales, societarias y patrimoniales, priorizando soluciones eficientes.",
    image: "litigios",
    details: [
      { title: "Litigios civiles y comerciales", text: "Patrocinio en controversias contractuales, indemnizaciones, obligaciones y procesos de conocimiento." },
      { title: "Negociación", text: "Estrategias de negociación, transacción y solución temprana de conflictos." },
      { title: "Gestión probatoria", text: "Organización de medios probatorios, cronologías, anexos y soporte documental." }
    ]
  },
  {
    id: "corporativo",
    title: "Derecho Empresarial y Corporativo",
    kicker: "Negocios",
    excerpt: "Asesoramos a empresas en constitución, gobierno corporativo, contratos, alianzas, cumplimiento y toma de decisiones estratégicas.",
    image: "corporativo",
    details: [
      { title: "Gobierno corporativo", text: "Actas, juntas, poderes, libros societarios y ordenamiento documental." },
      { title: "Contratos", text: "Diseño, revisión y negociación de contratos civiles, comerciales y de prestación de servicios." },
      { title: "Crecimiento empresarial", text: "Acompañamiento legal para nuevas líneas de negocio, alianzas y formalización de operaciones." }
    ]
  },
  {
    id: "arbitral",
    title: "Arbitral",
    kicker: "Controversias",
    excerpt: "Representamos a empresas y personas en arbitrajes comerciales, contractuales y vinculados a ejecución de obligaciones.",
    image: "arbitral",
    details: [
      { title: "Estrategia arbitral", text: "Definición de pretensiones, contestaciones, pruebas, informes orales y ejecución de laudo." },
      { title: "Contratos y cláusulas", text: "Revisión de convenios arbitrales, cláusulas de solución de controversias y matriz de riesgos contractuales." },
      { title: "Controversias con el Estado", text: "Asesoría en controversias derivadas de ejecución contractual pública." }
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
