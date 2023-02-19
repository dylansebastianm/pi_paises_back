const { Router } = require('express');
const {Country, Activity} = require( "../../db.js")

const router = Router();


/* [ ] POST /activities:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
Crea una actividad turística en la base de datos, relacionada con los países correspondientes
 */
router.post('/post', async (req, res) => {
  let { name, dificulted, duration, season , country} = req.body;

  try {

    const valdidateact = await Activity.findOne({
      where: {
        name: name,
      },
    });
  
    if (!valdidateact) {
      const createActivity = await Activity.create({
        name: name,
        dificulted: dificulted,
        duration: duration,
        season: season,
      });
   

        const countryForActivity = await Country.findAll({
          where: {
            id: country,
          },
        });
        
     
      
  
      const mescla = await createActivity.addCountries(countryForActivity);
  
      return res.send(mescla);
    }
  
    const countryForActivity = await Country.findAll({
      where: {
        id: country,
      },
    });

  
    const mescla = await valdidateact.addCountries(countryForActivity);
  
    res.send(mescla);


    
  } catch (error) {
    res.send(error.message)
  }

  
})

module.exports = router;
