(function () {
    'use strict';
    angular.module('app').factory('Harvest', Harvest);
    Harvest.$inject = ['Credentials', '$http'];
    function Harvest(Credentials, $http) {
        return {
            dateEntry: dateEntry
        };

        function dateEntry(dayOfYear, year) {
            return $http.get('https://pixelline.harvestapp.com/daily/' + parseInt(dayOfYear) + '/' + parseInt(year), {
                headers: {'Authorization': 'Basic ' + Credentials.basicAuth()}
            }).then(function (data) {
                return data;
            });
        }
    }
})();
