import React from 'react'

export default function BotonGenerarFraseDia({ setFraseApi, mostrarFraseDelDia }) {
  const generarFraseDia = async () => {
    //traigo la api
    fetch('https://type.fit/api/quotes')
      .then(function (response) {
        //formateo la respuesta en formato json (array)
        return response.json();
      })
      .then(function (data) {
        // genero una constante para tener un número de index random
        const randomIndex = Math.floor(Math.random() * data.length);
        // de los datos traidos de la api en formato array, le paso el número random generado
        const randomFrase = data[randomIndex];
        // a la función de estado (en el dashboard) le paso el dato final obtenido de la api
        setFraseApi(randomFrase);
        // llamo a la función que renderiza la frase en el dashboard
        mostrarFraseDelDia();
      });
  };

  return (
    <button type='button' className='btn btn-secondary-btn btn-lg px-3 py-2' onClick={generarFraseDia}><strong>Frase del Día</strong></button>
  );
}