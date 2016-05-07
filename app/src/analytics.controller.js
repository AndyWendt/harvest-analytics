(function() {
    'use strict';

    angular.module('app').controller('AnalyticsController', AnalyticsController);

    AnalyticsController.$inject = ['Harvest', 'Credentials'];

    function AnalyticsController(Harvest, Credentials) {
        var ctrl = this;
        ctrl.needCredentials = Credentials.needCredentials;
        

        _activate();

        function _activate() {
            
            if (! Credentials.needCredentials()) {
                Harvest.dateEntry(127, 2016).then(function (data) {
                    console.log(data);
                });   
            }
        }
    }
})();
