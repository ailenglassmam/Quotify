import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function FooterHome() {
  return (
    <footer className='container px-5 py-1 bg-primary rounded-top-5 text-white'>
      <ul className='d-flex flex-column flex-sm-row text-center nav justify-content-end flex-column-sm py-3 mb-3'>
        <li className='nav-item'><a href='/#ComoFunciona' className='nav-link px-2 text-white'>Cómo Funciona</a></li>
        <li className='nav-item'><a href='/#Testimonios' className='nav-link px-2 text-white'>Testimonios</a></li>
        <li className='nav-item'><a href='/#Contacto' className='nav-link px-2 text-white'>Contactanos</a></li>
        <li className='nav-item'><a href='/#Contacto' className='nav-link px-2 text-white'>Team</a></li>
      </ul>
      <div className='d-flex flex-lg-nowrap text-center flex-wrap flex-row flex-sm-col py-6 mb-12 justify-content-center justify-content-lg-start align-items-center align-items-lg-start'>
        <h4 className='fw-bold bg-white p-3 text-primary rounded-3 mb-sm-2 text-lg-start align-self-center'>Contacto</h4>
        <ul className='nav flex-column py-3 mb-3 ml-lg-5 align-items-lg-start mx-lg-5 my-auto justify-content-center align-self-center'>
          <li className='nav-item'><strong>Mail:</strong> info@grupo8.com</li>
          <li className='nav-item'><strong>Teléfono:</strong> 0800-react-23303</li>
          <li className='nav-item'><strong>Dirección:</strong> Agencia de Aprendizaje a lo Largo de la Vida, Codo a Codo 4.0</li>
        </ul>
      </div>
      <div className='d-flex flex-column text-center flex-sm-row justify-content-between my-4'>
        <p>&copy;2023 Grupo 8. Todos los derechos reservados.</p>
        <ul className='list-unstyled d-flex justify-content-center'>
          <li className='nav-item'><a href='https://facebook.com/' target='blank' className='nav-link px-2 text-white'><FacebookIcon /></a></li>
          <li className='nav-item'><a href='https://twitter.com/' target='blank' className='nav-link px-2 text-white'><TwitterIcon /></a></li>
          <li className='nav-item'><a href='https://instagram.com/' target='blank' className='nav-link px-2 text-white'><InstagramIcon /></a></li>
        </ul>
      </div>
    </footer>
  )
}
