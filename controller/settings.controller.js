const express = require('express')
const router = express.Router()
const db = require('../models/')

router.get('/settings', async (req, res) => {
    try {
        const result = await db.Settings.findOne()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = router