import { Card } from "./Card";
import React, { useState, useEffect } from "react";
import "./Gallery.css";

export function Gallery() {
  var [datos, setDatos] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setDatos(data.results));
  }, []);

  return (
    <>
      <div className="container">
        {datos &&
          datos.map((element) => (
            <Card
              imagen={element.image}
              nombre={element.name}
              genero={element.gender}
              estado={element.status}
              key={element.id}
            />
          ))}
      </div>
    </>
  );
}

export default Gallery;
