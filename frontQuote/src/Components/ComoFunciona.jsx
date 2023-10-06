import func1 from '../assets/comoFunciona1.svg'
import func2 from '../assets/comoFunciona2.svg'
import func3 from '../assets/comoFunciona3.svg'

const ComoFunciona = () => {
  return (
    <section id='ComoFunciona' className='bg-primary text-white py-10 mt-9 px-2 px-lg-0'>
      <div className='container'>
        <div className='d-flex flex-lg-nowrap flex-wrap flex-row flex-sm-col py-6 mb-12 align-items-center'>
          <h2 className='fw-bold text-primary p-3 bg-white rounded-3 mb-sm-2'>Cómo Funciona</h2>
          <p className='ps-lg-5 my-auto'>¡Descubrí cómo podés utilizar nuestro sitio web para crear, compartir y descargar frases motivacionales, en sólo unos simples pasos!</p>
        </div>
        <div className='row g-3 pt-10 row-cols-1 row-cols-lg-3'>
          <div className='feature col text-center pb-7 flex-column my-7'>
            <h3 className='fs-2 text-white fw-bold'>Elegí</h3>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3 h-75'>
              <img src={func1} alt='Paso 1' className='w-75' />
            </div>
            <p className='px-4'>¡Elegí la frase que te vuele la peluca o creá la tuya propia para arrancar el día con toda la pila!</p>
          </div>
          <div className='feature col text-center pb-7 flex-column my-7'>
            <h3 className='fs-2 text-white fw-bold'>Editá</h3>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3 h-75'>
              <img src={func2} alt='Paso 2' className='w-75' />
            </div>
            <p className='px-4'>Si querés darle un toque más piola, ¡Transformala en una imagen bien copada!</p>
          </div>
          <div className='feature col text-center pb-7 flex-column mt-7'>
            <h3 className='fs-2 text-white fw-bold'>Compartí</h3>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3 h-75'>
              <img src={func3} alt='Paso 3' className='w-75' />
            </div>
            <p className='px-4'>¡Compartí tu frase motivacional hoy y llená las redes sociales con buena onda!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona