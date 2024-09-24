import React, { useState, useEffect, useContext } from "react";
import "../../styles/planets.css";
import { Context } from "../store/appContext";

export const Planets = () => {
    const { store, actions } = useContext(Context);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [planetId, setPlanetId] = useState(null);

    useEffect(() => {
        actions.getPlanets();
    }, []);

    const fetchPlanetDetails = (planetUid) => {
        fetch(`https://www.swapi.tech/api/planets/${planetUid}`)
            .then((resp) => resp.json())
            .then((data) => {
                setSelectedPlanet(data.result.properties);
                setPlanetId(planetUid);
            })
            .catch((error) => console.error('There was a problem with your fetch operation:', error));
    };

    const addToFavorites = (planetName) => {
        if (!store.favorites.includes(planetName)) {
            actions.addFavorite(planetName);
            setDuplicateAlert(null);
        } else {
            setDuplicateAlert(
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{planetName}</strong> ya está en tus favoritos.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setDuplicateAlert(null)}></button>
                </div>
            );
        }
    };

    const handleImageError = (event) => {
        event.target.style.display = "none"; // Oculta la imagen si hay un error al cargar
        event.target.closest(".card-custom").style.display = "none"; // Oculta toda la card si la imagen está dañada
    };

    return (
        <div className="container my-6">
            {selectedPlanet ? (
                <>
                    <div className="card mb-3 card-custom bg-dark">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`}
                                    className="card-img-top custom-img-size"
                                    alt={selectedPlanet.name}
                                    onError={handleImageError} // Manejo de error de carga de imagen
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-warning">{selectedPlanet.name}</h5>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Diameter: {selectedPlanet.diameter}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Climate: {selectedPlanet.climate}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Gravity: {selectedPlanet.gravity}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Terrain: {selectedPlanet.terrain}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Surface Water: {selectedPlanet.surface_water}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Population: {selectedPlanet.population}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-warning mb-3" onClick={() => setSelectedPlanet(null)}>
                        Back to Planets
                    </button>
                </>
            ) : (
                <div className="card-container">
                    {store.planets.map((planet, index) => (
                        <div className="card m-2 card-custom bg-dark" key={index}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                                className="card-img-top custom-img-size"
                                alt={planet.name}
                                onError={handleImageError} // Manejo de error de carga de imagen
                            />
                            <div className="card-body">
                                <h5 className="card-title text-white">{planet.name}</h5>
                                <div className="d-flex justify-content-between">
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => fetchPlanetDetails(planet.uid)}
                                    >
                                        Detail
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-warning"
                                        onClick={() => addToFavorites(planet.name)}
                                    >
                                        <i className="bi bi-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
