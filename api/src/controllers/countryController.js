const axios = require("axios");
const { Country, Activity } = require("../db");

//INFO DE LA API
const getCountries = async () => {
    let dbCountries = await Country.findAll({
        include: [Activity]
    })
    try {
        if(dbCountries.length === 0) {
            const { data } = await axios.get('https://restcountries.com/v3/all');
            
            const countries = data.map((country) => {
                return {
                    id: country.cca3,
                    name: country.name.common,
                    flags: country.flags[1],
                    continents: country.continents[0],
                    capital: country.capital ? country.capital[0] : 'Undefined capital city',
                    subregion: country.subregion ? country.subregion : 'Undefinded Subregion',
                    area: country.area,
                    population: country.population
                };
            })
        
            countries.forEach((country) => {
                Country.findOrCreate({
                    where: { id: country.id },
                    defaults: {
                        id: country.id,
                        name: country.name,
                        flags: country.flags,
                        continents: country.continents,
                        capital: country.capital,
                        subregion: country.subregion,
                        area: country.area,
                        population: country.population,
                    }
                })
            });
            dbCountries = await Country.findAll({
                include: [Activity]
            })
        }
        return dbCountries
    } catch(error){
        console.log('Error getCountries en controller ' + error)
    }
};

const getAllCountriesOrByQuery = async (req, res) => {
    const name = req.query.name;
    const allCountries = await getCountries();
    if(name){
        const countryName = await allCountries.filter(e => e.name?.toLowerCase().includes(name.toLowerCase()));
        countryName.length ? res.status(200).send(countryName) : res.status(404)("Country not found");
    }else{
        res.status(200).send(allCountries);
    };
}

const getCountryById = async (req, res) => {
    const {id} = req.params;
    const countriesId = await getCountries();
    let countriesFilter = countriesId.filter(e => e.id == id);
    if(countriesFilter.length > 0){
        return res.status(200).send(countriesFilter)
    }else{
        res.status(404).send("Id not found")
    }
}

module.exports = {
	getCountries,
	getAllCountriesOrByQuery,
	getCountryById,
};
