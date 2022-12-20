import axios from "axios";
export function getCountry() {
	return async function (dispatch) {
		let json = await axios("http://localhost:3001/countries");
		return dispatch({
			type: "GET_COUNTRIES",
			payload: json.data,
		});
	};
}

export function getCountryName(name) {
	return async function (dispatch) {
		let json = await axios.get(`http://localhost:3001/countries?name=${name}`);
		return dispatch({
			type: "GET_COUNTRY-NAME",
			payload: json.data,
		});
	};
}

export function filterContinente(payload) {
	return {
		type: "FILTER_BY_CONTINENT",
		payload,
	};
}

export function orderByName(payload) {
	return {
		type: "ORDER_BY_NAME",
		payload,
	};
}
export function filterCountryByPopulation(payload) {
	return {
		type: "FILTER_BY_POPULATION",
		payload,
	};
}

export function getCountryDetails(id) {
	return async function (dispatch) {
		try {
			var json = await axios.get("http://localhost:3001/countries/" + id);
			return dispatch({
				type: "GET_COUNTRY_DETAILS",
				payload: json.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
export function cleanDetails() {
	return {
		type: "CLEAN_DETAILS",
	};
}
export function postActivity(payload) {
	return async function () {
		const response = await axios.post(
			"http://localhost:3001/activities",
			payload
		);
		return response;
	};
}

export function getActivities() {
	return async function (dispatch) {
		var info = await axios.get("http://localhost:3001/activities");
		return dispatch({
			type: "GET_ACTIVITIES",
			payload: info.data,
		});
	};
}
