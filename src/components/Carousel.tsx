import React, { useState, useEffect } from "react";

const images = [
  "images/carousel1.png",
  "images/carousel2.png",
  "images/carousel3.png",
];

const CarouselComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Troca a cada 3 segundos (corrigido, estava 1 segundo)

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ width: "100%", margin: 0, padding: 0 }}
      >
        {/* Indicadores */}
        <ol className="carousel-indicators">
          {images.map((_, index) => (
            <li
              key={index}
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={currentIndex === index ? "active" : ""}
            />
          ))}
        </ol>

        {/* Itens do Carousel */}
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${currentIndex === index ? "active" : ""}`}
              style={{
                height: "50vh", // altura relativa à viewport
                minHeight: "300px", // altura mínima para celulares
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="d-block w-100"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
