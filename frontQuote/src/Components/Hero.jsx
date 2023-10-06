import React from 'react'
import { Link } from 'react-router-dom'
import foto1 from '../assets/foto-hero.svg'

export default function Hero() {
  return (
    <section id='HeroPrincipal' className='bg-background text-black px-2 px-lg-0'>
      <div className='container pt-11'>
        <div className='row flex-column-reverse flex-lg-row'>
          <div className='col-lg-6 order-lg-1 my-auto'>
            <h1 className='display-5 mb-4 fw-bold'>Generá, compartí y descargá frases motivadoras</h1>
            <p className='mb-8 lead'>Encontrá la motivación que necesitás en nuestra colección de frases inspiradoras y mantené una actitud positiva ante cualquier situación.</p>
            <div>
              <Link to='/register' className='btn btn-primary btn-sm fw-bold px-3 py-2'>Registrarse</Link>
            </div>
          </div>
          <div className='col-lg-6 order-lg-2 d-flex justify-content-center mb-10 mb-lg-0'>
            <img className='img-fluid' alt='hero' src={foto1} />
          </div>
        </div>
      </div>
    </section>
  )
}