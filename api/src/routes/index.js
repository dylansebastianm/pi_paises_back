const { Router } = require('express');
const getApiCountries = require("../controllers/Get/getCountryAndName.js")
const getActivities = require("../controllers/Get/getActivities.js")
const postActivity = require("../controllers/Post/postActivity.js")
const getCountryId = require("../controllers/Get/getCountryId.js")

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
