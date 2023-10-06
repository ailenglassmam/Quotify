import { Link } from 'react-router-dom'
import logoQuotify from '../assets/quotify-logo.svg'

const NavBar = () => {
  return (
    <header className='py-3 bg-background fixed-top shadow'>
      <nav className='navbar navbar-expand-lg py-0'>
        <div className='container-fluid px-5'>
          <a className='navbar-brand' href='/#HeroPrincipal'>
            <img src={logoQuotify} alt='Quotify Logo' height='25px' />
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
            <ul className='navbar-nav sm-pt-7'>
              <li className='nav-item text-center'>
                <a className='nav-link active' aria-current='page' href='/#ComoFunciona'>Cómo Funciona</a>
              </li>
              <li className='nav-item text-center'>
                <a className='nav-link' href='/#Testimonios'>Testimonios</a>
              </li>
              <li className='nav-item text-center'>
                <a className='nav-link' href='/#Contacto'>Contactanos</a>
              </li>
              <li className='nav-item text-center sm-pb-5'>
                {/* <Link className='nav-link' to='/team'>Team</Link> */}
                <a className='nav-link' to='#'>Team</a>
              </li>
              <li className='nav-item text-center'><Link to='/login'>
                <button type='button' className='btn btn-secondary-btn my-1 my-lg-0 px-3 py-2 flex justify-center mx-3 btn-sm fw-bold'>Iniciar Sesión</button>
              </Link></li>
              <li className='nav-item text-center'><Link to='/register'><button type='button' className='btn btn-primary-btn my-1 my-lg-0 px-3 py-2 flex justify-center mx-3 btn-sm fw-bold'>Registrarse</button>
              </Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar






