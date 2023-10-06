import React from 'react'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import Swal from 'sweetalert2'

export default function BotonCopiarFraseDashboard({ text, author }) {
  const copiarFrase = () => {
    const fraseCompartir = `Frase: ${text}\nAutor: ${author}`;

    if (fraseCompartir) {
      navigator.clipboard.writeText(fraseCompartir)
        .then(() => {
          Swal.fire({
            background: '#7D18F7',
            color: 'white',
            title: '¡Frase copiada en el portapapeles!',
            text: '',
            icon: 'success',
            iconColor: 'white',
            confirmButtonColor: 'black',
            confirmButtonText: 'Volver'
          });
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error
          });
        });
    }
  };

  return (
    <button type='button' className='btn' data-bs-container='body' data-bs-trigger='hover focus' data-bs-placement='bottom' data-bs-content='Compartir' onClick={copiarFrase}>
      <ContentCopyRoundedIcon />
    </button>
  );
}