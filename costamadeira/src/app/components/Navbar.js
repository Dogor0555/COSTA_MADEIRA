'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import logo from "../../img/Logos/log1.jpeg"; // Asegúrate de tener la imagen del logo en esta ruta
import { Link } from 'react-scroll'; // Importa el componente Link
import "./Navbar.css";


export default function Navbar() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
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
              <Link 
                className="nav-link" 
                to="hero" 
                spy={true} 
                smooth={true} 
                duration={500}
              >
                <span className="nav-text">Home</span>
              </Link>
            </li>
           
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="features" 
                spy={true} 
                smooth={true} 
                duration={500}
              >
                <span className="nav-text">Features</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={500}
              >
                <span className="nav-text">Contact us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
