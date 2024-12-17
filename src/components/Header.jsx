import ThemeSwitcher from './ThemeSwitcher'
import IconMenu from './IconMenu'
import IconHashtag from './IconHashtag'
import IconHouse from './IconHouse'
import IconBox from './IconBox'
import IconHandShake from './IconHandShake'
import IconPhone from './IconPhone'
import './Header.css'

const Header = () => {
  return (
    <header className='px-3 lg:px-5 fixed left-0 right-0 z-10'>
      <div className='navbar justify-between my-4 px-2 md:px-5 max-w-7xl mx-auto bg-base-300 rounded-lg shadow'>
        <div>
          <div className='dropdown static'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden px-3 md:px-4'>
              <IconMenu />
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content left-3 right-3 bg-base-300 rounded-lg mt-3 p-2 shadow'>
              <li>
                <a className='item'>
                  Pagina principal
                </a>
              </li>
              <li>
                <a className='item'>
                  Productos
                </a>
              </li>
              <li>
                <a className='item'>
                  Servicios
                </a>
              </li>
              <li>
                <a className='item'>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <a className='btn btn-ghost text-xl lg:text-2xl px-1 md:px-4 py-2 h-auto gap-2 lg:gap-4'>
            <IconHashtag />
            Empresa
          </a>
        </div>
        <div className='gap-2'>
          <ul className='menu menu-horizontal hidden lg:flex px-1 py-0 text-base'>
            <li><a>Pagina principal</a></li>
            <li><a>Productos</a></li>
            <li><a>Servicios</a></li>
            <li><a>Contacto</a></li>
          </ul>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header