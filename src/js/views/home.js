import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



const getState = ({ getStore, setStore }) => {
	return {
		store: {
			planets: [],
			favorites: [],
		},
		actions: {
			toggleFavorite: (item) => {
				const store = getStore();
				const isFavorite = store.favorites.some((fav) => fav.uid === item.uid);
				const updatedFavorites = isFavorite
					? store.favorites.filter((fav) => fav.uid !== item.uid)
					: [...store.favorites, item];

				setStore({ ...store, favorites: updatedFavorites });
			},
		},
	};
};

export default getState;

const toggleFavorite = (item) => {
	setStore((prev) => {
		const isFavorite = prev.favorites.some((fav) => fav.uid === item.uid);
		return {
			...prev,
			favorites: isFavorite
				? prev.favorites.filter((fav) => fav.uid !== item.uid)
				: [...prev.favorites, item],
		};
	});
};

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container bg-dark">
			<strong><h1 className=" d-flex justify-content-center text-light">Planets</h1></strong>
			<div className="row">
				{store.planets.map((planet) => {
					return (
						<div className="col border-primary" key={planet.uid} >
							<div>
								<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} style={{ width: "200px", height: "200px" }} alt="..." />
								<div className="card-body">
									<h5 className="text-light">{planet.name}</h5>
									<div className="flex-colum">
										<Link to={`/planet/${planet.uid}`} className="btn btn-primary">Learn More</Link>
										<button type="button" className="btn btn-primary" style={{ margin: "10px" }} onClick={() => actions.toggleFavorite(planet, "planet")}>
											<i className="fa-solid fa-heart"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<strong><h1 className=" d-flex justify-content-center text-light">Characters</h1></strong>
			<div className="row">
				{store.people.map((person) => {
					return (
						<div className="col border-primary" key={person.uid} >
							<div>
								<img className="" src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} style={{ width: "200px", height: "200px" }} alt="..." />
								<div className="card-body">
									<h5 className="text-light">{person.name}</h5>
									<div className="flex-colum">
										<Link to={`/people/${person.uid}`} className="btn btn-primary">Learn More</Link>
										<button type="button" className="btn btn-primary" style={{ margin: "10px" }} onClick={() => actions.toggleFavorite(person, "person")}>
											<i className="fa-solid fa-heart"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<strong><h1 className="d-flex justify-content-center text-light">Starships</h1></strong>
			<div className="row">
				{store.starships.map((starship) => {
					return (
						<div className="col border-primary" key={starship.uid} >
							<div>
								<img className="" src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`} style={{ width: "200px", height: "200px" }} alt="..." />
								<div className="card-body">
									<h5 className="text-light">{starship.name}</h5>
									<div className="flex-colum">
										<Link to={`/starships/${starship.uid}`} className="btn btn-primary">Learn More</Link>
										<button type="button" className="btn btn-primary" style={{ margin: "10px" }} onClick={() => actions.toggleFavorite(starship, "starship")}>
											<i className="fa-solid fa-heart"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}