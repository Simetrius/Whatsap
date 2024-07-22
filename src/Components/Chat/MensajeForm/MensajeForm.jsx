import React from 'react'
import './MensajeForm.css'
import { Mensaje } from '../Mensaje/Mensaje'

const MensajeForm = () => {
    return (
        <section className='message-section'>
            <form className='message-hub'>
                <div className='emotes'><i class="bi bi-emoji-smile"></i></div>
                <div className='clipboard'><i class="bi bi-paperclip"></i></div>
                <div className='camera'><i class="bi bi-camera"></i></div>
            </form>
              <input type="text" className='message-input'/>
            <button type="submit" className='audio'><i class="bi bi-mic-fill" id='mic'></i></button>
        </section>
    )
}

export { MensajeForm }