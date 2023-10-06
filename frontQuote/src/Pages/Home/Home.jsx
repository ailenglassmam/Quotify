import NavBar from '../../Components/NavBar'
import ComoFunciona from '../../Components/ComoFunciona'
import FooterHome from '../../Components/FooterHome'
import Testimonios from '../../Components/Testimonios'
import Contactanos from '../../Components/Contactanos'
import Cta from '../../Components/Cta'
import CtaSignUp from '../../Components/CtaSignUp'
import Hero from '../../Components/Hero'
import Estadisticas from '../../Components/Estadisticas'



const Home = () => {
  return (
    <main className='bg-background'>
      <NavBar />
      <Hero />
      <Estadisticas></Estadisticas>
      <ComoFunciona />
      <Testimonios />
      <CtaSignUp />
      <Contactanos />
      <Cta />
      <FooterHome />
    </main>
  )
}

export default Home
