(function () {
    'use strict';
    angular.module('app')
        .factory('QuarterService', QuarterService);
    QuarterService.$inject = ['moment'];
    function QuarterService(moment) {
        return {
            quarterStart: quarterStart,
            quarterEnd: quarterEnd,
            dayOfYear: dayOfYear
        };

        /**
         * @param {moment} date
         * @returns {FiscalQuarter}
         */
        function quarterStart() {
            return moment().startOf('quarter');
        }

        function quarterEnd() {
            return moment().endOf('quarter');
        }

        function dayOfYear() {
            return moment().dayOfYear();
        }

        function year() {
            return moment().year();
        }
    }
})();
