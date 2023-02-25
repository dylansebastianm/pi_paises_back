const { Router } = require('express');
const dbInfo = require('../apiInfo');

const {Activity, Country} = require("../../db.js")


const router = Router();

router.get('/', async (req, res) => {

   
  try {
        let allActivities = await Activity.findAll({
            include:{
                model: Country,
                attributes:['id', 'name', "img"],
                through: { attributes: [] },
                
            },
        })

        return res.status(200).json(allActivities)
    } catch (error) {
        res.status(404).send(error.message)

    } 
})

module.exports = router;

/* {include: {
    model: Country,
    attributes: ['id', 'img', 'continent', 'capital', 'subregion', 'área', 'population'],
    through: {attributes: []},
}} */