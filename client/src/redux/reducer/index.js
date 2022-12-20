const initialState = {
	countries: [],
	allCountries: [],
	details: [],
	activities: [],
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_COUNTRIES": // trae todo de la base de datos
			return {
				...state,
				countries: action.payload,
				allCountries: action.payload,
			};

		case "GET_COUNTRY-NAME": // busqueda por name
			return {
				...state,
				countries: action.payload,
			};

		case "FILTER_BY_CONTINENT": //orden por continentes
			const allCountries = state.allCountries;
			const filtrado = allCountries.filter(e =>
				e.continents.includes(action.payload)
			);

			return {
				...state,
				countries: filtrado,
			};

		case "ORDER_BY_NAME": //order por nombre
			const sortedArr =
				action.payload === "asc"
					? state.countries.sort(function (a, b) {
							if (a.name > b.name) {
								return 1;
							}
							if (b.name > a.name) {
								return -1;
							}
							return 0;
					  })
					: state.countries.sort(function (a, b) {
							if (a.name > b.name) {
								return -1;
							}
							if (b.name > a.name) {
								return 1;
							}
							return 0;
					  });
			return {
				...state,
				countries: sortedArr,
			};
		case "FILTER_BY_POPULATION": //orden por poblacion
			const filPopulation =
				action.payload === "menor"
					? state.countries.sort(function (a, b) {
							if (a.population > b.population) {
								return 1;
							}
							if (b.population > a.population) {
								return -1;
							}
							return 0;
					  })
					: state.countries.sort(function (a, b) {
							if (a.population > b.population) {
								return -1;
							}
							if (b.population > a.population) {
								return 1;
							}
							return 0;
					  });
			return {
				...state,
				countries: filPopulation,
			};

		case "GET_COUNTRY_DETAILS":
			return {
				...state,
				details: action.payload,
			};
		case "CLEAN_DETAILS":
			return {
				...state,
				details: [],
			};

		case "FILTER_BY_ACTIVITIES":
			const countriesAct = state.allCountries;
			const countriesYactivities = countriesAct.filter(e => {
				return e.activities.includes(action.payload);
			});
			console.log("felipe", countriesYactivities);
			return {
				...state,
				countries: countriesYactivities,
			};

		default:
			return state;
	}
}
export default rootReducer;
