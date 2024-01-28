import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="contenedor">
        <div className="barra">
            <div className="logo">
                <h1 className="nombre-sitio">
                    La Triada<span>Hackathon</span>
                </h1>
            </div>

            <div id="contacto" className="contacto">

                <nav className="navegacion">
                    <a className="link" href="#">Inicio</a>
                    <a className="link" href="#">Nosotros</a>
                    <a className="link" href="#">Contacto</a>
                </nav>
            </div>
        </div>
    </div>

    <p className="copyright">Todos los derechos reservados 2024 &copy; </p>
</footer>
  )
}

export default Footer