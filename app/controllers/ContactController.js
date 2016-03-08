var ContactController = angular.module('App1.ContactController', [])
    .controller('ContactController', function ($scope, callsService) {
        $scope.title = 'Contact form';
        $scope.contact = {};
        $scope.contact.name = 'Radu';
        $scope.submitForm = function(data)
        {
            callsService.saveContact(data).then(function(reply) {
                $scope.saved = reply;
            });
        };
    });
