export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const content = {
  en: {
    nav: ['Work','Expertise','Approach','About'], navCta: 'Start a project', language:'Language',
    eyebrow: 'INDEPENDENT DIGITAL STUDIO  /  AUTOMOTIVE FOCUSED',
    heroA: 'Built for the', heroB: 'brands that', heroC: 'move.',
    heroDesc: 'Distinctive websites and high-performance online stores for automotive businesses ready to go further.',
    heroCta: 'Let’s build yours', heroSecondary:'Explore our work', scroll:'SCROLL TO EXPLORE',
    strip:['Design-led','Commerce-ready','Built to perform'],
    workLabel:'01 / SELECTED WORK', workTitle:'Proof is in the', workAccent:'projects.', workDesc:'Real-world experience across automotive retail, accessories, and services. Selected projects delivered by our team.',
    caseTypes:['Truck accessories & e-commerce','Automotive service & equipment','Wheels, retail & digital showroom'],
    caseDescriptions:['A product-focused website for truck accessories, with immersive product storytelling, detailed accessory pages, a shopping catalog, and a cohesive visual system.','An automotive equipment and service website with prominent product navigation, technical information, service content, and clear paths to customer inquiries.','A refreshed digital showroom combining custom wheel shopping, vehicle galleries, brand browsing, and an expressive automotive identity.'],
    viewProject:'Visit website', caseNote:'Gallery images are real screenshots supplied from our selected projects. Explore each gallery to see more pages.',
    expertiseLabel:'02 / WHAT WE DO', expertiseTitle:'Every pixel has', expertiseAccent:'a purpose.', expertiseDesc:'From first conversation to launch, we make the complicated feel simple.',
    services:[
      {n:'01',title:'Websites & online stores',desc:'Custom storefronts, product catalogs, business websites and landing pages — designed around your customers and your goals.',tags:['Custom design','E-commerce','Responsive builds']},
      {n:'02',title:'Redesign & modernization',desc:'Turn an outdated website into a sharper, faster and more intuitive experience. We help define the direction before development begins.',tags:['UX / UI','Site refresh','Performance']},
      {n:'03',title:'Commerce & content systems',desc:'Flexible commerce architecture, checkout integrations and easy-to-manage content. We choose the right tools for the job.',tags:['Saleor','Payload CMS','Integrations']},
      {n:'04',title:'SEO, content & visuals',desc:'Search-ready foundations, useful copy, analytics and refined product imagery that help customers discover and trust your business.',tags:['Technical SEO','AI search readiness','Product imagery']}
    ],
    audienceLabel:'BUILT FOR YOUR INDUSTRY', audienceTitle:'We speak', audienceAccent:'automotive.', audienceDesc:'Deep category familiarity. Flexible enough for your next big idea.',
    audiences:['Wheels & tires','Parts & accessories','Dealerships','Custom shops','Detailing & PPF','Service centers'],
    processLabel:'03 / THE PROCESS', processTitle:'No 40-page brief.', processAccent:'No guesswork.',
    process:[{n:'01',title:'Talk it through',desc:'A short conversation about your business, customers and what needs to change.'},{n:'02',title:'Find the direction',desc:'We define scope, structure and a design direction you can actually react to.'},{n:'03',title:'Build with clarity',desc:'Design and development move together, with transparent feedback along the way.'},{n:'04',title:'Launch & evolve',desc:'We ship a responsive, search-ready website and help you plan what comes next.'}],
    aboutLabel:'A SMALL TEAM. BIG ATTENTION TO DETAIL.', aboutTitle:'Less agency theater.', aboutAccent:'More doing.', aboutDesc:'Pacific Mule is an independent digital studio built around direct collaboration, thoughtful design and dependable development. You talk to the people doing the work.',
    faqLabel:'GOOD TO KNOW', faqTitle:'Questions, answered.', faqs:[
      {q:'Do I need a technical specification?',a:'No. We start with a conversation, then help define the scope, structure and deliverables before development.'},
      {q:'Can you redesign my existing website?',a:'Yes. We can refresh the visual direction, improve usability and modernize the implementation. We review the existing site first.'},
      {q:'Do you only work with automotive businesses?',a:'Automotive is our specialty, but we also consider projects in other industries where our approach is a good fit.'},
      {q:'Which platform will my store use?',a:'We often recommend flexible solutions such as Saleor for suitable e-commerce projects and Payload for content management. We select the stack based on requirements and budget.'},
      {q:'Do you guarantee Google or AI search rankings?',a:'No one can responsibly guarantee rankings. We implement technical SEO, structured data and clear, helpful content to support discoverability.'}
    ],
    contactLabel:'04 / LET’S TALK', contactTitle:'Have a project', contactAccent:'in mind?', contactDesc:'Tell us what you’re building. We’ll help figure out the right next step — no technical brief required.', contactButton:'Email us about your project', contactSubject:'New project inquiry — Pacific Mule', contactBody:'Hi Pacific Mule,\n\nMy company:\nWebsite (if any):\nWhat I need:\nTimeline:\n\nThanks!',
    footerText:'Digital experiences for businesses that move.', footerNote:'Independent digital studio · Automotive focused', backToTop:'Back to top', rights:'All rights reserved.',
    seoTitle:'Pacific Mule | Automotive Web Design & E-commerce Development', seoDescription:'Custom automotive websites, online stores, redesigns, e-commerce integrations, SEO and digital content. Built with care by Pacific Mule.'
  },
  es: {
    nav: ['Proyectos','Servicios','Proceso','Nosotros'], navCta:'Iniciar un proyecto', language:'Idioma',
    eyebrow:'ESTUDIO DIGITAL INDEPENDIENTE  /  ESPECIALISTAS EN AUTOMOCIÓN',
    heroA:'Creamos para las',heroB:'marcas que',heroC:'avanzan.',
    heroDesc:'Sitios web distintivos y tiendas online de alto rendimiento para empresas del sector automotriz listas para llegar más lejos.',
    heroCta:'Creemos el tuyo',heroSecondary:'Ver proyectos',scroll:'DESLIZA PARA EXPLORAR',
    strip:['Diseño con intención','Listos para vender','Creados para rendir'],
    workLabel:'01 / PROYECTOS',workTitle:'El trabajo habla',workAccent:'por sí solo.',workDesc:'Experiencia real en comercio automotriz, accesorios y servicios. Una selección de proyectos realizados por nuestro equipo.',
    caseTypes:['Accesorios para camionetas y comercio online','Servicios y equipos automotrices','Llantas, comercio y showroom digital'],
    caseDescriptions:['Un sitio centrado en accesorios para camionetas, con presentación visual de productos, páginas detalladas y un catálogo de compras.','Un sitio de equipos y servicios automotrices con navegación de productos, información técnica y vías claras de contacto.','Una vitrina digital renovada que combina venta de llantas, galerías de vehículos, exploración de marcas y una identidad automotriz distintiva.'],
    viewProject:'Visitar sitio',caseNote:'Las galerías muestran capturas reales facilitadas de los proyectos. Explora las imágenes para descubrir sus páginas.',
    expertiseLabel:'02 / QUÉ HACEMOS',expertiseTitle:'Cada píxel tiene',expertiseAccent:'un propósito.',expertiseDesc:'Desde la primera conversación hasta el lanzamiento, simplificamos lo complejo.',
    services:[
      {n:'01',title:'Sitios web y tiendas online',desc:'Tiendas personalizadas, catálogos, sitios corporativos y landing pages diseñados para tus clientes y objetivos.',tags:['Diseño a medida','Comercio online','Diseño adaptable']},
      {n:'02',title:'Rediseño y modernización',desc:'Transformamos un sitio antiguo en una experiencia más clara, rápida e intuitiva. Definimos el rumbo antes de desarrollar.',tags:['UX / UI','Renovación web','Rendimiento']},
      {n:'03',title:'Comercio y gestión de contenido',desc:'Arquitectura flexible, integraciones de pago y contenido fácil de administrar. Elegimos las herramientas adecuadas.',tags:['Saleor','Payload CMS','Integraciones']},
      {n:'04',title:'SEO, contenido e imágenes',desc:'Bases técnicas para buscadores, textos útiles, analítica e imágenes de productos que generan confianza.',tags:['SEO técnico','Visibilidad en IA','Imágenes de producto']}
    ],
    audienceLabel:'CREADO PARA TU INDUSTRIA',audienceTitle:'Entendemos el mundo',audienceAccent:'automotriz.',audienceDesc:'Conocemos el sector y también podemos impulsar tu próxima gran idea.',
    audiences:['Rines y neumáticos','Repuestos y accesorios','Concesionarios','Talleres de personalización','Detailing y PPF','Talleres mecánicos'],
    processLabel:'03 / EL PROCESO',processTitle:'Sin documentos eternos.',processAccent:'Sin adivinar.',
    process:[{n:'01',title:'Conversemos',desc:'Una charla breve sobre tu negocio, tus clientes y lo que quieres mejorar.'},{n:'02',title:'Definimos la dirección',desc:'Acordamos el alcance, la estructura y una propuesta visual concreta.'},{n:'03',title:'Desarrollamos con claridad',desc:'Diseño y desarrollo avanzan juntos, con comentarios transparentes.'},{n:'04',title:'Lanzamos y mejoramos',desc:'Publicamos un sitio adaptable y preparado para buscadores, y planificamos el siguiente paso.'}],
    aboutLabel:'EQUIPO PEQUEÑO. GRAN ATENCIÓN AL DETALLE.',aboutTitle:'Menos formalidades.',aboutAccent:'Más resultados.',aboutDesc:'Pacific Mule es un estudio digital independiente basado en la colaboración directa, el diseño cuidadoso y el desarrollo confiable. Hablas con quienes realizan el trabajo.',
    faqLabel:'INFORMACIÓN ÚTIL',faqTitle:'Preguntas frecuentes.',faqs:[
      {q:'¿Necesito un documento de requisitos técnicos?',a:'No. Empezamos conversando y después definimos contigo el alcance, la estructura y los entregables.'},
      {q:'¿Pueden rediseñar mi sitio actual?',a:'Sí. Podemos actualizar el diseño, mejorar la experiencia y modernizar la tecnología. Primero revisamos tu sitio.'},
      {q:'¿Solo trabajan con empresas automotrices?',a:'Es nuestra especialidad, pero también consideramos proyectos de otros sectores.'},
      {q:'¿Qué plataforma usará mi tienda?',a:'Para ciertos proyectos recomendamos soluciones flexibles como Saleor y Payload. Elegimos según las necesidades y el presupuesto.'},
      {q:'¿Garantizan posiciones en Google o búsquedas con IA?',a:'No es responsable garantizar posiciones. Implementamos SEO técnico, datos estructurados y contenido claro para mejorar la visibilidad.'}
    ],
    contactLabel:'04 / HABLEMOS',contactTitle:'¿Tienes un proyecto',contactAccent:'en mente?',contactDesc:'Cuéntanos qué quieres crear. Te ayudamos a encontrar el siguiente paso sin necesitar un documento técnico.',contactButton:'Escríbenos sobre tu proyecto',contactSubject:'Consulta de proyecto — Pacific Mule',contactBody:'Hola Pacific Mule,\n\nMi empresa:\nSitio web (si tengo):\nQué necesito:\nPlazo:\n\n¡Gracias!',
    footerText:'Experiencias digitales para empresas en movimiento.',footerNote:'Estudio digital independiente · Especialistas en automoción',backToTop:'Volver arriba',rights:'Todos los derechos reservados.',
    seoTitle:'Pacific Mule | Diseño Web Automotriz y Tiendas Online',seoDescription:'Sitios web automotrices, tiendas online, rediseño, integraciones e-commerce, SEO y contenido digital. Desarrollo a medida por Pacific Mule.'
  }
} as const;
export function getContent(locale: Locale) { return content[locale]; }
