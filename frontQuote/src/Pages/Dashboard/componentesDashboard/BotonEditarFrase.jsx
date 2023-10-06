import React from 'react'
import EditRoundedIcon from '@mui/icons-material/EditRounded'

export default function BotonEditarFrase({mostrarEditorDeFrase}) {
  const editarFrase = () => {
    mostrarEditorDeFrase();
  }
  return (
    <button type='button' className='btn btn-secondary' data-bs-container='body' data-bs-trigger='hover focus' data-bs-placement='bottom' data-bs-content='Agregar a Favoritos' onClick={editarFrase}><EditRoundedIcon /></button>
  )
}