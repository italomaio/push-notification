import angular from 'angular'
import router from '@uirouter/angularjs'

angular.module('push', ['ui.router', 'push.controller', 'push.routes', 'push.service'])

.config([ '$urlRouterProvider', '$provide', '$compileProvider', '$filterProvider', function ($urlRouterProvider, $provide, $compileProvider, $filterProvider) {
    $urlRouterProvider.otherwise("/notify")
}])

.run(function(){
    console.log("Angular App")
})

import controller from './controller'
import routes from './routes'
import service from './service'
