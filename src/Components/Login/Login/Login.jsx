import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { HeaderLogin } from "../HeaderLogin/HeaderLogin";

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);


        setTimeout(() => {
            if (user.toLowerCase() === "ramiro" && password.toLowerCase() === "maglio") {
                setError(false);
                setCanSubmit(true);
            } else {
                setError(true);
                setCanSubmit(false);
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="login-body">
            <HeaderLogin />
            <section className="login">
                <h1>Login</h1>
                <h3 className="login-instructions">
                    PARA PODER INICIAR SESION, DEBE LEER EL DOCUMENTO README, AHI SE ENCONTRARA EL USUARIO Y CONTRASEÑA DE ACCESO
                </h3>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label>Usuario</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Usuario"
                        value={user}
                        onChange={event => setUser(event.target.value)}
                        required
                    />

                    <label>Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required
                    />

                    {/* Mostrar el botón de "Iniciar Sesión" solo si canSubmit es falso */}
                    {!canSubmit && <button type="submit">Iniciar Sesión</button>}
                    <h4>CUANDO INICIE SESION CORRECTAMENTE, APARECERÁ EL BOTON DE IR A CONTACTOS!</h4>
                    {loading && <div className="loading-icon"><i className="bi bi-arrow-clockwise"></i></div>}

                    {/* Utilizar Link solo si canSubmit es verdadero */}
                    {canSubmit && !loading && <Link className="link-contactos" to="/contacts">Ir a Contactos</Link>}
                    {error && <p className="error-message">Credenciales incorrectas. Intente nuevamente.</p>}
                </form>
            </section>
        </div>
    );
};

export { Login };
