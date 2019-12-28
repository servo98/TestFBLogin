require('dotenv').config()

const https = require('https')
const express = require('express')
const app = express()
const path = require('path');

const fs = require('fs')





app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { layout: 'layouts/layout' })
})


https.createServer({
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.cert')
}, app).listen(process.env.APP_PORT, () => {
    console.log('Servicor iniciado en puerto', process.env.APP_PORT)
})

