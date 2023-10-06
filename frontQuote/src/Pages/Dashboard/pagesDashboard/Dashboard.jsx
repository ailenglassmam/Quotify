import React, { useState } from 'react'
import Quote from '../componentesDashboard/Quote'
import 'animate.css';
import BotonCrearFrasePropia from '../componentesDashboard/BotonCrearFrasePropia'
import BotonGenerarFraseDia from '../componentesDashboard/BotonGenerarFraseDia'

export default function Dashboard() {
  //en el componente padre defino estados principales y funciones principales que voy a pasar a los componentes hijos
  // defino los estados tanto del contenido como del renderizado
  const [frasePropia, setFrasePropia] = useState(null);
  const [mostrarFrasePropia, setMostrarFrasePropia] = useState(false);
  const [fraseApi, setFraseApi] = useState(null);
  const [mostrarFraseApi, setMostrarFraseApi] = useState(false);

  // con funciones defino qué muestro dependiendo el botón clickeado: la frase propia o la frase de la api
  const mostrarFrase = () => {
    setMostrarFrasePropia(true);
    setMostrarFraseApi(false);
  };

  const mostrarFraseDelDia = () => {
    setMostrarFraseApi(true);
    setMostrarFrasePropia(false);
  };

  return (
    <section className='min-vh-100 text-center bg-background d-flex flex-column justify-content-center align-items-center py-9 text-black mt-9 px-2 px-lg-0'>
      <h1 className='display-5 fw-bold text-body-emphasis mb-3 animate__animated animate__swing animate__delay-1s'>¡Bienvenido, Quoty!</h1>
      <div className='col-lg-6 mx-auto'>
        <p className='lead'>Presioná el botón y comenzá tu trayecto hacia la motivación con nuestras frases, elegí tus favoritas, personalizalas y compartilas con amigos en tus redes sociales.</p>
        <div className='d-grid gap-2 d-sm-flex justify-content-sm-center my-9'>
          {/* a los botones les paso las funciones de estado */}
          <BotonCrearFrasePropia setFrasePropia={setFrasePropia} mostrarFrase={mostrarFrase} />
          <BotonGenerarFraseDia setFraseApi={setFraseApi} mostrarFraseDelDia={mostrarFraseDelDia} />
        </div>
      </div>
      <div>
        {/* en un div pongo el contenido a renderizar */}
        {mostrarFrasePropia && frasePropia && <Quote frasePropia={frasePropia} />}
        {mostrarFraseApi && fraseApi && <Quote frasePropia={fraseApi} />}
      </div>
    </section>
  );
}