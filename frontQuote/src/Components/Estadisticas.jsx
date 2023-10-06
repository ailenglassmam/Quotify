import React from 'react'

export default function Estadisticas() {
  return (
    <section className='bg-background text-black px-2 px-lg-0'>
      <div className='container py-11'>
        <div className='row text-center'>
          <div className='col-sm-6 col-md-3 my-5 my-lg-0'>
            <h2 className='display-4 fw-bolder'>2.7K</h2>
            <p className='lead'>Usuarios</p>
          </div>
          <div className='col-sm-6 col-md-3 my-5 my-lg-0'>
            <h2 className='display-4 fw-bolder'>1.8K</h2>
            <p className='lead'>Descargas</p>
          </div>
          <div className='col-sm-6 col-md-3 my-5 my-lg-0'>
            <h2 className='display-4 fw-bolder'>+2K</h2>
            <p className='lead'>Frases</p>
          </div>
          <div className='col-sm-6 col-md-3 my-5 my-lg-0'>
            <h2 className='display-4 fw-bolder'>4k</h2>
            <p className='lead'>Compartidos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
