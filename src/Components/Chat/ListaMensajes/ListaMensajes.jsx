import React from 'react'
import { Mensaje } from '../Mensaje/Mensaje'
import './ListaMensajes.css'

const ListaMensajes = ({mookMensajes}) => {
  return (
    <div className='contenedor'>
      {
        mookMensajes.map((mookMensaje) => <Mensaje mensaje={mookMensaje}/>)
      }
    </div>
  )
}

export { ListaMensajes } 