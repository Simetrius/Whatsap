import React from 'react'
import './ChatHeaderInfo.css'


const ChatHeaderInfo = () => {
  return (
    <section>
      <nav className='chat-nav'>
        <div className='user-info'>
          <div className='arrow'><i class="bi bi-arrow-left"></i></div>
          <div className='profile-pic'><img src='https://www.orbitarock.com/sites/default/files/img-efemerides/0306.walter_giardino.jpg' alt="Imagen del contacto" className='profile-img' /></div>
          <div className='username-box'>Walter Giardino</div>
        </div>
        <div className='call-and-config'>
          <div className='videocall'><i class="bi bi-camera-video"></i></div>
          <div className='phonecall'><i class="bi bi-telephone"></i></div>
          <div className='options'><i class="bi bi-three-dots-vertical"></i></div>
        </div>
      </nav>
    </section>
  )
}

export { ChatHeaderInfo }