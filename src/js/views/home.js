import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



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
									<Link to={`/planet/${planet.uid}`} className="btn btn-primary">Learn More</Link>
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
									<Link to={`/planet/${person.uid}`} className="btn btn-primary">Learn More</Link>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}