
import '../Desktop/Desktop.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import AAilen from '../../assets/AAilen.png';
import BDexilen from '../../assets/BDexilen.png';
import CClaudia from '../../assets/CClaudia.png';
import CCLeandro from '../../assets/CCLeandro.png';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { purple } from '@mui/material/colors';
import NavBar from '../NavBar';
import FooterHome from '../FooterHome';




const Desktop = () => {


  return (
    <>
      <section>
        <NavBar />
      </section>

      <div id='team' className="container">
        <div className='titulo'>
          <h1 className='hh1'>¡Conocé al dream team!</h1>
          <h3 className='hh3'>Te presentamos al increíble equipo detrás de Quote. Somos un grupo de mentes creativas y apasionadas que trabaja duro para brindarte la mejor experiencia posible</h3>
        </div>

        <div className="cajas">

          <div className="card1">
            <div>
              <img src={AAilen} className="rounded" alt="Imagen de Ailen" />
            </div>
            <div>
              <h4 className="nombre" >Ailén Glassmam</h4>
              <h6 className='hh6'>FrontEnd Developer</h6>
              <p className="text1">This is a wider card with supporting <br />text below as a natural lead-in to additional content. <br />This content is a little bit longer.</p>
              <ul className="lista-ul">
                <li className='nav-item'><a href='https://facebook.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[600] }}><FacebookIcon /></a></li>
                <li className='nav-item'><a href='https://twitter.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[600] }}><TwitterIcon /></a></li>
                <li className='nav-item'><a href='https://instagram.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[600] }}><InstagramIcon /></a></li>
                <li className='nav-item'><a href='https://ar.linkedin.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[600] }}><LinkedInIcon /></a></li>
              </ul>

            </div>
          </div>


          <div className="card1">
            <div>
              <img src={BDexilen} className="rounded" alt="Imagen de Dexilen" />
            </div>
            <div>
              <h4 className="nombre">Dexilen Mendoza</h4>
              <h6 className='hh6'>FrontEnd Developer</h6>
              <p className="text1">This is a wider card with supporting <br />text below as a natural lead-in to additional content.<br /> This content is a little bit longer.</p>
              <ul className="lista-ul">
                <li className='nav-item'><a href='https://facebook.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[600] }}><FacebookIcon /></a></li>
                <li className='nav-item'><a href='https://twitter.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[600] }}><TwitterIcon /></a></li>
                <li className='nav-item'><a href='https://instagram.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[600] }}><InstagramIcon /></a></li>
                <li className='nav-item'><a href='https://ar.linkedin.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[600] }}><LinkedInIcon /></a></li>
              </ul>

            </div>
          </div>



          <div className="card1">
            <div>
              <img src={CClaudia} className="rounded" alt="Imagen de Claudia" />
            </div>
            <div>
              <h4 className="nombre">Claudia Zapata</h4>
              <h6 className='hh6'>FrontEnd Developer</h6>
              <p className="text1">This is a wider card with supporting <br />text below as a natural lead-in to additional content.<br /> This content is a little bit longer.</p>
              <ul className="lista-ul">
                <li className='nav-item'><a href='https://facebook.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[500] }}><FacebookIcon /></a></li>
                <li className='nav-item'><a href='https://twitter.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[600] }}><TwitterIcon /></a></li>
                <li className='nav-item'><a href='https://instagram.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[600] }}><InstagramIcon /></a></li>
                <li className='nav-item'><a href='https://ar.linkedin.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[600] }}><LinkedInIcon /></a></li>
              </ul>

            </div>
          </div>



          <div className="card1">
            <div>
              <img src={CCLeandro} className="rounded" alt="Imagen de Leandro" />
            </div>
            <div>
              <h4 className="nombre">Leandro Echegorria</h4>
              <h6 className='hh6'>FrontEnd Developer</h6>
              <p className="text1">This is a wider card with supporting <br />text below as a natural lead-in to additional content. <br />This content is a little bit longer.</p>
              <ul className="lista-ul">
                <li className='nav-item'><a href='https://facebook.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[600] }}><FacebookIcon /></a></li>
                <li className='nav-item'><a href='https://twitter.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[600] }}><TwitterIcon /></a></li>
                <li className='nav-item'><a href='https://instagram.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[600] }}><InstagramIcon /></a></li>
                <li className='nav-item'><a href='https://ar.linkedin.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: purple[600] }}><LinkedInIcon /></a></li>
              </ul>

            </div>
          </div>

        </div>
      </div>
      <section>
        <FooterHome />
      </section>
    </>
  );
}


export default Desktop;