const express = require('express')
const router = express.Router()
const db = require('../models/')

router.get('/checks', async (req, res) => { // ดึงเวลาที่ต้องสอนทั้งหมด
    try {
        const result = await db.Checks.findAll({
            include: [
                {
                    model: db.Rooms,
                    as: 'Rooms',
                    required: false,
                },
            ]
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

router.get('/checks/date', async (req, res) => { // ดึงเวลาที่ต้องสอนทั้งหมด
    try {
        const result = await db.Checks.findOne({
            attributes: ['id', 'major_id', 'date', 'time_start', 'time_end']
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

router.get('/checks/imgs/:major_id', async (req, res) => { // ดึงเวลาที่ต้องสอนทั้งหมด
    try {
        const result = await db.Imgs.findAll({
            include: [
                {
                    model: db.Users,
                    as: 'Users',
                    required: true,
                    attributes: ['code'],
                    where: {
                        major_id: req.params.major_id
                    },
                },
            ],
            attributes: ['id', 'user_id', 'path']
        })
        
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = router