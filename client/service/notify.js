import angular from 'angular'

angular.module('push.service.notify', [])
.service('notifyAPI', ['$http', function ($http){

    this.baseUrl = `${window.location.protocol}//${window.location.hostname}`

    this.sendNotification = (data) => {
        return $http.post(this.baseUrl + '/notify', data)
    }

    return this

}])