import React from 'react'
import { useState } from 'react'
import '../styles/styles.css'
import '../../../scss/style.scss'
import html2canvas from 'html2canvas'

export default function EditorFrase({ mostrarFrase }) {

  const [formatoImg, setFormatoImg] = useState();
  const [medidasFormato, setMedidasFormato] = useState({ width: 432, height: 432, padding: 1.5 });
  const [colorDeFondo, setColorDeFondo] = useState('black');
  const [colorDeTexto, setColorDeTexto] = useState('white');
  const [tipografia, setTipografia] = useState();
  const [estilosTipograficos, setEstilosTipograficos] = useState();
  const [tamanioLetra, setTamanioLetra] = useState();
  const [tamanioInterlineadoFrase, setTamanioInterlineadoFrase] = useState();
  const [justificacionFrase, setJustificacionFrase] = useState('start');
  const [alineacionContenido, setAlineacionContenido] = useState('top');

  const obtenerMedidasFormato = (formatoImg) => {
    // Asigna las medidas según el formato seleccionado
    switch (formatoImg) {
      case 'IGFC':
        setMedidasFormato({ width: 432, height: 432 });
        break;
      case 'IGFV':
        setMedidasFormato({ width: 432, height: 540 });
        break;
      case 'IGS':
        setMedidasFormato({ width: 432, height: 768 });
        break;
      case 'TWP':
        setMedidasFormato({ width: 640, height: 360 });
        break;
      case 'TWC':
        setMedidasFormato({ width: 600, height: 200 });
        break;
      case 'PP':
        setMedidasFormato({ width: 432, height: 768 });
        break;
      case 'FCP':
        setMedidasFormato({ width: 656, height: 369 });
        break;
      case 'FCPC':
        setMedidasFormato({ width: 432, height: 432 });
        break;
      case 'FCPV':
        setMedidasFormato({ width: 432, height: 432 });
        break;
      case 'FCS':
        setMedidasFormato({ width: 432, height: 768 });
        break;
      case 'LKP':
        setMedidasFormato({ width: 480, height: 480 });
        break;
      default:
        setMedidasFormato({ width: 0, height: 0 }); // Si no se encuentra el formato, se asignan medidas predeterminadas
        break;
    }
  };

  const formatoImagen = (e) => {
    setFormatoImg(e.target.value);
    obtenerMedidasFormato(e.target.value);
  }

  const colorFondo = (e) => {
    setColorDeFondo(e.target.value);
    console.log(e.target.value);
  }

  const colorTexto = (e) => {
    setColorDeTexto(e.target.value);
    console.log(e.target.value);
  }

  const tipografiaFrase = (e) => {
    setTipografia(e.target.value);
    console.log(e.target.value);
  }

  const estiloFrase = (e) => {
    setEstilosTipograficos(e.target.value);
    console.log(e.target.value);
  }

  const tamanioTipografia = (e) => {
    setTamanioLetra(e.target.value);
    console.log(e.target.value);
  }

  const tamanioInterlineado = (e) => {
    setTamanioInterlineadoFrase(e.target.value);
    console.log(e.target.value);
  }

  const alineacionHorizontalFrase = (e) => {
    setJustificacionFrase(e.target.value);
    console.log(e.target.value);
  }

  const alineacionVerticalFrase = (e) => {
    setAlineacionContenido(e.target.value);
    console.log(e.target.value);
  }

  const descargaDivComoImagen = (e) => {
    e.preventDefault(); // Para prevenir el comportamiento predeterminado del enlace

    const divElement = document.querySelector('#quote-image');

    html2canvas(divElement, { scale: 5, }).then(canvas => {
      // Convierte el canvas a imagen
      const imgData = canvas.toDataURL('image/jpg');

      // Crea un elemento <a> para descargar la imagen
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'quote.jpg'; //nombre que le asigno al archivo de descarga
      link.click();
    });
  }

  return (
    <section className='container vw-100 py-5 px-5'>
      <div className='row d-flex justify-content-center p-3 flex-column flex-md-row'>
        {/* formulario de edición */}
        <div className='col-12 col-md-4 bg-light p-3 rounded-2'>
          <form>
            <h3 className='display-8 fw-bold text-body-emphasis'>Editá tu frase</h3>
            <fieldset>
              <div className='input-group my-5'>
                <label className='input-group-text' for='formatoDeImagen'>Formato de imagen</label>
                <select className='form-select' id='formatoDeImagen' onChange={formatoImagen}>
                  <option disabled selected>Formatos...</option>
                  <option value='IGFC' >Post de Instagram (cuadrado)</option>
                  <option value='IGFV'>Post de Instagram (vertical)</option>
                  <option value='IGS'>Story de Instagram</option>
                  <option value='TWP'>Post de Twitter</option>
                  <option value='TWC'>Encabezado de Twitter</option>
                  <option value='PP'>Pin de Pinterest</option>
                  <option value='FCP'>Portada de Facebook</option>
                  <option value='FCPC'>Posteo de facebook (cuadrado)</option>
                  <option value='FCS'>Story de facebook</option>
                  <option value='LKP'>Posteo de LinkedIn</option>
                </select>
              </div>
              <div className='input-group my-5'>
                <label for='colorDeFondo' className='input-group-text'>Color de fondo</label>
                <input type='color' className='form-control form-control-color' id='colorDeFondo' title='Color de fondo' onChange={colorFondo}></input>
              </div>
              <div className='input-group my-5'>
                <label for='tipografia' className='input-group-text'>Tipografía</label>
                <select id='tipografia' className='form-select' onChange={tipografiaFrase}>
                  <option value='' disabled selected>Fuentes...</option>
                  <option value='Poppins'>Poppins Sans-Serif</option>
                  <option value='Roboto'>Roboto</option>
                  <option value='Oswald'>Oswald</option>
                  <option value='Lucida Sans'>Lucida Sans</option>
                  <option value='Trebuchet MS'>Trebuchet MS</option>
                  <option value='Courier New'>Courier New</option>
                  <option value='Franklin Gothic'>Franklin Gothic</option>
                  <option value='Cambria'>Cambria</option>
                  <option value='Georgia'>Georgia</option>
                  <option value='Montserrat'>Montserrat</option>
                  <option value='Abril Fatface'>Abril Fatface</option>
                  <option value='Bebas Neue'>Bebas Neue</option>
                  <option value='Caprasimo'>Caprasimo</option>
                  <option value='DM Serif Display'>DM Serif Display</option>
                  <option value='Indie Flower'>Indie Flower</option>
                  <option value='Kalam'>Kalam</option>
                  <option value='Lato'>Lato</option>
                  <option value='Lilita One'>Lilita One</option>
                  <option value='Lobster'>Lobster</option>
                  <option value='Lobster Two'>Lobster Two</option>
                  <option value='Prata'>Prata</option>
                  <option value='Raleway'>Raleway</option>
                  <option value='Rowdies'>Rowdies</option>
                  <option value='Russo One'>Russo One</option>
                  <option value='Shadows Into Light'>Shadows Into Light</option>
                </select>
              </div>
              <div className='input-group my-5'>
                <label for='tipografia' className='input-group-text'>Estilos</label>
                <select id='tipografia' className='form-select' onChange={estiloFrase}>
                  <option value='' disabled selected>Apariencia</option>
                  <option value='bold'>Negrita</option>
                  <option value='italic'>Cursiva</option>
                  <option value='regular'>Regular</option>
                </select>
              </div>
              <div className='input-group my-5'>
                <label for='colorDeFrase' className='input-group-text'>Color del texto</label>
                <input type='color' className='form-control form-control-color' id='colorDeFrase' title='Color texto' onChange={colorTexto}></input>
              </div>
              <div className='input-group my-5'>
                <label for='tamanioLetra' className='input-group-text'>Tamaño de fuente</label>
                <input type='range' className='form-control' min='0' max='10' step='0.2' id='tamanioLetra' onChange={tamanioTipografia} />
              </div>
              <div className='input-group my-5'>
                <label for='tamanioLinea' className='input-group-text'>Interlineado</label>
                <input type='range' className='form-control' min='0' max='2' step='0.2' id='tamanioLinea' onChange={tamanioInterlineado} />
              </div>
              <div className='input-group my-5'>
                <label for='tipografia' className='input-group-text'>Alineación Horizontal</label>
                <select id='tipografia' className='form-select' onChange={alineacionHorizontalFrase}>
                  <option value='' disabled selected>Texto...</option>
                  <option value='end'>Derecha</option>
                  <option value='start'>Izquierda</option>
                  <option value='center'>Centrado</option>
                </select>
              </div>
              <div className='input-group my-5'>
                <label for='tipografia' className='input-group-text'>Alineación Vertical</label>
                <select id='tipografia' className='form-select' onChange={alineacionVerticalFrase}>
                  <option disabled selected>Texto...</option>
                  <option value='start'>Arriba</option>
                  <option value='center'>Centro</option>
                  <option value='end'>Abajo</option>
                </select>
              </div>
              <button type='submit' className='btn btn-primary fw-bold' onClick={descargaDivComoImagen}>Descargar imagen</button>
            </fieldset>
          </form>
        </div>
        {/* mesa de edicion */}
        <div className='col-12 col-md-8 p-3 rounded-2 d-flex justify-content-center'>
          <figure id='quote-image'
            style={{
              width: `${medidasFormato.width}px`,
              height: `${medidasFormato.height}px`,
              padding: `${medidasFormato.padding}em`,
              backgroundColor: colorDeFondo,
              display: 'flex',
              alignItems: `${alineacionContenido}`
            }}>
            <div className='overflow-y-hidden'>
              <p style={{
                fontSize: `${tamanioLetra * 2}em`,
                textAlign: `${justificacionFrase}`,
                fontFamily: `${tipografia}`,
                fontWeight: estilosTipograficos === 'bold' ? 'bold' : 'normal',
                fontStyle: estilosTipograficos === 'italic' ? 'italic' : 'normal',
                color: `${colorDeTexto}`,
                lineHeight: `${tamanioInterlineadoFrase}`
              }}>{mostrarFrase?.text}</p>
              <p style={{
                fontSize: `${tamanioLetra}em`,
                textAlign: `${justificacionFrase}`,
                fontFamily: `${tipografia}`,
                fontWeight: estilosTipograficos === 'bold' ? 'bold' : 'normal',
                fontStyle: estilosTipograficos === 'italic' ? 'italic' : 'normal',
                color: `${colorDeTexto}`
              }}>{mostrarFrase?.author}</p>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}