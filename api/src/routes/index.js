const { Router } = require("express");
const { getAllCountriesOrByQuery, getCountryById } = require("../controllers/countryController");
const { postActivity, getActivities } = require("../controllers/activityController");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/countries", getAllCountriesOrByQuery);

router.get("/countries/:id", getCountryById);

router.post("/activities", postActivity);

router.get('/activities', getActivities);



module.exports = router;
