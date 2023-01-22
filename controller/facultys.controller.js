const express = require('express')
const router = express.Router()
const db = require('../models/')

router.get('/faculty', async (req, res) => {
    try {
        const result = await db.Facultys.findAll()
        if (result == undefined) {
            res.status(404).json()
            return
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.get('/faculty/:id', async (req, res) => {
    try {
        const result = await db.Facultys.findOne({
            include: [
                {
                    model: db.Majors,
                    as: 'Majors',
                    required: false,
                    attributes: ['id','name']
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