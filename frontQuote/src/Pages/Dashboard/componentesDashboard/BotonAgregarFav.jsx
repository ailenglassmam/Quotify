import { React } from 'react'
import Swal from 'sweetalert2'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'

export default function BotonAgregarFav({ quoteRef, authorRef }) {

  const agregarFrase = () => {

    const fraseActual = quoteRef.current?.textContent;
    const autorFraseActual = authorRef.current?.textContent;

    const fraseAgregar = {
      text: fraseActual,
      author: autorFraseActual,
    };

    // se realiza una operación para almacenar datos en el almacenamiento local del navegador utilizando localStorage. 
    const historial = JSON.parse(localStorage.getItem('historial')) || [];
    historial.push(fraseAgregar);
    localStorage.setItem('historial', JSON.stringify(historial));

    Swal.fire({
      color: 'white',
      iconColor: 'white',
      background: '#7D18F7',
      confirmButtonColor: 'black',
      confirmButtonText: 'Volver',
      title: '¡Listo!',
      text: 'La frase se agregó a tus favoritos.',
      icon: 'success',
    });
  };

  return (
    <button
      type='button'
      className='btn btn-secondary'
      data-bs-container='body'
      data-bs-trigger='hover focus'
      data-bs-placement='bottom'
      data-bs-content='Agregar a Favoritos'
      onClick={agregarFrase}
    >
      <FavoriteRoundedIcon />
    </button>
  );
}