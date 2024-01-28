import React from 'react'

const Header = () => {
  return (
    <header className="header">
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
        <div className="slogan">
            <h1>NFT</h1>
            <p>La Triada - Hackathon</p>
        </div>
    </div>
</header>
  )
}

export default Header