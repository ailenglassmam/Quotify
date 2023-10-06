import React from 'react'
import BotonSacarFav from '../componentesDashboard/botonSacarFav';
import BotonCopiarFraseFavorita from '../componentesDashboard/BotonCopiarFraseFavorita';

export default function Historial() {
  // Obtener el historial almacenado en localStorage
  const historial = JSON.parse(localStorage.getItem('historial')) || [];

  return (
    <section className='min-vh-100 bg-background d-flex flex-column justify-content-center align-items-center py-11'>
      <div className='container row row-cols-1 row-cols-md-3 g-4 col-lg-100 mx-auto'>
        {historial.map((frase, index) => (
          <div className='col' key={index}>
            <div className='card border-0'>
              <div className='card-header bg-quote-background border-0 d-flex justify-content-between align-items-center'>
                <h6 className='m-0'>
                  <strong>Quote #{index + 1}</strong>
                </h6>
                <div>
                  <BotonSacarFav text={frase?.text} author={frase?.author} />
                  <BotonCopiarFraseFavorita text={frase?.text} author={frase?.author} />
                </div>
              </div>
              <div className='card-body'>
                <blockquote className='blockquote mb-0'>
                  <p className='text-subtitle'>{frase?.text}</p>
                  <footer className='blockquote-footer'>Autor <cite title='Source Title'>{frase?.author}</cite></footer>
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}