const { Router } = require('express');
const getApiCountries = require("../Controllers/Get/getCountry&name.js")
const getActivities = require("../Controllers/Get/getActivities")
const postActivity = require("../Controllers/Post/postActivity")
const getCountryId = require("../Controllers/Get/getCountryId")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', getApiCountries);
router.use('/activities', getActivities); 
router.use('/activity', postActivity); 
router.use('/countries', getCountryId);


module.exports = router;
