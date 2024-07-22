import React from 'react'
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
    return (
        <div>
            <ChatHeaderInfo/>
            <ListaMensajes mookMensajes={MOOK_MENSAJES}/>
            <MensajeForm/>
        </div>
    )
} 


export { ChatScreen }