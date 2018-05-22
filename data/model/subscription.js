import mongoose from 'mongoose'

var subscription = new mongoose.Schema({
    endpoint: String,
    keys: new mongoose.Schema({
        p256dh: String,
        auth: String
    })
})

export default mongoose.model('subscription', subscription)