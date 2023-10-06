import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import phrases from '../utils/PhrasesData'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const Testimonios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + phrases.length) % phrases.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
  };

  const currentPhrase = phrases[currentIndex];

  return (
    <section id='Testimonios' className='bg-background text-black mt-9 px-2 px-lg-0 '>
      <div className='container h-sm-auto h-75'>
        <div className='d-flex flex-lg-nowrap flex-wrap flex-row flex-sm-col py-6 mb-12 align-items-center'>
          <h2 className='fw-bold text-white p-3 bg-primary rounded-3 mb-sm-2'>Testimonios</h2>
          <p className='ps-lg-5 my-auto'>¡Descubrí cómo nuestro sitio web ha ayudado a personas como vos a mantenerse motivadas y alcanzar sus objetivos, a través de los testimonios de nuestra comunidad!</p>
        </div>
        <div className='row d-flex align-items-center flex-col flex-sm-row py-10 text-center justify-content-between'>
          <div className='col-auto mx-auto'>
            <button className='btn btn-primary' onClick={goToPrev}>
              <ArrowBackIosNewIcon />
            </button>
          </div>
          <div className='col-auto mx-auto bg-quote-background rounded-3 p-4 my-5'>
            <p className='text-center'>{currentPhrase.quote}</p>
            <p className='text-center'>- {currentPhrase.author}</p>
          </div>
          <div className='col-auto mx-auto'>
            <button className='btn btn-primary' onClick={goToNext}>
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonios








