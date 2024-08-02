import React from 'react'
import "./HeaderLogin.css"

const HeaderLogin = () => {
  return (
    <header className='login-header'>
      <h2>WHATSAP WEB - Ramiro Maglio</h2>
      <img src="../../public/logo.png" alt="Logo" className="login-logo" />
    </header>
  )
}

export { HeaderLogin }