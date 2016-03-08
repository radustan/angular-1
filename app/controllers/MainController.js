var MainController = angular.module('App1.MainController', [])
    .controller('MainController', function ($scope, $location, callsService) {
        $scope.page = "Angular test";
        $scope.title = 'Testing angular app';
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        callsService.getCategories('categories').then(function(data) {
            $scope.categories = data;
        });

        callsService.getCategories('title').then(function(data) {
            $scope.chartTitle = data;
        });

        callsService.getCategories('series').then(function(data) {
            $scope.chartAreaData = data;
        });

        $scope.menu = [
            {
                'name' : '',
                'label' : 'Home'
            },
            {
                'name' : 'about',
                'label' : 'About'
            },
            {
                'name' : 'contact',
                'label' : 'Contact'
            }
        ];
    });
