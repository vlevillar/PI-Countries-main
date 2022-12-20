import React from "react";
import { Link } from "react-router-dom";
import "./LandingPageStyle.css"


export const LandingPage = () => {
	return (
		<div className="landing">
			<h1 className="landingTitle">Welcome to my Countries individual proyect!</h1>
			<h2 className="landingSubTitle">"Traveling tends to magnify all human emotions"</h2>
			<Link exact to="/home" style={{ textDecoration: "none" }}>
				<div className="wrap">
					<button className="button">Enter</button>
				</div>
			</Link>
		</div>
	);
};
