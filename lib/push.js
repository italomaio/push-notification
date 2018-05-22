import webpush from 'web-push'

const publicVapidKey = "BK9Z1AvDq84Oz5nWzgJdACVpkOCkH1Pbsghmm7G1OOQ2FbKpCHPqQ7r6BJ6Gcbq0qREhSGGbM9UICNDpIQKteWA"
const privateVapidKey = "M5KvG7PINg_N65vQ8ZKerNXLWZp5IaR46sA5UFQCfKg"

webpush.setVapidDetails("mailto:italomaio@gmail.com", publicVapidKey, privateVapidKey)

export default {

    subscribe: (req, res, next) => {
        return new Promise((resolve, reject) => {
            
            const subscription = req.body || null
            res.status(201).json()

            const payload = JSON.stringify({ title: 'Push test' })

            console.log(webpush, subscription, payload)
            console.log("Italo")

            webpush.sendNotification(subscription, payload)
            .then(resp => console.log(resp))
            .catch(err => console.error(err))            
        })
    }

}