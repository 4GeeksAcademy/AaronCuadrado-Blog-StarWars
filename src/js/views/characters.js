import React, { useState, useEffect, useContext } from "react";
import "../../styles/characters.css";
import { Context } from "../store/appContext";

export const Characters = () => {
    const { store, actions } = useContext(Context);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [characterId, setCharacterId] = useState(null);
    const [duplicateAlert, setDuplicateAlert] = useState(null);

    useEffect(() => {
        actions.getCharacters();
    }, []);

    const fetchCharacterDetails = (url, id) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setSelectedCharacter(data.result.properties);
                setCharacterId(id);
            })
            .catch((error) => console.error('There was a problem with your fetch operation:', error));
    };

    const addToFavorites = (characterName) => {
        if (!store.favorites.includes(characterName)) {
            actions.addFavorite(characterName);
            setDuplicateAlert(null);
        } else {
            setDuplicateAlert(
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{characterName}</strong>  ya está en tus favoritos.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setDuplicateAlert(null)}></button>
                </div>
            );
        }
    };

    return (
        <div className="container my-6">
            {duplicateAlert}
            {selectedCharacter ? (
                <>
                    <div className="card mb-3 card-custom bg-dark">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`}
                                    className="card-img-top custom-img-size"
                                    alt={selectedCharacter.name}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-warning">{selectedCharacter.name}</h5>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Height: {selectedCharacter.height}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Mass: {selectedCharacter.mass}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Hair Color: {selectedCharacter.hair_color}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Skin Color: {selectedCharacter.skin_color}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Eye Color: {selectedCharacter.eye_color}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Birth Year: {selectedCharacter.birth_year}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Gender: {selectedCharacter.gender}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-warning mb-3" onClick={() => setSelectedCharacter(null)}>
                        Back to Characters
                    </button>
                </>
            ) : (
                <div className="card-container">
                    {store.characters.map((character, index) => (
                        <div className="card m-2 card-custom bg-dark" key={index}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                                className="card-img-top custom-img-size"
                                alt={character.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-white">{character.name}</h5>
                                <div className="d-flex justify-content-between">
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => fetchCharacterDetails(character.url, index + 1)}
                                    >
                                        Detail
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-warning"
                                        onClick={() => addToFavorites(character.name)}
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
