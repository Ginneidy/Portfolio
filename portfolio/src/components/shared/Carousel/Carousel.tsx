"use client";
import { useState, useEffect, useRef } from "react";

interface CarouselProps {
    elements: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ elements }) => {
    const [currentIndex, setCurrentIndex] = useState(elements.length);
    const elementsToShow = 6;
    const intervalTime = 2000; // Tiempo en milisegundos para cambiar automáticamente (2 segundos)
    const containerRef = useRef<HTMLDivElement>(null);

    // Crear un array extendido para simular el efecto circular
    const extendedElements = [...elements, ...elements, ...elements];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % extendedElements.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + extendedElements.length) % extendedElements.length);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, intervalTime);
        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, []);

    useEffect(() => {
        if (currentIndex >= elements.length * 2) {
            setTimeout(() => {
                setCurrentIndex(elements.length);
                if (containerRef.current) {
                    containerRef.current.style.transition = "none";
                    containerRef.current.style.transform = `translateX(-${elements.length * (100 / elementsToShow)}%)`;
                }
            }, 500); // Tiempo de la transición CSS (debe coincidir con la duración en el CSS)
        } else if (currentIndex < elements.length) {
            setTimeout(() => {
                setCurrentIndex(elements.length * 2 - 1);
                if (containerRef.current) {
                    containerRef.current.style.transition = "none";
                    containerRef.current.style.transform = `translateX(-${(elements.length * 2 - 1) * (100 / elementsToShow)}%)`;
                }
            }, 500); // Tiempo de la transición CSS (debe coincidir con la duración en el CSS)
        } else if (containerRef.current) {
            containerRef.current.style.transition = "transform 0.5s ease-in-out";
            containerRef.current.style.transform = `translateX(-${currentIndex * (100 / elementsToShow)}%)`;
        }
    }, [currentIndex, elements.length, elementsToShow]);

    return (
        <div>
            {/* <button onClick={handlePrev}>Previous</button> */}
            <div className=" overflow-hidden">
                <div className="flex" ref={containerRef}>
                    {extendedElements.map((element, index) => (
                        <div key={index} className="carousel-item" style={{ flex: `0 0 ${100 / elementsToShow}%` }}>
                            {element}
                        </div>
                    ))}
                </div>
            </div>
            {/* <button onClick={handleNext}>Next</button> */}
        </div>
    );
};
