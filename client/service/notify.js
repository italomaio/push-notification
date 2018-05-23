import angular from 'angular'

angular.module('push.service.notify', [])
.service('notifyAPI', ['$http', function ($http){

    this.baseUrl = `${window.location.protocol}//${window.location.hostname}:5000`

    this.sendNotification = (data) => {
        return $http.post(this.baseUrl + '/notify', data)
    }

    return this

}])