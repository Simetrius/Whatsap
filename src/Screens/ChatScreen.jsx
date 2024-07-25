import React, { useState } from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../Components/Chat'

const MOOK_MENSAJES = [
    {
        author: 'yo',
        text: 'Hola walteeeeeer!!!!!',
        estado: 'visto',
        day: 'hoy',
        hour: '13:15',
        id: '1'
    },
    {
        author: 'Walter Giardino',
        text: 'Hola que tal?',
        estado: 'visto',
        day: 'hoy',
        hour: '13:16',
        id: '2'
    },
    {
        author: 'yo',
        text: 'Sos real? OMG',
        estado: 'visto',
        day: 'hoy',
        hour: '13:17',
        id: '3'
    }
]

const ChatScreen = () => {
    
    const [mensaje, setMensaje] = useState(MOOK_MENSAJES)

        const handleSubmitMensaje = (nuevoMensaje) =>{
            setMensaje([...mensaje,{
                author: 'yo',
                text: nuevoMensaje,
                estado: 'enviado',
                day: 'hoy',
                hour: '13:17',
                id: '4'

            }])
        }

    return (
        <div>
            <ChatHeaderInfo/>
            <ListaMensajes mookMensajes={mensaje}/>
            <MensajeForm handleSubmitMensaje={handleSubmitMensaje}/>
        </div>
    )
} 


export { ChatScreen }