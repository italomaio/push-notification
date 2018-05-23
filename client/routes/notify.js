import angular from 'angular'
import path from 'path'

angular.module('push.routes.notify', [])

.config(function ($stateProvider) {

    $stateProvider
    
    .state({
        name: 'notify',
        url: '/notify',
        controller: 'notifyCtrl',
        templateUrl: '../view/notify.html'
    })

})