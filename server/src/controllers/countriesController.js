const {Country, Activity} = require('../db');

const { Op } = require("sequelize");
const URL ='http://localhost:5000/countries'
const axios = require("axios")


const getNameCountryDB = async (country)=> {
    console.log('GET NAME COUNTRY');
    return await Country.findAll({
        include: [{model: Activity, as: "activities"}],
        where: {
            name: {
                [Op.iLike]: `%${country}%`, // Búsqueda insensible a mayúsculas y minúsculas
        },
        },
        });
};

const getCountriesDB = async ()=> {
    console.log('GET COUNTRIES');
    return await Country.findAll({include: [{model: Activity, as: "activities"}]})
    ;//{"REP": "dddd"}
};

const getCountryDetailDB = async (id)=> {
    console.log('GET COUNTRY DETAILS');
    return await Country.findOne({
        include: [{model: Activity, as: "activities"}],
        where: { id: id },
        //include: Activity,
    });
}

const cleanInfo = (infoArray) =>
    infoArray.map((countryInfo) => {
        const result = {
        id: countryInfo.cca3 || "NNCODIGOID", // Utilizar el ID del país como cca3
        name: countryInfo.name.common || "NNname",
        flagImage: countryInfo.flags?.png || "no-image", // Usar la URL de la bandera
        continent: countryInfo.region || "no-continent", // Usar la región como continente
        capital:
            Array.isArray(countryInfo.capital) && countryInfo.capital.length > 0
            ? countryInfo.capital[0]
            : "no-capital",
        subregion: countryInfo.subregion || null, // Subregión
        area: countryInfo.area || null,
        population: countryInfo.population || 0,
        latlng: countryInfo.latlng || [],
        };
        return result;
    });

const updateDatabaseWithApiCountries = async () => {
    console.log("Obteniendo datos de la API...");
    const response = await axios.get(URL);//! AQUÍ TRAIGO TODO DE LA API
    const apiCountries = response.data;
    const cleanedData = cleanInfo(apiCountries);//! AQUÍ LIMPIO LA INFO
    console.log("verificando que el modelo exista ");
    console.log(Country)
    //console.log(cleanedData)
    for (const cleanedCountry of cleanedData) {
        if (cleanedCountry.id !== "NNCODIGOID") {
        await Country.upsert(cleanedCountry);//! AQUÍ SUBO ESTO A MI DB
        }
    }
    console.log("Base de datos actualizada con éxito.");
    };

module.exports = {
    getCountriesDB,
    getNameCountryDB,
    getCountryDetailDB,
    updateDatabaseWithApiCountries
}