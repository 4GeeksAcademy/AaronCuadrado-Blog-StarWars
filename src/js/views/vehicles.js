import React, { useState, useEffect, useContext } from "react";
import "../../styles/vehicles.css";
import { Context } from "../store/appContext";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [vehicleId, setVehicleId] = useState(null);
    const [duplicateAlert, setDuplicateAlert] = useState(null);

    useEffect(() => {
        actions.getVehicles();
    }, []);

    const fetchVehicleDetails = (vehicleUid) => {
        fetch(`https://www.swapi.tech/api/vehicles/${vehicleUid}`)
            .then((resp) => resp.json())
            .then((data) => {
                setSelectedVehicle(data.result.properties);
                setVehicleId(vehicleUid);
            })
            .catch((error) => console.error('There was a problem with your fetch operation:', error));
    };

    const addToFavorites = (vehicleName) => {
        if (!store.favorites.includes(vehicleName)) {
            actions.addFavorite(vehicleName);
            setDuplicateAlert(null);
        } else {
            setDuplicateAlert(
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{vehicleName}</strong> ya está en tus favoritos.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setDuplicateAlert(null)}></button>
                </div>
            );
        }
    };

    return (
        <div className="container my-6">
            {duplicateAlert}
            {selectedVehicle ? (
                <>
                    <div className="card mb-3 card-custom bg-dark">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicleId}.jpg`}
                                    className="card-img-top custom-img-size"
                                    alt={selectedVehicle.name}
                                />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title text-warning">{selectedVehicle.name}</h5>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Model: {selectedVehicle.model}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Manufacturer: {selectedVehicle.manufacturer}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Cost in Credits: {selectedVehicle.cost_in_credits}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Length: {selectedVehicle.length}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Max Atmosphering Speed: {selectedVehicle.max_atmosphering_speed}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Crew: {selectedVehicle.crew}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Passengers: {selectedVehicle.passengers}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Cargo Capacity: {selectedVehicle.cargo_capacity}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Consumables: {selectedVehicle.consumables}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-warning mb-3" onClick={() => setSelectedVehicle(null)}>
                        Back to Vehicles
                    </button>
                </>
            ) : (
                <div className="card-container">
                    {store.vehicles.map((vehicle, index) => (
                        <div className="card m-2 card-custom bg-dark" key={index}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                                className="card-img-top custom-img-size"
                                alt={vehicle.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-white">{vehicle.name}</h5>
                                <div className="d-flex justify-content-between">
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => fetchVehicleDetails(vehicle.uid)}
                                    >
                                        Detail
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-warning"
                                        onClick={() => addToFavorites(vehicle.name)}
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
