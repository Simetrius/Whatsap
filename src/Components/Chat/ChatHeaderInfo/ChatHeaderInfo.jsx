import React from "react"
import "./ChatHeaderInfo.css"
import { Link, useParams } from "react-router-dom"
import { MOOK_CONTACTOS } from "../../../dataMook"


const ChatHeaderInfo = () => {
  const { chatId } = useParams()
  const contacto = MOOK_CONTACTOS.find(contacto => contacto.userId == chatId)
  const { img, nombre } = contacto

  return (
    <section>
      <nav className="chat-nav">
        <div className="user-info">
          <Link to={"../contacts"}>
            <div className="arrow"><i className="bi bi-arrow-left"></i></div>
          </Link>
          <div className="profile-pic"><img src={img} alt="Imagen del contacto" className="profile-img" /></div>
          <div className="username-box">{nombre}</div>
        </div>
      </nav>
    </section>
  )
}

export { ChatHeaderInfo }