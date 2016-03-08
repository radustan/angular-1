var callsService = angular.module('App1.callsService', [])
    .factory('callsService', function($http, config) {
    return {
        getCategories: function(type) {
            //return the promise directly.
            return $http({
                url: config.apiUrl + 'chartData.php',
                method: "GET",
                params: {type: type}
            }).then(function(result) {
                    //resolve the promise as the data
                    return result.data;
                });
        },
        saveContact: function(data) {
            return $http({
                url: config.apiUrl+'angular/saveContact',
                method: "POST",
                data: $.param(data),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(result) {
                //resolve the promise as the data
                return result.data;
            });
        },
        getContacts: function() {
            return $http.get(config.apiUrl+'angular/getContacts').then(function(result) {
                //resolve the promise as the data
                return result.data;
            });
        }
    }
});
