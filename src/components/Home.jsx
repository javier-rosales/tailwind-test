import './Home.css'
import Section from './Section'
import SectionTitle from './SectionTitle'
import UserReviewCard from './UserReviewCard'
import Card from './Card'
import Timeline from './Timeline'
import timelineEntries from '../timelineEntries'
import PlanCard from './PlanCard'
import plans from '../plans'

const Home = () => {
  return (
    <>
      <div className='bg-enterprise py-52 rounded-b-2xl md:rounded-b-3xl lg:rounded-b-[2rem]'>
        <h2 className='text-5xl md:text-6xl lg:text-7xl py-6 lg:py-8 font-medium text-center'>
          Empresa
        </h2>
        <p className='text-2xl md:text-3xl text-center'>
          Eslogan
        </p>
      </div>
      <Section>
        <div className='flex flex-col lg:flex-row items-center gap-4 md:gap-10'>
          <p className='text-xl md:text-2xl lg:text-3xl text-center leading-relaxed lg:leading-loose'>
            Impulsa tu negocio con nuestras soluciones de comercio. Todo lo que necesitas para crecer, en un solo lugar.
          </p>
          <img
            className='w-full max-w-md rounded-xl lg:aspect-square object-cover shadow-xl'
            src='/supermarket-worker.webp'
            alt='Supermarket worker'
          />
        </div>
      </Section>
      <Section>
        <SectionTitle>
          Reviews
        </SectionTitle>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-xl lg:max-w-none mx-auto'>
          <div className='flex flex-col gap-10'>
            <UserReviewCard
              avatarSrc='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              name='Usuario'
              review='Gracias a sus herramientas, mi tienda en línea es más eficiente que nunca. ¡Altamente recomendado!'
            />
            <UserReviewCard
              avatarSrc='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              name='Usuario'
              review='El soporte técnico siempre está disponible cuando lo necesito, resolviendo mis dudas rápidamente y con soluciones claras. La atención al cliente es excepcional, lo que me da mucha confianza en los servicios.'
            />
          </div>
          <div className='flex flex-col gap-10'>
            <UserReviewCard
              avatarSrc='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              name='Usuario'
              review='Con su ayuda, pude expandir mi negocio a clientes internacionales sin complicaciones.'
            />
            <UserReviewCard
              avatarSrc='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              name='Usuario'
              review='Sus reportes de ventas son claros y detallados, ayudándome a identificar tendencias y mejorar mis estrategias cada mes. Una herramienta indispensable para mi negocio.'
            />
          </div>
          <div className='flex flex-col gap-10'>
            <UserReviewCard
              avatarSrc='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              name='Usuario'
              review='El diseño personalizado de mi tienda en línea no solo luce profesional, sino que también ha mejorado la experiencia de mis clientes. ¡Gracias por el excelente trabajo!'
            />
            <UserReviewCard
              avatarSrc='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              name='Usuario'
              review='He probado varias plataformas, pero ninguna tan completa como esta. Perfecta para crecer. La recomiendo ampliamente.'
            />
          </div>
        </div>
      </Section>
      <Section>
        <SectionTitle>
          Servicios
        </SectionTitle>
        <div className='flex lg:flex-wrap flex-col lg:flex-row items-center lg:items-stretch lg:justify-center gap-10 lg:gap-14 lg:*:basis-1/2'>
          <Card
            imgSrc='/close-up-woman-writing-clipboard.webp'
            title='Gestion de inventario'
            content='Manten el control total de tu inventario con nuestras soluciones avanzadas. Desde el seguimiento de productos hasta alertas de stock, garantizamos una gestion eficiente y precisa.'
          />
          <Card
            imgSrc='/vehicles-laptop-supply-chain-representation.webp'
            title='Logistica y distribucion'
            content='Ofrecemos servicios de logistica y distribucion confiables para asegurar que tus productos lleguen a tiempo y en perfecto estado en cualquier destino.'
          />
          <Card
            imgSrc='/discount-shopping-season-with-sale.webp'
            title='Consultoria en comercio electronico'
            content='Potencia tu negocio en linea con nuestras asesorias especializadas. Creamos estrategias que maximizan la presencia y ventas en plataformas digitales.'
          />
        </div>
      </Section>
      <Section>
        <SectionTitle>
          Nuestra historia
        </SectionTitle>
        <Timeline entries={timelineEntries} />
      </Section>
      <Section>
        <SectionTitle>
          Planes
        </SectionTitle>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {plans.map(({ id, ...plan }) => (
            <PlanCard
              key={id}
              {...plan}
            />
          ))}
        </div>
      </Section>
    </>
  )
}

export default Home