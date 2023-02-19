const { Router } = require('express');
const dbInfo = require('../getApiInfo');

const router = Router();

router.get('/', async (req, res) => {
    try {
        let allActivities = await Activity.findAll({include: {
            model: Country,
            attributes: ['id', 'img', 'continent', 'capital', 'subregion', 'área', 'population'],
            through: {attributes: []},
        }})

        return res.status(200).send(allActivities)
    } catch (error) {
    }
})

module.exports = router;