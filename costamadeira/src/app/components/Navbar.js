'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import logo from "../../img/Logos/log1.jpeg"; // Asegúrate de tener la imagen del logo en esta ruta

export default function Navbar() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2A1A0A' }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <Image 
            src={logo} 
            alt="Costa Madeira Logo" 
            width={50} 
            height={50} 
            className="d-inline-block align-top"
          />
          <span className="ms-2" style={{ color: '#F2E8C9', fontWeight: 'bold' }}>COSTA MADEIRA</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="nav-text">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="nav-text">Project</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="nav-text">Choose Your Design</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="nav-text">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar-nav .nav-item {
          position: relative;
        }
        .nav-link {
          transition: color 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
          padding: 10px 15px;
          border-radius: 5px;
        }
        .nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background-color: #FFD700; /* Color dorado para el subrayado */
          transition: width 0.3s ease;
        }
        .nav-link:hover::before {
          width: 100%;
        }
        .nav-link:hover {
          color: #FFD700; /* Cambia a color dorado al pasar el mouse */
          background-color: rgba(255, 215, 0, 0.1); /* Fondo dorado sutil */
          transform: translateY(-5px); /* Eleva el enlace al pasar el mouse */
        }
        .navbar-toggler-icon {
          background-image: url('data:image/svg+xml,...'); /* Personaliza el ícono del toggle */
        }
        @media (max-width: 992px) {
          .navbar-collapse {
            transition: max-height 0.3s ease; /* Animación suave al abrir/cerrar el menú */
          }
        }
      `}</style>
    </nav>
  );
}
