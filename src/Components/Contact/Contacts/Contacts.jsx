import React, { useState, useEffect } from "react"
import "./Contacts.css"
import { Link } from "react-router-dom"
import { MOOK_CONTACTOS } from "../../../dataMook"
import { FormBusquedaContactos } from "../FormBusquedaContactos/FormBusquedaContactos";


const Contacts = () => {
    const [search, setSearch] = useState("");
    const [timerSearch, setTimerSearch] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const handler = setTimeout(() => {
            setTimerSearch(search);
            setLoading(false);
        }, 350);

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    const handleSearchChange = (value) => {
        setSearch(value);
    };

    const filteredContacts = MOOK_CONTACTOS.filter(usuario =>
        usuario.nombre.toLowerCase().includes(timerSearch.toLowerCase())
    );

    return (
        <div className="contact-list">
            <div className="contact-header">
                <div className="logo-box">
                    <img className="logo" src="../../../public/logo.png" alt="logo-wsp" />
                </div>
                <div className="titulo">
                    <h2>CONTACTOS GUITARRISTAS</h2>
                </div>
                <div className="user-box">
                    <FormBusquedaContactos search={search} onSearchChange={handleSearchChange} />
                </div>
                <Link className="logout-link" to="../">Cerrar sesión</Link>
            </div>

            <div className="contactos">
                {loading
                    ? (<div className="loading">
                        <p>Cargando...</p>
                    </div>)
                    : (filteredContacts.length > 0 ? (
                        filteredContacts.map(usuario => (
                            <div className="contacto" key={usuario.userId}>
                                <img className="contacto-img" src={usuario.img} alt="contact profile picture" />
                                <Link className="link" to={"/chat/" + usuario.userId}>
                                    <div className="text-box">
                                        <div className="contacto-data">
                                            <h3 className="contacto-user">{usuario.nombre}</h3>
                                            <span className="last-mensaje">{usuario.thumbnail}</span>
                                        </div>
                                        <div className="connection-box">
                                            <span className="last-connection">{usuario.ultima_conexion}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )))
                        : (<div className="no-contacts">
                            <p>No se encontraron contactos.</p>
                        </div>)
                    )}
            </div>
        </div>
    );
};

export { Contacts };