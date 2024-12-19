import './Home.css'
import Section from './Section'
import SectionTitle from './SectionTitle'
import UserReviewCard from './UserReviewCard'
import Card from './Card'

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
        <SectionTitle>
          Titulo
        </SectionTitle>
        <div className='flex flex-col lg:flex-row items-center gap-4 md:gap-10'>
          <p className='text-xl lg:text-2xl leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorem suscipit reprehenderit, necessitatibus doloribus ipsa amet dolores beatae aliquid nulla placeat iste dolore non incidunt quisquam est delectus voluptatibus laborum!
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
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-2xl lg:max-w-none mx-auto'>
          <div className='flex flex-col gap-10'>
            <UserReviewCard
              avatarSrc='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              name='Usuario'
              review='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa harum dolor voluptates nisi quasi quibusdam.'
            />
            <UserReviewCard
              avatarSrc='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              name='Usuario'
              review='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            />
          </div>
          <div className='flex flex-col gap-10'>
            <UserReviewCard
              avatarSrc='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              name='Usuario'
              review='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error temporibus doloremque repellendus explicabo laudantium illum, dignissimos blanditiis quis quam, eius non ratione culpa fugiat debitis modi soluta veritatis.'
            />
            <UserReviewCard
              avatarSrc='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              name='Usuario'
              review='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            />
          </div>
          <div className='flex flex-col gap-10'>
            <UserReviewCard
              avatarSrc='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              name='Usuario'
              review='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            />
            <UserReviewCard
              avatarSrc='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              name='Usuario'
              review='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error temporibus doloremque repellendus explicabo laudantium illum, dignissimos blanditiis quis quam.'
            />
          </div>
        </div>
      </Section>
      <Section>
        <SectionTitle>
          Servicios
        </SectionTitle>
        <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10'>
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
    </>
  )
}

export default Home