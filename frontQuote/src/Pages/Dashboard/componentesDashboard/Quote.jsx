import { React, useRef, useState } from 'react'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded'
import BotonAgregarFav from './BotonAgregarFav'
import BotonEditarFrase from './BotonEditarFrase'
import BotonCopiarFraseDashboard from './BotonCopiarFraseDashboard'
import EditorFrase from '../componentesDashboard/EditorFrase'

// le paso al componente un objeto que contiene los valores finales de las funciones frasePropia y fraseApi
export default function Quote({ frasePropia, fraseApi }) {
  // genero una constante con ambos valores que va a ser la empleada para renderizar la frase obtenida
  const mostrarFrase = frasePropia || fraseApi;
  // genero un estado que controla si se debe mostrar o no el editor de frases en formato de imagen
  const [editorDeFrase, setEditorDeFrase] = useState(false);
  // genero dos constantes para poder copiar los valores de frase y autor y poder guardarlos en el portapapeles (posibilidad de copiar la frase y compartirla por mensajes). Utilizo el hook useRef()
  const quoteRef = useRef(null);
  const authorRef = useRef(null);
  // genero una función que va a renderizar el editor de frases en formato imagen al clickear el botón
  const mostrarEditorDeFrase = () => {
    setEditorDeFrase(true);
  }

  return (
    <div className='container vw-100 py-5 px-5 h-25 d-flex flex-column justify-content-center align-items-center'>
      <figure className='text-center bg-quote-background p-5 rounded-3 mt-9'>
        <blockquote className='blockquote'>
          <div className='mb-5'>
            <FormatQuoteRoundedIcon />
          </div>
          {/* uso la constante para renderizar los valores obtenidos y se los paso como atributo al elemento que va a contener el valor obtenido.
          Luego, renderizo el contenido obtenido. El '?' lo utilizo para evaluar si es undefined o si tiene un valor (evito errores)  */}
          <p ref={quoteRef}><strong>{mostrarFrase?.text}</strong></p>
        </blockquote>
        <figcaption>Autor <cite title='Source Title' ref={authorRef}>{mostrarFrase?.author}</cite></figcaption>
      </figure>
      <div>
        {/*Se le pasan las referencias quoteRef y authorRef como props, lo que significa que el componente puede acceder a los elementos del DOM asociados a esas referencias y realizar acciones.*/}
        <BotonAgregarFav quoteRef={quoteRef} authorRef={authorRef}/>
        {/*Se le pasa la función mostrarEditorDeFrase como prop, lo que permite que el componente pueda llamar a esa función cuando sea necesario.*/}
        <BotonEditarFrase mostrarEditorDeFrase={mostrarEditorDeFrase}/>
        <BotonCopiarFraseDashboard quoteRef={quoteRef} authorRef={authorRef} />
      </div>
      <div className='d-grid gap-2 d-sm-flex justify-content-sm-center my-9'>
        {/*expresión condicional que evalúa si editorDeFrase es verdadero. Si es así, se renderiza el componente <EditorFrase> y se le pasa la prop mostrarFrase. Esto significa que el componente <EditorFrase> se mostrará solo si editorDeFrase es verdadero.*/}
        {editorDeFrase && <EditorFrase mostrarFrase={mostrarFrase} />}
      </div>
    </div>
  );
}