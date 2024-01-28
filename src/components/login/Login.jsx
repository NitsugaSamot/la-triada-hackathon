import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Login = () => {
  return (
    <>
        <header className="header-login">
            <div className="contenedor contenido-header">
                <div className="barra">
                    <div className="logo">
                        <h1 className="nombre-sitio">
                            Triada<span>Hackathon</span>
                        </h1>
                    </div>

                    <div className="contacto">

                        <nav className="navegacion">
                            <a className="link" href="/">Inicio</a>
                            <a className="link" href="#createNFT">Nosotros</a>
                            <a className="link" href="#galeria">Galeria</a>
                            <a className="link" href="/login">Login</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    <div className="login-container">
      <h2 className="h2">Iniciar Sesión</h2>
      <form className="login-form">
        <label htmlFor="user">Usuario</label>
        <input type="text" id="user" name="user" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" />

        <button type="submit" className="btn">Iniciar Sesión</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
