const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			vehiculos: [],
			favoritos: [],
		},

		actions: {
			getCharacters: () => {
				fetch("https://swapi.tech/api/people")
					.then((res) => res.json())
					.then((data) => {
						setStore({ personajes: data.results });
					})
					.catch((err) => console.error(err));
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then((res) => res.json())
					.then((data) => {
						setStore({ planetas: data.results });
					})
					.catch((err) => console.error(err));
			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then((res) => res.json())
					.then((data) => {
						setStore({ vehiculos: data.results });
					})
					.catch((err) => console.error(err));
			},

			addFavorite: (item) => {
				const store = getStore();
				if (!store.favoritos.includes(item)) {
					setStore({ favoritos: [...store.favoritos, item] });
				}
			},

			removeFavorite: (index) => {
				const store = getStore();
				setStore({
					favoritos: store.favoritos.filter((_, i) => i !== index)
				});
			}
		},
	}
};

export default getState;
