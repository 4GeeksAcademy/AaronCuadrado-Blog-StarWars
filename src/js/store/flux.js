const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},

		actions: {
			getCharacters: () => {
				fetch("https://swapi.tech/api/people")
					.then((res) => res.json())
					.then((data) => {
						setStore({ characters: data.results });
					})
					.catch((err) => console.error(err));
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then((res) => res.json())
					.then((data) => {
						setStore({ planets: data.results });
					})
					.catch((err) => console.error(err));
			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then((res) => res.json())
					.then((data) => {
						setStore({ vehicles: data.results });
					})
					.catch((err) => console.error(err));
			},

			addFavorite: (item) => {
				const store = getStore();
				if (!store.favorites.includes(item)) {
					setStore({ favorites: [...store.favorites, item] });
				}
			},

			removeFavorite: (index) => {
				const store = getStore();
				setStore({
					favorites: store.favorites.filter((_, i) => i !== index)
				});
			}
		},
	}
};

export default getState;
