(function() {
    'use strict';

    angular.module('app').controller('CredentialsController', CredentialsController);

    CredentialsController.$inject = ['$scope', 'Credentials'];

    function CredentialsController($scope, Credentials) {
        var ctrl = this;
        ctrl.password = null;
        ctrl.email = null;
        ctrl.showForm = Credentials.needCredentials;
        ctrl.submit = submit;

        _activate();

        function _activate() {

        }

        function submit() {
            Credentials.setEmail(ctrl.email);
            Credentials.setPassword(ctrl.password);
        }
    }
})();
