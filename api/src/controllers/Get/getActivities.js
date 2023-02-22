const { Router } = require('express');
const dbInfo = require('../apiInfo');

const {Activity} = require("../../db.js")


const router = Router();

router.get('/', async (req, res) => {

   
  try {
        let allActivities = await Activity.findAll()

        return res.status(200).json(allActivities)
    } catch (error) {
        res.status(404).send(error)

    } 
})

module.exports = router;

/* {include: {
    model: Country,
    attributes: ['id', 'img', 'continent', 'capital', 'subregion', 'área', 'population'],
    through: {attributes: []},
}} */