import angular from 'angular'

angular.module('push.controller.notify', [])

.controller('notifyCtrl', ['$scope', 'notifyAPI', function($scope, notifyAPI) {
    console.log(notifyAPI)

    $scope.sendNotification = (data) => {
        notifyAPI
            .sendNotification(data)
            .then(resp => {
                console.log(resp)
            })
            .catch(err => {
                console.error(err)
            })            
    }

}])