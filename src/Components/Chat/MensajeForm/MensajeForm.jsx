import React from 'react'
import './MensajeForm.css'


const MensajeForm = ({handleSubmitMensaje}) => {

    const handleSubmit = (evento) => {
        evento.preventDefault()
        handleSubmitMensaje(evento.target.mensaje.value)
    }

    return (
        <div className='message-section'>
            <div className='funcionalidades'>
                <div className='emotes'><i className="bi bi-emoji-smile"></i></div>
                <div className='clipboard'><i className="bi bi-paperclip"></i></div>
                <div className='camera'><i className="bi bi-camera"></i></div>
            </div>
            <form className='message-hub' onSubmit={handleSubmit}>
                <input type="text" name="mensaje" className='message-input'/>
                <button type="submit" className='enviar'><i className="bi bi-send-fill" id='sed'></i></button>
            </form>
        </div>
    )
}

export { MensajeForm }