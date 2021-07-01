import React from "react";

import "./Cards.css";

function Card({ title, imageSource, lectura }) {
  return (
    <div class="text-center">
      <div className="card text-center bg-dark animate__animated animate__bounce animate__fadeInUp">
        <img src={imageSource} class="img-fluid" alt="" />
        <div className="card-body text-light">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-secondary">{lectura}</p>
          <a href="#!" className="btn btn-outline-secundary btn-secondary">
            Go to this website
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
