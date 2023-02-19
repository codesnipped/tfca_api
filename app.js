const https = require('https');
var http = require('http');
const fs = require('fs');
const express = require('express')
const cors = require('cors')
const app = express()
// const token = require('./controller/token')
require("dotenv").config();
const token = require('./controller/token')

const options = {
    key: fs.readFileSync('cert/private.key'),
    cert: fs.readFileSync('cert/certificate.crt'),
    csr: fs.readFileSync('cert/ca_bundle.crt'),
};

const corsOptions = {
    origin: ['http://localhost'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// middle ware
app.use('/api/imgs', express.static('imgs'))
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', require('./controller/authens.controller'))
app.use('/api', token, require('./controller/users.controller'))
app.use('/api', token, require('./controller/checks.controller'))
app.use('/api', token, require('./controller/profiles.controller'))

var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

const PORT = process.env.PORT || 30000
httpServer.listen(PORT, () => {
    const env = `${process.env.NODE_ENV || 'dev'}`
    console.log(`App listening on port ${PORT}`)
    console.log(`App listening on env ${env}`)
    console.log(`Press Ctrl+C to quit.`)
})

/* app.use('/api', require('./controller/authens.controller'))

app.use('/api', token, require('./controller/profiles.controller')) */
