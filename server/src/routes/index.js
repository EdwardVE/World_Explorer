const { Router } = require("express");
const countriesRouter = require("./countriesRouters");
const activitiesRouter = require("./activitiesRouters");

const router = Router();


router.use('/countries', countriesRouter);
router.use('/activities', activitiesRouter);


module.exports = router;
