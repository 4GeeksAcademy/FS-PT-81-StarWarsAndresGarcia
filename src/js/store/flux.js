const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people : [],
			planets : [],
			starships : [],
			favorites:[],
			singular: null,
			demo: [	
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people" )
				.then(response => {
					return response.json()
				})
				.then(data => {
					setStore({people: data.results})
				})
				.catch(error => {
					console.error(error);
				});
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets" )
				.then(response => {
					return response.json()
				})
				.then(data => {
					setStore({planets: data.results})
				})
				.catch(error => {
					console.error(error);
				});
			},
			getStarships: () => {
				fetch("https://www.swapi.tech/api/starships" )
				.then(response => {
					return response.json()
				})
				.then(data => {
					setStore({starships: data.results})
				})
				.catch(error => {
					console.error(error);
				});
			},
			getPlanet: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
				.then(response => {
					return response.json()
				})
				.then(data => {
					setStore({singular: data.result.properties})
				})
				.catch(error => {
					console.error(error);
				});
			},
			getPerson: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
				.then(response => {
					return response.json()
				})
				.then(data => {
					setStore({singular: data.result.properties})
				})
				.catch(error => {
					console.error(error);
				});
			},
			getStarship: (id) => {
				fetch(`https://www.swapi.tech/api/starships/${id}`)
				.then(response => {
					return response.json()
				})
				.then(data => {
					setStore({singular: data.result.properties})
				})
				.catch(error => {
					console.error(error);
				});
			},
			toggleFavorite : (id, type) => {
				const store = getStore();
				const isFavorite = store.favorites.some((fav) => fav.uid === id.uid);
				const updatedFavorites = isFavorite
					? store.favorites.filter((fav) => fav.uid !== id.uid)
					: [...store.favorites, { ...id, type }]; 
			
				setStore({ ...store, favorites: updatedFavorites });
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				const actions = getActions();
				actions.getPlanets();
				actions.getPeople();
				actions.getStarships();
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
