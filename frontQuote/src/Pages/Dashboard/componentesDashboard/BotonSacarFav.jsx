import React from 'react'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import Swal from 'sweetalert2'

export default function BotonSacarFav({ text, author }) {
  const sacarFavoritos = () => {
    // Obtener el historial almacenado en localStorage
    const historial = JSON.parse(localStorage.getItem('historial')) || [];

    // Encontrar la frase en el historial utilizando texto y autor
    const indice = historial.findIndex((frase) => frase?.text === text && frase?.author === author);

    // Verificar si se encontró la frase
    if (indice !== -1) {
      // Eliminar la frase del historial utilizando splice
      historial.splice(indice, 1);

      // Guardar el historial actualizado en localStorage
      localStorage.setItem('historial', JSON.stringify(historial));
    }

    Swal.fire({
      title: '¿La vas a borrar?',
      color: 'white',
      iconColor: 'white',
      background: '#7D18F7',
      text: 'No hay problema, a veces también es necesario dejar ir para dar lugar a nuevas ideas.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'black',
      focusConfirm: false,
      cancelButtonColor: 'transparent',
      focusCancel: false,
      confirmButtonText: 'Sacar de favoritos'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '¡Borrado con éxito!',
          color: 'white',
          iconColor: 'white',
          background: '#7D18F7',
          text: '¡Gracias por formar parte de Quotify!',
          icon: 'success',
          confirmButtonColor: 'black',
          confirmButtonText: 'Volver'
        })
      }
    })
  }

  return (
    <button
      type='button'
      className='btn'
      data-bs-container='body'
      data-bs-trigger='hover focus'
      data-bs-placement='bottom'
      data-bs-content='Sacar de Favoritos'
      onClick={sacarFavoritos}
    >
      <FavoriteRoundedIcon />
    </button>
  );
}