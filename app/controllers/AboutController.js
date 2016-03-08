var AboutController = angular.module('App1.AboutController', [])
    .controller('AboutController', function ($scope, callsService) {
        $scope.name = "About";
        $scope.tableHeaders = ['Name', 'Email', 'Message'];
        callsService.getContacts().then(function(data) {
            $scope.messages = data;
        });
    });
