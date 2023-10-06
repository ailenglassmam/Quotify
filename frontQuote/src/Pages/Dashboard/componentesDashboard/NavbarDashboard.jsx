import React from 'react'
import logoQuotify from '../../../assets/quotify-logo.svg'
import { Link } from 'react-router-dom'
import Dashboard from '../pagesDashboard/Dashboard'
import Historial from '../pagesDashboard/Historial'

export default function NavbarDashboard() {

function logout() {
  window.location.href = "/";
}

  return (
<header className='py-3 bg-background fixed-top shadow'>
  <nav className='navbar navbar-expand-lg py-0'>
    <div className='container-fluid px-5'>
      <a href='/' className='navbar-brand'>
        <img src={logoQuotify} alt='Quotify Logo' height='25px' />
      </a>
      <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
        <ul className='navbar-nav sm-pt-7'>
          <li className='nav-item text-center'><Link to='/home-user/dashboard' element={<Dashboard />} className='nav-link active'>Dashboard</Link></li>
          <li className='nav-item text-center'><Link to='/home-user/historial' element={<Historial />} className='nav-link'>Historial</Link></li>
        
        <li className='nav-item text-center'><button type='button' className='btn btn-primary-btn my-1 my-lg-0 px-3 py-2 flex justify-center mx-3 btn-sm fw-bold' onClick={logout}>Cerrar Sesión</button></li>
          </ul>    
        </div>
      </div>
  </nav>
</header>

  )
}
