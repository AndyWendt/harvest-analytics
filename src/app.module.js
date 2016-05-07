(function () {
    'use strict';

    angular.module('app', [
    ]);

    angular.module('app').constant('AppConfig', {
        'apiUri':   "app.API_URI",
        'oauthUrl': "app.OAUTH_URI"
    });

    angular.module('app').run(run);
    angular.module('app').config(config);
    run.$inject = [];

    function run() {

    }

    config.$inject = ['$httpProvider'];
    function config($httpProvider) {

        $httpProvider.interceptors.push(function($q, $window, $rootScope) {
            return {
                'responseError': function(response) {
                    return $q.reject(response);
                },
                'request': function (config) {
                    config.headers.DiAuthorization = decisionInsiteApiUserToken;
                    config.headers.ApiUserId = decisionInsiteApiUserId;

                    return config;
                }
            };
        });

    }
})();





