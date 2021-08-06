import React from "react";

export const Navbar = (props) => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper red">
          <a href="/" className="brand-logo">
            CanContento
          </a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="active">
              <a href="index.html">Inicio</a>
            </li>
            <li>
              <a href="servicios.html">Servicios</a>
            </li>
            <li>
              <a href="#iniciar-sesion" className="modal-trigger">
                Iniciar Sesión
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li className="active">
          <a href="index.html">Inicio</a>
        </li>
        <li>
          <a href="servicios.html">Servicios</a>
        </li>
        <li>
          <a href="#iniciar-sesion" className="modal-trigger">
            Iniciar Sesión
          </a>
        </li>
      </ul>
    </header>
  );
};
