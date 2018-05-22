import express from 'express'
import push from '../lib/push'

var router = express.Router()

router.post('/subscribe', (req, res, next) => {
    push
      .subscribe(req, res, next)
      .then(resp => res.send(resp).json())
      .catch(err => res.send(err).json())
})

export default router