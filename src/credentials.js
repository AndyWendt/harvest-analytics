(function () {
    'use strict';
    angular.module('app')
        .factory('Credentials', Credentials);
    Credentials.$inject = [];
    function Credentials() {
        return {
            username: username,
            password: password
        };
        
        function username() {
            
        }
        
        function password() {
            
        }
    }
})();
