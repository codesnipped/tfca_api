const express = require('express')
const router = express.Router()
const db = require('../models/')

router.get('/room', async (req, res) => {
    try {
        const result = await db.Rooms.findAll()
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