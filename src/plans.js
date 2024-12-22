import { v4 as uuidv4 } from 'uuid'

const plans = [
  {
    title: 'Plan Basico',
    price: '$5000',
    items: [
      'Hasta 100 productos',
      'Soporte por correo',
      'Reportes de ventas mensuales',
      'Integracion con redes sociales',
      'Herramientas de marketing basicas'
    ]
  },
  {
    title: 'Plan Avanzado',
    price: '$10000',
    items: [
      'Hasta 500 productos',
      'Soporte por correo y telefono',
      'Reportes de ventas semanales',
      'Integracion con redes sociales y plataformas de pago',
      'Herramientas de marketing avanzadas'
    ]
  },
  {
    title: 'Plan Premium',
    price: '$20000',
    items: [
      'Productos ilimitados',
      'Soporte 24/7',
      'Reportes de ventas diarios',
      'Integracion con redes sociales, plataformas de pago y envios',
      'Herramientas de marketing personalizadas'
    ]
  }
]

const plansWithIds = plans.map(plan => ({
  ...plan,
  id: uuidv4()
}))

export default plansWithIds