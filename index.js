import express from 'express'
import bodyParser from 'body-parser'
import webPush from 'web-push'
import path from 'path'

import pushRoutes from './routes/push'

var app = express()

app.use(bodyParser.json())
app.use(express.static('client'))

app.use("/", pushRoutes)

var port = process.env.port || 5000;

app.listen(port)
