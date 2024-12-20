import { v4 as uuidv4 } from 'uuid'

const entries = [
  {
    year: 2002,
    title: "Fundación de la Empresa",
    content: "La empresa fue fundada con el objetivo de ofrecer soluciones innovadoras para el comercio en línea, ayudando a pequeñas y medianas empresas a expandir su presencia digital."
  },
  {
    year: 2005,
    title: "Primer Producto Comercializado",
    content: "Se lanzó el primer producto de la empresa, una plataforma de venta en línea sencilla, que permitió a los primeros clientes gestionar su inventario y ventas sin complicaciones."
  },
  {
    year: 2008,
    title: "Expansión a Nuevos Mercados",
    content: "La empresa comenzó a ofrecer sus servicios a mercados de habla hispana y portuguesa, ampliando su alcance y llegando a más emprendedores en América Latina y Europa."
  },
  {
    year: 2011,
    title: "Lanzamiento de Servicios Personalizados",
    content: "Se introdujeron servicios personalizados de diseño de tiendas online y consultoría estratégica, ayudando a los clientes a crear tiendas únicas y optimizar sus ventas."
  },
  {
    year: 2014,
    title: "Integración con Plataformas de Pago",
    content: "La empresa integró soluciones de pago en línea, permitiendo a los clientes aceptar pagos con tarjeta de crédito, PayPal y otras opciones de pago populares en el mercado global."
  },
  {
    year: 2017,
    title: "Expansión Internacional",
    content: "Comenzaron a ofrecer servicios internacionales, permitiendo que negocios de todo el mundo pudieran acceder a las soluciones de comercio digital de la empresa y expandir su alcance."
  },
  {
    year: 2020,
    title: "Rediseño de Plataforma y Nuevas Funciones",
    content: "La plataforma fue rediseñada para ofrecer una experiencia de usuario más intuitiva y se agregaron nuevas herramientas de marketing, automatización y análisis de ventas."
  },
  {
    year: 2024,
    title: "Celebración del 22do Aniversario",
    content: "La empresa celebra 22 años en el mercado con más de 50,000 clientes satisfechos y planes de seguir expandiendo sus servicios con nuevas funcionalidades y soporte global."
  }
]

const timelineEntries = entries.map(entry => ({
  ...entry,
  id: uuidv4()
}))

export default timelineEntries