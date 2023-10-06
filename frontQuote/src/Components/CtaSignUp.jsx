import React from 'react'
import { Link } from 'react-router-dom'

export default function CtaSignUp() {
  return (
    <div className='container px-4 py-5'>
      <div className='row align-items-center g-lg-5 py-5'>
        <div className='col-lg-10 text-center text-lg-start mb-4 mb-lg-0'>
          <h2 className='mx-auto fw-bold text-body-emphasis'>¿Qué estás esperando? <br /> ¡Haz como ellos y únete a la comunidad!</h2>
        </div>
        <div className='col-md-10 mx-auto col-lg-2 text-center'>
          <Link to='/register'><button type='button' className='btn btn-primary-btn px-3 py-2 flex justify-center mx-3 btn-sm fw-bold'>Registrarse</button></Link>
        </div>
      </div>
    </div>
  )
}
