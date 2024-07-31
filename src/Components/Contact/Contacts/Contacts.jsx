import React from "react"
import './Contacts.css'
import { Link } from 'react-router-dom'
import { MOOK_CONTACTOS } from "../../../dataMook"
import { FormBusquedaContactos } from "../FormBusquedaContactos/FormBusquedaContactos";



const Contacts = ({search, onSearchChange}) => {


    return (
        <div className='contact-list'>
            <div className='contact-header'>
                <div className="logo-box">
                    <img className="logo" src="../../../public/logo.png" alt="logo-wsp" />
                </div>
                <div className='titulo'>
                    <h2>CONTACTOS GUITARRISTAS</h2>
                </div>
                <div className='user-box'>
                    <FormBusquedaContactos search={search} onSearchChange={onSearchChange}/>
                </div>
            </div>
            
            <div className='contactos'>
                {MOOK_CONTACTOS.map(usuario => {
                    return (
                        <div className='contacto' key={usuario.userId}>
                            <img className='contacto-img' src={usuario.img} alt="contact profile picture" />
                            <Link className='link' to={'/chat/' + usuario.userId}>
                                <div className='text-box'>
                                    <div className='contacto-data'>
                                        <h3 className='contacto-user'>{usuario.nombre}</h3>
                                        <span className='last-mensaje'>{usuario.thumbnail}</span>
                                    </div>
                                    <div className='connection-box'>
                                        <span className='last-connection'>{usuario.ultima_conexion}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export { Contacts }