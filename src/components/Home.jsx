import './Home.css'
import Section from './Section'
import SectionTitle from './SectionTitle'

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
            className='w-full max-w-md rounded-xl lg:aspect-square object-cover'
            src='/supermarket-worker.jpg'
            alt='Supermarket worker'
          />
        </div>
      </Section>
    </>
  )
}

export default Home