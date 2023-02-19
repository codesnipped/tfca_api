const express = require('express')
const router = express.Router()
const db = require('../models/')

router.get('/users', async (req, res) => {
    try {
        const result = await db.Users.findAll()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = router