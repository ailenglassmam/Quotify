import React from 'react'
import Error404 from '../assets/404error.svg'

export default function PageNotFound() {
  return (
      <main className='min-vh-100 text-center bg-background d-flex flex-column justify-content-center align-items-center py-9 px-2 px-lg-0'>
        <div className='row'>
          <div className='col-12'>
            <section className='my-5 text-center'>
              <img src={Error404} alt="Sitio no encontrado" className='lg-w-25'/>
              <h1 className='display-5 fw-bold text-body-emphasis mb-3 animate__animated animate__swing animate__delay-1s'>Ups, parece que te perdiste en el camino...</h1>
              <h4 className='mb-4'>No te preocupes, estamos acá para ayudarte a encontrar el rumbo.</h4>
              <p className='lg-lead'>Lamentamos decirte que la página que buscas no se encuentra en nuestro mapa. Pero no te desanimes, podés volver a la página de inicio.<br />¡Estamos seguros de que encontrarás algo grandioso!</p>
              <a href='/' className='btn btn-primary btn-lg px-3 py-2 gap-5 mt-8 fw-bold'>Volver a la página de inicio</a>
            </section>
          </div>
        </div>
      </main>
  )
}