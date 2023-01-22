const express = require('express')
const router = express.Router()
const db = require('../models/')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    try {
        const data = await { ...req.body }
        const result = await db.Users.findOne({
            where: {
                email: data.email
            },
        })
        
        if(result == undefined){
            res.status(404).json()
            return
        }

        if (result && (await bcrypt.compare(data.pass, result.pass))) {
            const token = jwt.sign(
                { id: result.id},
                'AEDs8kwcddfcdlLSAd873z2nP4l1',
                {
                    //expiresIn: '600000' // "2 days", "10h", "7d"
                    expiresIn: '90d' // "2 days", "10h", "7d"
                }
            )
            res.status(200).json(token)
        }else{
            res.status(404).json()
            return
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = router