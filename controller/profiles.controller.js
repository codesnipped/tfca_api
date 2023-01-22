const express = require('express')
const router = express.Router()
const db = require('../models/')

router.get('/profile', async (req, res) => {
    try {
        const result = await db.Users.findOne({
            include: [
                {
                    model: db.Imgs,
                    as: 'Imgs',
                    required: false,
                    attributes: ['path','round_correct']
                },
                {
                  model: db.Facultys,
                  as: 'Facultys',
                  required: false,
                  attributes: ['name']
                },
                {
                    model: db.Majors,
                    as: 'Majors',
                    required: false,
                    attributes: ['name']
                },
            ],
            where: {
                id: req.user.id
            },
        })
        if (result == undefined) {
            res.status(404).json()
            return
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = router