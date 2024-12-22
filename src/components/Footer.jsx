import IconHashtag from './icons/IconHashtag'
import IconYouTube from './icons/IconYouTube'
import IconFacebook from './icons/IconFacebook'

const Footer = () => {
  return (
    <footer className='flex flex-col lg:flex-row items-center lg:justify-around gap-7 bg-base-300 mt-10 px-5 py-12 lg:py-14'>
      <aside className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4'>
        <IconHashtag />
        <p>
          Empresa
        </p>
      </aside>
      <div>
        <div className='flex justify-center lg:justify-end gap-3 mb-4'>
          <a className='cursor-pointer'>
            <IconYouTube />
          </a>
          <a className='cursor-pointer'>
            <IconFacebook />
          </a>
        </div>
        <p>
          Calle #0, Municipio, Estado, C.P. 0000
        </p>
      </div>
    </footer>
  )
}

export default Footer