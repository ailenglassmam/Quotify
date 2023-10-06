import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function Cta() {
  return (
    <section className='container py-10 mx-auto'>
      <div className='px-3 text-center'>
        <h2 className='col-lg-10 mx-auto fw-bold text-body-emphasis mb-3'>¡Sumate a nuestra comunidad de motivación y bienestar, que juntos vamos por más!</h2>
        <div className='my-4'>
          <ul className='list-inline d-flex justify-content-center fs-4'>
            <li className='list-inline-item'><a href='https://facebook.com/' target='_blank' className='text-primary'><FacebookIcon fontSize='large' /></a></li>
            <li className='list-inline-item'><a href='https://twitter.com/' target='_blank' className='text-primary'><TwitterIcon fontSize='large' /></a></li>
            <li className='list-inline-item'><a href='https://instagram.com/' target='_blank' className='text-primary'><InstagramIcon fontSize='large' /></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
