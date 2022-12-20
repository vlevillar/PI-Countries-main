import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ name, flags, continents, id }) => {
	return (
		<div className="card">
			{/* <Link to={`/home/${id}`}> */}
			<div className="face front">
				<img src={flags} alt="imagen no encontrada" />
				<h3>{name}</h3>
			</div>
			<div className="face back">
				<h3>{name}</h3>
				<h5>{continents}</h5>
				<button className="link">
					<Link to={`/home/${id}`}>{id}</Link>
				</button>
			</div>
			{/* </Link> */}
		</div>
	);
};
