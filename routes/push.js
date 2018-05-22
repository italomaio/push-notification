import express from 'express'
import push from '../lib/push'

var router = express.Router()

router.post('/subscribe', (req, res, next) => {
    console.log("Rota subscribe");
    
    push
      .subscribe(req, res, next)
      .then(resp => {
        console.log("Subscribe sucesso");
        res.send(resp).json();
      })
      .catch(err => {
        console.log("Subscribe erro", err);
        res.send(err).json();
      });
})

export default router