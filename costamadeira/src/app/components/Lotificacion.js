"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { db, collection, getDocs } from '../../services/firebase/index.js';
import { FaRulerCombined, FaDollarSign, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Mapa from "../../img/RENDERS/Mapa.png";
import "./Lotificacion.css";

const Lotificacion = () => {
  const [lotes, setLotes] = useState([]);
  const [selectedLote, setSelectedLote] = useState(null);

  useEffect(() => {
    const fetchLotes = async () => {
      try {
        const lotesCollection = collection(db, "lotes");
        const lotesSnapshot = await getDocs(lotesCollection);
        const lotesList = lotesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setLotes(lotesList);
      } catch (error) {
        console.error("Error fetching lotes:", error);
      }
    };

    fetchLotes();
  }, []);

  const handleClick = (lote) => {
    if (lote) {
      setSelectedLote(lote);
      document.getElementById("lote-detalles").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const lotesLayout = [
    [1, 40, 41, 81],
    [2, 39, 42, 80],
    [3, 38, 43, 79],
    [4, null, null, 78],
    [5, 37, 44, 77],
    [6, 36, 45, 76],
    [7, 35, 46, 75],
    [9, 34, 47, 74],
    [10, 33, 48, 73],
    [null, null, null, 72],
    [11, 32, 49, 71],
    [12, 31, 50, 70],
    [13, 30, 51, 69],
    [14, 29, 52, 68],
    [15, 28, 53, 67],
    [16, 27, 54, 66],
    [17, 26, 55, 65],
    [null, null, null, 64],
    [18, 25, 56, 63],
    [19, 24, 57, 62],
    [20, 23, 58, 61],
    [21, 22, 59, 60],
  ];

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Lot Availability</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="row row-cols-2 row-cols-md-4 g-3">
            {lotesLayout.flat().map((loteNumero, index) => {
              const lote = lotes.find((l) => l.numero === loteNumero);

              return loteNumero ? (
                <div key={index} className="col">
                  <div
                    onClick={() => handleClick(lote)}
                    className={`cursor-pointer p-3 text-center rounded lote-container ${
                      lote && lote.vendido ? "bg-danger" : "bg-warning"
                    }`}
                    style={{
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease"
                    }}
                  >
                    <span className="text-white fw-bold">Lot {loteNumero}</span>
                  </div>
                </div>
              ) : (
                <div key={index} className="col"></div>
              );
            })}
          </div>
        </div>

        <div id="lote-detalles" className="col-md-6">
          {selectedLote ? (
            <div className="p-4 bg-light shadow-sm rounded details-container show">
              <h3 className="h4 mb-4 text-dark">Details of Lot {selectedLote.numero}</h3>
              <div className="row g-3 mb-4">
                <div className="col-sm-4">
                  <img
                    src={selectedLote.foto || "/default-image.jpg"}
                    alt={`Lote ${selectedLote.numero}`}
                    className="img-fluid rounded border"
                    style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                  />
                </div>
                <div className="col-sm-8">
                  <p className="text-dark d-flex align-items-center">
                    <FaRulerCombined className="me-2 text-primary icon-animation" />
                    <strong>Size:</strong> {selectedLote.medidas || "No disponible"}
                  </p>
                  <p className="text-dark d-flex align-items-center">
                    <FaDollarSign className="me-2 text-success icon-animation" />
                    <strong>Price:</strong> {selectedLote.precio ? `$${selectedLote.precio}` : "No disponible"}
                  </p>
                  <p className="text-dark d-flex align-items-center">
                    {selectedLote.vendido ? (
                      <FaTimesCircle className="me-2 text-danger icon-animation" />
                    ) : (
                      <FaCheckCircle className="me-2 text-success icon-animation" />
                    )}
                    <strong>Status:</strong> {selectedLote.vendido ? "Vendido" : "Disponible"}
                  </p>
                </div>
              </div>
              <div className="p-3 bg-white rounded border border-dark" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
                <p className="text-dark mb-0"><strong>Description:</strong> {selectedLote.descripcion || "No disponible"}</p>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-light shadow-sm rounded details-container show">
              <p className="h4 mb-4 text-dark">Select to watch details.</p>
            </div>
          )}

          {/* Aquí agregamos la imagen del mapa debajo de los detalles */}
          <div className="mt-4">
  <h2 className="h5 mb-3 text-white">Map</h2>
  <div className="zoom-container text-center">
    <Image
      src={Mapa} // Cambia esta ruta a la imagen que subiste
      alt="Mapa de la Lotificación"
      className="img-fluid rounded"
      style={{ maxHeight: "1000px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
    />
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Lotificacion;
