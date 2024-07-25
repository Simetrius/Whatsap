import React from 'react'
import './MensajeForm.css'
import { Mensaje } from '../Mensaje/Mensaje'

const MensajeForm = ({handleSubmitMensaje}) => {

    const handleSubmit = (evento) => {
        evento.preventDefault()
        handleSubmitMensaje(evento.target.mensaje.value)

    }

    return (

        <section className='message-section'>
            <div className='funcionalidades'>
                <div className='emotes'><i class="bi bi-emoji-smile"></i></div>
                <div className='clipboard'><i class="bi bi-paperclip"></i></div>
                <div className='camera'><i class="bi bi-camera"></i></div>
            </div>
            <form className='message-hub' onSubmit={handleSubmit}>
                <input type="text" name="mensaje" className='message-input'/>
                <button type="submit" className='enviar'><i class="bi bi-send-fill" id='sed'></i></button>
            </form>
        </section>
    )
}

export { MensajeForm }