import fs from 'fs'
import path from 'path'
import mongoose from 'mongoose'

var db  = null;
var mdb = mongoose.connect("mongodb://push:abrelogok7@ds016298.mlab.com:16298/push-notifications")
            .then(resp => db = resp)

import Subscription from '../data/model/subscription'

export default {

    insert: (data) => {
        return new Promise((resolve, reject) => {

            Subscription
                .findOne({ endpoint: data.endpoint })
                .then(resp => {
                    if (!resp) {
                        Subscription.create(data)
                        resolve()
                    } else {
                        resolve()
                    }
                })
            
        })
    },
    delete: () => {

        Subscription.findOne({ endpoint: data.endpoint }).then(resp => {
          if (!resp) {
            resolve();
          } else {
            Subscription
            .remove({ endpoint: data.endpoint })
          }
        });

    }

}