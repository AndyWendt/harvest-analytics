(function () {
    'use strict';
    angular.module('app').factory('Credentials', Credentials);
    
    Credentials.$inject = [];
    function Credentials() {
        return {
            email: email,
            password: password,
            setEmail: setEmail,
            setPassword: setPassword,
            basicAuth: basicAuth,
            needCredentials: needCredentials
        };
        
        function email() {
            return window.localStorage.getItem('email');
        }
        
        function password() {
            return window.localStorage.getItem('password');
        }

        function setPassword(password) {
            return window.localStorage.setItem('password', password);
        }

        function setEmail(email) {
            return window.localStorage.setItem('email', email);
        }
        
        function basicAuth() {
            return btoa(email() + ':' + password());
        }

        function needCredentials() {
            return !!(password() || email());
        }
    }
})();
