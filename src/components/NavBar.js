import React from "react";

export const Navbar = (props) => {
  return (
    <header>
      <nav>
        <div class="nav-wrapper red">
          <a href="#" class="brand-logo">
            CanContento
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li class="active">
              <a href="index.html">Inicio</a>
            </li>
            <li>
              <a href="servicios.html">Servicios</a>
            </li>
            <li>
              <a href="#iniciar-sesion" class="modal-trigger">
                Iniciar Sesión
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li class="active">
          <a href="index.html">Inicio</a>
        </li>
        <li>
          <a href="servicios.html">Servicios</a>
        </li>
        <li>
          <a href="#iniciar-sesion" class="modal-trigger">
            Iniciar Sesión
          </a>
        </li>
      </ul>
    </header>
  );
};
