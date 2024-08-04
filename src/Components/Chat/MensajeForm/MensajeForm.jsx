import React from "react"
import "./MensajeForm.css"


const MensajeForm = ({handleSubmitMensaje}) => {

    const handleSubmit = (evento) => {
        evento.preventDefault()
        handleSubmitMensaje(evento.target.mensaje.value)
    }

    return (
        <div className="message-section">
            <div className="funcions">
                <div className="emotes">
                    <i className="bi bi-emoji-smile"></i>
                </div>
                <div className="clipboard">
                    <i className="bi bi-paperclip"></i>
                </div>
                <div className="camera">
                    <i className="bi bi-camera"></i>
                </div>
            </div>
            <form className="message-hub" onSubmit={handleSubmit}>
                <input  className="message-input" type="text" name="mensaje"/>
                <button className="enviar" type="submit">
                    <i className="bi bi-send-fill" id="sed"></i>
                </button>
            </form>
        </div>
    )
}

export { MensajeForm }