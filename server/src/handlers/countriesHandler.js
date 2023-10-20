const { query } = require("express");
const { getCountriesDB, getNameCountryDB, getCountryDetailDB, updateDatabaseWithApiCountries } = require("../controllers/countriesController");

let isDatabaseUpdated = false;

const getNameCountryHandler = async (req, res) =>{//Query /name?country=Colombia
    const { country } = req.params;
    console.log(country);

    try {
        const nameCountry = await getNameCountryDB(country);
        if (nameCountry && nameCountry.length > 0) {
        res.status(200).json(nameCountry);
        } else {
        res
            .status(404)
            .json({ error: "No se encontró país con ese nombre "+country });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al buscar el país por el nombre " + error.message });
    }
    
}

const getCountriesHandler = async(req, res) => {//Body{obj.json}
    try {
        const countries = await getCountriesDB()
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los países " + error.message});
    }
}

const actualizarDB = async () => {
    if (isDatabaseUpdated == false) {
        try {
            const response = await updateDatabaseWithApiCountries();
            isDatabaseUpdated = true;
            console.log("se actualizo la base  de datos, isDatabaseUpdated es: " + isDatabaseUpdated);
        } catch (error) {
            console.log("Ocurrió un error al actualizar la base de datos, EL ERROR: " + error.message );
        }
        }
    };
    actualizarDB();

const getCountryDetailHandler = async(req, res) =>{//Params/:ID 
    const {id}= req.params
    try {
        const country = await getCountryDetailDB(id)    
    
        if (country) {
            res.status(200).json(country);
        } else {
            res.status(404).json({ error: "DETALLE del País no encontrado" });
        }
        } catch (error) {
        res.status(500).json({ error: "Error al obtener Detalle del país "+ id+" " + error.message });
        }
}

module.exports ={
    getCountriesHandler,
    getCountryDetailHandler,
    getNameCountryHandler
}