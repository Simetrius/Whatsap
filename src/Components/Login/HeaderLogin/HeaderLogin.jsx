import React from 'react'
import "./HeaderLogin.css"
import imgWhatsap from "../../../../public/assets/logo.png"

const HeaderLogin = () => {
  return (
    <header className='login-header'>
      <h2>WHATSAP WEB - Ramiro Maglio</h2>
      <img src={imgWhatsap} alt="Logo-whatsap" className="login-logo" />
    </header>
  )
}

export { HeaderLogin }