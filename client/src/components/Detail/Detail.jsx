import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetails, getCountryDetails } from "../../redux/action/index";
import { useEffect } from "react";
import { ActivityCards } from "../ActivityCards/ActivityCards";
import "./DetailStyle.css"

export function Detail({ id }) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCountryDetails(id));
		// eslint-disable-next-line
	}, [dispatch]);
	useEffect(() => {
		dispatch(cleanDetails());
	}, [dispatch]);

	const myCountries = useSelector((state) => state.details);
	console.log(myCountries);

	if (myCountries.length === 0) {
		return (
			<>
			<h1>Undefined</h1>
				<div className="conten_detail"></div>
			</>
		);
	} else {
		return (
			<div className="detail">
				{
					<div className="detailbox">
						<h1 className="country">
							Country: {myCountries.map(e => e.name)} ({myCountries.map(e => e.id)})
						</h1>
						<h2 className="continent">
							Continent: {myCountries ? myCountries.map(e => e.subregion) : myCountries.map(e => e.continents)}
						</h2>
						<img src={myCountries.map(e => e.flags)} alt="Flag" className="flag" />
						<h2 className="population">Population: {myCountries.map(e => e.population)} people</h2>
						<h2 className="capital">Capital: {myCountries.map(e => e.capital)}</h2>
						<h2 className="area">Area: {myCountries.map(e => e.area)} km2</h2>
						<h2 className="subregion">Subregion: {myCountries.map(e => e.subregion)}</h2>
					</div>
				}
				<div>
				<h1>
				{myCountries[0].activities?.map(e => {
					console.log(e)
					return (
						<ActivityCards
							name={e.name}
							difficulty={e.difficulty}
							duration={e.duration}
							season={e.season}
						/>
					);
				})}
				</h1>
				</div>
				

				<Link to="/home">
					<button className="button">Back</button>
				</Link>
			</div>
		);
	}
}
