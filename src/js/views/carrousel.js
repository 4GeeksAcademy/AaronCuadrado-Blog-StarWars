import React from "react";
import image from "../../img/image.png"
import image2 from "../../img/image2.png"
import image3 from "../../img/image3.png"
import "../../styles/carrousel.css";

export const Carrosel = () => {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active d-block justify-content-center" data-bs-interval="2000">
                    <img src={image} alt="rigo" className="d-block w-100" height="800" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={image2} className="d-block w-100" alt="rigo" height="800" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={image3} className="d-block w-100" alt="rigo" height="800" />
                </div>
            </div>
            <button className="carousel-control-prev custom-carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon custom-carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next custom-carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon custom-carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}