(function () {
    'use strict';
    angular.module('app').factory('Date', Date);
    
    Date.$inject = [];
    function Date() {
        return {
            quarterStart: quarterStart,
            quarterEnd: quarterEnd,
            dayOfYear: dayOfYear,
            lastYear: lastYear
        };

        /**
         * @param {moment} date
         * @returns {FiscalQuarter}
         */
        function quarterStart() {
            return window.moment().startOf('quarter');
        }

        function quarterEnd() {
            return window.moment().endOf('quarter');
        }

        function dayOfYear() {
            return window.moment().dayOfYear();
        }

        function year() {
            return window.moment().year();
        }
        
        function lastYear() {
            return year() - 1;
        }
    }
})();
