const { Router } = require('express');
const {dbInfo} = require('../apiInfo');

const {Country, Activity} = require("../.././db.js");


const router = Router();

/* [ ] GET /countries:
En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe retonar sólo los datos necesarios para la ruta principal)
Obtener un listado de los paises.

[ ] GET /countries?name="...":
Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
Si no existe ningún país mostrar un mensaje adecuado */

router.get('/', async (req, res) => {
    const {name} = req.query;
    dbInfo();
    let allCountries = await Country.findAll({include: {
        model: Activity,
        attributes: ['id', 'name', 'dificulted', 'duration', 'season'],
        through: {attributes: []},
    }});

    if (name) {
    let countryName = await allCountries.filter((el) =>
        el.name.toLowerCase().includes(name.toString().toLowerCase())
    ) ;

    countryName.length
        ? res.status(200).send(countryName) : res.status(404).send(
            'No se encuentra el pais ' + name.toLowerCase()
        );
    } else {
    res.status(200).send(allCountries);
    }
})
            
            
module.exports = router;
                    