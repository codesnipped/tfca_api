const express = require('express')
const router = express.Router()
const db = require('../models/')

router.get('/major', async (req, res) => {
    try {
        const result = await db.Majors.findAll()
        if (result == undefined) {
            res.status(404).json()
            return
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.get('/major/:id', async (req, res) => {
    try {
        const result = await db.Majors.findOne({
            include: [
                {
                    model: db.Users,
                    as: 'Users',
                    required: false,
                    attributes: ['id','fname','lname','code','email','level','tos']
                },
            ],
            where: {
                id: req.params.id
            }
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