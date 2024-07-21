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
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#2A1A0A'}}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image 
            src={logo} 
            alt="Costa Madeira Logo" 
            width={50} // Ajusta el tamaño según tus necesidades
            height={50} 
            className="d-inline-block align-top"
          />
          <span style={{color: '#F2E8C9', marginLeft: '10px'}}>COSTA MADEIRA</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor: '#F2E8C9'}}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#" style={{color: '#F2E8C9'}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color: '#F2E8C9'}}>Proyect</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color: '#F2E8C9'}}>Choose your Design</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color: '#F2E8C9'}}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
