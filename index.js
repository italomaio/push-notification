import express from 'express'
import bodyParser from 'body-parser'
import webPush from 'web-push'
import path from 'path'
import cors from 'cors'

import pushRoutes from './routes/push'

var app = express()

app.use(bodyParser.json())
app.use(express.static('client'))
app.use(cors({ credentials: true, origin: true }))

app.use("/", pushRoutes)

var port = process.env.port || 5000;

app.listen(port)
