import React from 'react'
import logoQuotify from '../../../assets/quotify-logo-white.svg'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function FooterDashboard() {
  return (
<footer className='container rounded-top-5 bg-primary fixed-bottom mb-0 py-1 px-5'>
  <div className='d-flex flex-column flex-lg-row align-items-center justify-content-lg-between'>
    <p className='text-white fs-6 mb-2 mb-lg-0'>© 2023 Grupo 8.</p>
    <a href='/' className='h-9'>
      <img src={logoQuotify} alt='Quotify, un lugar donde la inspiración nace' height='20px' />
    </a>
    <ul className='nav'>
      <li className='nav-item'><a href='https://facebook.com/' target='_blank' className='nav-link px-2 text-white'><FacebookIcon /></a></li>
      <li className='nav-item'><a href='https://twitter.com/' target='_blank' className='nav-link px-2 text-white'><TwitterIcon /></a></li>
      <li className='nav-item'><a href='https://instagram.com/' target='_blank' className='nav-link px-2 text-white'><InstagramIcon /></a></li>
    </ul>
  </div>
</footer>

  )
}