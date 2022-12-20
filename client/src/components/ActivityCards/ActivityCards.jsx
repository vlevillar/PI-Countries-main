import React from "react";
import "./ActivityCardsStyle.css"

export function ActivityCards (activities, {name, difficulty, duration, season}) {
	console.log(name)
	return (
		<div className="activities">
			{activities && (
				<div>
					<p>
						{" "}
						<b>Actividad:</b>
						{activities.name}
					</p>
					
					<p>
						<b>Dificultad:</b>
						{activities.difficulty}
					</p>
					<p>
						<b>Duracion:</b>
						{activities.duration} hs
					</p>
					<p>
						<b>Temporada:</b>
						{activities.season}
					</p>
					
				</div>
			)}
		</div>
	);
};
