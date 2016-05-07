(function () {
    'use strict';
    angular.module('app').factory('Credentials', Credentials);
    
    Credentials.$inject = [];
    function Credentials() {
        return {
            username: username,
            password: password,
            setUsername: setUsername,
            setPassword: setPassword
        };
        
        function username() {
            return window.localStorage.getItem('username');
        }
        
        function password() {
            return window.localStorage.getItem('password');
        }

        function setPassword(password) {
            return window.localStorage.setItem('password', password);
        }

        function setUsername(username) {
            return window.localStorage.setItem('username', username);
        }
    }
})();
