'use client';
import React from 'react';
import Image from "next/image";
import A5 from "../../img/Logos/log1.jpeg";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-dark-brown text-light py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-3 mb-4">
            <div className="mb-3">
             <Image src={A5} alt="Feature Image" layout="" objectFit="" className="img-fluid" />
            
            </div>
            <h2 className="h5 font-weight-bold mb-2 text-light">COSTA MADEIRA</h2>
            <p className="text-light">
              Tu sueño de vivir frente al mar, hecho realidad. Nos especializamos en ofrecer 
              propiedades exclusivas con vistas panorámicas y servicios premium para una 
              experiencia de vida inigualable.
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h3 className="h6 font-weight-semibold mb-4 text-light">Síguenos</h3>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-light transition-transform duration-300 transform hover:scale-110 hover:text-blue-500">
                <FaFacebookF aria-hidden="true" />
              </a>
              <a href="#" className="text-light transition-transform duration-300 transform hover:scale-110 hover:text-blue-400">
                <FaTwitter aria-hidden="true" />
              </a>
              <a href="#" className="text-light transition-transform duration-300 transform hover:scale-110 hover:text-pink-500">
                <FaInstagram aria-hidden="true" />
              </a>
              <a href="#" className="text-light transition-transform duration-300 transform hover:scale-110 hover:text-black">
                <FaTiktok aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="col-md-3 mt-4">
            <h3 className="h6 font-weight-semibold mb-4 text-light">Nuestra Ubicación</h3>
            <iframe 
              className="w-100 border rounded" 
              height="200" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153168!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9f0d1a0b1e5!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611816825098!5m2!1sen!2sau" 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="text-center text-light mt-4">
          &copy; 2023 COSTA MADEIRA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
