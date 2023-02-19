const jwt = require('jsonwebtoken');
require('dotenv').config()
const express = require('express')
const db = require('../models/')

const verifyToken = async (req, res, next) => {
    try {
        const result = await db.Settings.findOne()
        if (result.hardware_mode == 'local') {
            return next();
        } else {
            const token = req.headers['x-access-token'];
            if (!token) {
                return res.status(403).send('A token is required for authentication')
            }

            try {
                const decoded = jwt.verify(token, 'AEDs8kwcddfcdlLSAd873z2nP4l1')
                req.user = decoded
            } catch (err) {
                return res.status(401).send('Invalid Token.')
            }

            return next();
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = verifyToken;