const express = require('express')
const router = express.Router()
const db = require('../models/')

router.get('/check', async (req, res) => { // ดึงเวลาที่ต้องสอนทั้งหมด
    try {
        const result = await db.Checks.findAll({
            include: [
                {
                    model: db.Rooms,
                    as: 'Rooms',
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