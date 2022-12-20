import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getCountry,
	filterContinente,
	orderByName,
	filterCountryByPopulation,
} from "../../redux/action";
import { Card } from "../Card/Card";
import Buscador from "../Buscador/Buscador";
import Pages from "../Pages/Pages";
import "../Home/Home.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
	const [, setInOrder] = useState("");
	const [, setOrden] = useState("");
	const dispatch = useDispatch();
	const allCountry = useSelector(state => state.countries);
	const [currentPage, setCurrentPage] = useState(1);
	const [countriesPerPage] = useState(10);
	const indexOfLastCountrie = currentPage * countriesPerPage;
	const indexOfFirsCountrie = indexOfLastCountrie - countriesPerPage;
	const currentCountrie = allCountry.slice(
		indexOfFirsCountrie,
		indexOfLastCountrie
	);
	const paginado = pageNumber => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		dispatch(getCountry());
	}, [dispatch]);

	const hanleClick = e => {
		e.preventDefault();
		dispatch(getCountry());
	};

	function handleFilterContinente(e) {
		if (e.target.value === "all") {
			dispatch(getCountry());
		} else {
			dispatch(filterContinente(e.target.value));
			setCurrentPage(1);
		}
	}

	function handleSort(e) {
		e.preventDefault();
		if (e.target.value === "all") {
			dispatch(getCountry());
		} else {
			dispatch(orderByName(e.target.value));
			setCurrentPage(1);
			setOrden(`Ordenado ${e.target.value}`);
		}
	}

	function handleSortPopulation(e) {
		e.preventDefault();
		if (e.target.value === "all") {
			dispatch(getCountry());
		} else {
			dispatch(filterCountryByPopulation(e.target.value));
			setCurrentPage(1);
			setInOrder(`Ordenado ${e.target.value}`);
		}
	}

	return (
		<div className="home">
			<div className="nav">
				<NavLink to="/form">
					<h4>Create activity</h4>
				</NavLink>
				<div className="buscador">
					<Buscador setCurrentPage={setCurrentPage} />
				</div>
			</div>

			<br />
			<div className="filtrados">
				<button
					onClick={e => {
						hanleClick(e);
					}}
				>
					Refresh countries
				</button>

				<select
					onChange={e => {
						handleSort(e);
					}}
				>
					<option value="all">Order</option>
					<option value="asc">A - Z</option>
					<option value="desc">Z - A</option>
				</select>

				<select onChange={e => handleFilterContinente(e)}>
					<option value="all">Continent</option>
					<option value="Africa">África</option>
					<option value="America">America</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
					<option value="Antarctic">Antartica</option>
				</select>
				<select onChange={e => handleSortPopulation(e)}>
					<option value="all">Population</option>
					<option value="menor">Least populated</option>
					<option value="mayor">More populated</option>
				</select>
			</div>
			<div className="cards">
				{currentCountrie?.map(e => {
					return (
						<div key={e.id}>
							<Card
								id={e.id}
								name={e.name}
								continents={e.continents}
								flags={e.flags}
							/>
						</div>
					);
				})}
			</div>
			<Pages
				countriesPerPage={countriesPerPage}
				allCountry={allCountry.length}
				paginado={paginado}
			/>
		</div>
	);
};
export default Home;
