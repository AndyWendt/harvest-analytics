(function () {
    'use strict';
    angular.module('app').factory('Harvest', Harvest);
    Harvest.$inject = ['Credentials'];
    function Harvest(Credentials) {
        return {
            dateEntries: dateEntries
        };

        function dateEntries(dayOfYear, year) {
            $http.get('https://pixelline.harvestapp.com/daily/' + parseInt(dayOfYear) + '/' + parseInt(year), {
                //"username:password".
                headers: {'Authorization': 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='}
            });
        }
    }
})();
