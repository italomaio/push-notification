import webpush from 'web-push'
import db from '../data'

const publicVapidKey = "BK9Z1AvDq84Oz5nWzgJdACVpkOCkH1Pbsghmm7G1OOQ2FbKpCHPqQ7r6BJ6Gcbq0qREhSGGbM9UICNDpIQKteWA"
const privateVapidKey = "M5KvG7PINg_N65vQ8ZKerNXLWZp5IaR46sA5UFQCfKg"

webpush.setVapidDetails("mailto:italomaio@gmail.com", publicVapidKey, privateVapidKey)

export default {
  subscribe: (req, res, next) => {
    return new Promise((resolve, reject) => {
      const subscription = req.body || null

      db.insert(subscription).catch(err => console.log(err))

      res.status(201).json()

      resolve()

    //   const payload = JSON.stringify({ title: "Push test" })
    //   webpush
    //     .sendNotification(subscription, payload)
    //     .then(resp => console.log(resp))
    //     .catch(err => console.error(err))

    });
  },
  unsubscribe: (req, res, next) => {
    return new Promise((resolve, reject) => {})
  },
  push: (req, res, next) => {
    return new Promise((resolve, reject) => {})
  },
  notify: (req, res, next) => {
    return new Promise((resolve, reject) => {

        db.get()
        .then(resp => {

            let subscribers = JSON.stringify(resp)
                subscribers = JSON.parse(subscribers)

            subscribers.map((item, index) => {

                let options = {
                    title: req.body.title, 
                    body: req.body.body, 
                    icon: req.body.icon
                }

                if (req.body.image)
                    options.image = req.body.image

                webpush
                    .sendNotification(item, JSON.stringify(options))
                    .then(resp => resolve(resp))
                    .catch(err => reject(err))

            })
            
            resolve(JSON.stringify(resp));
        })
        .catch(err => reject(err))

    });
  }
};