import { useState } from 'react'
import Swal from 'sweetalert2'

const Contactanos = () => {

  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    comentario: ''
  })

  const handleChange = (event) => {
    setDatos({ ...datos, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    setTimeout(event.preventDefault())
    console.table(datos)
    return (
      Swal.fire({
        title: 'Datos ingresados',
        text: `Nombre: ${datos.nombre}\nEmail: ${datos.email}`,
        icon: 'success'
        ,
      }
      )).then(() => {
        window.location.reload()
      })
  }

  return (
    <section id='Contacto' className='bg-background text-black mt-9 px-2 px-lg-0'>
      <div className='container'>
        <div className='d-flex flex-lg-nowrap flex-wrap flex-row flex-sm-col py-6 mb-12 align-items-center'>
          <h2 className='fw-bold text-white p-3 bg-primary rounded-3 mb-sm-2'>Contactanos</h2>
          <p className='ps-lg-5 my-auto'>¿Tienes alguna pregunta, comentario o sugerencia? ¡Nos encantaría escucharte! Envianos un mensaje directo y nos pondremos en contacto contigo lo antes posible.</p>
        </div>
        <form className='w-100 w-lg-50 mx-auto my-10 needs-validation' noValidate>
          <div className='row-cols-lg-auto g-3'>
            <div className='col-lg-8 col-12 mx-auto my-3'>
              <label className='fs-10'>Nombre completo</label>
              <input type='text' name='nombre' className='bg-background form-control border-black border-2' id='fullName' placeholder='Nombre y apellido' value={datos.nombre} onChange={handleChange} required />
              <div className='invalid-feedback'>
                Se requiere un nombre válido.
              </div>
            </div>
            <div className='col-lg-8 col-12 mx-auto my-3'>
              <label className='fs-10'>Email <span className='text-body-secondary'>(Opcional)</span></label>
              <input type='email' name='email' className='bg-background form-control border-black border-2' id='email' placeholder='ejemplo@ejemplo.com' value={datos.email} onChange={handleChange} />
              <div className='invalid-feedback'>
                Ingrese una dirección de correo electrónico válida.
              </div>
            </div>
            <div className='col-lg-8 col-12 mx-auto my-3'>
              <label className='fs-10'>Comentario</label>
              <textarea type='text' name='comentario' className='bg-background form-control border-black border-2' id='zip' placeholder='¿Qué te gustaría decirnos?' value={setDatos.comentario} onChange={handleChange} required />
            </div>
          </div>
          <div className='text-center'>
            <button className='btn btn-secondary-btn px-3 py-2 my-3 btn-sm fw-bold' type='submit'>Enviar</button>
          </div>
        </form>
      </div>
    </section>

  )
}

export default Contactanos

