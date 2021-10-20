import React from "react";
import "./Card.css";

export const Card = (props) => {
  const { imagen, nombre, genero, estado } = props;
  return (
    <>
      <div className="card">
        <img className="card-img-top" src={imagen} alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Gender: {genero}</p>
          <p className="card-text">Status: {estado}</p>
          <a href="#s" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};
