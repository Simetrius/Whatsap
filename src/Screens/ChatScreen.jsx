import React, { useState } from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../Components/Chat'
import { MOOK_CONTACTOS } from '../dataMook'
import { useParams } from 'react-router-dom'
import './ChatScreen.css'


const ChatScreen = () => {

    const {chatId} = useParams()
    const contacto = MOOK_CONTACTOS.find(contacto => contacto.userId == chatId)
    const {chat_mensajes} = contacto
    
    const [mensaje, setMensaje] = useState(chat_mensajes)

        const handleSubmitMensaje = (nuevoMensaje) =>{
            setMensaje([...mensaje,{
                author: 'yo',
                text: nuevoMensaje,
                estado: 'enviado',
                day: 'hoy',
                hour: '13:17',
                id: mensaje.length + 1
            }])
        }

    return (
        <div className='chat-screen'>
            <ChatHeaderInfo/>
            <ListaMensajes mookMensajes={mensaje}/>
            <MensajeForm handleSubmitMensaje={handleSubmitMensaje}/>
        </div>
    )
} 


export { ChatScreen }