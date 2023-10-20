const { Router } = require("express");
const { getCountriesHandler, getCountryDetailHandler, getNameCountryHandler } = require("../handlers/countriesHandler");

const countriesRouter = Router();

countriesRouter.get('/name/:country', getNameCountryHandler)
countriesRouter.get('/', getCountriesHandler)
countriesRouter.get('/:id', getCountryDetailHandler)




module.exports = countriesRouter;