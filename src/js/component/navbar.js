import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<div className="container d-flex">
				<Link to="/">
					<span className="navbar-brand  ms-4 mb-0 "> <img src="https://img.icons8.com/color/512/star-wars.png" alt="Star Wars" width="100" height="100" /></span>
				</Link>
				<div className="dropdown d-flex justify-content-center">
					<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end bg-gray" aria-labelledby="favoritesDropdown">
						{store.favorites.length > 0 ? (
							store.favorites.map((fav) => (
								<li key={fav.uid} className="dropdown-item">
									<div className="d-flex align-items-center">
										<img
											src={
												fav.type === "planet"
													? `https://starwars-visualguide.com/assets/img/planets/${fav.uid}.jpg`
													: fav.type === "person"
													? `https://starwars-visualguide.com/assets/img/characters/${fav.uid}.jpg`
													: fav.type === "starship"
													? `https://starwars-visualguide.com/assets/img/starships/${fav.uid}.jpg`
													: ""
											}
											alt={fav.name}
											style={{ width: "50px", height: "50px", marginRight: "10px" }}
										/>
										<span>{fav.name}</span>
										<button
											className="btn btn-danger btn-sm ms-auto"
											onClick={() => actions.toggleFavorite(fav, fav.type)}
										>
											<i className="fa-solid fa-trash"></i>
										</button>
									</div>
								</li>
							))
						) : (
							<li className="dropdown-item text-center">No favorites added</li>
						)}

					</ul>
				</div>
			</div>
		</nav>
	);
};
